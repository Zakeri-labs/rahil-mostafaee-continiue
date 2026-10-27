import type { Locale } from "@/lib/i18n/config";
import type { ServiceLandingContent } from "@/lib/landing-pages/service-landing-types";

/**
 * Copy for /commercial-contracts and /en/commercial-contracts.
 * The English page has no resources section and no links to the Persian-only blog.
 */
export const commercialContractsContent: Record<Locale, ServiceLandingContent> = {
  fa: {
    hero: {
      breadcrumbLabel: "مسیر صفحه",
      breadcrumb: [
        { name: "خانه", href: "/" },
        { name: "خدمات حقوقی در امارات", href: "/services" },
        { name: "بررسی و تنظیم قراردادهای تجاری" },
      ],
      kicker: "قرارداد تجاری، پیش از امضا یا بعد از آن",
      h1: "خدمات بررسی و تنظیم قراردادهای تجاری",
      subline: [
        "برای تاجر و سرمایه‌گذار ایرانی که پیش‌نویس قرارداد در دست دارد، هنوز متنی ندارد یا می‌خواهد قرارداد امضاشده‌اش را دوباره ببیند.",
      ],
      lede: [
        "یک بند مبهم درباره پرداخت یا مرجع حل اختلاف، روز امضا بی‌خطر به نظر می‌رسد و بعد از آن می‌تواند ماه‌ها پرونده و هزینه بسازد. پیش‌نویس قرارداد، یا حتی قراردادی را که امضا کرده‌اید، برایم بفرستید. به‌عنوان وکیل قرارداد در دبی، همه ابعاد آن را به فارسی ساده برایتان روشن می‌کنم.",
      ],
      buttons: [
        { variant: "primary", href: "/legal-consultation-booking", label: "رزرو آنلاین نوبت" },
        { variant: "secondary", href: "/contact", label: "تماس با من" },
      ],
      note: [
        "برای ایرانیان هفته‌ای یک روز ",
        { t: "glow", c: ["مشاوره رایگان"] },
        " با رزرو نوبت دارم. روز آن در صفحه رزرو آمده است.",
      ],
      imageAlt:
        "پیش‌نویس قرارداد تجاری با یادداشت‌های طلایی در حاشیه و یک خودنویس روی میز مرمر تیره",
    },
    sections: [
      {
        type: "cards",
        title: "سه نوع کمک در قراردادهای تجاری",
        intro: [
          "کمک من در قرارداد سه شکل دارد: تنظیم قرارداد از صفر، بررسی پیش‌نویسی که طرف مقابل فرستاده، و مشاوره روی قراردادی که امضا شده و حالا باید اصلاح یا تمدید شود. در هر سه، از وکیل تنظیم قرارداد در دبی یک چیز انتظار می‌رود: متنی که دقیقاً همان توافق شما را بگوید.",
        ],
        items: [
          {
            title: "تنظیم قرارداد از صفر",
            text: [
              "معامله را توافق کرده‌اید ولی متنی ندارید، یا نمی‌خواهید با الگوی طرف مقابل جلو بروید. از شرح معامله، شرایط پرداخت و تحویل شروع می‌کنم و پیش‌نویسی می‌نویسم که از اول منافع شما را در نظر دارد.",
            ],
          },
          {
            title: "بررسی پیش از امضا",
            text: [
              "طرف اماراتی پیش‌نویس را فرستاده و منتظر امضاست. متن را بند به بند می‌خوانم، بندهای پرخطر را جدا می‌کنم و برای هر کدام متن جایگزین پیشنهاد می‌دهم تا با دلیل مذاکره کنید.",
            ],
          },
          {
            title: "مشاوره روی قرارداد موجود",
            text: [
              "قرارداد امضا شده و حالا می‌خواهید آن را تمدید کنید، بندی را اصلاح کنید یا الحاقیه بنویسید. پیش از امضای الحاقیه، اثرش را روی بندهای قبلی بررسی می‌کنم تا تغییر تازه با متن اصلی تناقض نداشته باشد.",
            ],
          },
        ],
      },
      {
        type: "cards",
        title: "چه قراردادهایی را تنظیم و بررسی می‌کنم؟",
        intro: [
          "بیشتر کسانی که برای تنظیم یا بررسی قرارداد سراغ من به‌عنوان وکیل قرارداد تجاری در امارات می‌آیند، دست‌کم یک طرف قراردادشان ایرانی است. طرف دیگر ممکن است ایرانی، اماراتی یا از هر کشور دیگری باشد. هر نوع قرارداد بندهای حساس خودش را دارد و بررسی از همان بندها شروع می‌شود.",
        ],
        items: [
          {
            title: "خرید و فروش و تأمین کالا",
            text: [
              "قرارداد فروش، تأمین مستمر یا سفارش خرید. مشخصات کالا، زمان و محل تحویل، بازرسی و مسئولیت آسیب کالا در حمل، همان نقطه‌هایی‌اند که بیشتر اختلاف‌های تجاری از آن‌ها شروع می‌شود.",
            ],
          },
          {
            title: "نمایندگی و توزیع",
            text: [
              "نمایندگی تجاری در امارات قانون خاص خودش را دارد (",
              { t: "ltr", c: ["Federal Law No. 3 of 2022"] },
              ") و حمایت‌های این قانون به ثبت قرارداد نمایندگی وابسته است. پیش از امضا باید روشن باشد قرارداد شما نمایندگی ثبت‌شدنی است یا توزیع معمولی.",
            ],
          },
          {
            title: "قرارداد سرمایه‌گذاری",
            text: [
              "وقتی در پروژه یا کسب‌وکاری در امارات سرمایه‌گذاری می‌کنید، قرارداد باید بگوید سهم شما چطور حساب می‌شود، چه گزارشی می‌گیرید و چطور خارج می‌شوید. این‌ها را باید پیش از امضا با وکیل قرارداد سرمایه‌گذاری در امارات روشن کنید. پیش‌زمینه را در نکات حقوقی سرمایه‌گذاری در امارات ببینید.",
            ],
          },
          {
            title: "توافقنامه سهامداران و شراکت",
            text: [
              "اگر با شریکی در امارات کسب‌وکار مشترک راه می‌اندازید یا سهم می‌خرید، تصمیم‌گیری، تقسیم سود، ورود و خروج شریک و بن‌بست مدیریتی باید از روز اول مکتوب باشد. راهنمای توافقنامه سهامداران در امارات را ببینید.",
            ],
          },
          {
            title: "قرارداد بین‌المللی",
            text: [
              "طرف قرارداد در کشور سومی است یا کالا از چند کشور می‌گذرد. در تنظیم قرارداد بین‌المللی، زبان متن، قانون حاکم و مرجع حل اختلاف باید با هم جور باشند. وگرنه ممکن است حکمی بگیرید که در کشور محل دارایی طرف مقابل قابل اجرا نباشد.",
            ],
          },
        ],
      },
      {
        type: "checklist",
        title: "در بررسی قرارداد دقیقاً چه چیزی را چک می‌کنم؟",
        intro: [
          [
            "هر بندی که بعد از امضا می‌تواند به اختلاف یا ضرر برسد. بندهای زیر در بررسی قرارداد در امارات همیشه جدا خوانده می‌شوند، ولی بررسی از تعهدهای اصلی شما شروع می‌شود: مقدار، کیفیت، قیمت و زمان.",
          ],
        ],
        items: [
          {
            title: "قانون حاکم",
            text: [
              "در قانون معاملات مدنی امارات (",
              { t: "ltr", c: ["Federal Decree-Law No. 25 of 2025"] },
              ") طرفین می‌توانند قانون حاکم را انتخاب کنند، ولی بعضی قراردادها مثل نمایندگی تجاری تابع قواعد آمره امارات می‌مانند. توضیح کامل در راهنمای ",
              {
                t: "a",
                href: "/blog/iran-uae-governing-law",
                c: ["قانون حاکم بر قرارداد بین‌المللی"],
              },
              " آمده است.",
            ],
          },
          {
            title: "مرجع حل اختلاف",
            text: [
              { t: "ltr", c: ["Dubai Courts"] },
              " (دادگاه‌های دولتی دبی)، ",
              { t: "ltr", c: ["DIFC Courts"] },
              " (دادگاه‌های مرکز مالی بین‌المللی دبی) یا داوری، مثلاً در ",
              { t: "ltr", c: ["DIAC"] },
              " (مرکز داوری بین‌المللی دبی). بندی که مرجع را مبهم بگذارد، خودش یک اختلاف جدا می‌سازد.",
            ],
          },
          {
            title: "زبان قرارداد",
            text: [
              "طبق ",
              {
                t: "a",
                href: "https://uaelegislation.gov.ae/en/legislations/1602/download",
                ext: true,
                c: ["قانون آیین دادرسی مدنی امارات"],
              },
              " (",
              { t: "ltr", c: ["Federal Decree-Law No. 42 of 2022"] },
              ") زبان رسمی دادگاه‌های دولتی، مثل ",
              { t: "ltr", c: ["Dubai Courts"] },
              "، عربی است و سندی که به زبان دیگری باشد ترجمه مصدق لازم دارد. در متن دوزبانه باید روشن باشد کدام نسخه در تعارض مقدم است.",
            ],
          },
          {
            title: "پرداخت و تضمین",
            text: [
              "زمان و شرط هر پرداخت، پیش‌پرداخت، و اینکه اگر پرداخت عقب بیفتد چه می‌شود. وثیقه‌ای که برای پرداخت می‌گیرید هم باید با همین بندها هماهنگ باشد.",
            ],
          },
          {
            title: "تحویل",
            text: [
              "زمان، محل و شرط تحویل، مهلت اعتراض به کیفیت، و لحظه‌ای که ریسک کالا به خریدار منتقل می‌شود.",
            ],
          },
          {
            title: "فسخ",
            text: [
              "چه کسی، به چه دلیلی و با چه مهلتی می‌تواند قرارداد را تمام کند، و بعد از فسخ تکلیف کالا، پول و تعهدهای باز چیست.",
            ],
          },
          {
            title: "خسارت توافقی",
            text: [
              "مبلغی که برای تأخیر یا نقض تعیین می‌شود بهتر است با ضرر واقعی تناسب داشته باشد، چون در قانون جدید اگر بدهکار اغراق‌آمیز بودنش را ثابت کند، دادگاه می‌تواند آن را کم کند.",
            ],
          },
          {
            title: "محرمانگی و عدم رقابت",
            text: [
              "چه اطلاعاتی و تا کی محرمانه است. شرط عدم رقابت هم باید از نظر مدت، منطقه و نوع فعالیت دقیق و معقول نوشته شود تا قابل دفاع بماند.",
            ],
          },
        ],
      },
      {
        type: "process",
        title: "روند بررسی قرارداد، از ارسال پیش‌نویس تا نسخه نهایی",
        intro: [
          "پنج قدم است و پیش از شروع بررسی، هزینه و زمان تحویل را به‌صورت مکتوب می‌گیرید. وقتی پیش‌نویس را به وکیل قرارداد در دبی می‌سپارید، باید از اول بدانید چه چیزی و در چه شکلی به دستتان می‌رسد.",
        ],
        steps: [
          {
            title: "ارسال پیش‌نویس",
            text: [
              "با رزرو آنلاین نوبت یا از فرم تماس، پیش‌نویس و شرح کوتاه معامله را می‌فرستید. اگر طرف مقابل برای امضا مهلت داده، همان‌جا بنویسید. بعد از دیدن متن، هزینه و زمان تحویل را مکتوب می‌گیرید و کار با تأیید شما شروع می‌شود.",
            ],
          },
          {
            title: "بررسی بند به بند",
            text: [
              "متن را با چیزی که در مذاکره توافق کرده‌اید مقایسه می‌کنم. بندی که در متن هست ولی توافق نشده، و توافقی که در متن نیامده، هر دو علامت می‌خورند.",
            ],
          },
          {
            title: "گزارش ریسک به زبان ساده",
            text: [
              "گزارشی به فارسی می‌گیرید که می‌گوید کدام بند به ضرر شماست، چرا، و اگر همین‌طور امضا شود چه پیش می‌آید.",
            ],
          },
          {
            title: "پیشنهاد اصلاح",
            text: [
              "برای هر بند پرخطر متن جایگزین به زبان قرارداد می‌نویسم تا همان را برای طرف مقابل بفرستید. اگر نپذیرفت، با هم می‌سنجیم کجا می‌شود کوتاه آمد.",
            ],
          },
          {
            title: "نسخه نهایی",
            text: [
              "پیش از امضا، متن نهایی را با آخرین توافق تطبیق می‌دهم تا تغییری که در رفت‌وبرگشت مذاکره اضافه یا حذف شده، از چشم نیفتد.",
            ],
          },
        ],
        note: [
          "اگر تنظیم از صفر لازم دارید، قدم اول شرح معامله است و بقیه قدم‌ها روی پیش‌نویسی انجام می‌شود که من می‌نویسم.",
        ],
        docsTitle: ["چه چیزهایی آماده کنید"],
        docs: [
          {
            title: "پیش‌نویس قرارداد",
            text: ["اگر دارید فایل قابل ویرایش، مثل Word، نه فقط عکس صفحه‌ها."],
          },
          {
            title: "شرح معامله",
            text: ["در چند خط بنویسید چه چیزی، به چه مقدار و با چه قیمتی، کجا تحویل می‌شود."],
          },
          { title: "مکاتبات مذاکره", text: ["ایمیل و پیام‌هایی که توافق‌ها در آن‌ها آمده است."] },
          {
            title: "مشخصات طرف مقابل",
            text: [
              "نام ثبتی و شماره ",
              { t: "ltr", c: ["Trade License"] },
              " (مجوز تجاری) شرکت اماراتی.",
            ],
          },
          { title: "قراردادهای قبلی", text: ["اگر پیش‌تر با همین طرف کار کرده‌اید."] },
        ],
      },
      {
        type: "band",
        label: "ارسال پیش‌نویس",
        text: [
          "نوبت بگیرید تا اول درباره معامله حرف بزنیم، یا اگر پیش‌نویس آماده است، آن را از صفحه تماس برای بررسی بفرستید.",
        ],
        buttons: [
          { variant: "primary", href: "/legal-consultation-booking", label: "رزرو آنلاین نوبت" },
          { variant: "secondary", href: "/contact", label: "تماس با من" },
        ],
        micro: ["پیش‌نویس شما فقط برای همین بررسی استفاده می‌شود و فرستادنش تعهدی ایجاد نمی‌کند."],
      },
      {
        type: "routes",
        title: "تنظیم قرارداد یا بررسی قرارداد: کدام را لازم دارید؟",
        intro: [
          [
            "اگر پیش‌نویسی از طرف مقابل در دست دارید و چارچوب معامله را قبول دارید، بررسی کافی است. اگر متنی نیست یا متن موجود با معامله شما جور نیست، بهتر است وکیل تنظیم قرارداد در دبی متن را از صفر بنویسد. فرق اصلی این دو در نقطه شروع و اختیار شما روی متن است.",
          ],
        ],
        items: [
          {
            title: ["تنظیم قرارداد تجاری در دبی"],
            rows: [
              {
                label: "مناسب وقتی",
                text: [
                  "هنوز متنی نیست، یا معامله بزرگ و بلندمدت است و نمی‌خواهید با الگوی طرف مقابل جلو بروید.",
                ],
              },
              { label: "نقطه شروع", text: ["شرح معامله و توافق‌هایی که در مذاکره شده است."] },
              {
                label: "چه تحویل می‌گیرید",
                text: ["پیش‌نویس کامل قرارداد و توضیح فارسی بندهای اصلی آن."],
              },
              {
                label: "اختیار شما روی متن",
                text: ["متن اول از طرف شماست و مذاکره روی متن شما انجام می‌شود."],
              },
            ],
          },
          {
            title: ["بررسی قرارداد در امارات"],
            rows: [
              {
                label: "مناسب وقتی",
                text: ["طرف اماراتی پیش‌نویس را فرستاده و با اصل معامله مشکلی ندارید."],
              },
              { label: "نقطه شروع", text: ["متنی که طرف مقابل نوشته است."] },
              {
                label: "چه تحویل می‌گیرید",
                text: ["گزارش ریسک به فارسی و متن پیشنهادی برای بندهای پرخطر."],
              },
              {
                label: "اختیار شما روی متن",
                text: ["هر اصلاحی باید در مذاکره روی متن طرف مقابل به دست آید."],
              },
            ],
          },
        ],
        note: [
          "اگر بیشتر بندهای یک پیش‌نویس باید عوض شود، نوشتن متن تازه معمولاً از وصله کردن متن قبلی ساده‌تر است.",
        ],
      },
      {
        type: "boundary",
        title: "اگر اختلاف سر قرارداد شروع شده است",
        intro: [
          "خدمتی که اینجا معرفی شد برای پیش از امضا یا اصلاح قراردادی است که هنوز اختلافی رویش نیست. اگر طرف مقابل تعهدش را انجام نداده یا اختلاف شروع شده، مسیر کار فرق می‌کند و صفحه دیگری به کارتان می‌آید.",
        ],
        listLabel: "موقعیت شما",
        items: [
          {
            text: ["طرف مقابل کالا را تحویل نداده، پول را نپرداخته یا قرارداد را اجرا نکرده است."],
            link: [{ t: "a", href: "/corporate-commercial-disputes", c: ["وکیل تجاری در دبی"] }],
          },
          {
            text: ["اختلاف بین شرکا یا سهامداران یک شرکت در امارات است."],
            link: ["وکیل دعاوی شرکتی در دبی"],
          },
        ],
      },
      {
        type: "trust",
        imageAlt: "راحیل مصطفایی، مشاور حقوقی در دبی",
        title: "قرارداد شما را چه کسی می‌خواند؟",
        intro: [
          "من، ",
          { t: "a", href: "/", c: ["راحیل مصطفایی"] },
          "، قرارداد را با این سؤال می‌خوانم که اگر روزی کار به اختلاف کشید، همین متن چقدر از شما دفاع می‌کند. پیش از انتخاب وکیل قرارداد تجاری در امارات، اعتبار حرفه‌ای او را از شماره ثبتش بررسی کنید.",
        ],
        items: [
          {
            title: "مجوز",
            text: [
              "مشاور حقوقی ثبت‌شده در اداره امور حقوقی دولت دبی با شماره ",
              { t: "a", href: "/about", c: [{ t: "ltr", c: ["L-07168"] }] },
              ".",
            ],
          },
          {
            title: "مؤسسه درج‌شده در ثبت",
            text: [{ t: "ltr", c: ["Lutfi & Company Advocates & Legal Consultants"] }, "."],
          },
          {
            title: "زبان",
            text: [
              "گفت‌وگو و گزارش ریسک به فارسی است و هر بند را پیش از امضا به فارسی توضیح می‌دهم.",
            ],
          },
          {
            title: "دفتر",
            text: [
              { t: "ltr", c: ["Business Bay"] },
              " دبی، فقط با وقت قبلی. جلسه آنلاین هم ممکن است.",
            ],
          },
          {
            title: "محرمانگی",
            text: [
              "پیش‌نویس و اطلاعات معامله شما فقط برای همین بررسی استفاده می‌شود و بدون اجازه شما به طرف مقابل یا کس دیگری داده نمی‌شود.",
            ],
          },
          { title: "هزینه", text: ["بعد از دیدن متن یا شرح معامله و به‌صورت مکتوب تعیین می‌شود."] },
        ],
      },
      {
        type: "resources",
        title: "منابع و راهنماها",
        items: [
          ["قرارداد با شرکت اماراتی"],
          [
            {
              t: "a",
              href: "/blog/iran-uae-governing-law",
              c: ["قانون حاکم بر قرارداد بین‌المللی"],
            },
          ],
          ["نکات حقوقی سرمایه‌گذاری در امارات"],
          ["توافقنامه سهامداران در امارات"],
        ],
      },
      {
        type: "faq",
        title: "سؤال‌های رایج درباره بررسی و تنظیم قرارداد در دبی",
        items: [
          {
            question: "قرارداد با طرف اماراتی باید عربی باشد؟",
            answer: [
              "لزوماً نه. بسیاری از قراردادهای تجاری در امارات به انگلیسی یا دوزبانه نوشته می‌شوند. ولی زبان رسمی دادگاه‌های دولتی امارات عربی است و اگر کار به این دادگاه‌ها برسد، متن غیرعربی ترجمه مصدق لازم دارد. برای همین در قرارداد دوزبانه باید روشن باشد کدام نسخه مقدم است تا ترجمه بعدی معنای بند را عوض نکند.",
            ],
          },
          {
            question: "نسخه فارسی و انگلیسی کافی است؟",
            answer: [
              "نسخه فارسی برای فهم شما مفید است، ولی طرف اماراتی و دادگاه با آن کار نمی‌کنند. من بندها را به فارسی توضیح می‌دهم، ولی اصولاً نسخه‌ای ملاک است که قرارداد آن را مقدم اعلام کرده و در دادگاه‌های دولتی ترجمه عربی هم خوانده می‌شود. پس پیش از امضا بدانید همان نسخه دقیقاً چه می‌گوید.",
            ],
          },
          {
            question: "بررسی قرارداد چقدر طول می‌کشد؟",
            answer: [
              "به حجم متن و پیوست‌ها بستگی دارد. یک قرارداد فروش چندصفحه‌ای با توافقنامه سهامداران با ده‌ها بند یکی نیست. بعد از دیدن پیش‌نویس و پیش از شروع کار، زمان تحویل گزارش را به شما می‌گویم.",
            ],
          },
          {
            question: "پیش‌نویس طرف اماراتی را می‌شود تغییر داد؟",
            answer: [
              "تا امضا نشده، بله، از راه مذاکره. پیش‌نویسی که طرف مقابل می‌فرستد پیشنهاد اوست، نه متن نهایی. در قانون جدید معاملات مدنی امارات، مذاکره پیش از قرارداد هم باید با حسن نیت باشد. پیشنهاد اصلاح را با دلیل می‌نویسم تا درخواست شما منطقی دیده شود و رابطه تجاری آسیب نبیند.",
            ],
          },
          {
            question: "از ایران هم می‌شود قرارداد را بررسی کرد؟",
            answer: [
              "بله. ارسال پیش‌نویس، جلسه و تحویل گزارش همه آنلاین انجام می‌شود و برای کار با وکیل قرارداد در دبی لازم نیست سفر کنید. اگر بعداً امضای حضوری یا تأیید رسمی سندی لازم شود، پیش از آن می‌گویم چه کاری باید انجام شود. اگر جلسه حضوری بخواهید، دفتر در دبی با وقت قبلی در دسترس است.",
            ],
          },
          {
            question: "هزینه بررسی یا تنظیم قرارداد چقدر است؟",
            answer: [
              "بعد از دیدن متن یا شرح معامله تعیین می‌شود و آن را مکتوب می‌گیرید. هزینه به حجم کار بستگی دارد و بررسی یک قرارداد کوتاه با تنظیم قرارداد سرمایه‌گذاری از صفر فرق دارد. تا برآورد را نپذیرفته‌اید، کاری شروع نمی‌شود و فرستادن پیش‌نویس هیچ تعهدی برای شما ایجاد نمی‌کند.",
            ],
          },
          {
            question: "اگر قرارداد کوچک باشد، باز هم بررسی‌اش می‌ارزد؟",
            answer: [
              "به ضرری بستگی دارد که یک بند بد می‌تواند بسازد، نه به تعداد صفحه‌ها. قرارداد تأمینی که هر ماه تکرار می‌شود، ریسکش را هم با هر محموله تکرار می‌کند. اگر بعد از دیدن متن ریسک خاصی نبینم، همین را صریح می‌گویم.",
            ],
          },
        ],
      },
      {
        type: "final",
        title: "پیش از امضا، متن را یک بار دیگر ببینیم",
        text: [
          "بعد از امضا، تغییر متن معمولاً به رضایت طرف مقابل بستگی دارد. اگر پیش‌نویس در دست دارید، آن را برای بررسی محرمانه بفرستید یا نوبت بگیرید تا با وکیل قرارداد در دبی بندهای حساس را پیش از امضا مرور کنید.",
        ],
        buttons: [
          { variant: "primary", href: "/contact", label: "درخواست بررسی محرمانه پرونده" },
          { variant: "secondary", href: "/legal-consultation-booking", label: "رزرو آنلاین نوبت" },
        ],
        disclaimer: [
          "مطالب این صفحه اطلاع‌رسانی عمومی است و جایگزین مشاوره درباره قرارداد مشخص شما نیست. هیچ قراردادی هم همه اختلاف‌ها را از بین نمی‌برد.",
        ],
      },
      {
        type: "more",
        title: "قرارداد خوب با قرارداد قابل اجرا چه فرقی دارد؟",
        blocks: [
          {
            type: "p",
            c: [
              "قرارداد خوب همان چیزی را می‌نویسد که توافق شده. قرارداد قابل اجرا علاوه بر آن، روزی که طرف مقابل تعهدش را انجام نداد، در دادگاه یا داوری همان معنا را حفظ می‌کند و حکمش جایی به کار می‌آید که دارایی طرف مقابل است. پس من متن را از روز اول برای اجرا می‌نویسم، نه فقط برای امضا.",
            ],
          },
          { type: "h3", c: ["اشتباه‌های رایج در قرارداد با طرف اماراتی"] },
          {
            type: "p",
            c: [
              "این اشتباه‌ها بیشتر از عجله برای بستن معامله یا اعتماد به رابطه شخصی می‌آیند، نه از ناآگاهی.",
            ],
          },
          {
            type: "ul",
            items: [
              {
                title: "اعتماد به قول کنار متن",
                text: ["طرف مقابل گفته «این بند را اجرا نمی‌کنیم»، ولی بند در متن مانده است."],
              },
              {
                title: "طرف قرارداد اشتباه",
                text: [
                  "نام تجاری به‌جای نام ثبتی در ",
                  { t: "ltr", c: ["Trade License"] },
                  "، یا امضای کسی که اختیار امضا ندارد.",
                ],
              },
              {
                title: "بند حل اختلاف کپی‌شده",
                text: ["ارجاع به مرجعی که با زبان قرارداد یا محل دارایی طرف مقابل جور نیست."],
              },
              {
                title: "تغییر بی‌ردپا",
                text: ["پذیرفتن قیمت یا زمان تحویل تازه در پیام واتساپ، بدون الحاقیه امضاشده."],
              },
            ],
          },
          { type: "h3", c: ["چرا الگوی آماده اینترنتی کافی نیست"] },
          {
            type: "p",
            c: [
              "الگوی آماده برای معامله کس دیگری و اغلب برای قانون کشور دیگری نوشته شده است. ممکن است بندی داشته باشد که در امارات اثر دیگری دارد، یا بندی را نداشته باشد که معامله شما لازم دارد، مثل بازرسی کالا در مقصد. در نتیجه، الگو فهرست موضوعات را یادتان می‌آورد، ولی جای متنی را که برای معامله شما نوشته شده نمی‌گیرد.",
            ],
          },
          { type: "h3", c: ["مذاکره پیش از قرارداد هم اثر حقوقی دارد"] },
          {
            type: "p",
            c: [
              "قانون جدید معاملات مدنی امارات از ۱ ژوئن ۲۰۲۶ اجرا شده است. طبق آن، مذاکره باید با حسن نیت باشد، هر طرف باید اطلاعات تعیین‌کننده را پیش از قرارداد به طرف دیگر بگوید و اطلاعات محرمانه مذاکره نباید افشا یا به نفع خود استفاده شود. در نتیجه، ایمیل‌ها و پیش‌نویس‌های مذاکره را از همان روز اول نگه دارید.",
            ],
          },
          { type: "h3", c: ["یک موقعیت فرضی: بند «رضایت خریدار»"] },
          {
            type: "p",
            c: [
              "فرض کنید تأمین‌کننده‌ای ایرانی هر ماه برای خریداری در دبی محموله می‌فرستد. پیش‌نویس خریدار می‌گوید کالا باید «مورد رضایت خریدار» باشد، بدون معیار کیفیت و مهلت اعتراض. این بند دست خریدار را برای رد محموله‌ها باز می‌گذارد. در نتیجه، معیار کیفیت و مهلت اعتراض را پیش از امضا در متن بنویسید.",
            ],
          },
          { type: "h3", c: ["ترتیب درست کارها پیش از امضا"] },
          {
            type: "p",
            c: [
              "هر قدم ورودی قدم بعدی را آماده می‌کند. فهرست کامل‌تر را در راهنمای قرارداد با شرکت اماراتی ببینید.",
            ],
          },
          {
            type: "ol",
            items: [
              ["توافق‌های اصلی را در یک ایمیل خلاصه کنید و تأیید طرف مقابل را بگیرید."],
              ["نام ثبتی و امضاکننده مجاز طرف مقابل را روشن کنید."],
              ["پیش‌نویس را بررسی کنید و اصلاحات را مکتوب و با دلیل بفرستید."],
              ["نسخه نهایی را با آخرین متن توافق‌شده تطبیق دهید و بعد امضا کنید."],
            ],
          },
        ],
        open: "مطالعه بیشتر",
        close: "بستن متن",
      },
    ],
    schema: {
      serviceType: "تنظیم و بررسی قراردادهای تجاری",
      audienceType:
        "تاجرها و شرکت‌های ایرانی که قرارداد تجاری با طرف اماراتی می‌بندند یا قرارداد امضاشده دارند",
      areaServed: "امارات متحده عربی",
    },
  },
  en: {
    hero: {
      breadcrumbLabel: "Breadcrumb",
      breadcrumb: [
        { name: "Home", href: "/en" },
        { name: "Legal Services in the UAE", href: "/en/services" },
        { name: "Commercial Contract Drafting and Review" },
      ],
      kicker: "Commercial contracts, before or after signing",
      h1: "Commercial Contract Drafting and Review",
      subline: [
        "For Iranian traders and investors with a draft in hand, no text yet, or a signed contract they want to understand fully.",
      ],
      lede: [
        "A vague payment term or a missing dispute clause looks harmless on signing day and can turn into months of cost later. Send me your draft, or even a contract you have already signed. As a contract legal consultant in Dubai, I will make every part of it clear to you in plain language.",
      ],
      buttons: [
        {
          variant: "primary",
          href: "/en/legal-consultation-booking",
          label: "Book an appointment online",
        },
        { variant: "secondary", href: "/en/contact", label: "Contact me" },
      ],
      note: [
        "One day a week I offer a ",
        { t: "glow", c: ["free consultation"] },
        " for Iranian clients, by appointment. The day is shown on the booking page.",
      ],
      imageAlt:
        "A commercial contract draft with gold margin notes and a fountain pen on a dark marble desk",
    },
    sections: [
      {
        type: "cards",
        title: "Three ways I help with commercial contracts",
        intro: [
          "I draft contracts from scratch, review drafts sent by the other side, and advise on signed contracts that now need an amendment or a renewal. In all three, what you should expect from contract drafting in Dubai is the same: a text that says exactly what you agreed.",
        ],
        items: [
          {
            title: "Drafting from scratch",
            text: [
              "The deal is agreed but there is no text yet, or you would rather not negotiate on the other side's template. I start from the commercial terms, payment and delivery, and write a draft that protects your position from the first line.",
            ],
          },
          {
            title: "Review before signing",
            text: [
              "Your UAE counterparty has sent a draft and is waiting for a signature. I read it clause by clause, isolate the risky ones and propose replacement wording, so you negotiate with reasons rather than objections.",
            ],
          },
          {
            title: "Advice on a signed contract",
            text: [
              "You want to renew, change a clause or add an addendum. Before you sign the change, I check how it interacts with the existing terms so the new text does not contradict the old one.",
            ],
          },
        ],
      },
      {
        type: "cards",
        title: "Which contracts do I draft and review?",
        intro: [
          "Most clients who come to me for drafting or review have at least one Iranian party to the contract. The other side may be Iranian, Emirati or of any other nationality. Each type of contract has its own sensitive clauses, and that is where the work starts.",
        ],
        items: [
          {
            title: "Sale and supply of goods",
            text: [
              "One-off sales, recurring supply and purchase orders. Specifications, delivery time and place, inspection and responsibility for damage in transit are where most trade disputes begin.",
            ],
          },
          {
            title: "Agency and distribution",
            text: [
              "Commercial agency in the UAE has its own statute (",
              { t: "ltr", c: ["Federal Law No. 3 of 2022"] },
              "), and its protections depend on registration of the agency agreement. Before signing, it should be clear whether yours is a registrable agency or an ordinary distribution deal.",
            ],
          },
          {
            title: "Investment agreements",
            text: [
              "When you invest in a project or business in the UAE, the agreement should say how your share is calculated, what reporting you receive and how you exit. Settle these with a legal consultant before you sign, not after the money is committed. See legal points on investing in the UAE for background.",
            ],
          },
          {
            title: "Shareholder and partnership agreements",
            text: [
              "If you are starting a joint business with a partner in the UAE or buying into one, decision-making, profit sharing, entry and exit of partners and management deadlock should be in writing from day one. See the guide to shareholder agreements in the UAE.",
            ],
          },
          {
            title: "International contracts",
            text: [
              "The counterparty sits in a third country or the goods cross several borders. Language, governing law and the dispute forum have to fit together, or you may win a judgment that cannot be enforced where the other side's assets are.",
            ],
          },
        ],
      },
      {
        type: "checklist",
        title: "What exactly do I check in a contract review?",
        intro: [
          [
            "Every clause that could turn into a dispute or a loss after signing. In any contract review in the UAE I read the clauses below separately, but I start with your core obligations: quantity, quality, price and timing.",
          ],
        ],
        items: [
          {
            title: "Governing law",
            text: [
              "under the UAE Civil Transactions Law (",
              { t: "ltr", c: ["Federal Decree-Law No. 25 of 2025"] },
              ") the parties may choose the governing law, but some contracts, such as commercial agency, stay subject to mandatory UAE rules. The full picture is in the guide to governing law in international contracts.",
            ],
          },
          {
            title: "Dispute forum",
            text: [
              "Dubai Courts (the onshore state courts), DIFC Courts (the courts of the Dubai International Financial Centre) or arbitration, for example at DIAC (Dubai International Arbitration Centre). A vague forum clause creates a dispute of its own.",
            ],
          },
          {
            title: "Language",
            text: [
              "under the ",
              {
                t: "a",
                href: "https://uaelegislation.gov.ae/en/legislations/1602/download",
                ext: true,
                c: ["UAE Civil Procedure Law"],
              },
              " (",
              { t: "ltr", c: ["Federal Decree-Law No. 42 of 2022"] },
              ") Arabic is the official language of the onshore courts, such as Dubai Courts, and a document in another language needs a certified translation. A bilingual text should say which version prevails.",
            ],
          },
          {
            title: "Payment and security",
            text: [
              "when and on what condition each payment falls due, advance payments, and what happens if payment is late. Any security you take for payment has to match these terms.",
            ],
          },
          {
            title: "Delivery",
            text: [
              "time, place and terms of delivery, the window for quality complaints, and the moment risk passes to the buyer.",
            ],
          },
          {
            title: "Termination",
            text: [
              "who can end the contract, for what reason and with what notice, and what happens to goods, money and open obligations afterwards.",
            ],
          },
          {
            title: "Agreed damages",
            text: [
              "amounts set for delay or breach are best kept in proportion to the real loss, because under the new law a court can reduce them if the debtor proves they are exaggerated.",
            ],
          },
          {
            title: "Confidentiality and non-compete",
            text: [
              "what is confidential and for how long. A non-compete should be precise and reasonable in duration, territory and activity to remain defensible.",
            ],
          },
        ],
      },
      {
        type: "process",
        title: "How a contract review works, from draft to final version",
        intro: [
          "Five steps, and you receive the fee and delivery time in writing before the review starts. When you hand a draft to a contract legal consultant in Dubai, you should know from the outset what comes back and in what form.",
        ],
        steps: [
          {
            title: "Send the draft",
            text: [
              "book online or use the contact form to send the draft and a short description of the deal. If the other side has set a signing deadline, say so here. Once I have seen the text, you receive the fee and delivery time in writing, and work starts only when you confirm.",
            ],
          },
          {
            title: "Clause-by-clause review",
            text: [
              "I compare the text with what you agreed in negotiation. A clause that was never agreed and an agreement that never made it into the text are both flagged.",
            ],
          },
          {
            title: "Plain-language risk report",
            text: [
              "a plain-language report that tells you which clauses work against you, why, and what could follow if you sign as is.",
            ],
          },
          {
            title: "Proposed amendments",
            text: [
              "replacement wording for each risky clause, in the language of the contract, ready to send to the other side. If they refuse, we decide together where you can give ground.",
            ],
          },
          {
            title: "Final version",
            text: [
              "before you sign, I check the final text against the last agreed position so that nothing added or dropped during the back-and-forth goes unnoticed.",
            ],
          },
        ],
        note: [
          "If you need drafting from scratch, step one is the deal outline, and the remaining steps run on the draft I write.",
        ],
        docsTitle: ["What to prepare"],
        docs: [
          {
            title: "The draft",
            text: ["an editable file such as Word if you have one, not only photos of the pages."],
          },
          {
            title: "The deal in a few lines",
            text: [
              "what is being sold or supplied, in what quantity, at what price, delivered where.",
            ],
          },
          {
            title: "Negotiation correspondence",
            text: ["emails and messages where the terms were agreed."],
          },
          {
            title: "Counterparty details",
            text: [
              "the registered name and ",
              { t: "ltr", c: ["Trade License"] },
              " number of the UAE company.",
            ],
          },
          { title: "Earlier contracts", text: ["if you have worked with the same party before."] },
        ],
      },
      {
        type: "band",
        label: "Send your draft",
        text: [
          "Book an appointment to talk about the deal first, or, if the draft is ready, send it for review through the contact page.",
        ],
        buttons: [
          {
            variant: "primary",
            href: "/en/legal-consultation-booking",
            label: "Book an appointment online",
          },
          { variant: "secondary", href: "/en/contact", label: "Contact me" },
        ],
        micro: ["Your draft is used only for this review, and sending it creates no obligation."],
      },
      {
        type: "routes",
        title: "Drafting or review: which one do you need?",
        intro: [
          [
            "If the other side has sent a draft and you accept the basic deal, a review is usually enough. If there is no text, or the existing one does not fit your deal, drafting from scratch works better. The real difference is where the work starts and how much control you have over the text.",
          ],
        ],
        items: [
          {
            title: ["Contract drafting in Dubai"],
            rows: [
              {
                label: "Suits you when",
                text: [
                  "there is no text yet, or the deal is large and long-term and you do not want to work from the other side's template.",
                ],
              },
              {
                label: "Starting point",
                text: ["the commercial terms and what was agreed in negotiation."],
              },
              {
                label: "What you receive",
                text: ["a complete draft and an explanation of its key clauses."],
              },
              {
                label: "Your control over the text",
                text: ["the first draft is yours, so negotiation happens on your wording."],
              },
            ],
          },
          {
            title: ["Contract review in the UAE"],
            rows: [
              {
                label: "Suits you when",
                text: [
                  "your UAE counterparty has sent a draft and you are happy with the deal itself.",
                ],
              },
              { label: "Starting point", text: ["the text the other side wrote."] },
              {
                label: "What you receive",
                text: ["a risk report and proposed wording for the risky clauses."],
              },
              {
                label: "Your control over the text",
                text: ["every change has to be won in negotiation on their wording."],
              },
            ],
          },
        ],
        note: [
          "When most clauses of a draft need to change, writing a new text is usually simpler than patching the old one.",
        ],
      },
      {
        type: "boundary",
        title: "If a dispute over the contract has already started",
        intro: [
          "This service is for contracts before signing, or for changing a contract that has no dispute yet. If the other side has failed to perform or a dispute has begun, the work is different and another page will serve you better.",
        ],
        listLabel: "Your situation",
        items: [
          {
            text: [
              "The other side has not delivered, has not paid or has not performed the contract.",
            ],
            link: [
              {
                t: "a",
                href: "/en/corporate-commercial-disputes",
                c: ["Commercial dispute legal consultant in Dubai"],
              },
            ],
          },
          {
            text: ["The dispute is between partners or shareholders of a UAE company."],
            link: ["Partner and shareholder disputes in Dubai"],
          },
        ],
      },
      {
        type: "trust",
        imageAlt: "Rahil Mostafaei, legal consultant in Dubai",
        title: "Who reads your contract?",
        intro: [
          "I, ",
          { t: "a", href: "/en", c: ["Rahil Mostafaei"] },
          ", read every contract with one question in mind: if this deal ever ends in a dispute, how well will this text defend you? Whoever you choose as a contract lawyer in Dubai, start by checking their registration number.",
        ],
        items: [
          {
            title: "Registration",
            text: [
              "legal consultant registered with the Government of Dubai Legal Affairs Department under number ",
              { t: "a", href: "/en/about", c: [{ t: "ltr", c: ["L-07168"] }] },
              ".",
            ],
          },
          {
            title: "Firm on the registration",
            text: ["Lutfi & Company Advocates & Legal Consultants."],
          },
          {
            title: "Language",
            text: ["meetings in Persian or English, with every clause explained before you sign."],
          },
          {
            title: "Office",
            text: ["Business Bay, Dubai, by appointment only. Online meetings are available."],
          },
          {
            title: "Confidentiality",
            text: [
              "your draft and deal details are used only for this review and are never shared with the other side or anyone else without your permission.",
            ],
          },
          {
            title: "Fees",
            text: ["set in writing after I have seen the text or the deal outline."],
          },
        ],
      },
      {
        type: "faq",
        title: "Common questions about contract drafting and review in Dubai",
        items: [
          {
            question: "Does a contract with a UAE party have to be in Arabic?",
            answer: [
              "Not necessarily. Many commercial contracts in the UAE are written in English or in two languages. But Arabic is the official language of the UAE onshore courts, and if a dispute reaches them a non-Arabic text needs a certified translation. That is why a bilingual contract should state which version prevails, so a later translation cannot shift the meaning of a clause.",
            ],
          },
          {
            question: "Is a Persian and English version enough?",
            answer: [
              "A Persian version helps you understand the deal, but your UAE counterparty and the courts will not work from it. I explain the clauses in Persian, but as a rule the version the contract names as prevailing is decisive, and onshore courts will also read an Arabic translation. Before you sign, you need to know exactly what that version says.",
            ],
          },
          {
            question: "How long does a contract review take?",
            answer: [
              "It depends on the length of the text and its annexes. A few pages of sale terms are not the same as a shareholder agreement with dozens of clauses. Once I have seen the draft, and before work starts, I tell you when the report will be ready.",
            ],
          },
          {
            question: "Can the UAE party's draft be changed?",
            answer: [
              "Yes, until it is signed, through negotiation. A draft from the other side is their proposal, not the final text. Under the new UAE Civil Transactions Law, pre-contract negotiations must also be conducted in good faith. I write each proposed change with its reasoning, so your request looks reasonable and the business relationship is not strained.",
            ],
          },
          {
            question: "Can I have a contract reviewed from Iran?",
            answer: [
              "Yes. Sending the draft, the meeting and the report can all happen online, so working with a contract legal consultant in Dubai does not require travel. If an in-person signature or official attestation of a document is needed later, I tell you beforehand what it involves. If you prefer to meet, the Dubai office is available by appointment.",
            ],
          },
          {
            question: "How much does drafting or review cost?",
            answer: [
              "The fee is set after I have seen the text or the deal outline, and you receive it in writing. It depends on the scope: reviewing a short contract is different from drafting an investment agreement from scratch. Nothing starts until you accept the estimate, and sending a draft creates no obligation for you.",
            ],
          },
          {
            question: "Is a review worth it for a small contract?",
            answer: [
              "That depends on the loss one bad clause could cause, not on the page count. A supply contract repeated every month repeats its risk with every shipment. If I see no particular risk after reading the text, I will say so plainly.",
            ],
          },
        ],
      },
      {
        type: "final",
        title: "Before you sign, let's read it once more",
        text: [
          "After signing, changing the text usually depends on the other side's consent. If you have a draft, send it for a confidential review or book an appointment to go through the sensitive clauses with a contract legal consultant in Dubai while they can still be changed.",
        ],
        buttons: [
          { variant: "primary", href: "/en/contact", label: "Request a confidential case review" },
          {
            variant: "secondary",
            href: "/en/legal-consultation-booking",
            label: "Book an appointment online",
          },
        ],
        disclaimer: [
          "This page is general information, not advice on your specific contract. No contract removes every possible dispute.",
        ],
      },
      {
        type: "more",
        title: "What separates a good contract from an enforceable one?",
        blocks: [
          {
            type: "p",
            c: [
              "A good contract records what was agreed. An enforceable one also keeps that meaning on the day the other side fails to perform, before a court or a tribunal, and leads to a decision that works where the other side's assets are. Iran UAE contracts can fail at the second step even when the first is done well. So the text should be written for enforcement from day one, not only for signing.",
            ],
          },
          { type: "h3", c: ["Common mistakes in contracts with UAE counterparties"] },
          {
            type: "p",
            c: [
              "Most of them come from rushing to close the deal or from trusting a personal relationship, not from a lack of knowledge.",
            ],
          },
          {
            type: "ul",
            items: [
              {
                title: "Relying on a side promise",
                text: [
                  'the other party said "we won\'t enforce that clause", but the clause is still in the text.',
                ],
              },
              {
                title: "The wrong contracting party",
                text: [
                  "a trade name instead of the registered name on the Trade License, or a signatory without authority.",
                ],
              },
              {
                title: "A copied dispute clause",
                text: [
                  "a forum that does not fit the contract language or the location of the other side's assets.",
                ],
              },
              {
                title: "Untracked changes",
                text: [
                  "accepting a new price or delivery date over WhatsApp without a signed addendum.",
                ],
              },
            ],
          },
          { type: "h3", c: ["Why an online template is not enough"] },
          {
            type: "p",
            c: [
              "A template was written for someone else's deal and often for another country's law. It may contain clauses that work differently in the UAE, or miss what your deal needs, such as inspection of goods at destination. As a result, a template can remind you of the topics, but it cannot replace a text written for your transaction.",
            ],
          },
          { type: "h3", c: ["Negotiations now carry legal weight too"] },
          {
            type: "p",
            c: [
              "The new UAE Civil Transactions Law has applied since 1 June 2026. Under it, negotiations must be conducted in good faith, each party must disclose information that is decisive for the other's consent, and confidential information exchanged during negotiations must not be disclosed or misused. As a result, keep your negotiation emails and drafts from day one.",
            ],
          },
          { type: "h3", c: ['A hypothetical: the "buyer\'s satisfaction" clause'] },
          {
            type: "p",
            c: [
              "Suppose an Iranian supplier ships monthly to a buyer in Dubai. The buyer's draft says goods must be \"to the buyer's satisfaction\", with no quality standard and no deadline for complaints. That leaves the buyer free to reject shipments. As a result, write a quality standard and a complaint deadline into the text before signing.",
            ],
          },
          { type: "h3", c: ["The right order of steps before signing"] },
          {
            type: "p",
            c: [
              "Each step prepares the input for the next. A fuller list is in the guide to contracts with a UAE company.",
            ],
          },
          {
            type: "ol",
            items: [
              ["Summarise the main terms in one email and get the other side to confirm it."],
              ["Confirm the counterparty's registered name and authorised signatory."],
              ["Have the draft reviewed and send your amendments in writing, with reasons."],
              ["Check the final version against the last agreed text, then sign."],
            ],
          },
        ],
        open: "Read more",
        close: "Show less",
      },
    ],
    schema: {
      serviceType: "Commercial contract drafting and review",
      audienceType:
        "Iranian traders and companies entering into or holding commercial contracts with UAE counterparties",
      areaServed: "United Arab Emirates",
    },
  },
};
