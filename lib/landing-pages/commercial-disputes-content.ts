import type { Locale } from "@/lib/i18n/config";
import type { ServiceLandingContent } from "@/lib/landing-pages/service-landing-types";

/**
 * Copy for /corporate-commercial-disputes and /en/corporate-commercial-disputes.
 * The English page has no resources section and no links to the Persian-only blog.
 */
export const commercialDisputesContent: Record<Locale, ServiceLandingContent> = {
  fa: {
    hero: {
      breadcrumbLabel: "مسیر صفحه",
      breadcrumb: [
        { name: "خانه", href: "/" },
        { name: "خدمات حقوقی در امارات", href: "/services" },
        { name: "اختلافات و دعاوی تجاری" },
      ],
      kicker: "اختلافات و دعاوی تجاری در امارات",
      h1: "خدمات حقوقی اختلافات و دعاوی تجاری",
      subline: [
        "برای تاجر یا شرکت ایرانی که طرف اماراتی‌اش قرارداد را طور دیگری تفسیر می‌کند، کالا را نمی‌پذیرد یا مبلغ را قبول ندارد.",
      ],
      lede: [
        "اختلاف تجاری معمولاً با چند ایمیل بی‌جواب و یک فاکتور مورد اعتراض شروع می‌شود و اگر بی‌نقشه جلو برود، ادله شما پراکنده می‌ماند. اگر دنبال وکیل تجاری در دبی هستید، مدارک‌تان را محرمانه می‌خوانم و شفاف می‌گویم کدام مسیر حقوقی در امارات برای پرونده شما منطقی است و چه مدرکی کم دارید.",
      ],
      buttons: [
        { variant: "primary", href: "/legal-consultation-booking", label: "رزرو آنلاین نوبت" },
        { variant: "secondary", href: "/contact", label: "تماس با من" },
      ],
      note: [
        "هفته‌ای یک روز، ",
        { t: "glow", c: ["مشاوره رایگان"] },
        " برای ایرانیان با رزرو نوبت در نظر گرفته شده است. روز آن را در صفحه رزرو می‌بینید.",
      ],
      imageAlt: "وکیل تجاری در دبی برای اختلافات و دعاوی تجاری ایران و امارات",
    },
    sections: [
      {
        type: "cards",
        title: "چه اختلاف‌های تجاری را پیگیری می‌کنم؟",
        intro: [
          "اختلاف‌هایی که بین شما و یک شخص یا شرکت در امارات سر اصل تعهد، کیفیت، تحویل یا مبلغ پیش آمده است. این‌ها رایج‌ترین موقعیت‌هایی‌اند که تاجران ایرانی با آن‌ها سراغ وکیل اختلافات تجاری در دبی می‌آیند.",
        ],
        items: [
          {
            title: "قراردادی که اجرا نشد",
            text: [
              "طرف مقابل کاری را که در قرارداد پذیرفته بود انجام نداده یا ناقص انجام داده و حالا از متن قرارداد برداشت دیگری دارد.",
            ],
          },
          {
            title: "ایراد کیفیت با تأمین‌کننده یا خریدار",
            text: [
              "کالا با نمونه یا مشخصات توافق‌شده مطابقت ندارد، مرجوع شده یا خریدار بخشی از مبلغ را به دلیل ایراد کیفیت نگه داشته است.",
            ],
          },
          {
            title: "حمل و تحویل کالا",
            text: [
              "محموله دیر رسیده، آسیب دیده یا در بندر مانده و هر طرف مسئولیت را به گردن دیگری می‌اندازد.",
            ],
          },
          {
            title: "قرارداد نمایندگی و توزیع",
            text: [
              "قرارداد نمایندگی یا توزیع یک‌طرفه کنار گذاشته شده، منطقه انحصاری رعایت نشده یا سهم شما از فروش محل اختلاف است.",
            ],
          },
          {
            title: "مطالبه خسارت",
            text: [
              "از تخلف یا تأخیر طرف مقابل ضرر مالی دیده‌اید و می‌خواهید بدانید کدام بخش آن با مدارک شما قابل مطالبه است.",
            ],
          },
        ],
      },
      {
        type: "routes",
        title: "کدام مسیر حل اختلاف برای پرونده شما مناسب است؟",
        intro: [
          [
            "مسیر مناسب حل اختلافات تجاری در امارات به بند حل اختلاف قرارداد، رفتار طرف مقابل و هدف شما از پرونده بستگی دارد. چهار مسیر اصلی وجود دارد و گاهی قرارداد از قبل یکی را انتخاب کرده است. مقایسه کامل‌تر در راهنمای ",
            { t: "a", href: "/blog/arbitration-vs-court-uae", c: ["داوری یا دادگاه در امارات"] },
            " آمده است.",
          ],
          [
            "مذاکره و سازش کم‌هزینه‌ترند، ولی بدون همکاری طرف مقابل به جایی نمی‌رسند. دادگاه و داوری تصمیم الزام‌آور می‌دهند و انتخاب بینشان معمولاً با قرارداد است. برای همین، اول در قرارداد شما دنبال «شرط داوری» می‌گردم: بندی که اختلاف را به‌جای دادگاه نزد داور می‌برد. اگر دنبال وکیل تجاری در دبی هستید، از جلسه اول بپرسید این بند در قرارداد شما چه می‌گوید.",
          ],
        ],
        items: [
          {
            title: [
              "مذاکره و ",
              { t: "ltr", c: ["Legal Notice"] },
              " (اخطار رسمی کتبی به طرف مقابل)",
            ],
            rows: [
              {
                label: "مناسب چه موقعیتی",
                text: ["رابطه تجاری هنوز ارزش حفظ کردن دارد یا طرف مقابل جواب می‌دهد."],
              },
              {
                label: "نکته کلیدی",
                text: [
                  { t: "ltr", c: ["Legal Notice"] },
                  " خواسته شما را مکتوب و تاریخ‌دار می‌کند. اینکه پیش از طرح دعوا الزامی است یا نه، در هر پرونده جدا بررسی می‌شود.",
                ],
              },
            ],
          },
          {
            title: ["سازش و میانجی‌گری"],
            rows: [
              {
                label: "مناسب چه موقعیتی",
                text: ["هر دو طرف ترجیح می‌دهند بدون حکم به توافق برسند."],
              },
              {
                label: "نکته کلیدی",
                text: [
                  "طبق ",
                  {
                    t: "a",
                    href: "https://u.ae/-/media/Documents-2024/Federal-Decree-Law-No-40-of-2023-on-Mediation-and-Conciliation-in-Civil-and-Commercial-disputes.pdf",
                    ext: true,
                    c: ["قانون میانجی‌گری و سازش در دعاوی مدنی و تجاری"],
                  },
                  " (",
                  { t: "ltr", c: ["Federal Decree-Law No. 40 of 2023"] },
                  ")، توافقی که دادگاه تأیید کند سند لازم‌الاجرا می‌شود. در ",
                  { t: "ltr", c: ["Dubai Courts"] },
                  " بعضی دعاوی اول به ",
                  { t: "ltr", c: ["Centre for Amicable Settlement of Disputes"] },
                  " (مرکز سازش وابسته به دادگاه دبی) می‌روند.",
                ],
              },
            ],
          },
          {
            title: [
              "دادگاه: ",
              { t: "ltr", c: ["Dubai Courts"] },
              " یا ",
              { t: "ltr", c: ["DIFC Courts"] },
            ],
            rows: [
              {
                label: "مناسب چه موقعیتی",
                text: ["قرارداد شرط داوری ندارد و طرف مقابل همکاری نمی‌کند."],
              },
              {
                label: "نکته کلیدی",
                text: [
                  { t: "ltr", c: ["Dubai Courts"] },
                  " (دادگاه‌های دولتی دبی) به عربی رسیدگی می‌کند. ",
                  { t: "ltr", c: ["DIFC Courts"] },
                  " (دادگاه‌های مرکز مالی بین‌المللی دبی، انگلیسی‌زبان) در پرونده بی‌ارتباط با ",
                  { t: "ltr", c: ["DIFC"] },
                  " فقط با توافق کتبی طرفین صالح است (",
                  {
                    t: "a",
                    href: "https://www.difccourts.ae/application/files/4715/9465/5245/Dubai_Law_No.16_of_2011_English.pdf",
                    ext: true,
                    c: [{ t: "ltr", c: ["Dubai Law No. 16 of 2011"] }],
                  },
                  "، اصلاحیه قانون دادگاه‌های ",
                  { t: "ltr", c: ["DIFC"] },
                  ").",
                ],
              },
            ],
          },
          {
            title: ["داوری، مثل ", { t: "ltr", c: ["DIAC"] }],
            rows: [
              {
                label: "مناسب چه موقعیتی",
                text: [
                  "قرارداد شرط داوری دارد یا طرفین بعد از اختلاف کتباً بر داوری توافق می‌کنند.",
                ],
              },
              {
                label: "نکته کلیدی",
                text: [
                  "طبق ",
                  {
                    t: "a",
                    href: "https://uaelegislation.gov.ae/en/legislations/1069/download",
                    ext: true,
                    c: ["قانون داوری امارات"],
                  },
                  " (",
                  { t: "ltr", c: ["Federal Law No. 6 of 2018 Concerning Arbitration"] },
                  ")، توافق داوری باید کتبی باشد. اگر طرف مقابل پیش از دفاع ماهوی به آن استناد کند، دادگاه دعوا را نمی‌پذیرد، مگر توافق داوری را باطل یا غیرقابل اجرا بداند. ",
                  { t: "ltr", c: ["DIAC"] },
                  " (مرکز داوری بین‌المللی دبی) قواعد خودش را دارد: ",
                  {
                    t: "a",
                    href: "https://www.diac.com/en/adr-services/arbitration/rules/diac-arbitration-rules-2022/",
                    ext: true,
                    c: ["قواعد داوری ۲۰۲۲ ", { t: "ltr", c: ["DIAC"] }],
                  },
                  ".",
                ],
              },
            ],
          },
        ],
      },
      {
        type: "prose",
        title: "مطالبه خسارت در اختلافات تجاری",
        blocks: [
          {
            type: "p",
            c: [
              "مطالبه خسارت در امارات یعنی درخواست جبران ضرری که از تخلف طرف مقابل به شما رسیده است و معمولاً همراه اصل اختلاف طرح می‌شود. اینکه کدام قلم ضرر پذیرفته شود، به قرارداد و قانون حاکم بستگی دارد.",
            ],
          },
          {
            type: "p",
            c: [
              "ادعای خسارت با رابطه روشن بین تخلف و ضرر قوی می‌شود: هزینه انبارداری اضافه، خرید جایگزین گران‌تر یا سفارشی که از دست رفت. اگر دنبال وکیل مطالبه خسارت در دبی هستید، بدانید ادعایی که سند ندارد از همان ابتدا ضعیف است. من ادعا را از روز اول با فاکتور و مکاتبه می‌سازم.",
            ],
          },
        ],
      },
      {
        type: "process",
        title: "روند کار پرونده تجاری با من",
        intro: [
          "از اولین پیام تا اقدام رسمی پنج قدم است. تا وقتی هزینه کار را مکتوب دریافت و تأیید نکرده‌اید، تعهدی برای ادامه ندارید.",
        ],
        steps: [
          {
            title: "ارسال خلاصه و مدارک",
            text: [
              "از فرم تماس یا با رزرو نوبت، خلاصه اختلاف، نام طرف مقابل (برای بررسی تعارض منافع) و مدارکی را که دارید می‌فرستید. اگر مستقیم نوبت بگیرید، مدارک را پیش از جلسه بفرستید تا وقت جلسه صرف تحلیل شود. شرایط هر نوبت پیش از تأیید، در همان صفحه آمده است.",
            ],
          },
          {
            title: "بررسی محرمانه مدارک",
            text: [
              "قرارداد، فاکتورها و مکاتبات را می‌خوانم و جاهایی را که سند کم است یا به ضرر شماست علامت می‌زنم.",
            ],
          },
          {
            title: "جلسه مشاوره و انتخاب مسیر",
            text: [
              "در جلسه حضوری در دبی یا آنلاین، مسیر پیشنهادی و ریسک‌هایش را توضیح می‌دهم و هزینه کار مکتوب اعلام می‌شود.",
            ],
          },
          {
            title: "آماده‌سازی پرونده",
            text: ["مدارک را مرتب می‌کنم، ترجمه‌های لازم انجام می‌شود و وکالت‌نامه تنظیم می‌شود."],
          },
          {
            title: "اقدام حقوقی",
            text: [
              { t: "ltr", c: ["Legal Notice"] },
              "، مذاکره، سازش، طرح دعوا یا داوری. پرونده را پیگیری و مدیریت می‌کنم و وضعیت هر مرحله را شفاف گزارش می‌دهم.",
            ],
          },
        ],
        docsTitle: [
          "چه مدارکی آماده کنید (فهرست کامل‌تر در راهنمای ",
          {
            t: "a",
            href: "/blog/uae-commercial-lawsuit-documents",
            c: ["مدارک دعوای تجاری در امارات"],
          },
          "):",
        ],
        docs: [
          {
            title: "قرارداد",
            text: ["نسخه امضاشده با همه الحاقیه‌ها، حتی اگر فقط پیش‌فاکتور امضاشده دارید."],
          },
          {
            title: "اسناد مالی",
            text: ["فاکتورها، رسیدهای پرداخت و صورت‌حساب‌هایی که مبلغ اختلاف را نشان می‌دهند."],
          },
          {
            title: "اسناد حمل",
            text: ["بارنامه، گواهی بازرسی و هر سندی که تاریخ و وضعیت تحویل را ثبت کرده است."],
          },
          {
            title: "مکاتبات",
            text: ["ایمیل‌ها و پیام‌های واتساپ با تاریخ، بدون پاک کردن یا کوتاه کردن گفت‌وگو."],
          },
          {
            title: "مشخصات طرف مقابل",
            text: [
              "نام دقیق شرکت، شماره مجوز تجاری (",
              { t: "ltr", c: ["Trade License"] },
              ") اگر دارید و نام کسی که با او در تماس بوده‌اید.",
            ],
          },
        ],
      },
      {
        type: "band",
        label: "رزرو نوبت",
        text: [
          "لازم نیست همه مدارک کامل باشد. یک نوبت بگیرید تا پرونده را با هم مرور کنیم، یا اول خلاصه آن را برای بررسی محرمانه بفرستید.",
        ],
        buttons: [
          { variant: "primary", href: "/legal-consultation-booking", label: "رزرو آنلاین نوبت" },
          { variant: "secondary", href: "/contact", label: "درخواست بررسی محرمانه پرونده" },
        ],
      },
      {
        type: "prose",
        title: "پرونده تجاری بین ایران و امارات",
        blocks: [
          {
            type: "p",
            c: [
              "برای شروع کار لازم نیست به دبی بیایید: بررسی مدارک و جلسه مشاوره معمولاً آنلاین انجام می‌شود. اینکه کدام مراحل بعدی از ایران قابل انجام است، از پرونده‌ای به پرونده دیگر فرق می‌کند. اگر دنبال وکیل اختلافات تجاری ایران و امارات هستید، این موضوع‌ها را از روز اول با شما روشن می‌کنم.",
            ],
          },
          { type: "h3", c: ["ترجمه مدارک"] },
          {
            type: "p",
            c: [
              "زبان رسمی دادگاه‌های دولتی امارات، از جمله ",
              { t: "ltr", c: ["Dubai Courts"] },
              "، عربی است (",
              {
                t: "a",
                href: "https://uaelegislation.gov.ae/en/legislations/1602/download",
                ext: true,
                c: ["قانون آیین دادرسی مدنی امارات"],
              },
              "، ",
              { t: "ltr", c: ["Federal Decree-Law No. 42 of 2022"] },
              ") و سند فارسی برای استفاده در پرونده ترجمه تأییدشده لازم دارد. پیش از اینکه هزینه ترجمه همه مدارک را بدهید، می‌گویم کدام سند واقعاً به کار پرونده می‌آید.",
            ],
          },
          { type: "h3", c: ["پیگیری از راه دور"] },
          {
            type: "p",
            c: [
              "ثبت دعوا و تبادل لوایح در دادگاه‌های امارات می‌تواند الکترونیکی انجام شود. مکاتبات انگلیسی و عربی پرونده را هم برایتان شفاف‌سازی می‌کنم. با این حال، اینکه در کدام مرحله حضور خودتان لازم شود، به نوع پرونده بستگی دارد.",
            ],
          },
          { type: "h3", c: ["قانون حاکم"] },
          {
            type: "p",
            c: [
              "قانون حاکم قانونی است که قرارداد بر اساس آن تفسیر و اجرا می‌شود. اگر قرارداد قانون یا دادگاه ایران را تعیین کرده یا درباره هیچ‌کدام چیزی نگفته، از همین نقطه کار وکیل دعاوی تجاری بین‌المللی در امارات با کار در یک پرونده داخلی فرق پیدا می‌کند. توضیح بیشتر در ",
              {
                t: "a",
                href: "/blog/iran-uae-governing-law",
                c: ["قانون حاکم و مرجع حل اختلاف در قراردادهای ایران و امارات"],
              },
              " آمده است.",
            ],
          },
        ],
      },
      {
        type: "boundary",
        title: "اگر موضوع شما اختلاف نیست",
        intro: [
          "هر پرونده‌ای که به وکیل تجاری در امارات می‌رسد اختلاف تجاری نیست. بعضی موضوع‌ها مسیر دیگری دارند و این جدول کمک می‌کند صفحه درست را پیدا کنید.",
        ],
        listLabel: "موقعیت شما",
        items: [
          {
            text: ["مبلغ روشن است و طرف مقابل فقط پرداخت نمی‌کند."],
            link: [
              { t: "a", href: "/uae-asset-debt-recovery", c: ["وکیل وصول مطالبات در امارات"] },
            ],
          },
          {
            text: ["هنوز قراردادی امضا نشده و می‌خواهید آن را درست تنظیم کنید."],
            link: [{ t: "a", href: "/commercial-contracts", c: ["وکیل قرارداد در دبی"] }],
          },
          { text: ["اختلاف بین شرکای یک شرکت است."], link: ["وکیل اختلاف شرکا در دبی"] },
        ],
      },
      {
        type: "trust",
        imageAlt: "راحیل مصطفایی، مشاور حقوقی در دبی",
        title: "پرونده شما را چه کسی بررسی می‌کند؟",
        intro: [
          "من، ",
          { t: "a", href: "/", c: ["راحیل مصطفایی"] },
          "، در دبی روی پرونده‌هایی کار می‌کنم که یک طرف آن‌ها تاجری است که قرارداد را به فارسی فهمیده و به انگلیسی امضا کرده. اگر پیش از انتخاب وکیل تجاری در دبی می‌خواهید اعتبار حرفه‌ای را خودتان بسنجید، از شماره ثبت من شروع کنید.",
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
            title: "شفافیت",
            text: [
              "برای کار با وکیل اختلافات تجاری در امارات به مترجم نیاز ندارید و هر مرحله پرونده برایتان شفاف‌سازی می‌شود. ترجمه رسمی مدارک برای دادگاه موضوع جداگانه‌ای است. مضمون هر نامه رسمی را هم پیش از ارسال با شما مرور می‌کنم.",
            ],
          },
          { title: "دفتر", text: [{ t: "ltr", c: ["Business Bay"] }, " دبی، فقط با وقت قبلی."] },
          {
            title: "محرمانگی",
            text: [
              "مدارک شما فقط برای بررسی همین پرونده استفاده می‌شود و فرستادن آن تعهدی برای شما ایجاد نمی‌کند. در صورت درخواست، پیش از ارسال مدارک تعهد محرمانگی کتبی می‌دهم.",
            ],
          },
        ],
      },
      {
        type: "resources",
        title: "منابع و راهنماها",
        items: [
          [
            {
              t: "a",
              href: "/blog/dubai-commercial-dispute-costs",
              c: ["هزینه شکایت تجاری در دبی"],
            },
          ],
          [
            {
              t: "a",
              href: "/blog/uae-commercial-lawsuit-documents",
              c: ["مدارک دعوای تجاری در امارات"],
            },
          ],
          ["نقض قرارداد در امارات"],
          [
            {
              t: "a",
              href: "/blog/whatsapp-evidence-uae-courts-fa",
              c: ["اعتبار پیام واتساپ در دادگاه امارات"],
            },
          ],
        ],
      },
      {
        type: "faq",
        title: "سؤال‌های رایج پیش از شروع پرونده",
        items: [
          {
            question: "پرونده را از ایران هم می‌شود پیگیری کرد؟",
            answer: [
              "در بسیاری از پرونده‌ها بررسی مدارک، جلسه مشاوره و گزارش مراحل آنلاین انجام می‌شود و ثبت دعوا در دادگاه‌های امارات هم می‌تواند الکترونیکی باشد. پیش از شروع کار به شما می‌گویم کدام مراحل از ایران قابل انجام است و کجا حضور لازم می‌شود. ممکن است برای امضای وکالت‌نامه یا تأیید بعضی اسناد به اقدامی حضوری نیاز باشد.",
            ],
          },
          {
            question: "برای بررسی اولیه چه مدارکی بفرستم؟",
            answer: [
              "هرچه دارید، حتی اگر ناقص است: قرارداد یا پیش‌فاکتور امضاشده، فاکتورها، رسید پرداخت، اسناد حمل و مکاتبات ایمیل و واتساپ با تاریخ. نام دقیق شرکت طرف مقابل هم کمک زیادی می‌کند. لازم نیست پیش از بررسی اولیه چیزی را ترجمه کنید.",
            ],
          },
          {
            question: "اگر قرارداد کتبی نداشته باشم چه؟",
            answer: [
              "پرونده لزوماً بسته نیست. قانون معاملات تجاری امارات اثبات تعهد تجاری را با هر وسیله اثباتی ممکن می‌داند، مگر قانون یا توافق طرفین چیز دیگری بگوید (",
              {
                t: "a",
                href: "https://uaelegislation.gov.ae/en/legislations/1610/download",
                ext: true,
                c: ["قانون معاملات تجاری امارات"],
              },
              "، ",
              { t: "ltr", c: ["Federal Decree-Law No. 50 of 2022"] },
              "). اثبات سخت‌تر می‌شود، پس هیچ پیام یا فاکتوری را پاک نکنید. وکیل دعاوی تجاری در دبی مدارک را همان‌طور که هست و بدون ویرایش لازم دارد.",
            ],
          },
          {
            question: "هزینه پرونده چطور تعیین می‌شود؟",
            answer: [
              "هزینه بعد از بررسی مدارک و روشن شدن مسیر تعیین می‌شود و آن را مکتوب دریافت می‌کنید. عددی که پیش از دیدن مدارک گفته شود فقط حدس است. اگر از چند وکیل تجاری در دبی قیمت گرفته‌اید، بپرسید هر عدد بر اساس کدام مدارک داده شده. تا هزینه را نپذیرفته‌اید، هیچ کاری به حساب شما شروع نمی‌شود.",
            ],
          },
          {
            question: "از کجا بفهمم پرونده‌ام ارزش پیگیری دارد؟",
            answer: [
              "قدرت مدارک شما را با مبلغ اختلاف و هزینه مسیر می‌سنجم و بررسی می‌کنم آیا طرف مقابل در امارات دارایی یا فعالیت شناخته‌شده‌ای دارد و حکم یا توافق در عمل قابل اجراست. اگر پیگیری به صرفه شما نباشد، همین را صریح می‌گویم. هیچ‌کس نمی‌تواند نتیجه را از پیش تضمین کند.",
            ],
          },
          {
            question: "اطلاعاتی که می‌فرستم محرمانه می‌ماند؟",
            answer: [
              "بله. مدارک و توضیحات شما فقط برای بررسی همین پرونده استفاده می‌شود و بدون اجازه شما با طرف مقابل یا کس دیگری در میان گذاشته نمی‌شود. فرستادن مدارک برای من به معنی شروع همکاری یا پذیرش هزینه نیست.",
            ],
          },
        ],
      },
      {
        type: "final",
        title: "پیش از پاسخ بعدی، پرونده را با هم مرور کنیم",
        text: [
          "اگر طرف مقابل موضع کتبی گرفته یا قرار است نامه‌ای رسمی بفرستید، پیش از آن مدارک را با هم مرور کنیم. اگر قرار است با وکیل تجاری در دبی مشورت کنید، پیش از اولین پاسخ رسمی وقت مناسب‌تری است. خلاصه پرونده را بفرستید یا مستقیم نوبت بگیرید.",
        ],
        buttons: [
          { variant: "primary", href: "/contact", label: "درخواست بررسی محرمانه پرونده" },
          { variant: "secondary", href: "/legal-consultation-booking", label: "رزرو آنلاین نوبت" },
        ],
        disclaimer: [
          "مطالب این صفحه اطلاع‌رسانی عمومی است و جای مشاوره درباره پرونده مشخص شما را نمی‌گیرد. هیچ نتیجه‌ای در هیچ پرونده‌ای تضمین نمی‌شود.",
        ],
      },
      {
        type: "more",
        title: "اختلاف تجاری با طرف اماراتی: پیش از اقدام رسمی چه باید بدانید؟",
        blocks: [
          {
            type: "p",
            c: [
              "پیش از اقدام رسمی باید بدانید ادله‌تان چقدر کامل است، طرف مقابل با چه نام ثبتی فعالیت می‌کند و قرارداد چه مرجعی را تعیین کرده است. پرونده‌ای که دیر به دست وکیل تجاری در دبی برسد، اغلب پیش از آن با چند تصمیم کوچک ضعیف شده است.",
            ],
          },
          { type: "h3", c: ["اختلاف تجاری از کجا به دعوا تبدیل می‌شود؟"] },
          {
            type: "p",
            c: [
              "تا وقتی دو طرف درباره راه‌حل حرف می‌زنند، با یک اختلاف تجاری سروکار دارید. وقتی طرف مقابل موضع کتبی می‌گیرد، موضوع یک دعوای بالقوه است و وقت مشورت با وکیل اختلافات تجاری در دبی رسیده است. در نتیجه، از همان نامه به بعد هر پاسخ شما باید طوری نوشته شود که روزی جلوی قاضی یا داور خوانده شود.",
            ],
          },
          { type: "h3", c: ["اشتباه‌هایی که پرونده را پیش از اقدام رسمی خراب می‌کند"] },
          {
            type: "p",
            c: [
              "این اشتباه‌ها معمولاً از سر حسن نیت سر می‌زنند. تاجر می‌خواهد رابطه را نگه دارد و حرفی می‌زند یا کاری می‌کند که بعداً علیه خودش خوانده می‌شود. پیش از هر پاسخ مهم، متن را یک بار با چشم طرف مقابل بخوانید یا آن را به وکیل دعاوی تجاری در دبی نشان دهید.",
            ],
          },
          {
            type: "ul",
            items: [
              {
                title: "پذیرفتن تقصیر در پیام",
                text: [
                  "جمله‌ای مثل «حق با شماست، ما هم کوتاهی کردیم» که فقط برای آرام کردن فضا نوشته شده.",
                ],
              },
              {
                title: "پاک کردن گفت‌وگو",
                text: ["حذف پیام‌های واتساپ یا عوض کردن گوشی بدون پشتیبان‌گیری."],
              },
              {
                title: "ادامه کار بدون اعتراض",
                text: ["تحویل گرفتن محموله معیوب یا ادامه همکاری بدون اینکه ایراد را مکتوب کنید."],
              },
              {
                title: "تهدید بی‌برنامه",
                text: ["گفتن «شکایت می‌کنم» بدون نقشه، که فقط به طرف مقابل فرصت آمادگی می‌دهد."],
              },
              {
                title: "امضای سرسری",
                text: ["امضای الحاقیه یا صورت‌جلسه انگلیسی که کامل نفهمیده‌اید."],
              },
            ],
          },
          { type: "h3", c: ["یک موقعیت فرضی: کالایی که خریدار رد کرد"] },
          {
            type: "p",
            c: [
              "فرض کنید شرکتی ایرانی با یک پیش‌فاکتور امضاشده و چند پیام واتساپ به خریداری در دبی کالا فروخته و خریدار بعد از تحویل، کیفیت را رد کرده است. در چنین پرونده‌ای باید روشن شود مشخصات کالا کجا توافق شده و ایراد چه زمانی و چطور اعلام شده است. قوت این پرونده بیشتر به ترتیب و تاریخ مدارک بستگی دارد تا به حجم آن‌ها.",
            ],
          },
          { type: "h3", c: ["نقش ادله: قرارداد، فاکتور و مکاتبات"] },
          {
            type: "p",
            c: [
              "قرارداد می‌گوید چه توافق شده، فاکتور نشان می‌دهد چه اجرا شده و مکاتبات فاصله این دو را توضیح می‌دهد. ",
              {
                t: "a",
                href: "https://uaelegislation.gov.ae/en/legislations/1612/download",
                ext: true,
                c: ["قانون ادله در معاملات مدنی و تجاری امارات"],
              },
              " (",
              { t: "ltr", c: ["Federal Decree-Law No. 35 of 2022"] },
              ") ایمیل و سایر مکاتبات الکترونیکی را از انواع ادله الکترونیکی می‌شمارد و ارزش هر پیام به شرایط آن بستگی دارد. وکیل اختلافات تجاری در دبی این سه را طوری کنار هم می‌گذارد که با هم تناقض نداشته باشند.",
            ],
          },
          { type: "h3", c: ["زمان‌بندی اقدام: کی باید دست به کار شد؟"] },
          {
            type: "p",
            c: [
              "دیر شروع کردن دو هزینه دارد: برخی مدارک از دست می‌روند و بعضی حق‌ها بعد از مدتی قابل طرح نیستند. مهلت هر دعوا به نوع آن و متن قرارداد بستگی دارد. اگر طرف مقابل موضع کتبی گرفته، مشورت با وکیل دعاوی تجاری در دبی را به ماه بعد موکول نکنید.",
            ],
          },
          {
            type: "h3",
            c: ["وقتی طرف مقابل در منطقه آزاد (", { t: "ltr", c: ["Free Zone"] }, ") ثبت شده است"],
          },
          {
            type: "p",
            c: [
              "شرکت‌های مناطق آزاد امارات مجوز و مرجع ثبت خودشان را دارند و نام تجاری روی فاکتور همیشه با نام ثبتی شرکت یکی نیست. دعوا علیه نام اشتباه وقت و هزینه را هدر می‌دهد. در نتیجه، پیش از هر اقدام رسمی هویت حقوقی طرف مقابل باید دقیق روشن شود.",
            ],
          },
        ],
        open: "مطالعه بیشتر",
        close: "بستن متن",
      },
    ],
    schema: {
      serviceType: "اختلافات و دعاوی تجاری",
      audienceType: "تاجرها و شرکت‌های ایرانی که با طرف اماراتی اختلاف تجاری دارند",
      areaServed: "امارات متحده عربی",
    },
  },
  en: {
    hero: {
      breadcrumbLabel: "Breadcrumb",
      breadcrumb: [
        { name: "Home", href: "/en" },
        { name: "Legal Services in the UAE", href: "/en/services" },
        { name: "Commercial Disputes" },
      ],
      kicker: "Commercial disputes in the UAE",
      h1: "Commercial Dispute Legal Services",
      subline: [
        "For Iranian traders and companies whose UAE counterparty disputes the contract, rejects the goods or contests the amount.",
      ],
      lede: [
        "Most commercial disputes start quietly: an unanswered email, a rejected shipment, an invoice suddenly questioned. If you are looking for a commercial dispute legal consultant in Dubai, I review your documents in confidence and tell you clearly which route in the UAE fits your case and what evidence is missing.",
      ],
      buttons: [
        {
          variant: "primary",
          href: "/en/legal-consultation-booking",
          label: "Book a consultation online",
        },
        { variant: "secondary", href: "/en/contact", label: "Contact me" },
      ],
      note: [
        "One day each week, a ",
        { t: "glow", c: ["free consultation"] },
        " is available to Iranian clients by booking. You will see the day on the booking page.",
      ],
      imageAlt: "Commercial dispute legal consultant in Dubai for Iran and UAE trade disputes",
    },
    sections: [
      {
        type: "cards",
        title: "Which commercial disputes do I handle?",
        intro: [
          'Disputes with a person or company in the UAE over the obligation itself, quality, delivery or the amount owed. If the amount is clear and the other side simply will not pay, see "When your matter is not a dispute" below.',
        ],
        items: [
          {
            title: "A contract that was not performed",
            text: [
              "The other party did not perform what it agreed to, performed only part of it, or now reads the contract differently.",
            ],
          },
          {
            title: "Quality problems with a supplier or buyer",
            text: [
              "Goods do not match the agreed sample or specification, were returned, or the buyer is withholding part of the price over a quality complaint.",
            ],
          },
          {
            title: "Shipping and delivery",
            text: [
              "The cargo arrived late, damaged or is stuck at port, and each side blames the other.",
            ],
          },
          {
            title: "Agency and distribution agreements",
            text: [
              "An agency or distribution agreement was ended unilaterally, exclusivity was not respected, or your share of sales is in dispute.",
            ],
          },
          {
            title: "Compensation claims",
            text: [
              "You suffered a financial loss because of the other side's breach or delay and want to know which part of it your documents can support.",
            ],
          },
        ],
      },
      {
        type: "routes",
        title: "Which dispute resolution route suits your case?",
        intro: [
          [
            "The right route depends on three things: the dispute resolution clause in your contract, how the other side behaves, and what you want from the case. Commercial disputes in the UAE are usually resolved through one of four routes, and your contract may already have chosen one.",
          ],
          [
            "Negotiation and mediation cost less, but they need the other side to engage. Courts and arbitration produce binding decisions, and the choice between them is normally made by the contract. So the first thing I look for is an arbitration clause: a term saying disputes go to an arbitrator instead of a court. In commercial disputes in Dubai, that clause can decide the forum.",
          ],
        ],
        items: [
          {
            title: ["Negotiation and Legal Notice"],
            rows: [
              {
                label: "Suits which situation",
                text: [
                  "The relationship is still worth keeping, or the other side still responds.",
                ],
              },
              {
                label: "Key point",
                text: [
                  "A Legal Notice puts your position in writing with a date. Whether it is required before filing a claim is checked case by case.",
                ],
              },
            ],
          },
          {
            title: ["Mediation and conciliation"],
            rows: [
              {
                label: "Suits which situation",
                text: ["Both sides prefer a settlement without a judgment."],
              },
              {
                label: "Key point",
                text: [
                  "Under ",
                  {
                    t: "a",
                    href: "https://u.ae/-/media/Documents-2024/Federal-Decree-Law-No-40-of-2023-on-Mediation-and-Conciliation-in-Civil-and-Commercial-disputes.pdf",
                    ext: true,
                    c: [
                      "Federal Decree-Law No. 40 of 2023 on Mediation and Conciliation in Civil and Commercial Disputes",
                    ],
                  },
                  ", a settlement approved by the court becomes an enforceable instrument. Some claims at Dubai Courts go first to the Centre for Amicable Settlement of Disputes.",
                ],
              },
            ],
          },
          {
            title: ["Courts: Dubai Courts or DIFC Courts"],
            rows: [
              {
                label: "Suits which situation",
                text: ["No arbitration clause, and the other side will not cooperate."],
              },
              {
                label: "Key point",
                text: [
                  "Dubai Courts work in Arabic. DIFC Courts are an English-language common law court and hear claims unconnected to the DIFC only where the parties agree in writing (",
                  {
                    t: "a",
                    href: "https://www.difccourts.ae/application/files/4715/9465/5245/Dubai_Law_No.16_of_2011_English.pdf",
                    ext: true,
                    c: ["Dubai Law No. 16 of 2011"],
                  },
                  ", amending the DIFC Courts law).",
                ],
              },
            ],
          },
          {
            title: ["Arbitration, such as DIAC"],
            rows: [
              {
                label: "Suits which situation",
                text: [
                  "The contract has an arbitration clause, or both sides agree in writing after the dispute arises.",
                ],
              },
              {
                label: "Key point",
                text: [
                  "Under ",
                  {
                    t: "a",
                    href: "https://uaelegislation.gov.ae/en/legislations/1069/download",
                    ext: true,
                    c: ["Federal Law No. 6 of 2018 Concerning Arbitration"],
                  },
                  " an arbitration agreement must be in writing, and if the other side relies on it before arguing the merits, the court will not hear the claim unless it finds the agreement void or unenforceable. DIAC (Dubai International Arbitration Centre) applies its own ",
                  {
                    t: "a",
                    href: "https://www.diac.com/en/adr-services/arbitration/rules/diac-arbitration-rules-2022/",
                    ext: true,
                    c: ["DIAC Arbitration Rules 2022"],
                  },
                  ".",
                ],
              },
            ],
          },
        ],
      },
      {
        type: "prose",
        title: "Compensation claims in commercial disputes",
        blocks: [
          {
            type: "p",
            c: [
              "Compensation claims in the UAE seek to recover the loss caused by the other side's breach, and they are usually brought together with the main dispute. Which heads of loss are recoverable depends on the contract and the governing law.",
            ],
          },
          {
            type: "p",
            c: [
              "A claim is persuasive when the link between breach and loss is clear: extra storage costs, a more expensive replacement purchase, an order you lost. I build the claim from invoices and correspondence from day one.",
            ],
          },
        ],
      },
      {
        type: "process",
        title: "How a commercial case works with me",
        intro: [
          "There are five steps from your first message to formal action. You are not committed to anything until you have received the fee in writing and accepted it.",
        ],
        steps: [
          {
            title: "Send a summary and documents",
            text: [
              "through the contact form or a booking, share what happened, who the other party is (so I can check for conflicts of interest) and what documents you have. They do not need to be complete. If you book directly, send your documents before the meeting so the time goes on analysis. The terms of each appointment are shown on the booking page before you confirm.",
            ],
          },
          {
            title: "Confidential document review",
            text: [
              "I read the contract, invoices and correspondence and mark where evidence is missing or works against you.",
            ],
          },
          {
            title: "Consultation and route",
            text: [
              "in a meeting in Dubai or online, I explain the route I recommend and its risks, and the fee is confirmed in writing.",
            ],
          },
          {
            title: "Case preparation",
            text: [
              "documents are organised, the necessary translations are made and a power of attorney is prepared.",
            ],
          },
          {
            title: "Legal action",
            text: [
              "Legal Notice, negotiation, mediation, a court claim or arbitration. I follow and manage the case and report each stage to you.",
            ],
          },
        ],
        docsTitle: ["What to prepare:"],
        docs: [
          {
            title: "Contract",
            text: [
              "the signed version with all amendments, even if all you have is a signed proforma invoice.",
            ],
          },
          {
            title: "Financial records",
            text: ["invoices, payment receipts and statements that show the amount in dispute."],
          },
          {
            title: "Shipping records",
            text: [
              "bill of lading, inspection certificates and anything recording delivery dates and condition.",
            ],
          },
          {
            title: "Correspondence",
            text: [
              "emails and WhatsApp messages with dates, without deleting or trimming the conversation.",
            ],
          },
          {
            title: "Counterparty details",
            text: [
              "the exact company name, its trade licence number if you have it, and the name of your contact there.",
            ],
          },
        ],
      },
      {
        type: "band",
        label: "Booking",
        text: [
          "Your documents do not need to be complete. Book a consultation to go through the case together, or send a short summary for a confidential review first.",
        ],
        buttons: [
          {
            variant: "primary",
            href: "/en/legal-consultation-booking",
            label: "Book a consultation online",
          },
          {
            variant: "secondary",
            href: "/en/contact",
            label: "Request a confidential case review",
          },
        ],
      },
      {
        type: "prose",
        title: "Cross-border cases between Iran and the UAE",
        blocks: [
          {
            type: "p",
            c: [
              "You do not need to travel to Dubai to start: the document review and consultation usually happen online. Which later steps can be done from Iran differs from case to case. As a commercial dispute legal consultant in Dubai, I clarify three things from day one.",
            ],
          },
          { type: "h3", c: ["Translation"] },
          {
            type: "p",
            c: [
              "Arabic is the official language of the UAE's onshore courts, including Dubai Courts (",
              {
                t: "a",
                href: "https://uaelegislation.gov.ae/en/legislations/1602/download",
                ext: true,
                c: ["Federal Decree-Law No. 42 of 2022 Promulgating the Civil Procedure Code"],
              },
              "), so a Persian contract or an Iranian invoice needs a certified translation before it is used. Before you pay to translate everything, I tell you which documents the case needs.",
            ],
          },
          { type: "h3", c: ["Working remotely"] },
          {
            type: "p",
            c: [
              "Claims and written submissions in the UAE courts can be filed electronically, and I explain English and Arabic correspondence to you in plain terms. Whether you will need to be in the UAE at a later stage depends on the type of case.",
            ],
          },
          { type: "h3", c: ["Governing law"] },
          {
            type: "p",
            c: [
              "Governing law is the law under which the contract is interpreted and enforced. If the contract chose Iranian law or Iranian courts, or says nothing about either, the route changes. You can read more in my guide to governing law in Iran and UAE contracts (Persian).",
            ],
          },
        ],
      },
      {
        type: "boundary",
        title: "When your matter is not a dispute",
        intro: [
          "Some matters look like a commercial dispute but follow a different route. Use this table to find the right page.",
        ],
        listLabel: "Your situation",
        items: [
          {
            text: ["The amount is clear and the other side simply will not pay."],
            link: [
              { t: "a", href: "/en/uae-asset-debt-recovery", c: ["UAE debt and asset recovery"] },
            ],
          },
          {
            text: ["The contract has not been signed yet."],
            link: [
              { t: "a", href: "/en/commercial-contracts", c: ["Commercial contracts in Dubai"] },
            ],
          },
          {
            text: ["The dispute is between partners in one company."],
            link: ["Partner disputes in Dubai"],
          },
        ],
      },
      {
        type: "trust",
        imageAlt: "Rahil Mostafaei, Legal Consultant in Dubai",
        title: "Who reviews your case?",
        intro: [
          "I am ",
          { t: "a", href: "/en", c: ["Rahil Mostafaei"] },
          ", and in Dubai I work on cases where one side is a trader who understood the deal in Persian and signed it in English. If you are looking for a commercial lawyer in Dubai and want something you can verify, start with my registration number.",
        ],
        items: [
          {
            title: "Registration",
            text: [
              "Legal Consultant registered with the Government of Dubai Legal Affairs Department, number ",
              { t: "a", href: "/en/about", c: ["L-07168"] },
              ".",
            ],
          },
          {
            title: "Firm on the register",
            text: ["Lutfi & Company Advocates & Legal Consultants."],
          },
          {
            title: "Clear reporting",
            text: [
              "you do not need an interpreter to work with me, every stage is explained in plain terms, and I go through every formal letter with you before it is sent.",
            ],
          },
          { title: "Office", text: ["Business Bay, Dubai, by appointment only."] },
          {
            title: "Confidentiality",
            text: [
              "your documents are used only to review your case, and sending them does not commit you to anything. On request, I give a written confidentiality undertaking before you send documents.",
            ],
          },
        ],
      },
      {
        type: "faq",
        title: "Questions before you start",
        items: [
          {
            question: "Can the case be handled while I am in Iran?",
            answer: [
              "In many cases the document review, consultation and progress reports happen online, and claims in the UAE courts can be filed electronically. Before we begin, I will tell you which steps can be done from Iran and which steps, such as signing a power of attorney, may need you in person in the UAE. Whether a specific step can be done remotely is checked for each case.",
            ],
          },
          {
            question: "What should I send for the first review?",
            answer: [
              "Whatever you have, even if it is incomplete: the contract or a signed proforma invoice, invoices, payment receipts, shipping documents, and dated emails and WhatsApp messages. The counterparty's exact company name helps a great deal. You do not need to translate anything before the first review.",
            ],
          },
          {
            question: "What if there is no written contract?",
            answer: [
              "The case is not necessarily closed. The law allows commercial obligations to be proven by any means of evidence unless a statute or the parties' agreement says otherwise (",
              {
                t: "a",
                href: "https://uaelegislation.gov.ae/en/legislations/1610/download",
                ext: true,
                c: [
                  "Federal Decree-Law No. 50 of 2022 Promulgating the Commercial Transactions Law",
                ],
              },
              "), and emails count as electronic evidence (",
              {
                t: "a",
                href: "https://uaelegislation.gov.ae/en/legislations/1612/download",
                ext: true,
                c: [
                  "Federal Decree-Law No. 35 of 2022 Promulgating the Law of Evidence in Civil and Commercial Transactions",
                ],
              },
              "). Proof is harder, so do not delete any message or invoice.",
            ],
          },
          {
            question: "How are fees set?",
            answer: [
              "Fees are set after the documents have been reviewed and the route is clear, and you receive them in writing. A fixed number before seeing the file would be a guess, because negotiation, mediation, court and arbitration cost very different amounts. Nothing is started on your account until you have accepted the fee.",
            ],
          },
          {
            question: "How do I know whether my case is worth pursuing?",
            answer: [
              "I weigh the strength of your documents against the amount at stake and the cost of the route, and check whether the other side has known assets or business in the UAE and whether a judgment or settlement could actually be enforced. If pursuing the claim is not in your interest, I will say so plainly. No outcome can be guaranteed in advance.",
            ],
          },
          {
            question: "Is the information I send kept confidential?",
            answer: [
              "Yes. Your documents and explanations are used only to review your case and are not shared with the other side or anyone else without your permission. Sending documents does not create a client relationship or commit you to any fee.",
            ],
          },
        ],
      },
      {
        type: "final",
        title: "Let's review your case before your next reply",
        text: [
          "If the other side has taken a written position, or you are about to send a formal letter, let's go through your documents before you reply, while what you write can still be shaped so it is not read against you. Send a summary or book a consultation directly.",
        ],
        buttons: [
          { variant: "primary", href: "/en/contact", label: "Request a confidential case review" },
          {
            variant: "secondary",
            href: "/en/legal-consultation-booking",
            label: "Book a consultation online",
          },
        ],
        disclaimer: [
          "This page is general information and is not advice on your specific situation. No outcome is guaranteed in any case.",
        ],
      },
      {
        type: "more",
        title: "Before you take legal action against a UAE counterparty",
        blocks: [
          {
            type: "p",
            c: [
              "Before taking formal action you need to know how complete your evidence is, which registered name the other side trades under, and which forum the contract chose. A case that reaches a commercial dispute legal consultant in Dubai late has often been weakened by small decisions along the way.",
            ],
          },
          { type: "h3", c: ["When does a disagreement become a claim?"] },
          {
            type: "p",
            c: [
              "While both sides are still discussing solutions, you have a commercial disagreement. Once the other side takes a written position, for example formally rejecting the goods or declaring the contract terminated, you have a potential claim. From that letter onwards, write every reply as if a judge or arbitrator will read it.",
            ],
          },
          { type: "h3", c: ["Mistakes that weaken a case before it starts"] },
          {
            type: "p",
            c: [
              "Most of these come from good intentions. A trader wants to keep the relationship and says or does something that is later read against them.",
            ],
          },
          {
            type: "ul",
            items: [
              {
                title: "Admitting fault in a message",
                text: [
                  'a line like "you are right, we also fell short" written only to calm things down.',
                ],
              },
              {
                title: "Deleting conversations",
                text: ["clearing WhatsApp or changing phones without a backup."],
              },
              {
                title: "Carrying on without objecting",
                text: [
                  "accepting a defective shipment or continuing to work without putting the problem in writing.",
                ],
              },
              {
                title: "Empty threats",
                text: [
                  'saying "I will sue" without a plan, which only gives the other side time to prepare.',
                ],
              },
              {
                title: "Signing in a hurry",
                text: ["signing an English amendment or minutes you have not fully understood."],
              },
            ],
          },
          { type: "h3", c: ["A hypothetical: goods the buyer rejected"] },
          {
            type: "p",
            c: [
              "Suppose an Iranian company sold a shipment to a Dubai buyer on a signed proforma invoice and a few WhatsApp messages, and after delivery the buyer rejected the quality. Before sending any letter, I would first pin down exactly where the specification was agreed, and when and how the buyer raised the defect. Then I would build a simple timeline from the proforma to the last message. The strength of a case like this depends more on the order and dates of the documents than on how many there are.",
            ],
          },
          { type: "h3", c: ["Timing: when to act"] },
          {
            type: "p",
            c: [
              "Starting late has two costs: evidence fades, and some rights cannot be raised after a certain time. Legal and contractual deadlines depend on the type of claim and the contract, and are checked case by case. If the other side has taken a written position, do not put the review off until next month.",
            ],
          },
          { type: "h3", c: ["When the other side is registered in a Free Zone"] },
          {
            type: "p",
            c: [
              "Free Zone companies have their own licence and registering authority, and the trade name on an invoice is not always the registered name. A claim against the wrong name wastes time and money, so the counterparty's legal identity has to be settled first.",
            ],
          },
        ],
        open: "Read more",
        close: "Show less",
      },
    ],
    schema: {
      serviceType: "Commercial dispute resolution",
      audienceType: "Iranian traders and companies in a commercial dispute with a UAE party",
      areaServed: "United Arab Emirates",
    },
  },
};
