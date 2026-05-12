revoke execute on function public.has_role(uuid, public.app_role) from anon, authenticated, public;
revoke execute on function public.handle_new_user() from anon, authenticated, public;
-- get_busy_slots is intentionally public so guests can pick free time slots
grant execute on function public.get_busy_slots(timestamptz, timestamptz) to anon, authenticated;