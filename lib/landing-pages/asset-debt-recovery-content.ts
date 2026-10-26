import type { Locale } from "@/lib/i18n/config";
import type { ServiceLandingContent } from "@/lib/landing-pages/service-landing-types";

/**
 * Copy for /uae-asset-debt-recovery and /en/uae-asset-debt-recovery.
 * The English page has no resources section and no links to the Persian-only blog.
 */
export const assetDebtRecoveryContent: Record<Locale, ServiceLandingContent> = {
  fa: {
    hero: {
      breadcrumbLabel: "مسیر صفحه",
      breadcrumb: [
        { name: "خانه", href: "/" },
        { name: "خدمات حقوقی در امارات", href: "/services" },
        { name: "وصول مطالبات و بازیابی دارایی" },
      ],
      kicker: "فاکتور، چک یا حکم در امارات",
      h1: "خدمات حقوقی وصول مطالبات و بازیابی دارایی",
      subline: ["برای طلبکار ایرانی که مبلغ طلبش روشن است، ولی طرف اماراتی پرداخت نمی‌کند."],
      lede: [
        "فاکتوری که سررسیدش گذشته، چکی که برگشت خورده یا حکمی که هنوز اجرا نشده: پیش از هر هزینه‌ای باید روشن شود این طلب در امارات قابل وصول است یا نه. اگر دنبال وکیل وصول مطالبات در دبی هستید، مدارک طلب و وضعیت بدهکار را محرمانه بررسی می‌کنم و نتیجه را صریح و شفاف با شما در میان می‌گذارم.",
      ],
      buttons: [
        { variant: "primary", href: "/legal-consultation-booking", label: "رزرو آنلاین نوبت" },
        { variant: "secondary", href: "/contact", label: "تماس با من" },
      ],
      note: [
        "هفته‌ای یک روز برای ایرانیان ",
        { t: "glow", c: ["مشاوره رایگان"] },
        " دارم که با رزرو نوبت انجام می‌شود. روز آن را در صفحه رزرو می‌بینید.",
      ],
      imageAlt:
        "مشاور حقوقی و موکل در دفتری در دبی، با اسکناس درهم و چکش دادگاه روی میز؛ نماد وصول مطالبات در امارات",
    },
    sections: [
      {
        type: "cards",
        title: "چه طلب‌هایی را در امارات پیگیری می‌کنم؟",
        intro: [
          "طلب‌هایی را پیگیری می‌کنم که مبلغشان روشن است و بدهکار در امارات فعالیت، نشانی یا دارایی دارد. اگر پیش از تماس با وکیل وصول مطالبات در دبی می‌خواهید بدانید طلب شما در کدام دسته است، از همین کارت‌ها شروع کنید.",
        ],
        items: [
          {
            title: "فاکتوری که سررسیدش گذشته",
            text: [
              "کالا یا خدمت را تحویل داده‌اید، سررسید فاکتور گذشته و طرف اماراتی پرداخت را با وعده عقب می‌اندازد. مراحل کامل در راهنمای ",
              {
                t: "a",
                href: "/blog/uae-unpaid-invoice-legal-recovery-2026",
                c: ["فاکتور پرداخت‌نشده در امارات"],
              },
              " آمده است.",
            ],
          },
          {
            title: "طلب بدون قرارداد کتبی",
            text: [
              "معامله با پیش‌فاکتور، ایمیل و پیام واتساپ جلو رفته و قراردادی امضا نشده است. طلب لزوماً از بین نرفته است. راهنمای ",
              {
                t: "a",
                href: "/blog/uae-debt-recovery-without-contract",
                c: ["وصول طلب بدون قرارداد در امارات"],
              },
              " را ببینید.",
            ],
          },
          {
            title: "چک برگشتی",
            text: [
              "چکی از بدهکار اماراتی در دست دارید که برگشت خورده است. برای وکیل چک برگشتی در دبی، نقطه شروع بررسی خود چک و مسیر اجرای آن است.",
            ],
          },
          {
            title: "حکم یا رأی داوری اجرانشده",
            text: [
              "حکم دادگاه یا رأی داوری به نفع شما صادر شده، ولی بدهکار هنوز پرداخت نکرده و اجرای آن باید در امارات پیگیری شود.",
            ],
          },
          {
            title: "بازیابی دارایی بدهکار",
            text: [
              "بدهکار پرداخت نمی‌کند و باید روشن شود در امارات چه دارایی قابل توقیفی دارد و چطور می‌شود پیش از جابه‌جا شدن آن اقدام کرد.",
            ],
          },
        ],
      },
      {
        type: "routes",
        title: "مسیرهای وصول طلب در امارات: کدام برای موقعیت شما مناسب است؟",
        intro: [
          [
            "برای وصول مطالبات تجاری در دبی و امارات چهار مسیر اصلی هست: مذاکره و ",
            { t: "ltr", c: ["Legal Notice"] },
            "، دستور پرداخت (",
            { t: "ltr", c: ["Payment Order"] },
            ")، اجرای مستقیم چک و دعوای عادی. انتخاب بین آن‌ها بیشتر از هر چیز به سند طلب شما بستگی دارد.",
          ],
          [
            "یک قاعده عملی: هرچه سند طلب محکم‌تر باشد، مسیر کوتاه‌تری در دسترس است. پیش از هر اقدامی باید روشن شود سند شما به کدام مسیر زیر می‌خورد.",
          ],
        ],
        items: [
          {
            title: ["مذاکره و ", { t: "ltr", c: ["Legal Notice"] }, " (اخطار رسمی کتبی به بدهکار)"],
            rows: [
              {
                label: "مناسب چه موقعیتی",
                text: ["بدهکار هنوز جواب می‌دهد یا حفظ رابطه تجاری برایتان مهم است."],
              },
              {
                label: "چه باید بدانید",
                text: [
                  { t: "ltr", c: ["Legal Notice"] },
                  " نامه رسمی و تاریخ‌داری است که مبلغ طلب و مهلت پرداخت را به بدهکار اعلام می‌کند. اغلب اولین قدم وصول است، حتی اگر کار بعداً به دادگاه برسد.",
                ],
              },
            ],
          },
          {
            title: ["مسیر سند کتبی: دستور پرداخت (", { t: "ltr", c: ["Payment Order"] }, ")"],
            rows: [
              {
                label: "مناسب چه موقعیتی",
                text: [
                  "طلب مکتوب است، سررسیدش رسیده و مبلغش معین است؛ مثلاً فاکتوری که بدهکار تأیید کرده.",
                ],
              },
              {
                label: "چه باید بدانید",
                text: [
                  { t: "ltr", c: ["Payment Order"] },
                  " (در متن رسمی انگلیسی قانون ",
                  { t: "ltr", c: ["writ of debt"] },
                  ") دستوری است که قاضی بر اساس سند کتبی طلب و بدون رسیدگی کامل دعوا صادر می‌کند. طبق ",
                  {
                    t: "a",
                    href: "https://uaelegislation.gov.ae/en/legislations/1602/download",
                    ext: true,
                    c: ["قانون آیین دادرسی مدنی امارات"],
                  },
                  " (",
                  { t: "ltr", c: ["Federal Decree-Law No. 42 of 2022"] },
                  ")، پیش از درخواست باید به بدهکار اخطار پرداخت داده شود و بدهکار هم می‌تواند به دستور صادرشده اعتراض کند. شرایط کامل در راهنمای ",
                  {
                    t: "a",
                    href: "/blog/uae-unpaid-invoice-legal-recovery-2026",
                    c: ["فاکتور پرداخت‌نشده در امارات"],
                  },
                  " آمده است.",
                ],
              },
            ],
          },
          {
            title: ["اجرای مستقیم چک"],
            rows: [
              { label: "مناسب چه موقعیتی", text: ["سند طلب شما چکی است که برگشت خورده است."] },
              {
                label: "چه باید بدانید",
                text: [
                  "همان قانون چک را سند لازم‌الاجرا می‌داند، یعنی سندی که بدون دعوای تازه به اجرا گذاشته می‌شود. به همین دلیل چک از مسیر ",
                  { t: "ltr", c: ["Payment Order"] },
                  " جداست و درخواست آن نزد قاضی اجرا (",
                  { t: "ltr", c: ["Execution Judge"] },
                  ") طرح می‌شود.",
                ],
              },
            ],
          },
          {
            title: ["دعوای عادی"],
            rows: [
              {
                label: "مناسب چه موقعیتی",
                text: ["سند کتبی کافی نیست یا بدهکار مبلغ را قبول ندارد."],
              },
              {
                label: "چه باید بدانید",
                text: [
                  "این مسیر طولانی‌تر است. اگر بدهکار اصل تعهد را زیر سؤال برده، موضوع به اختلاف تجاری نزدیک می‌شود که در بخش «اگر موضوع شما فقط طلب نیست» آمده است.",
                ],
              },
            ],
          },
        ],
      },
      {
        type: "prose",
        title: "اجرای حکم و رأی داوری در امارات",
        blocks: [
          {
            type: "p",
            c: [
              "حکم یا رأی داوری به نفع شما هنوز پول نیست. حکم دادگاه خارجی خودبه‌خود اجرا نمی‌شود: قاضی اجرا آن را بررسی می‌کند و فقط با شرایط قانونی، مثل قطعی بودن حکم، مغایر نبودن با نظم عمومی امارات و معامله متقابل، اجازه اجرا می‌دهد. درباره حکم ایران، راهنمای ",
              {
                t: "a",
                href: "/blog/iran-judgment-enforcement-uae",
                c: ["اجرای حکم دادگاه ایران در امارات"],
              },
              " را ببینید.",
            ],
          },
          {
            type: "p",
            c: [
              "رأی داوری خارجی مسیر جداگانه‌ای دارد. امارات از سال ۲۰۰۶ عضو کنوانسیون نیویورک (",
              { t: "ltr", c: ["New York Convention"] },
              "، معاهده شناسایی و اجرای آرای داوری خارجی) است. توضیحش را در راهنمای ",
              {
                t: "a",
                href: "/blog/foreign-arbitral-award-enforcement-uae",
                c: ["اجرای رأی داوری خارجی در امارات"],
              },
              " نوشته‌ام. کار وکیل اجرای حکم در امارات با گرفتن دستور اجرا تمام نمی‌شود: باید روشن شود حکم روی کدام دارایی بدهکار اجرا شود.",
            ],
          },
        ],
      },
      {
        type: "prose",
        title: "بازیابی دارایی در امارات و توقیف اموال بدهکار",
        blocks: [
          {
            type: "p",
            c: [
              "بازیابی دارایی یعنی شناسایی اموال بدهکار و توقیف آن‌ها تا طلب از محل همان اموال پرداخت شود. حکمی که دارایی پشتش نباشد، در عمل پولی برنمی‌گرداند. برای همین سؤال دارایی را از روز اول می‌پرسم، نه بعد از گرفتن حکم.",
            ],
          },
          {
            type: "p",
            c: [
              "اگر خطر جابه‌جا شدن دارایی جدی باشد، دادگاه می‌تواند پیش از حکم نهایی دستور اقدام احتیاطی بدهد. شرایط آن در راهنمای ",
              { t: "a", href: "/blog/precautionary-attachment-dubai", c: ["توقیف احتیاطی در دبی"] },
              " آمده است. وکیل بازیابی دارایی در دبی در این مرحله باید زود ولی با مدرک جلو برود، چون درخواستی که مدرک کافی ندارد ممکن است رد شود و فرصت اقدام از دست برود.",
            ],
          },
        ],
      },
      {
        type: "process",
        title: "روند پیگیری طلب در دبی با من",
        intro: [
          "از اولین پیام تا اقدام حقوقی پنج قدم است و قدم اول ارزیابی است، نه دادگاه. کار وکیل پیگیری طلب در دبی از همین ارزیابی شروع می‌شود: پیش از اینکه هزینه‌ای بپذیرید، می‌دانید طلب شما قابل پیگیری هست یا نه.",
        ],
        steps: [
          {
            title: "ارسال خلاصه طلب",
            text: [
              "با رزرو آنلاین نوبت یا از فرم تماس، مبلغ، تاریخ سررسید، نام دقیق بدهکار و مدارکی را که دارید می‌فرستید. فهرست زیر را مبنا بگیرید.",
            ],
          },
          {
            title: "ارزیابی اولیه",
            text: [
              "دو چیز را جدا بررسی می‌کنم. اول اینکه طلب با این مدارک قابل اثبات است یا نه، دوم اینکه بدهکار در امارات دارایی یا فعالیت قابل پیگیری دارد یا نه. نتیجه را پیش از هر هزینه‌ای به شما می‌گویم، ولی این ارزیابی وعده وصول نیست.",
            ],
          },
          {
            title: "جلسه و انتخاب مسیر",
            text: [
              "در جلسه حضوری در دبی یا آنلاین، مسیر پیشنهادی و ریسک‌هایش را توضیح می‌دهم و هزینه کار را مکتوب دریافت می‌کنید.",
            ],
          },
          {
            title: "آماده‌سازی پرونده",
            text: ["مدارک مرتب می‌شود، ترجمه‌های لازم انجام می‌شود و وکالت‌نامه تنظیم می‌شود."],
          },
          {
            title: "اقدام حقوقی",
            text: [
              { t: "ltr", c: ["Legal Notice"] },
              "، درخواست ",
              { t: "ltr", c: ["Payment Order"] },
              "، پرونده اجرایی چک یا دعوا. پرونده را پیگیری و مدیریت می‌کنم و هر مرحله را برایتان شفاف‌سازی می‌کنم.",
            ],
          },
        ],
        docsTitle: ["چه مدارکی آماده کنید:"],
        docs: [
          { title: "سند طلب", text: ["فاکتور، قرارداد یا پیش‌فاکتور امضاشده، یا اصل چک برگشتی."] },
          {
            title: "سابقه پرداخت",
            text: ["رسید پرداخت‌های جزئی و صورت‌حسابی که مانده طلب را نشان می‌دهد."],
          },
          {
            title: "مکاتبات",
            text: [
              "ایمیل و پیام واتساپ با تاریخ، به‌خصوص پیامی که بدهکار در آن بدهی را پذیرفته است.",
            ],
          },
          {
            title: "مشخصات بدهکار",
            text: [
              "نام ثبتی شرکت، شماره ",
              { t: "ltr", c: ["Trade License"] },
              " (مجوز تجاری) و هر نشانی یا نام مدیری که می‌شناسید.",
            ],
          },
          {
            title: "حکم یا رأی",
            text: ["اگر دارید، نسخه کامل آن همراه سندی که قطعی بودنش را نشان می‌دهد."],
          },
        ],
      },
      {
        type: "band",
        label: "رزرو نوبت",
        text: [
          "لازم نیست همه مدارک کامل باشد. نوبت بگیرید تا طلب را با هم مرور کنیم، یا اول خلاصه آن را برای بررسی محرمانه بفرستید.",
        ],
        buttons: [
          { variant: "primary", href: "/legal-consultation-booking", label: "رزرو آنلاین نوبت" },
          { variant: "secondary", href: "/contact", label: "درخواست بررسی محرمانه پرونده" },
        ],
      },
      {
        type: "reasons",
        title: "چه زمانی پیگیری طلب منطقی نیست؟",
        intro: [
          [
            "وقتی هزینه و زمان پیگیری از مبلغی که احتمالاً وصول می‌شود بیشتر باشد. این را پیش از شروع کار به شما می‌گویم، چون پیگیری چنین طلبی فقط هزینه تازه می‌سازد.",
          ],
        ],
        items: [
          {
            title: "مدارک ناکافی",
            text: ["طلب فقط شفاهی است و هیچ پیام، رسید یا فاکتوری آن را تأیید نمی‌کند."],
          },
          {
            title: "بدهکار بدون دارایی شناخته‌شده",
            text: ["شرکت تعطیل شده یا هیچ دارایی و فعالیتی از بدهکار در امارات پیدا نمی‌شود."],
          },
          {
            title: "هزینه بیشتر از طلب",
            text: ["مبلغ طلب در برابر هزینه ترجمه، دادرسی و اجرا کوچک است."],
          },
          {
            title: "زمان زیادی گذشته",
            text: ["طلب سال‌ها پیش سررسید شده و ممکن است مهلت قانونی طرح آن گذشته باشد."],
          },
        ],
        note: ["شنیدن «نه» در جلسه اول هم نتیجه است: جلوی هزینه‌ای را می‌گیرد که برنمی‌گردد."],
      },
      {
        type: "boundary",
        title: "اگر موضوع شما فقط طلب نیست",
        intro: [
          "کار وکیل وصول مطالبات در دبی با طلبی است که مبلغش روشن است و بدهکار فقط پرداخت نمی‌کند. اگر موقعیت شما یکی از این دو است، صفحه دیگری به کارتان می‌آید.",
        ],
        listLabel: "موقعیت شما",
        items: [
          {
            text: [
              "طرف مقابل اصل تعهد یا مبلغ را قبول ندارد؛ مثلاً می‌گوید کالا معیوب بوده یا کار ناقص انجام شده.",
            ],
            link: [
              { t: "a", href: "/corporate-commercial-disputes", c: ["وکیل دعاوی تجاری در دبی"] },
            ],
          },
          { text: ["پای کلاهبرداری یا خیانت در امانت در میان است."], link: ["وکیل کیفری در دبی"] },
        ],
      },
      {
        type: "trust",
        imageAlt: "راحیل مصطفایی، مشاور حقوقی در دبی",
        title: "پرونده طلب شما را چه کسی بررسی می‌کند؟",
        intro: [
          "من، ",
          { t: "a", href: "/", c: ["راحیل مصطفایی"] },
          "، در دبی طلب‌هایی را پیگیری می‌کنم که پشتشان فاکتور، چک یا حکم است و طلبکارشان می‌خواهد هر قدم برایش روشن باشد. پیش از انتخاب وکیل وصول مطالبات در امارات، بررسی اعتبار حرفه‌ای را از شماره ثبت شروع کنید.",
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
              "هر مرحله پرونده را برایتان شفاف‌سازی می‌کنم و مضمون هر نامه رسمی را پیش از ارسال با شما مرور می‌کنم.",
            ],
          },
          { title: "دفتر", text: [{ t: "ltr", c: ["Business Bay"] }, " دبی، فقط با وقت قبلی."] },
          {
            title: "محرمانگی",
            text: [
              "مدارک شما فقط برای بررسی همین طلب استفاده می‌شود و فرستادن آن تعهدی برای شما ایجاد نمی‌کند.",
            ],
          },
          { title: "هزینه", text: ["بعد از بررسی مدارک و به‌صورت مکتوب تعیین می‌شود."] },
        ],
      },
      {
        type: "resources",
        title: "منابع و راهنماها",
        items: [
          [
            {
              t: "a",
              href: "/blog/uae-unpaid-invoice-legal-recovery-2026",
              c: ["فاکتور پرداخت‌نشده در امارات"],
            },
          ],
          [
            {
              t: "a",
              href: "/blog/uae-debt-recovery-without-contract",
              c: ["وصول طلب بدون قرارداد در امارات"],
            },
          ],
          [
            {
              t: "a",
              href: "/blog/iran-judgment-enforcement-uae",
              c: ["اجرای حکم دادگاه ایران در امارات"],
            },
          ],
          [
            {
              t: "a",
              href: "/blog/foreign-arbitral-award-enforcement-uae",
              c: ["اجرای رأی داوری خارجی در امارات"],
            },
          ],
          [{ t: "a", href: "/blog/precautionary-attachment-dubai", c: ["توقیف احتیاطی در دبی"] }],
        ],
      },
      {
        type: "faq",
        title: "سؤال‌های رایج درباره وصول مطالبات در دبی",
        items: [
          {
            question: "طلب را از ایران هم می‌شود پیگیری کرد؟",
            answer: [
              "در بسیاری از پرونده‌ها، بله. بررسی مدارک، جلسه مشاوره و گزارش مراحل آنلاین انجام می‌شود و معمولاً درخواست‌ها در دادگاه‌های امارات از راه سامانه‌های الکترونیکی ثبت می‌شود. پیش از شروع کار می‌گویم کدام قدم از ایران شدنی است. امضای وکالت‌نامه یا تأیید بعضی اسناد ممکن است اقدام حضوری یا تصدیق رسمی لازم داشته باشد.",
            ],
          },
          {
            question: "چک دارم ولی قرارداد ندارم؛ کافی است؟",
            answer: [
              "معمولاً برای شروع کافی است. قانون امارات چک برگشتی را سند لازم‌الاجرا می‌داند، پس برای اجرای آن لزوماً قرارداد جداگانه لازم نیست. با این حال اگر بدهکار بگوید چک بابت معامله دیگری بوده، فاکتور و پیام‌ها به کار می‌آیند. هیچ‌کدام را دور نریزید.",
            ],
          },
          {
            question: "هزینه از اول مشخص است؟",
            answer: [
              "هزینه بعد از بررسی مدارک و انتخاب مسیر تعیین می‌شود و آن را مکتوب دریافت می‌کنید. هزینه‌های دادگاه و ترجمه جدا از حق‌الزحمه من است و در همان برآورد جدا می‌آید. تا هزینه را نپذیرفته‌اید، کاری به حساب شما شروع نمی‌شود. در برآورد مکتوب، هر رقم کنار مرحله‌ای می‌آید که به آن مربوط است.",
            ],
          },
          {
            question: "از کجا بفهمم طلبم ارزش پیگیری دارد؟",
            answer: [
              "پیش از هر پیشنهادی، این‌ها را کنار هم می‌گذارم: قوت مدارک، اینکه بدهکار در امارات دارایی یا فعالیت قابل پیگیری دارد یا نه، و نسبت هزینه به مبلغ طلب. اگر نتیجه به نفع شما نباشد، همین را صریح می‌گویم. هیچ‌کس، از جمله هیچ وکیل وصول مطالبات در دبی، نمی‌تواند وصول طلب را از پیش تضمین کند.",
            ],
          },
          {
            question: "اگر از دارایی بدهکار خبر نداشته باشم چه؟",
            answer: [
              "پرونده لزوماً بسته نیست. بخشی از ارزیابی اولیه همین است که با اطلاعاتی که دارید، مثل نام ثبتی شرکت، مجوز تجاری و طرف‌های معامله بدهکار، ببینیم چه نشانه‌ای از دارایی او هست. اگر هیچ نشانه‌ای پیدا نشود، پیش از هر هزینه سنگین به شما می‌گویم.",
            ],
          },
          {
            question: "مدارکی که می‌فرستم محرمانه می‌ماند؟",
            answer: [
              "بله. مدارک و توضیحات شما فقط برای بررسی همین طلب استفاده می‌شود و بدون اجازه شما با بدهکار یا کس دیگری در میان گذاشته نمی‌شود. فرستادن مدارک به معنی شروع همکاری یا پذیرش هزینه نیست و پیش از تصمیم شما، تعهدی ایجاد نمی‌کند.",
            ],
          },
        ],
      },
      {
        type: "final",
        title: "طلب شما چقدر می‌تواند منتظر بماند؟",
        text: [
          "گذشت زمان معمولاً پیدا کردن مدارک و دارایی بدهکار را سخت‌تر می‌کند. اگر قرار است با وکیل وصول مطالبات در دبی مشورت کنید، هرچه زودتر مدارک مرور شود، انتخاب مسیر آسان‌تر است. خلاصه طلب را برای بررسی محرمانه بفرستید یا مستقیم نوبت بگیرید تا مسیر را با هم روشن کنیم.",
        ],
        buttons: [
          { variant: "primary", href: "/contact", label: "درخواست بررسی محرمانه پرونده" },
          { variant: "secondary", href: "/legal-consultation-booking", label: "رزرو آنلاین نوبت" },
        ],
        disclaimer: [
          "مطالب این صفحه اطلاع‌رسانی عمومی است و جای مشاوره درباره طلب مشخص شما را نمی‌گیرد. وصول هیچ طلبی تضمین نمی‌شود.",
        ],
      },
      {
        type: "more",
        title: "چه چیزی طلب را در امارات قابل وصول می‌کند؟",
        blocks: [
          {
            type: "p",
            c: [
              "سه چیز: سندی که طلب را ثابت کند، بدهکاری که دقیق شناسایی شده باشد و دارایی‌ای که حکم روی آن اجرا شود. اگر یکی از این سه کم باشد، کار وکیل وصول مطالبات در دبی اول پر کردن همان جای خالی است.",
            ],
          },
          { type: "h3", c: ["سندی که بدون توضیح شما حرف بزند"] },
          {
            type: "p",
            c: [
              "سند خوب مبلغ، سررسید و پذیرش بدهکار را نشان می‌دهد. ",
              {
                t: "a",
                href: "https://uaelegislation.gov.ae/en/legislations/1610/download",
                ext: true,
                c: ["قانون معاملات تجاری امارات"],
              },
              " (",
              { t: "ltr", c: ["Federal Decree-Law No. 50 of 2022"] },
              ") اثبات تعهد تجاری را، جز جایی که قانون چیز دیگری بگوید، با هر وسیله‌ای ممکن می‌داند، ولی وزن اسناد یکی نیست. در نتیجه، پیش از اولین اخطار، مدارک را به ترتیب تاریخ بچینید و قوی‌ترین سند را جدا کنید.",
            ],
          },
          { type: "h3", c: ["نام روی فاکتور همیشه نام ثبتی بدهکار نیست"] },
          {
            type: "p",
            c: [
              "بسیاری از شرکت‌های امارات با یک نام تجاری کار می‌کنند و نام ثبتی‌شان در ",
              { t: "ltr", c: ["Trade License"] },
              " چیز دیگری است. اخطار یا دعوا علیه نام اشتباه، به‌خصوص در شرکت‌های مناطق آزاد (",
              { t: "ltr", c: ["Free Zone"] },
              ") که مرجع ثبت جداگانه دارند، فقط وقت را هدر می‌دهد.",
            ],
          },
          { type: "h3", c: ["حکم بدون دارایی، کاغذ است"] },
          {
            type: "p",
            c: [
              "پیش از هزینه دادرسی باید روشن شود بدهکار در امارات چه دارد: فعالیت تجاری جاری، کالا، خودرو، سهم در شرکت یا طلب از مشتریان خودش. گاهی همین اطلاعات از لابه‌لای مدارک معامله پیدا می‌شود. من این سؤال را پیش از انتخاب مسیر می‌پرسم.",
            ],
          },
          { type: "h3", c: ["زمان و مهلت قانونی طلب"] },
          {
            type: "p",
            c: [
              "هر طلب برای طرح شدن مهلتی قانونی دارد که به نوع طلب و سند آن بستگی دارد و ممکن است برای چک با طلب تجاری عادی یکی نباشد. در نتیجه، اگر سررسید طلب مدتی است گذشته، بررسی مهلت آن را به ماه بعد موکول نکنید.",
            ],
          },
          { type: "h3", c: ["اشتباه‌هایی که وصول طلب را سخت می‌کند"] },
          {
            type: "p",
            c: ["این اشتباه‌ها بیشتر از سر اعتماد یا عجله پیش می‌آیند و جبرانشان بعداً سخت است."],
          },
          {
            type: "ul",
            items: [
              {
                title: "دل بستن به وعده بی‌تاریخ",
                text: [
                  "ماه‌ها منتظر ماندن با جمله «هفته بعد می‌پردازم» بدون اینکه وعده جایی مکتوب شود.",
                ],
              },
              {
                title: "توافق قسطی شفاهی",
                text: [
                  "قبول پرداخت قسطی بدون اینکه مبلغ کل و برنامه پرداخت در یک سند امضاشده بیاید.",
                ],
              },
              {
                title: "پس دادن اصل چک",
                text: ["برگرداندن چک به بدهکار در برابر قول پرداخت نقدی."],
              },
              {
                title: "تهدید زودهنگام",
                text: ["خبر دادن از شکایت پیش از اینکه دارایی بدهکار روشن شده باشد."],
              },
              {
                title: "پاک کردن پیام‌ها",
                text: ["حذف گفت‌وگوی واتساپ یا عوض کردن گوشی بدون پشتیبان‌گیری."],
              },
            ],
          },
          { type: "h3", c: ["یک موقعیت فرضی: چند محموله، یک چک"] },
          {
            type: "p",
            c: [
              "فرض کنید تأمین‌کننده‌ای ایرانی برای مشتری‌اش در دبی چند محموله فرستاده، بخشی از پول را گرفته و برای باقی آن یک چک و چند پیام وعده دارد. اینجا اول باید روشن شود چک کدام بخش طلب را پوشش می‌دهد و پیام‌ها مانده را تأیید می‌کنند یا نه، چون ممکن است مسیر چک و مسیر فاکتور جدا از هم جلو بروند.",
            ],
          },
        ],
        open: "مطالعه بیشتر",
        close: "بستن متن",
      },
    ],
    schema: {
      serviceType: "وصول مطالبات و بازیابی دارایی",
      audienceType:
        "طلبکاران ایرانی، اعم از تاجر، شرکت و فرد، که از شخص یا شرکتی در امارات طلب دارند",
      areaServed: "امارات متحده عربی",
    },
  },
  en: {
    hero: {
      breadcrumbLabel: "Breadcrumb",
      breadcrumb: [
        { name: "Home", href: "/en" },
        { name: "Legal Services in the UAE", href: "/en/services" },
        { name: "Debt and Asset Recovery" },
      ],
      kicker: "Invoices, cheques and judgments in the UAE",
      h1: "Debt Recovery and Asset Recovery Legal Services",
      subline: [
        "For creditors who know exactly what they are owed, and a UAE debtor who still hasn't paid.",
      ],
      lede: [
        "An overdue invoice, a returned cheque or an unenforced judgment: before you spend anything, you need to know whether the claim is recoverable in the UAE. As a debt recovery legal consultant in Dubai, I review your documents and what the debtor holds here in confidence, then tell you plainly what I find.",
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
        "One day each week, a ",
        { t: "glow", c: ["free consultation"] },
        " is set aside for Iranian clients who book in advance. The day is shown on the booking page.",
      ],
      imageAlt:
        "A legal consultant and a client in a Dubai office with dirham banknotes and a judge's gavel on the desk, representing debt recovery in the UAE",
    },
    sections: [
      {
        type: "cards",
        title: "Which debts can I help you recover?",
        intro: [
          "I help recover debts with a clear amount, owed by a person or company that operates, lives or holds assets in the UAE. If you are comparing options for debt recovery in Dubai, find your situation below first.",
        ],
        items: [
          {
            title: "Unpaid invoices",
            text: [
              "You delivered the goods or the service, the invoice is past due, and the buyer keeps promising to pay next week. A step-by-step guide is available in Persian: unpaid invoices in the UAE.",
            ],
          },
          {
            title: "Debts without a written contract",
            text: [
              "The deal ran on a pro forma invoice, emails and WhatsApp messages, and nothing was ever signed. That does not necessarily end the claim. Read more in Persian: recovering a debt without a contract in the UAE.",
            ],
          },
          {
            title: "Bounced cheques",
            text: [
              "You hold a cheque from a UAE debtor that was returned unpaid. The work starts with the cheque itself and the right enforcement route.",
            ],
          },
          {
            title: "Unenforced judgments and awards",
            text: [
              "A court judgment or arbitral award went your way, but the debtor has not paid and enforcement has to happen in the UAE.",
            ],
          },
          {
            title: "Recovering the debtor's assets",
            text: [
              "The debtor will not pay, and the question is what attachable assets they hold in the UAE and how to act before those assets move.",
            ],
          },
        ],
      },
      {
        type: "routes",
        title: "Which debt collection route in the UAE fits your claim?",
        intro: [
          [
            "Debt collection in the UAE runs through four main routes: negotiation with a Legal Notice, a Payment Order, direct enforcement of a cheque, and an ordinary lawsuit. The right one depends mostly on the document behind your claim.",
          ],
          [
            "A practical rule: the stronger the document, the shorter the route. Before anything is filed, I check which of the routes below fits your document.",
          ],
        ],
        items: [
          {
            title: ["Negotiation and a Legal Notice"],
            rows: [
              {
                label: "Suits you when",
                text: ["The debtor still responds, or the business relationship is worth keeping."],
              },
              {
                label: "What to know",
                text: [
                  "A Legal Notice is a formal written demand. It puts the amount and the deadline on record with a date, and it is often the first step even when the matter later goes to court.",
                ],
              },
            ],
          },
          {
            title: ["Payment Order"],
            rows: [
              {
                label: "Suits you when",
                text: [
                  "The debt is in writing, due, and for a fixed amount, such as an invoice the debtor has acknowledged.",
                ],
              },
              {
                label: "What to know",
                text: [
                  'A Payment Order (a "writ of debt" in the official English text) is issued by a judge on the strength of the written debt, without a full trial. Under the ',
                  {
                    t: "a",
                    href: "https://uaelegislation.gov.ae/en/legislations/1602/download",
                    ext: true,
                    c: ["UAE Civil Procedure Law"],
                  },
                  " (Federal Decree-Law No. 42 of 2022), the debtor must first receive a payment notice, and the debtor can object to an order once it is issued. Full conditions are in the Persian guide on unpaid invoices in the UAE.",
                ],
              },
            ],
          },
          {
            title: ["Direct enforcement of a cheque"],
            rows: [
              {
                label: "Suits you when",
                text: ["Your claim rests on a cheque that was returned unpaid."],
              },
              {
                label: "What to know",
                text: [
                  "UAE law treats a returned cheque as a writ of execution, meaning it can be enforced without a new lawsuit. That is why cheques sit outside the Payment Order procedure and go to the Execution Judge, the judge who supervises enforcement files.",
                ],
              },
            ],
          },
          {
            title: ["An ordinary lawsuit"],
            rows: [
              {
                label: "Suits you when",
                text: ["There is not enough in writing, or the debtor disputes the amount."],
              },
              {
                label: "What to know",
                text: [
                  "This route takes longer. If the debtor disputes the obligation itself, the matter is closer to a commercial dispute, covered further down this page.",
                ],
              },
            ],
          },
        ],
      },
      {
        type: "prose",
        title: "Judgment enforcement in the UAE",
        blocks: [
          {
            type: "p",
            c: [
              "A judgment or award in your favour is not yet money. A foreign court judgment is not enforced automatically: the Execution Judge reviews it and allows enforcement only if the legal conditions are met, such as finality, consistency with UAE public order and reciprocity. For Iranian judgments, see enforcing an Iranian court judgment in the UAE (in Persian).",
            ],
          },
          {
            type: "p",
            c: [
              "Foreign arbitral awards follow a separate track. The UAE has been party to the New York Convention on foreign arbitral awards since 2006 (see enforcing a foreign arbitral award in the UAE, in Persian). Getting an enforcement order is only half the job; the other half is knowing which of the debtor's assets it should reach.",
            ],
          },
        ],
      },
      {
        type: "prose",
        title: "Asset recovery in the UAE: attaching the debtor's property",
        blocks: [
          {
            type: "p",
            c: [
              "Asset recovery means identifying what the debtor owns and having it attached so the debt can be paid from it. A judgment with no assets behind it rarely turns into money, so I ask about assets on day one rather than after the judgment.",
            ],
          },
          {
            type: "p",
            c: [
              "Where there is a real risk that assets will be moved, the court can order precautionary measures before a final judgment. The conditions are set out in our Persian guide to precautionary attachment in Dubai. An application without solid evidence may be refused and the opportunity lost, so speed has to come with proof.",
            ],
          },
        ],
      },
      {
        type: "process",
        title: "How debt recovery in Dubai works with me",
        intro: [
          "Five steps from your first message to legal action, and the first one is an assessment, not a court filing. You will know whether your claim is realistic before you agree to any fee.",
        ],
        steps: [
          {
            title: "Send a summary",
            text: [
              "book an appointment online or use the contact form to share the amount, the due date, the debtor's exact name and whatever documents you have. Use the list below as a guide.",
            ],
          },
          {
            title: "Initial assessment",
            text: [
              "I look at two things separately. Can the debt be proved with these documents? Does the debtor have assets or activity in the UAE worth acting on? You hear the result before any fee is agreed, and it is an assessment, not a promise of recovery.",
            ],
          },
          {
            title: "Meeting and route",
            text: [
              "in person in Dubai or online, I explain the proposed route and its risks, and you receive the fee in writing.",
            ],
          },
          {
            title: "Preparing the file",
            text: [
              "documents are organised, the necessary translations are made and a power of attorney is prepared.",
            ],
          },
          {
            title: "Legal action",
            text: [
              "a Legal Notice, a Payment Order application, a cheque enforcement file or a lawsuit. I follow up and manage the case and report each stage to you.",
            ],
          },
        ],
        docsTitle: ["Documents to have ready:"],
        docs: [
          {
            title: "Proof of the debt",
            text: [
              "the invoice, the contract or signed pro forma, or the original returned cheque.",
            ],
          },
          {
            title: "Payment history",
            text: ["receipts for any partial payments and a statement showing the balance."],
          },
          {
            title: "Correspondence",
            text: [
              "dated emails and WhatsApp messages, especially any in which the debtor acknowledges the debt.",
            ],
          },
          {
            title: "Debtor details",
            text: [
              "the registered company name, the Trade License number and any address or manager's name you know.",
            ],
          },
          {
            title: "Judgment or award",
            text: ["if you have one, the full copy and anything showing it is final."],
          },
        ],
      },
      {
        type: "band",
        label: "Book an appointment",
        text: [
          "Your file does not need to be complete. Book a meeting to go through the claim together, or send a summary first for a confidential review.",
        ],
        buttons: [
          {
            variant: "primary",
            href: "/en/legal-consultation-booking",
            label: "Book an appointment online",
          },
          {
            variant: "secondary",
            href: "/en/contact",
            label: "Request a confidential case review",
          },
        ],
      },
      {
        type: "reasons",
        title: "When is pursuing a debt not worth it?",
        intro: [
          [
            "When the cost and time of pursuing it are likely to exceed what can realistically be recovered. I will tell you that before any work starts, because a claim that costs more than it returns does not improve with a better route.",
          ],
        ],
        items: [
          {
            title: "Too little evidence",
            text: [
              "The debt was agreed only verbally, and no message, receipt or invoice confirms it.",
            ],
          },
          {
            title: "No known assets",
            text: [
              "The company has closed, or no assets or activity of the debtor can be found in the UAE.",
            ],
          },
          {
            title: "Costs above the claim",
            text: [
              "The amount owed is small compared with translation, court and enforcement costs.",
            ],
          },
          {
            title: "Too much time has passed",
            text: [
              "The debt fell due years ago and the legal time limit for bringing it may have run out.",
            ],
          },
        ],
        note: [
          'Hearing "no" at the first meeting is also a result: it saves money you would not get back.',
        ],
      },
      {
        type: "boundary",
        title: "If your matter is more than an unpaid debt",
        intro: [
          "This page is for a debt with a clear amount that the debtor simply does not pay. If your situation is one of the two below, a different page will serve you better.",
        ],
        listLabel: "Your situation",
        items: [
          {
            text: [
              "The other side disputes the obligation or the amount, for example by claiming the goods were defective.",
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
            text: ["The matter involves fraud or breach of trust."],
            link: ["Financial crimes legal consultant in Dubai"],
          },
        ],
      },
      {
        type: "trust",
        imageAlt: "Rahil Mostafaei, Legal Consultant in Dubai",
        title: "Who reviews your claim?",
        intro: [
          "I am ",
          { t: "a", href: "/en", c: ["Rahil Mostafaei"] },
          ", and in Dubai I work on claims backed by an invoice, a cheque or a judgment, for creditors who want every step made clear. Before you choose a debt recovery legal consultant in Dubai, start by checking my registration.",
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
            title: "Firm on the registration",
            text: ["Lutfi & Company Advocates & Legal Consultants."],
          },
          {
            title: "Clarity",
            text: [
              "I explain each stage of the case and go through every formal letter with you before it is sent.",
            ],
          },
          { title: "Office", text: ["Business Bay, Dubai, by appointment only."] },
          {
            title: "Confidentiality",
            text: [
              "your documents are used only to review this claim, and sending them commits you to nothing.",
            ],
          },
          { title: "Fees", text: ["set in writing after your documents have been reviewed."] },
        ],
      },
      {
        type: "faq",
        title: "Questions about debt recovery in Dubai",
        items: [
          {
            question: "Can I pursue the debt from outside the UAE?",
            answer: [
              "In many cases, yes. Document review, the consultation and progress reports can all happen online, and many filings with UAE courts are made through electronic systems. Before we start, I will tell you which steps can be handled remotely. Signing a power of attorney or certifying some documents may still require an in-person step or formal attestation.",
            ],
          },
          {
            question: "I have a cheque but no contract. Is that enough?",
            answer: [
              "To get started, usually yes. UAE law treats a returned cheque as a writ of execution, so enforcing a returned cheque does not necessarily require a separate contract. If the debtor claims the cheque was for a different deal, your invoices and messages become important, so keep all of them.",
            ],
          },
          {
            question: "Will I know the cost from the start?",
            answer: [
              "The fee is set after I have reviewed your documents and we have chosen a route, and you receive it in writing. Court and translation costs are separate from my fee and are listed separately in the same estimate. No work is charged to you until you have accepted the fee.",
            ],
          },
          {
            question: "How do I know whether my claim is worth pursuing?",
            answer: [
              "Before suggesting anything, I weigh the strength of your documents, whether the debtor has assets or activity in the UAE worth pursuing, and the cost compared with the amount owed. If the answer is not in your favour, I will say so directly. Nobody, whether a debt recovery lawyer in the UAE or a legal consultant, can guarantee recovery in advance.",
            ],
          },
          {
            question: "What if I don't know what assets the debtor has?",
            answer: [
              "That does not necessarily close the file. Part of the initial assessment is using what you already know, such as the registered company name, the trade licence and the debtor's own trading partners, to look for signs of assets. If nothing turns up, I will tell you before any significant cost is incurred.",
            ],
          },
          {
            question: "Will my documents stay confidential?",
            answer: [
              "Yes. Your documents and explanations are used only to review this claim and are not shared with the debtor or anyone else without your permission. Sending them does not start an engagement or commit you to any fee, and nothing is decided until you have heard my assessment.",
            ],
          },
        ],
      },
      {
        type: "final",
        title: "How long can your claim wait?",
        text: [
          "Time usually makes documents and the debtor's assets harder to find. If you plan to speak with a debt recovery legal consultant in Dubai, the earlier your documents are reviewed, the easier the choice of route. Send a summary for confidential review, or book a meeting directly.",
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
          "This page is general information and does not replace advice on your specific claim. Recovery of any debt cannot be guaranteed.",
        ],
      },
      {
        type: "more",
        title: "What makes a debt recoverable in the UAE?",
        blocks: [
          {
            type: "p",
            c: [
              "Three things: a document that proves the debt, a debtor who has been identified precisely, and assets a judgment can reach. If one of the three is missing, the first job of a debt recovery legal consultant in Dubai is to fill that gap.",
            ],
          },
          { type: "h3", c: ["A document that speaks for itself"] },
          {
            type: "p",
            c: [
              "The ",
              {
                t: "a",
                href: "https://uaelegislation.gov.ae/en/legislations/1610/download",
                ext: true,
                c: ["UAE Commercial Transactions Law"],
              },
              " (Federal Decree-Law No. 50 of 2022) allows commercial obligations to be proved by any means unless the law provides otherwise, but not every document carries the same weight. So, before the first demand, put your documents in date order and pick out the strongest one.",
            ],
          },
          { type: "h3", c: ["The name on the invoice is not always the registered name"] },
          {
            type: "p",
            c: [
              "Many UAE businesses trade under a brand name that differs from the name on their Trade License. A demand or claim against the wrong entity, especially a free zone company registered with its own authority, simply wastes time.",
            ],
          },
          { type: "h3", c: ["A judgment without assets is paper"] },
          {
            type: "p",
            c: [
              "Before spending on litigation, it helps to know what the debtor has in the UAE: an active business, stock, vehicles, shares in a company, or money owed to them by their own customers. Sometimes those clues are already in the transaction documents.",
            ],
          },
          { type: "h3", c: ["Time limits"] },
          {
            type: "p",
            c: [
              "Every claim has a legal time limit that depends on the type of debt and the document behind it, and the limit for a cheque may differ from that for an ordinary commercial debt. If the due date passed a while ago, do not leave checking the deadline until next month.",
            ],
          },
          { type: "h3", c: ["Mistakes that make recovery harder"] },
          {
            type: "p",
            c: ["Most of these come from trust or haste, and they are hard to undo later."],
          },
          {
            type: "ul",
            items: [
              {
                title: "Waiting on open-ended promises",
                text: [
                  'months of "I\'ll pay next week" without the promise ever being put in writing.',
                ],
              },
              {
                title: "Verbal instalment deals",
                text: [
                  "agreeing to instalments without the total and the schedule in a signed document.",
                ],
              },
              {
                title: "Handing back the original cheque",
                text: ["returning it to the debtor in exchange for a promise of cash."],
              },
              {
                title: "Threatening before planning",
                text: ["announcing legal action before the debtor's assets are known."],
              },
              {
                title: "Deleting messages",
                text: ["clearing WhatsApp chats or changing phones without a backup."],
              },
            ],
          },
          { type: "h3", c: ["A hypothetical case: several shipments, one cheque"] },
          {
            type: "p",
            c: [
              "Suppose a supplier has sent several shipments to a customer in Dubai, received part of the price, and holds a cheque and a few messages promising the rest. The first question is which part of the debt the cheque covers and whether the messages confirm the balance, because the cheque and the invoices may need to follow separate routes.",
            ],
          },
        ],
        open: "Read more",
        close: "Show less",
      },
    ],
    schema: {
      serviceType: "Debt recovery and asset recovery",
      audienceType:
        "Creditors with ties to Iran, including traders, companies and individuals, who are owed money by a person or company in the UAE",
      areaServed: "United Arab Emirates",
    },
  },
};
