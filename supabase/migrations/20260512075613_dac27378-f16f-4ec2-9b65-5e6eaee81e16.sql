-- Roles
create type public.app_role as enum ('admin','client');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role app_role not null,
  created_at timestamptz default now(),
  unique(user_id, role)
);
alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean language sql stable security definer set search_path=public as $$
  select exists(select 1 from public.user_roles where user_id=_user_id and role=_role)
$$;

create policy "users read own roles" on public.user_roles for select using (auth.uid()=user_id);
create policy "admins read all roles" on public.user_roles for select using (public.has_role(auth.uid(),'admin'));

-- Profiles
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  phone text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
alter table public.profiles enable row level security;
create policy "profile self read" on public.profiles for select using (auth.uid()=id);
create policy "profile self insert" on public.profiles for insert with check (auth.uid()=id);
create policy "profile self update" on public.profiles for update using (auth.uid()=id);
create policy "admin read profiles" on public.profiles for select using (public.has_role(auth.uid(),'admin'));

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path=public as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name',''));
  return new;
end$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

-- Services
create table public.services (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  price_id text not null,
  name_en text not null,
  name_fa text not null,
  description_en text,
  description_fa text,
  duration_minutes int not null,
  price_aed int not null,
  is_emergency boolean not null default false,
  active boolean not null default true,
  sort int not null default 0,
  created_at timestamptz default now()
);
alter table public.services enable row level security;
create policy "services public read" on public.services for select using (active=true);
create policy "admin manage services" on public.services for all
  using (public.has_role(auth.uid(),'admin'))
  with check (public.has_role(auth.uid(),'admin'));

-- Availability (weekly recurring)
create table public.availability_rules (
  id uuid primary key default gen_random_uuid(),
  day_of_week int not null check (day_of_week between 0 and 6),
  start_minute int not null,
  end_minute int not null,
  active boolean not null default true,
  created_at timestamptz default now()
);
alter table public.availability_rules enable row level security;
create policy "availability public read" on public.availability_rules for select using (true);
create policy "admin manage availability" on public.availability_rules for all
  using (public.has_role(auth.uid(),'admin'))
  with check (public.has_role(auth.uid(),'admin'));

-- Bookings
create type public.booking_status as enum ('pending','confirmed','cancelled','completed');
create type public.payment_status as enum ('unpaid','paid','refunded');

create table public.bookings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  service_id uuid not null references public.services(id),
  start_at timestamptz not null,
  end_at timestamptz not null,
  guest_name text,
  guest_email text,
  guest_phone text,
  notes text,
  status booking_status not null default 'pending',
  payment_status payment_status not null default 'unpaid',
  stripe_session_id text,
  amount_aed int not null,
  language text default 'en',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
alter table public.bookings enable row level security;
create index bookings_start_at_idx on public.bookings(start_at);
create index bookings_user_id_idx on public.bookings(user_id);

create policy "user reads own bookings" on public.bookings for select using (auth.uid()=user_id);
create policy "admin reads bookings" on public.bookings for select using (public.has_role(auth.uid(),'admin'));
create policy "admin updates bookings" on public.bookings for update
  using (public.has_role(auth.uid(),'admin'))
  with check (public.has_role(auth.uid(),'admin'));

-- Public-friendly busy slot reader
create or replace function public.get_busy_slots(_from timestamptz, _to timestamptz)
returns table(start_at timestamptz, end_at timestamptz)
language sql stable security definer set search_path=public as $$
  select start_at, end_at from public.bookings
  where status in ('pending','confirmed') and start_at < _to and end_at > _from
$$;

-- Seed services (price_id matches Stripe products)
insert into public.services (slug, price_id, name_en, name_fa, description_en, description_fa, duration_minutes, price_aed, is_emergency, sort) values
('standard-30','consult_standard_30','Standard Consultation','مشاوره استاندارد','30-minute confidential legal consultation','مشاوره حقوقی محرمانه ۳۰ دقیقه‌ای',30,1500,false,1),
('strategic-60','consult_strategic_60','Strategic Session','جلسه راهبردی','60-minute in-depth strategy session','جلسه راهبردی عمیق ۶۰ دقیقه‌ای',60,3500,false,2),
('emergency-24h','consult_emergency_24h','Emergency 24h Legal Line','خط فوری حقوقی ۲۴ ساعته','Priority same-day emergency response','پاسخ‌گویی فوری اولویت‌دار همان روز',45,7500,true,3),
('international','consult_international','International / Cross-Border','بین‌المللی / فرامرزی','Multi-jurisdiction matter intake & strategy','پذیرش و راهبرد پرونده‌های چند حوزه قضایی',90,12000,false,4);

-- Default availability: Sunday-Thursday (Dubai workweek), 09:00-18:00
-- Postgres dow: 0=Sunday, 6=Saturday
insert into public.availability_rules (day_of_week, start_minute, end_minute) values
(0,540,1080),(1,540,1080),(2,540,1080),(3,540,1080),(4,540,1080);