import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fa";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.practice": "Practice",
  "nav.international": "International",
  "nav.firm": "Firm",
  "nav.insights": "Insights",
  "nav.contact": "Contact",
  "nav.book": "Book Consultation",
  "nav.cta": "Confidential Consultation",
  "nav.login": "Sign in",
  "nav.account": "Account",
  "nav.logout": "Sign out",
  "tag.legal": "Legal Counsel · Dubai",

  "book.title": "Book a Confidential Consultation",
  "book.subtitle": "Select a service, choose a time and secure your slot with instant payment.",
  "book.step.service": "Choose service",
  "book.step.time": "Pick a time",
  "book.step.details": "Your details",
  "book.step.pay": "Payment",
  "book.duration": "min",
  "book.aed": "AED",
  "book.choose": "Choose",
  "book.selected": "Selected",
  "book.no_slots": "No available slots on this day. Please pick another date.",
  "book.next": "Continue",
  "book.back": "Back",
  "book.guest": "Continue as guest",
  "book.signin": "Sign in to book",
  "book.signup": "Create an account",
  "book.full_name": "Full name",
  "book.email": "Email",
  "book.phone": "Phone (incl. country code)",
  "book.notes": "Brief description of your matter (optional)",
  "book.confirm_pay": "Confirm & Pay",
  "book.processing": "Processing…",
  "book.summary": "Booking summary",
  "book.success.title": "Booking confirmed",
  "book.success.body":
    "A confirmation has been sent to your email. Rahil's office will reach out before the session.",
  "book.return": "Return home",
  "book.test_mode": "All payments are in test mode in the preview.",
  "book.emergency": "Emergency line",

  "auth.login.title": "Client Sign In",
  "auth.signup.title": "Create Account",
  "auth.email": "Email",
  "auth.password": "Password",
  "auth.full_name": "Full name",
  "auth.submit_login": "Sign in",
  "auth.submit_signup": "Create account",
  "auth.no_account": "No account?",
  "auth.have_account": "Already have an account?",
  "auth.signup_link": "Create one",
  "auth.login_link": "Sign in",
  "auth.error": "Authentication error",

  "admin.title": "Practice Console",
  "admin.bookings": "Bookings",
  "admin.client": "Client",
  "admin.service": "Service",
  "admin.when": "When",
  "admin.status": "Status",
  "admin.payment": "Payment",
  "admin.actions": "Actions",
  "admin.confirm": "Confirm",
  "admin.complete": "Mark complete",
  "admin.cancel": "Cancel",
  "admin.no_access": "Restricted to firm administrators.",

  "splash.tag": "Legal Counsel · Dubai",
  "splash.name.first": "Rahil",
  "splash.name.last": "Mostafaee",
  "book.brand_tag": "Rahil Mostafaee · Dubai",

  "footer.role": "Strategic Legal Counsel",
  "footer.blurb":
    "Discreet, cross-border legal representation for high-value Iranian clients in Dubai and across international jurisdictions.",
  "footer.langs": "فارسی · English · العربية",
  "footer.col.practice": "Practice",
  "footer.col.firm": "Firm",
  "footer.col.office": "Office",
  "footer.link.cross": "Cross-Border",
  "footer.link.residency": "Residency & Visas",
  "footer.link.corporate": "Corporate",
  "footer.link.realestate": "Real Estate",
  "footer.link.wills": "DIFC Wills",
  "footer.link.about": "About",
  "footer.link.intl": "International",
  "footer.link.insights": "Insights",
  "footer.link.contact": "Contact",
  "footer.office.area": "Business Bay",
  "footer.office.city": "Dubai, UAE",
  "footer.office.byappt": "By appointment only",
  "footer.copyright": "All matters held in strict confidence.",
  "footer.privileged": "Privileged & Confidential",

  // ===== Home page =====
  "home.hero.h1.a": "Strategic ",
  "home.hero.h1.b": "Legal",
  "home.hero.h1.c": "Protection.",
  "home.hero.h1.d": "Without compromise.",
  "home.hero.rotate.1": "Legal",
  "home.hero.rotate.2": "Discreet",
  "home.hero.rotate.3": "Decisive",
  "home.hero.rotate.4": "Borderless",
  "home.hero.name.first": "Rahil",
  "home.hero.name.last": "Mostafaee",
  "home.hero.cta.book": "Book Confidential Consultation",
  "home.hero.cta.emergency": "Emergency Legal Line",
  "home.hero.stat.years": "Years Practice",
  "home.hero.stat.mandates": "HNW Mandates",
  "home.hero.stat.sla": "Response SLA",
  "home.hero.stat.langs": "Languages",

  "home.pillars.discretion.t": "Discretion",
  "home.pillars.discretion.b": "Every matter handled under absolute confidentiality protocols.",
  "home.pillars.intl.t": "International",
  "home.pillars.intl.b": "Coordinated counsel across UAE, EU, UK and Iran jurisdictions.",
  "home.pillars.elite.t": "Elite Access",
  "home.pillars.elite.b": "Trusted advisor to investors, family offices and executives.",
  "home.pillars.protect.t": "Protection-First",
  "home.pillars.protect.b": "Strategy designed to insulate assets, mobility and reputation.",

  "home.practice.kicker": "Practice Areas",
  "home.practice.h2.a": "High-stakes counsel,",
  "home.practice.h2.b": "precisely engineered.",
  "home.practice.viewAll": "View Full Practice",
  "home.practice.1.t": "Cross-Border & International",
  "home.practice.1.b":
    "Multi-jurisdiction strategy, asset protection, international coordination, travel restriction advisory and reputation-sensitive matters.",
  "home.practice.1.tag1": "Asset Protection",
  "home.practice.1.tag2": "International Coordination",
  "home.practice.1.tag3": "Compliance Defense",
  "home.practice.2.t": "UAE Residency & Golden Visa",
  "home.practice.2.b":
    "End-to-end Golden Visa structuring, residency reinstatement, entry restriction defense and high-stakes immigration advisory.",
  "home.practice.2.tag1": "Golden Visa",
  "home.practice.2.tag2": "Residency",
  "home.practice.2.tag3": "Immigration",
  "home.practice.3.t": "Corporate & Commercial",
  "home.practice.3.b":
    "Free zone formation, shareholder agreements, commercial litigation and corporate restructuring for cross-border operators.",
  "home.practice.3.tag1": "Formation",
  "home.practice.3.tag2": "Litigation",
  "home.practice.3.tag3": "Restructuring",
  "home.practice.4.t": "Real Estate & Investment",
  "home.practice.4.b":
    "Dubai property advisory, investor protection, fraud prevention and high-value transaction review across the emirate.",
  "home.practice.4.tag1": "Property",
  "home.practice.4.tag2": "Transactions",
  "home.practice.4.tag3": "Disputes",
  "home.practice.5.t": "Family & Wealth Protection",
  "home.practice.5.b":
    "DIFC wills, succession planning, family office counsel and structured wealth protection for multi-generational families.",
  "home.practice.5.tag1": "DIFC Wills",
  "home.practice.5.tag2": "Succession",
  "home.practice.5.tag3": "Family Office",
  "home.practice.6.t": "Crisis & Sensitive Matters",
  "home.practice.6.b":
    "Emergency response, financial freeze remediation, regulatory investigations and confidential representation at the highest level.",
  "home.practice.6.tag1": "Emergency",
  "home.practice.6.tag2": "Investigations",
  "home.practice.6.tag3": "Confidential",

  "home.intl.kicker": "International Desk",
  "home.intl.h2.a": "Sensitive matters,",
  "home.intl.h2.b": "handled at altitude.",
  "home.intl.body":
    "For clients facing international legal exposure — travel restrictions, cross-border investigations, financial freezes or reputation-sensitive inquiries — we coordinate calm, decisive response across jurisdictions. All work conducted under privileged communication and executive-level discretion.",
  "home.intl.cta": "International Coordination",
  "home.intl.s1": "International Notice Advisory",
  "home.intl.s2": "Travel Restriction Strategy",
  "home.intl.s3": "Cross-Border Coordination",
  "home.intl.s4": "Reputation-Sensitive Defense",
  "home.intl.s5": "Asset Freeze Response",
  "home.intl.s6": "Urgent International Counsel",

  "home.atelier.kicker": "Portrait",
  "home.atelier.h2.a": "Presence,",
  "home.atelier.h2.b": "poise, precision.",
  "home.atelier.body":
    "A practice defined by discipline and discretion — and a personal standard that mirrors the matters entrusted to it.",
  "home.atelier.1.l": "In Chambers",
  "home.atelier.1.c": "Private counsel, DIFC",
  "home.atelier.2.l": "The Founder",
  "home.atelier.2.c": "Strategic Legal Counsel",
  "home.atelier.3.l": "Off the Record",
  "home.atelier.3.c": "Personal · Private",

  "home.platform.kicker": "Client Platform",
  "home.platform.h2.a": "A private platform",
  "home.platform.h2.b": "for serious matters.",
  "home.platform.body":
    "A modern, end-to-end legal experience — secure portal, encrypted document exchange, scheduled video advisory, and integrated billing. Built like a private bank, not a law firm.",
  "home.platform.menu.1": "Overview",
  "home.platform.menu.2": "Active Matters",
  "home.platform.menu.3": "Documents",
  "home.platform.menu.4": "Schedule",
  "home.platform.menu.5": "Invoices",
  "home.platform.menu.6": "Secure Chat",
  "home.platform.activeMatter": "Active Matter",
  "home.platform.matterTitle": "Cross-Border Asset Restructuring",
  "home.platform.inProgress": "In Progress",
  "home.platform.stage": "Stage",
  "home.platform.stageVal": "Structuring",
  "home.platform.lead": "Lead Counsel",
  "home.platform.leadVal": "R. Mostafaee",
  "home.platform.next": "Next Review",
  "home.platform.nextVal": "12 Mar",
  "home.platform.task1": "Initial Strategy Memo",
  "home.platform.task1s": "Reviewed",
  "home.platform.task2": "Jurisdictional Mapping",
  "home.platform.task2s": "Drafting",
  "home.platform.task3": "Trustee Onboarding",
  "home.platform.task3s": "Pending",
  "home.platform.encrypted": "Encrypted",
  "home.platform.e2e": "End-to-end",

  "home.process.h2.a": "Four steps to",
  "home.process.h2.b": "engaged counsel.",
  "home.process.body":
    "A clear, considered path from first contact to active representation. No friction, no surprises.",
  "home.process.s1.t": "Choose a package",
  "home.process.s1.b":
    "Pick the consultation format that fits your matter — standard, strategic, emergency or international.",
  "home.process.s2.t": "Pick a time",
  "home.process.s2.b":
    "See live availability across DIFC office hours and reserve a confidential slot in seconds.",
  "home.process.s3.t": "Secure payment",
  "home.process.s3.b":
    "Pay through encrypted Stripe checkout. Your details are protected by privilege from the first message.",
  "home.process.s4.t": "Confidential consultation",
  "home.process.s4.b":
    "Meet Rahil in person at DIFC or via secure video. Receive a written follow-up within 48 hours.",
  "home.process.cta": "Start now",

  "home.ig.kicker": "Instagram",
  "home.ig.h2.a": "Behind the",
  "home.ig.h2.b": "practice.",
  "home.ig.body":
    "Insights, courtroom notes and a glimpse of life between Dubai and Tehran. Follow for occasional, considered updates.",
  "home.ig.handle": "@rahil.mostafaee",
  "home.ig.cta": "Follow on Instagram",

  "fab.whatsapp.label": "WhatsApp",
  "fab.whatsapp.aria": "Message Rahil's office on WhatsApp",
  "fab.whatsapp.msg": "Hello, I would like to enquire about a confidential consultation.",

  "home.founder.langsLabel": "Languages",
  "home.founder.kicker": "Counsel",
  "home.founder.role": "Founder · Strategic Legal Counsel",
  "home.founder.body":
    "An Iranian advocate based in Dubai advising investors, entrepreneurs and high-net-worth families on cross-border legal strategy. Known for a calm, structured approach to complex matters — and an obsession with protecting client interests across borders, generations and jurisdictions.",
  "home.founder.philT": "Practice Philosophy",
  "home.founder.philB":
    "Protection over performance. Strategy over volume. Relationships over transactions.",
  "home.founder.postT": "Client Posture",
  "home.founder.postB":
    "Selective representation. Long-term advisory relationships. Absolute discretion.",

  "home.trust.h2.a": "Trusted across",
  "home.trust.h2.b": "four jurisdictions.",
  "home.trust.difc": "Wills & Probate Registered",
  "home.trust.uae": "Federal & Emirate Practice",
  "home.trust.eu": "Coordinated Counsel",
  "home.trust.ir": "Domestic Liaison Network",

  "home.cta.h2.a": "When the matter is",
  "home.cta.h2.b": "consequential,",
  "home.cta.h2.c": "the counsel must be",
  "home.cta.h2.d": "considered.",
  "home.cta.book": "Book Consultation",
  "home.cta.direct": "Direct Line",

  "home.pkg.kicker": "Consultation Packages",
  "home.pkg.h2.a": "Engage with",
  "home.pkg.h2.b": "clarity & precision.",
  "home.pkg.body":
    "Transparent, fixed-fee consultations. Choose the format that matches your matter — confirm online in minutes.",
  "home.pkg.aed": "AED",
  "home.pkg.min": "min",
  "home.pkg.popular": "Most chosen",
  "home.pkg.urgent": "Priority",
  "home.pkg.reserve": "Reserve",
  "home.pkg.viewAll": "Compare all options & availability",
  "home.pkg.feat.confidential": "Strict privilege & confidentiality",
  "home.pkg.feat.followup": "Written follow-up within 48h",
  "home.pkg.feat.summary": "Memo summary of recommendations",
  "home.pkg.feat.deepdive": "In-depth review of your matter",
  "home.pkg.feat.roadmap": "Tailored legal roadmap",
  "home.pkg.feat.priority": "Priority response from counsel",
  "home.pkg.feat.sameday": "Same-day response, 24/7",
  "home.pkg.feat.directline": "Direct line to lead counsel",
  "home.pkg.feat.multijuris": "Multi-jurisdiction coverage",
  "home.pkg.feat.intake": "Comprehensive matter intake",

  // Services page
  "svc.kicker": "Services Hub",
  "svc.h1": "Legal Services for Commercial Disputes and Asset Recovery in the UAE",
  "svc.intro":
    "If your money, receivables, investment, contract, or business relationship in the UAE has become disputed, this page outlines our core legal service paths for Iran-UAE commercial disputes, debt recovery, partner disputes, and asset recovery.",
  "svc.hero.primary": "Request Confidential Case Review",
  "svc.hero.secondary": "Contact via WhatsApp",
  "svc.whatsapp.msg":
    "Hello, I would like a confidential review of a UAE-related commercial dispute or asset recovery matter.",
  "svc.axes.kicker": "Core Focus",
  "svc.axes.h2": "Our services focus on two core axes",
  "svc.axes.1.t": "Iran-UAE Commercial Disputes",
  "svc.axes.1.b":
    "Matters arising from breached contracts, incomplete transactions, buyer or seller disputes, agency, shipping, distribution, or commercial relationships between Iran and the UAE.",
  "svc.axes.2.t": "Asset Recovery and Debt Collection",
  "svc.axes.2.b":
    "Matters where money, receivables, investment, assets, or financial rights are stuck in the UAE and require legal review, negotiation, notice, urgent action, or recovery follow-up.",
  "svc.pillars.kicker": "Service Pillars",
  "svc.pillars.h2": "Specialized Services",
  "svc.typical": "Typical matters",
  "svc.card.link": "Start review",
  "svc.card.1.t": "Commercial Disputes",
  "svc.card.1.b":
    "Review and handling of disputes arising from contracts, trade, supply, agency, distribution, shipping, and unperformed commercial obligations in the UAE.",
  "svc.card.1.m1": "Breach of contract",
  "svc.card.1.m2": "Buyer or seller disputes",
  "svc.card.1.m3": "Supplier disputes",
  "svc.card.1.m4": "Commercial claims",
  "svc.card.2.t": "Asset Recovery",
  "svc.card.2.b":
    "Legal route review for tracing, preserving, and pursuing assets or funds affected by failed investments, suspected fraud, or an unresponsive counterparty.",
  "svc.card.2.m1": "Asset tracing",
  "svc.card.2.m2": "Fraud recovery",
  "svc.card.2.m3": "Failed investment",
  "svc.card.2.m4": "Urgent action review",
  "svc.card.3.t": "Debt Recovery",
  "svc.card.3.b":
    "Follow-up on commercial receivables, unpaid invoices, company debts, and stuck funds through negotiation, formal notice, litigation, or enforcement where applicable.",
  "svc.card.3.m1": "Unpaid invoices",
  "svc.card.3.m2": "Commercial debts",
  "svc.card.3.m3": "Claims against UAE companies",
  "svc.card.3.m4": "Settlement or enforcement",
  "svc.card.4.t": "Partner Disputes",
  "svc.card.4.b":
    "Review of disputes between partners, shareholders, or managers in UAE companies, especially where access, accounts, assets, or control are affected.",
  "svc.card.4.m1": "Unauthorized withdrawals",
  "svc.card.4.m2": "Blocked accounts",
  "svc.card.4.m3": "Loss of access",
  "svc.card.4.m4": "Management disputes",
  "svc.card.5.t": "Iran-UAE Contracts and Cross-Border Matters",
  "svc.card.5.b":
    "Analysis of contracts, jurisdiction, governing law, enforcement path, and legal risk in commercial relationships between Iran and the UAE.",
  "svc.card.5.m1": "Cross-border contracts",
  "svc.card.5.m2": "Enforcement ambiguity",
  "svc.card.5.m3": "Governing law",
  "svc.card.5.m4": "Performance of obligations",
  "svc.who.kicker": "Who We Help",
  "svc.who.h2": "Who these services are for",
  "svc.who.1": "Importers and exporters",
  "svc.who.2": "Iranian investors in the UAE",
  "svc.who.3": "SME owners",
  "svc.who.4": "Founders and business partners",
  "svc.who.5": "Companies with receivables from UAE counterparties",
  "svc.who.6": "Individuals whose money or assets are stuck in the UAE",
  "svc.docs.kicker": "Initial Documents",
  "svc.docs.h2": "Documents usually needed for initial review",
  "svc.docs.body":
    "For an initial assessment, these materials usually help clarify the available legal route:",
  "svc.docs.1": "Contract or agreement",
  "svc.docs.2": "Invoices, payment proof, or statement of account",
  "svc.docs.3": "WhatsApp, email, or message communications",
  "svc.docs.4": "Counterparty individual or company details",
  "svc.docs.5": "Payment, delivery, or service-performance records",
  "svc.docs.6": "Timeline summary and approximate disputed amount",
  "svc.process.kicker": "Process",
  "svc.process.h2": "How the process works",
  "svc.process.1": "Submit matter summary",
  "svc.process.2": "Review documents and disputed amount",
  "svc.process.3": "Assess the suitable legal route",
  "svc.process.4": "Negotiate, send notice, take urgent action, or litigate",
  "svc.process.5": "Follow up and report toward the available outcome",
  "svc.faq.kicker": "FAQ",
  "svc.faq.h2": "Frequently Asked Questions About Services",
  "svc.faq.1.q": "Do we need a written contract first?",
  "svc.faq.1.a":
    "A contract is helpful, but in some matters invoices, payment proof, communications, delivery records, or the commercial conduct of the parties may also be important for initial review.",
  "svc.faq.2.q": "What if the counterparty is a UAE company?",
  "svc.faq.2.a":
    "The company details, license, address, managers, contract, and payment evidence are reviewed to determine the appropriate legal route.",
  "svc.faq.3.q": "Is debt recovery or asset recovery guaranteed?",
  "svc.faq.3.a":
    "No legal outcome is guaranteed. However, the recovery path, evidence quality, counterparty position, and available actions can be reviewed.",
  "svc.faq.4.q": "Can the process start from Iran?",
  "svc.faq.4.a":
    "In many cases, initial document review and legal route assessment can begin remotely. Formal action depends on the specific matter.",
  "svc.faq.5.q": "When is urgent action needed?",
  "svc.faq.5.a":
    "If funds have moved, the counterparty is unresponsive, evidence is at risk, access is blocked, or assets may be transferred, delay can increase risk.",
  "svc.cta.title": "Submit the initial details for legal route review",
  "svc.cta.body":
    "Send a short summary of the matter, approximate disputed amount, counterparty, and available documents. Receiving a message does not create representation; the matter must first be reviewed.",
  "svc.cta.primary": "Submit Matter for Review",
  "svc.cta.secondary": "Message on WhatsApp",

  // International page
  "intl.kicker": "International Desk",
  "intl.h1.a": "Sensitive matters,",
  "intl.h1.b": "handled at altitude.",
  "intl.intro":
    "For clients exposed to multi-jurisdictional risk, we operate as a single point of coordination — calm, privileged and decisive.",
  "intl.c1.t": "International Coordination",
  "intl.c1.b": "Multi-jurisdiction representation across UAE, EU, UK, and liaison desks beyond.",
  "intl.c2.t": "Mobility Protection",
  "intl.c2.b": "Travel restriction strategy, entry advisory, and proactive mobility planning.",
  "intl.c3.t": "Reputation Defense",
  "intl.c3.b": "Discreet response to inquiries with executive-level confidentiality.",
  "intl.flow.title": "A typical engagement.",
  "intl.flow.s1.t": "Confidential Intake",
  "intl.flow.s1.b": "Privileged conversation with the principal. Scope and exposure assessed.",
  "intl.flow.s2.t": "Jurisdictional Mapping",
  "intl.flow.s2.b": "Coordinate with international counsel; map active and dormant risk.",
  "intl.flow.s3.t": "Strategy Memorandum",
  "intl.flow.s3.b": "Written, privileged plan with prioritised actions and contingencies.",
  "intl.flow.s4.t": "Execution & Coordination",
  "intl.flow.s4.b": "Counsel, regulators and stakeholders engaged through a single channel.",
  "intl.flow.s5.t": "Containment & Closure",
  "intl.flow.s5.b": "Matter resolved, containment confirmed, ongoing watch protocols installed.",
  "intl.cta.title": "Speak privately.",
  "intl.cta.btn": "Initiate Confidential Engagement",

  // About page
  "about.kicker": "The Firm",
  "about.h1.a": "A boutique built for",
  "about.h1.b": "consequential matters.",
  "about.intro":
    "Rahil Mostafaee Legal is a private advisory practice serving a select roster of Iranian investors, founders and families in the United Arab Emirates and abroad. The firm exists for one reason: to provide discreet, structured and decisively executed legal counsel where the stakes are personal.",
  "about.v1.t": "Discretion",
  "about.v1.b":
    "All engagements operate under absolute confidentiality. Names, matters and outcomes remain privileged — always.",
  "about.v2.t": "Selectivity",
  "about.v2.b":
    "Representation is by referral and review. We work with a small number of clients to deliver an outsized standard of attention.",
  "about.v3.t": "Coordination",
  "about.v3.b":
    "An international network of trusted co-counsel, family offices and advisors — coordinated through one channel.",
  "about.manifesto.kicker": "Manifesto",
  "about.manifesto.q1": "“We do not measure a representation by what was filed, but by what was",
  "about.manifesto.q2": "protected",
  "about.manifesto.q3":
    ". The best legal work is the one the client never has to see — quiet, structured, and decisively final.”",
  "about.cta.title": "Begin a conversation.",
  "about.cta.btn": "Request Consultation",

  // Insights page
  "ins.kicker": "Insights",
  "ins.h1.a": "Legal intelligence,",
  "ins.h1.b": "briefly stated.",
  "ins.intro":
    "Periodic briefings on UAE residency, DIFC wills, real estate, corporate structure and cross-border strategy.",
  "ins.read": "Read briefing",
  "ins.cta.title": "Private briefings, by request.",
  "ins.cta.body":
    "A short monthly note for clients on regulatory and structural shifts in the UAE.",
  "ins.cta.btn": "Request Access",
  "ins.cat.residency": "Residency",
  "ins.cat.wills": "Wills",
  "ins.cat.property": "Property",
  "ins.cat.corporate": "Corporate",
  "ins.cat.international": "International",
  "ins.cat.wealth": "Wealth",
  "ins.p1.date": "Mar 2025",
  "ins.p1.title": "Golden Visa Pathways for Iranian Investors in 2025",
  "ins.p1.excerpt":
    "An overview of the qualifying investment routes, residency renewals, and the structural choices that determine long-term mobility.",
  "ins.p2.date": "Feb 2025",
  "ins.p2.title": "Why Every UAE Resident Should Hold a DIFC Will",
  "ins.p2.excerpt":
    "A practical look at probate certainty, guardianship, and how DIFC wills protect families with mixed-jurisdiction assets.",
  "ins.p3.date": "Feb 2025",
  "ins.p3.title": "Five Mistakes to Avoid in Dubai Off-Plan Investment",
  "ins.p3.excerpt":
    "Escrow protections, RERA registration, contractual clauses and the warning signs every investor should review before signing.",
  "ins.p4.date": "Jan 2025",
  "ins.p4.title": "Free Zone vs Mainland: A Strategic Decision Framework",
  "ins.p4.excerpt":
    "How to choose the right structure for cross-border operators — capital flows, banking relationships and shareholder posture.",
  "ins.p5.date": "Jan 2025",
  "ins.p5.title": "When to Engage International Counsel — and How",
  "ins.p5.excerpt":
    "A note on coordination, privilege and the protocols that hold across jurisdictions when matters become sensitive.",
  "ins.p6.date": "Dec 2024",
  "ins.p6.title": "The Family Office Legal Stack: A Quiet Architecture",
  "ins.p6.excerpt":
    "Structuring trusts, holdcos and succession layers around the way modern wealth actually moves.",

  // Contact page
  "contact.kicker": "Confidential Intake",
  "contact.h1": "Confidential Review of Your UAE Commercial or Financial Matter",
  "contact.intro":
    "If you are facing a commercial dispute, debt recovery issue, asset recovery matter, partner dispute, or Iran-UAE financial claim, send a short summary and initial documents so the available legal route can be reviewed.",
  "contact.hero.primary": "Submit Matter Details",
  "contact.hero.secondary": "Message on WhatsApp",
  "contact.before.title": "Before submitting your matter",
  "contact.before.body":
    "Submitting the form or sending a message does not create legal representation or guarantee any outcome. Initial information is collected only to review possible routes, assess the suitable next step, and coordinate follow-up.",
  "contact.info.office": "Office",
  "contact.info.officeVal": "Business Bay, Dubai · United Arab Emirates",
  "contact.info.direct": "Direct",
  "contact.info.email": "Confidential",
  "contact.info.hours": "Hours",
  "contact.info.hoursVal": "Sun – Thu · 09:00 – 19:00 GST",
  "contact.form.kicker": "Confidential Matter Intake",
  "contact.form.name": "Full Name",
  "contact.form.lang": "Preferred Language",
  "contact.form.langPh": "English / فارسی / العربية",
  "contact.form.email": "Email",
  "contact.form.phone": "Phone / WhatsApp",
  "contact.form.matter": "Matter Type",
  "contact.form.urgency": "Urgency",
  "contact.form.amount": "Approximate Disputed Amount",
  "contact.form.counterparty": "Counterparty Location",
  "contact.form.documents": "Available Documents",
  "contact.form.brief": "Brief Description",
  "contact.form.guidance":
    "Please include amount, counterparty, location, timeline, and available documents where possible.",
  "contact.form.briefPh":
    "Please include a short summary, approximate disputed amount, counterparty, relevant country or city, key dates, available documents, and any steps already taken.",
  "contact.form.submit": "Submit for Confidential Review",
  "contact.form.disclaimer":
    "Receiving the form does not create representation. The matter must first be reviewed.",
  "contact.matter.1": "Commercial dispute in the UAE",
  "contact.matter.2": "Debt recovery or unpaid invoice",
  "contact.matter.3": "Asset recovery or lost funds",
  "contact.matter.4": "Fraud or suspicious investment",
  "contact.matter.5": "Partner or shareholder dispute",
  "contact.matter.6": "Iran-UAE contract or cross-border matter",
  "contact.matter.7": "Other commercial or financial matter",
  "contact.urg.1": "Urgent; assets may be transferred or evidence may be lost",
  "contact.urg.2": "Urgent; the counterparty is not responding",
  "contact.urg.3": "I may need action within the next few days",
  "contact.urg.4": "I am requesting an initial assessment",
  "contact.urg.5": "Urgency is unclear",
  "contact.include.kicker": "Initial Review",
  "contact.include.h2": "What helps with initial review?",
  "contact.include.1": "Approximate disputed amount or receivable",
  "contact.include.2": "Name or details of the counterparty",
  "contact.include.3": "Contract, invoice, payment proof, or statement of account",
  "contact.include.4": "WhatsApp, email, or message communications",
  "contact.include.5": "Timeline of the dispute and latest action taken",
  "contact.include.6": "Whether the counterparty is in the UAE, Iran, or another country",
  "contact.urgent.h2": "When should you avoid delay?",
  "contact.urgent.body":
    "If funds have moved, the counterparty is unresponsive, access to accounts or documents has been blocked, assets may be transferred, or evidence is at risk, the matter should be reviewed quickly.",
  "contact.whatsapp.title": "Quick submission via WhatsApp",
  "contact.whatsapp.body":
    "If you prefer a shorter first message, you can contact via WhatsApp and mention the matter type, approximate amount, and counterparty.",
  "contact.whatsapp.cta": "Message on WhatsApp",
  "contact.whatsapp.msg":
    "Hello, I would like a confidential review of a UAE commercial or financial matter.",
  "contact.final.disclaimer":
    "Receiving a message or form submission does not automatically create attorney-client representation. After the initial review, the next step and possible route will be clarified.",
  "contact.success.title": "Received.",
  "contact.success.body":
    "Your matter summary has been received confidentially. The available route and next step will be reviewed before any representation is accepted.",
  "marquee.1": "DIFC Wills",
  "marquee.2": "Cross-Border Litigation",
  "marquee.3": "Golden Visa Strategy",
  "marquee.4": "Asset Protection",
  "marquee.5": "Sanctions Advisory",
  "marquee.6": "Corporate Structuring",
  "marquee.7": "International Coordination",
  "marquee.8": "Family Office Counsel",
  "marquee.9": "Real Estate Disputes",
  "marquee.10": "Reputation-Sensitive Defense",

  // Homepage rebuild: commercial disputes and asset recovery
  "home.hero.kicker": "Iran-UAE Commercial Disputes · Asset Recovery · Debt Collection",
  "home.hero.h1": "Commercial Disputes & Asset Recovery Lawyer for Iranian Clients in the UAE",
  "home.hero.lede":
    "If your money, receivables, investment, or commercial contract is stuck in the UAE, the legal path may still be worth reviewing. We handle Iran-UAE commercial disputes, debt recovery, partner disputes, and asset recovery through a confidential and structured legal approach.",
  "home.hero.cta.primary": "Request Confidential Case Review",
  "home.hero.cta.secondary": "Message on WhatsApp",
  "home.hero.whatsappMsg":
    "Hello, I would like a confidential review of an Iran-UAE commercial dispute or asset recovery matter.",
  "home.hero.stat.1.v": "Iran-UAE",
  "home.hero.stat.1.l": "Commercial Disputes",
  "home.hero.stat.2.v": "Asset",
  "home.hero.stat.2.l": "Recovery Review",
  "home.hero.stat.3.v": "Debt",
  "home.hero.stat.3.l": "Collection Path",
  "home.hero.available": "Case Review",
  "home.hero.location": "UAE · Iran",
  "home.hero.founder": "Counsel",
  "home.hero.signature": "Commercial Disputes",
  "home.hero.scroll": "Scroll",
  "home.hero.est": "Iran · UAE · Asset Recovery",

  "home.pain.kicker": "Client Situations",
  "home.pain.h2": "Which problem are you facing?",
  "home.pain.1.t": "Importer or Exporter",
  "home.pain.1.b":
    "A payment, shipment, contract, or commercial obligation in the UAE is stuck and needs a clear legal path.",
  "home.pain.2.t": "Affected Investor",
  "home.pain.2.b":
    "An investment has failed, the counterparty is not responding, or warning signs of fraud have appeared.",
  "home.pain.3.t": "Business Partner in Dispute",
  "home.pain.3.b":
    "Unauthorized withdrawals, blocked accounts, lost access, or management disputes are putting company assets at risk.",
  "home.pain.4.t": "SME Owner",
  "home.pain.4.b":
    "Unpaid invoices and commercial debts are creating cash-flow pressure and operational risk.",
  "home.pain.5.t": "Iran-UAE Cross-Border Matter",
  "home.pain.5.b":
    "A contract, payment, enforcement issue, jurisdiction question, or counterparty dispute spans Iran and the UAE.",

  "home.axes.kicker": "Two Legal Paths",
  "home.axes.h2": "Two Core Legal Paths",
  "home.axes.1.t": "Iran-UAE Commercial Disputes",
  "home.axes.1.b1": "Breach of commercial contracts",
  "home.axes.1.b2": "Buyer, seller, or supplier disputes",
  "home.axes.1.b3": "Agency, distribution, and shipping disputes",
  "home.axes.1.b4": "Commercial claims and receivables",
  "home.axes.2.t": "Asset Recovery & Debt Collection",
  "home.axes.2.b1": "Unpaid receivables and stuck funds",
  "home.axes.2.b2": "Asset tracing and recovery-path review",
  "home.axes.2.b3": "Fraud or failed-investment matters",
  "home.axes.2.b4": "Legal action, negotiation, notices, and enforcement",

  "home.fast.kicker": "Time-Sensitive Review",
  "home.fast.h2": "In financial disputes, delay usually works against the asset",
  "home.fast.body":
    "The longer a financial dispute remains unresolved, the harder it can become to preserve evidence, trace funds, control accounts, negotiate effectively, or take urgent legal action. An initial review helps determine whether notice, negotiation, urgent action, litigation, or enforcement is the appropriate route.",

  "home.process.kicker": "Process",
  "home.process.h2": "Case Review and Engagement Process",
  "home.process.s1": "Initial intake",
  "home.process.s2": "Document and counterparty review",
  "home.process.s3": "Legal route assessment",
  "home.process.s4": "Action, negotiation, or formal notice",
  "home.process.s5": "Follow-up toward the available outcome",

  "home.trust.kicker": "Cross-Border Judgment",
  "home.trust.h2": "Iranian business context, UAE legal execution",
  "home.trust.body":
    "Iran-UAE matters are not only about translating contracts. They require understanding Iranian commercial behavior, UAE legal procedure, negotiation dynamics, litigation risk, enforcement, and confidentiality at the same time.",
  "home.trust.item.1": "Iranian commercial context",
  "home.trust.item.2": "UAE legal pathway",
  "home.trust.item.3": "Confidential document review",
  "home.trust.item.4": "Persian, English, and Arabic",
  "home.trust.item.5": "Focus on commercial and financial matters",

  "home.serviceCards.kicker": "Specialized Services",
  "home.serviceCards.h2": "Specialized Services",
  "home.serviceCards.1": "Commercial Disputes",
  "home.serviceCards.2": "Asset Recovery",
  "home.serviceCards.3": "Debt Recovery",
  "home.serviceCards.4": "Partner Disputes",
  "home.serviceCards.5": "Iran-UAE Contracts",
  "home.serviceCards.link": "View Services",

  "home.faq.kicker": "FAQ",
  "home.faq.h2": "Frequently Asked Questions",
  "home.faq.1.q": "What can I do if a buyer in Dubai has not paid for goods?",
  "home.faq.1.a":
    "The contract, invoices, delivery proof, communications, and counterparty details should be reviewed to determine whether negotiation, formal notice, litigation, or debt recovery is appropriate.",
  "home.faq.2.q": "Is asset recovery in the UAE guaranteed?",
  "home.faq.2.a":
    "No legal outcome should be guaranteed. However, the legal route, evidence, counterparty, traceable assets, and available actions can be reviewed.",
  "home.faq.3.q": "What documents are needed to start a commercial dispute review?",
  "home.faq.3.a":
    "Contracts, invoices, payment proof, WhatsApp or email communications, counterparty details, and a clear timeline are usually needed for an initial review.",
  "home.faq.4.q": "Can a matter be reviewed without being physically present in the UAE?",
  "home.faq.4.a":
    "In many cases, the initial document review and legal route assessment can begin remotely. Formal action depends on the specific matter.",
  "home.faq.5.q": "When should I act in a partner dispute?",
  "home.faq.5.a":
    "If access to accounts, documents, management, payments, or company assets has been restricted, delay may increase risk and the matter should be reviewed quickly.",

  "home.cta.h2": "Review the matter before recovery becomes harder",
  "home.cta.body":
    "Send a short summary of the matter, approximate amount, counterparty, and available documents. Receiving a message does not create representation; the matter must first be reviewed.",
  "home.cta.primary": "Submit Matter for Review",
  "home.cta.secondary": "Contact via WhatsApp",
  "home.cta.whatsappMsg":
    "Hello, I would like to submit a commercial dispute or asset recovery matter for confidential review.",
};

const fa: Dict = {
  "nav.home": "خانه",
  "nav.practice": "تخصص‌ها",
  "nav.international": "بین‌المللی",
  "nav.firm": "دفتر",
  "nav.insights": "بینش‌ها",
  "nav.contact": "تماس",
  "nav.book": "رزرو مشاوره",
  "nav.cta": "مشاوره محرمانه",
  "nav.login": "ورود",
  "nav.account": "حساب کاربری",
  "nav.logout": "خروج",
  "tag.legal": "وکیل پایه‌یک · دبی",

  "book.title": "رزرو مشاوره محرمانه",
  "book.subtitle":
    "خدمت را انتخاب کنید، زمان را برگزینید و با پرداخت آنلاین رزرو خود را قطعی کنید.",
  "book.step.service": "انتخاب خدمت",
  "book.step.time": "انتخاب زمان",
  "book.step.details": "اطلاعات شما",
  "book.step.pay": "پرداخت",
  "book.duration": "دقیقه",
  "book.aed": "درهم",
  "book.choose": "انتخاب",
  "book.selected": "انتخاب شد",
  "book.no_slots": "در این روز زمان آزادی موجود نیست. لطفاً روز دیگری را انتخاب کنید.",
  "book.next": "ادامه",
  "book.back": "بازگشت",
  "book.guest": "ادامه به‌عنوان مهمان",
  "book.signin": "ورود برای رزرو",
  "book.signup": "ساخت حساب کاربری",
  "book.full_name": "نام و نام‌خانوادگی",
  "book.email": "ایمیل",
  "book.phone": "شماره تماس (با کد کشور)",
  "book.notes": "توضیح مختصر موضوع (اختیاری)",
  "book.confirm_pay": "تأیید و پرداخت",
  "book.processing": "در حال پردازش…",
  "book.summary": "خلاصه رزرو",
  "book.success.title": "رزرو تأیید شد",
  "book.success.body":
    "تأییدیه به ایمیل شما ارسال شد. دفتر خانم مصطفایی پیش از جلسه با شما تماس می‌گیرد.",
  "book.return": "بازگشت به خانه",
  "book.test_mode": "تمام پرداخت‌ها در حالت آزمایشی پیش‌نمایش هستند.",
  "book.emergency": "خط فوری",

  "auth.login.title": "ورود موکلین",
  "auth.signup.title": "ساخت حساب کاربری",
  "auth.email": "ایمیل",
  "auth.password": "رمز عبور",
  "auth.full_name": "نام و نام‌خانوادگی",
  "auth.submit_login": "ورود",
  "auth.submit_signup": "ساخت حساب",
  "auth.no_account": "حساب ندارید؟",
  "auth.have_account": "حساب دارید؟",
  "auth.signup_link": "ساخت حساب",
  "auth.login_link": "ورود",
  "auth.error": "خطای احراز هویت",

  "admin.title": "کنسول دفتر",
  "admin.bookings": "رزروها",
  "admin.client": "موکل",
  "admin.service": "خدمت",
  "admin.when": "زمان",
  "admin.status": "وضعیت",
  "admin.payment": "پرداخت",
  "admin.actions": "عملیات",
  "admin.confirm": "تأیید",
  "admin.complete": "ثبت اتمام",
  "admin.cancel": "لغو",
  "admin.no_access": "دسترسی فقط برای مدیران دفتر.",

  "splash.tag": "وکیل پایه‌یک · دبی",
  "splash.name.first": "راحیل",
  "splash.name.last": "مصطفایی",
  "book.brand_tag": "راحیل مصطفایی · دبی",

  "footer.role": "وکیل و مشاور حقوقی راهبردی",
  "footer.blurb":
    "نمایندگی حقوقی محرمانه و فرامرزی برای موکلین ارزشمند ایرانی در دبی و سایر حوزه‌های قضایی بین‌المللی.",
  "footer.langs": "فارسی · English · العربية",
  "footer.col.practice": "تخصص‌ها",
  "footer.col.firm": "دفتر",
  "footer.col.office": "نشانی",
  "footer.link.cross": "پرونده‌های فرامرزی",
  "footer.link.residency": "اقامت و ویزا",
  "footer.link.corporate": "حقوق شرکت‌ها",
  "footer.link.realestate": "املاک و مستغلات",
  "footer.link.wills": "وصیت‌نامه DIFC",
  "footer.link.about": "درباره دفتر",
  "footer.link.intl": "بین‌المللی",
  "footer.link.insights": "بینش‌ها",
  "footer.link.contact": "تماس",
  "footer.office.area": "بیزنس بی",
  "footer.office.city": "دبی، امارات",
  "footer.office.byappt": "تنها با تعیین وقت قبلی",
  "footer.copyright": "تمامی پرونده‌ها به صورت کاملاً محرمانه نگهداری می‌شوند.",
  "footer.privileged": "محرمانه و ممتاز",

  // ===== Home page (FA) =====
  "home.hero.h1.a": "حفاظت ",
  "home.hero.h1.b": "حقوقی",
  "home.hero.h1.c": "راهبردی.",
  "home.hero.h1.d": "بدون مصالحه.",
  "home.hero.rotate.1": "حقوقی",
  "home.hero.rotate.2": "محرمانه",
  "home.hero.rotate.3": "قاطع",
  "home.hero.rotate.4": "فرامرزی",
  "home.hero.name.first": "راحیل",
  "home.hero.name.last": "مصطفایی",
  "home.hero.cta.book": "رزرو مشاوره محرمانه",
  "home.hero.cta.emergency": "خط فوری حقوقی",
  "home.hero.stat.years": "سال تجربه",
  "home.hero.stat.mandates": "پرونده ویژه",
  "home.hero.stat.sla": "پاسخ‌گویی",
  "home.hero.stat.langs": "زبان",

  "home.pillars.discretion.t": "محرمانگی",
  "home.pillars.discretion.b": "هر پرونده تحت سخت‌گیرانه‌ترین پروتکل‌های محرمانگی اداره می‌شود.",
  "home.pillars.intl.t": "بین‌المللی",
  "home.pillars.intl.b": "هماهنگی حقوقی در امارات، اتحادیه اروپا، بریتانیا و ایران.",
  "home.pillars.elite.t": "دسترسی ویژه",
  "home.pillars.elite.b": "مشاور مورد اعتماد سرمایه‌گذاران، خانواده‌ها و مدیران ارشد.",
  "home.pillars.protect.t": "حفاظت‌محور",
  "home.pillars.protect.b": "راهبردی برای صیانت از دارایی، تردد و اعتبار شما.",

  "home.practice.kicker": "حوزه‌های تخصصی",
  "home.practice.h2.a": "مشاوره در پرونده‌های حساس،",
  "home.practice.h2.b": "با دقت مهندسی‌شده.",
  "home.practice.viewAll": "مشاهده تمام تخصص‌ها",
  "home.practice.1.t": "فرامرزی و بین‌المللی",
  "home.practice.1.b":
    "راهبرد چند حوزه‌ای، حفاظت از دارایی، هماهنگی بین‌المللی، مشاوره ممنوع‌الخروجی و پرونده‌های اعتبار-حساس.",
  "home.practice.1.tag1": "حفاظت از دارایی",
  "home.practice.1.tag2": "هماهنگی بین‌المللی",
  "home.practice.1.tag3": "دفاع تطبیقی",
  "home.practice.2.t": "اقامت امارات و گلدن ویزا",
  "home.practice.2.b":
    "ساختاردهی کامل گلدن ویزا، احیای اقامت، رفع ممنوعیت ورود و مشاوره تخصصی مهاجرت.",
  "home.practice.2.tag1": "گلدن ویزا",
  "home.practice.2.tag2": "اقامت",
  "home.practice.2.tag3": "مهاجرت",
  "home.practice.3.t": "حقوق شرکت‌ها و تجاری",
  "home.practice.3.b":
    "تأسیس در فری‌زون، قراردادهای سهامداران، دعاوی تجاری و بازساختاردهی شرکت‌های فرامرزی.",
  "home.practice.3.tag1": "تأسیس",
  "home.practice.3.tag2": "دعاوی",
  "home.practice.3.tag3": "بازساختاردهی",
  "home.practice.4.t": "املاک و سرمایه‌گذاری",
  "home.practice.4.b":
    "مشاوره املاک دبی، حفاظت از سرمایه‌گذار، پیشگیری از کلاهبرداری و بررسی معاملات با ارزش بالا.",
  "home.practice.4.tag1": "املاک",
  "home.practice.4.tag2": "معاملات",
  "home.practice.4.tag3": "اختلافات",
  "home.practice.5.t": "حفاظت از خانواده و ثروت",
  "home.practice.5.b":
    "وصیت‌نامه DIFC، برنامه‌ریزی توارث، مشاوره فمیلی‌آفیس و حفاظت ساختاریافته از ثروت چندنسلی.",
  "home.practice.5.tag1": "وصیت‌نامه DIFC",
  "home.practice.5.tag2": "توارث",
  "home.practice.5.tag3": "فمیلی آفیس",
  "home.practice.6.t": "بحران و موضوعات حساس",
  "home.practice.6.b":
    "پاسخ اضطراری، رفع توقیف مالی، تحقیقات نظارتی و نمایندگی محرمانه در بالاترین سطح.",
  "home.practice.6.tag1": "اضطراری",
  "home.practice.6.tag2": "تحقیقات",
  "home.practice.6.tag3": "محرمانه",

  "home.intl.kicker": "میز بین‌الملل",
  "home.intl.h2.a": "موضوعات حساس،",
  "home.intl.h2.b": "با مدیریت در سطح بالا.",
  "home.intl.body":
    "برای موکلینی که با ریسک حقوقی بین‌المللی روبه‌رو هستند — ممنوعیت سفر، تحقیقات فرامرزی، توقیف مالی یا استعلام‌های اعتبار-حساس — پاسخی آرام و قاطع را در سراسر حوزه‌های قضایی هماهنگ می‌کنیم. تمام کار تحت ارتباط ممتاز و محرمانگی در سطح اجرایی انجام می‌شود.",
  "home.intl.cta": "هماهنگی بین‌المللی",
  "home.intl.s1": "مشاوره اعلان بین‌المللی",
  "home.intl.s2": "راهبرد ممنوعیت سفر",
  "home.intl.s3": "هماهنگی فرامرزی",
  "home.intl.s4": "دفاع اعتبار-حساس",
  "home.intl.s5": "پاسخ به توقیف دارایی",
  "home.intl.s6": "مشاور بین‌المللی فوری",

  "home.atelier.kicker": "پرتره",
  "home.atelier.h2.a": "حضور،",
  "home.atelier.h2.b": "متانت، دقت.",
  "home.atelier.body":
    "دفتری که با انضباط و محرمانگی تعریف می‌شود — و استانداردی شخصی که آینهٔ پرونده‌هایی است که به آن سپرده می‌شوند.",
  "home.atelier.1.l": "در دفتر",
  "home.atelier.1.c": "مشاوره خصوصی، DIFC",
  "home.atelier.2.l": "موسس دفتر",
  "home.atelier.2.c": "مشاور حقوقی راهبردی",
  "home.atelier.3.l": "خارج از پرونده",
  "home.atelier.3.c": "شخصی · خصوصی",

  "home.platform.kicker": "پلتفرم موکلین",
  "home.platform.h2.a": "پلتفرمی خصوصی",
  "home.platform.h2.b": "برای موضوعات جدی.",
  "home.platform.body":
    "تجربه‌ای حقوقی، مدرن و یکپارچه — پورتال امن، تبادل رمزنگاری‌شده اسناد، جلسات تصویری زمان‌بندی‌شده و صورت‌حساب یکپارچه. ساخته‌شده مانند یک بانک خصوصی، نه دفتر وکالت معمولی.",
  "home.platform.menu.1": "نمای کلی",
  "home.platform.menu.2": "پرونده‌های فعال",
  "home.platform.menu.3": "اسناد",
  "home.platform.menu.4": "زمان‌بندی",
  "home.platform.menu.5": "صورت‌حساب‌ها",
  "home.platform.menu.6": "گفتگوی امن",
  "home.platform.activeMatter": "پرونده فعال",
  "home.platform.matterTitle": "بازساختاردهی فرامرزی دارایی",
  "home.platform.inProgress": "در جریان",
  "home.platform.stage": "مرحله",
  "home.platform.stageVal": "ساختاردهی",
  "home.platform.lead": "وکیل اصلی",
  "home.platform.leadVal": "ر. مصطفایی",
  "home.platform.next": "بازبینی بعدی",
  "home.platform.nextVal": "۱۲ مارس",
  "home.platform.task1": "یادداشت راهبردی اولیه",
  "home.platform.task1s": "بازبینی شد",
  "home.platform.task2": "نقشه‌برداری حوزه قضایی",
  "home.platform.task2s": "در حال تنظیم",
  "home.platform.task3": "ورود امین",
  "home.platform.task3s": "در انتظار",
  "home.platform.encrypted": "رمزنگاری‌شده",
  "home.platform.e2e": "سرتاسری",

  "home.process.h2.a": "چهار گام تا",
  "home.process.h2.b": "آغاز همکاری.",
  "home.process.body":
    "مسیری روشن و سنجیده از نخستین تماس تا نمایندگی فعال. بدون دست‌انداز، بدون غافلگیری.",
  "home.process.s1.t": "انتخاب بسته",
  "home.process.s1.b":
    "قالب مشاوره مناسب پرونده خود را انتخاب کنید — استاندارد، راهبردی، فوری یا بین‌المللی.",
  "home.process.s2.t": "انتخاب زمان",
  "home.process.s2.b":
    "زمان‌های در دسترس دفتر DIFC را ببینید و در چند ثانیه یک جلسه محرمانه رزرو کنید.",
  "home.process.s3.t": "پرداخت امن",
  "home.process.s3.b":
    "از طریق درگاه رمزنگاری‌شده Stripe پرداخت کنید. اطلاعات شما از همان نخستین پیام محرمانه است.",
  "home.process.s4.t": "مشاوره محرمانه",
  "home.process.s4.b":
    "حضوری در DIFC یا از طریق ویدیوی امن با راحیل دیدار کنید. خلاصه مکتوب در ۴۸ ساعت ارسال می‌شود.",
  "home.process.cta": "شروع کنید",

  "home.ig.kicker": "اینستاگرام",
  "home.ig.h2.a": "پشت",
  "home.ig.h2.b": "صحنه دفتر.",
  "home.ig.body":
    "یادداشت‌های حقوقی، نگاهی به دادگاه و گوشه‌ای از زندگی میان دبی و تهران. برای به‌روزرسانی‌های موجز و سنجیده دنبال کنید.",
  "home.ig.handle": "@rahil.mostafaee",
  "home.ig.cta": "دنبال‌کردن در اینستاگرام",

  "fab.whatsapp.label": "واتساپ",
  "fab.whatsapp.aria": "پیام به دفتر راحیل در واتساپ",
  "fab.whatsapp.msg": "سلام، می‌خواهم درباره یک مشاوره محرمانه پرس‌وجو کنم.",

  "home.founder.langsLabel": "زبان‌ها",
  "home.founder.kicker": "وکیل",
  "home.founder.role": "موسس · مشاور حقوقی راهبردی",
  "home.founder.body":
    "وکیل ایرانی مستقر در دبی، مشاور سرمایه‌گذاران، کارآفرینان و خانواده‌های در راهبرد حقوقی فرامرزی. شناخته‌شده برای رویکردی آرام و ساختاریافته در پرونده‌های پیچیده — و دغدغه‌ای جدی برای حفاظت از منافع موکل در میان مرزها، نسل‌ها و حوزه‌های قضایی.",
  "home.founder.philT": "فلسفه حرفه‌ای",
  "home.founder.philB": "حفاظت بر نمایش، راهبرد بر حجم، رابطه بر معامله.",
  "home.founder.postT": "رویکرد به موکل",
  "home.founder.postB": "نمایندگی گزینشی، رابطه مشاوره بلندمدت، محرمانگی مطلق.",

  "home.trust.h2.a": "مورد اعتماد در",
  "home.trust.h2.b": "چهار حوزه قضایی.",
  "home.trust.difc": "ثبت‌شده وصیت و ترکه",
  "home.trust.uae": "وکالت فدرال و امارات",
  "home.trust.eu": "هماهنگی حقوقی",
  "home.trust.ir": "شبکه ارتباط داخلی",

  "home.cta.h2.a": "وقتی موضوع",
  "home.cta.h2.b": "سرنوشت‌ساز است،",
  "home.cta.h2.c": "مشاور باید",
  "home.cta.h2.d": "سنجیده باشد.",
  "home.cta.book": "رزرو مشاوره",
  "home.cta.direct": "خط مستقیم",

  "home.pkg.kicker": "بسته‌های مشاوره",
  "home.pkg.h2.a": "با",
  "home.pkg.h2.b": "شفافیت و دقت",
  "home.pkg.body":
    "مشاوره‌های محرمانه با هزینه ثابت و شفاف. قالب مناسب پرونده خود را برگزینید و در چند دقیقه آنلاین رزرو کنید.",
  "home.pkg.aed": "درهم",
  "home.pkg.min": "دقیقه",
  "home.pkg.popular": "پرطرفدار",
  "home.pkg.urgent": "اولویت‌دار",
  "home.pkg.reserve": "رزرو",
  "home.pkg.viewAll": "مشاهده همه گزینه‌ها و زمان‌های آزاد",
  "home.pkg.feat.confidential": "محرمانگی کامل و اصل ممتاز",
  "home.pkg.feat.followup": "پیگیری مکتوب طی ۴۸ ساعت",
  "home.pkg.feat.summary": "یادداشت جمع‌بندی پیشنهادها",
  "home.pkg.feat.deepdive": "بررسی عمیق پرونده شما",
  "home.pkg.feat.roadmap": "نقشه راه حقوقی اختصاصی",
  "home.pkg.feat.priority": "پاسخ‌گویی اولویت‌دار وکیل",
  "home.pkg.feat.sameday": "پاسخ‌گویی همان‌روز، ۲۴/۷",
  "home.pkg.feat.directline": "خط مستقیم با وکیل ارشد",
  "home.pkg.feat.multijuris": "پوشش چند حوزه قضایی",
  "home.pkg.feat.intake": "پذیرش جامع پرونده",

  // Services page
  "svc.kicker": "مرکز خدمات",
  "svc.h1": "خدمات حقوقی برای اختلافات تجاری و بازیابی دارایی در امارات",
  "svc.intro":
    "اگر پول، طلب، سرمایه، قرارداد یا رابطه تجاری شما در امارات دچار مشکل شده، این صفحه مسیرهای اصلی خدمات حقوقی ما را برای پرونده‌های تجاری ایران–امارات، وصول مطالبات، اختلاف شرکا و بازیابی دارایی توضیح می‌دهد.",
  "svc.hero.primary": "بررسی محرمانه پرونده",
  "svc.hero.secondary": "تماس از طریق واتساپ",
  "svc.whatsapp.msg":
    "سلام، برای بررسی محرمانه یک پرونده تجاری یا بازیابی دارایی مرتبط با امارات پیام می‌دهم.",
  "svc.axes.kicker": "تمرکز اصلی",
  "svc.axes.h2": "تمرکز خدمات ما روی دو محور اصلی است",
  "svc.axes.1.t": "اختلافات تجاری ایران–امارات",
  "svc.axes.1.b":
    "پرونده‌هایی که از قرارداد اجرا نشده، معامله ناقص، اختلاف با خریدار یا فروشنده، اختلاف نمایندگی، حمل‌ونقل، توزیع یا همکاری تجاری بین ایران و امارات ایجاد می‌شوند.",
  "svc.axes.2.t": "بازیابی دارایی و وصول مطالبات",
  "svc.axes.2.b":
    "پرونده‌هایی که در آن پول، طلب، سرمایه، دارایی یا حق مالی در امارات گیر کرده و نیاز به بررسی حقوقی، مذاکره، اخطار، اقدام فوری یا پیگیری وصول دارد.",
  "svc.pillars.kicker": "مسیرهای خدمات",
  "svc.pillars.h2": "خدمات تخصصی",
  "svc.typical": "موارد رایج",
  "svc.card.link": "شروع بررسی",
  "svc.card.1.t": "اختلافات تجاری",
  "svc.card.1.b":
    "بررسی و پیگیری اختلافات ناشی از قرارداد، خریدوفروش، تأمین کالا، نمایندگی، توزیع، حمل‌ونقل و تعهدات اجرا نشده در امارات.",
  "svc.card.1.m1": "قرارداد اجرا نشده",
  "svc.card.1.m2": "اختلاف با خریدار یا فروشنده",
  "svc.card.1.m3": "اختلاف با supplier",
  "svc.card.1.m4": "دعاوی تجاری",
  "svc.card.2.t": "بازیابی دارایی",
  "svc.card.2.b":
    "بررسی مسیر حقوقی برای ردیابی، حفظ و پیگیری دارایی یا پولی که در نتیجه سرمایه‌گذاری ناموفق، کلاهبرداری احتمالی یا قطع ارتباط طرف مقابل از دسترس خارج شده است.",
  "svc.card.2.m1": "asset tracing",
  "svc.card.2.m2": "fraud recovery",
  "svc.card.2.m3": "سرمایه‌گذاری مشکوک",
  "svc.card.2.m4": "اقدام فوری قابل بررسی",
  "svc.card.3.t": "وصول مطالبات",
  "svc.card.3.b":
    "پیگیری مطالبات تجاری، فاکتورهای پرداخت‌نشده، بدهی شرکت‌ها و پول‌های گیرکرده از طریق مذاکره، اخطار رسمی، دعوا یا اجرای حقوقی.",
  "svc.card.3.m1": "فاکتور پرداخت‌نشده",
  "svc.card.3.m2": "بدهی تجاری",
  "svc.card.3.m3": "طلب از شرکت اماراتی",
  "svc.card.3.m4": "settlement یا enforcement",
  "svc.card.4.t": "اختلاف شرکا",
  "svc.card.4.b":
    "بررسی اختلافات بین شرکا، سهامداران یا مدیران شرکت در امارات، مخصوصاً وقتی دسترسی، حساب، دارایی یا مدیریت شرکت دچار مشکل شده است.",
  "svc.card.4.m1": "برداشت غیرمجاز",
  "svc.card.4.m2": "قفل شدن حساب",
  "svc.card.4.m3": "قطع دسترسی",
  "svc.card.4.m4": "اختلاف مدیریتی",
  "svc.card.5.t": "قراردادها و پرونده‌های ایران–امارات",
  "svc.card.5.b":
    "تحلیل قراردادها، صلاحیت، قانون حاکم، مسیر اجرا و ریسک‌های حقوقی در معاملات و روابط تجاری بین ایران و امارات.",
  "svc.card.5.m1": "قرارداد مرزی",
  "svc.card.5.m2": "ابهام در اجرا",
  "svc.card.5.m3": "قانون حاکم",
  "svc.card.5.m4": "اجرای تعهدات",
  "svc.who.kicker": "مناسب برای",
  "svc.who.h2": "این خدمات برای چه کسانی مناسب است؟",
  "svc.who.1": "تجار واردکننده و صادرکننده",
  "svc.who.2": "سرمایه‌گذاران ایرانی در امارات",
  "svc.who.3": "صاحبان کسب‌وکار کوچک و متوسط",
  "svc.who.4": "founders و شرکای تجاری",
  "svc.who.5": "شرکت‌هایی که از طرف اماراتی طلب دارند",
  "svc.who.6": "افرادی که پول یا دارایی‌شان در امارات گیر کرده است",
  "svc.docs.kicker": "مدارک اولیه",
  "svc.docs.h2": "برای بررسی اولیه چه مدارکی لازم است؟",
  "svc.docs.body":
    "برای ارزیابی اولیه، معمولاً این اطلاعات کمک می‌کند مسیر پرونده دقیق‌تر مشخص شود:",
  "svc.docs.1": "قرارداد یا توافق‌نامه",
  "svc.docs.2": "فاکتور، رسید پرداخت یا statement of account",
  "svc.docs.3": "مکاتبات واتساپ، ایمیل یا پیام‌ها",
  "svc.docs.4": "اطلاعات شخص یا شرکت مقابل",
  "svc.docs.5": "مدارک پرداخت، تحویل کالا یا اجرای خدمات",
  "svc.docs.6": "خلاصه زمانی اتفاقات و مبلغ تقریبی اختلاف",
  "svc.process.kicker": "روند کار",
  "svc.process.h2": "روند کار چگونه است؟",
  "svc.process.1": "ارسال خلاصه پرونده",
  "svc.process.2": "بررسی اسناد و مبلغ اختلاف",
  "svc.process.3": "تشخیص مسیر مناسب",
  "svc.process.4": "مذاکره، اخطار، اقدام فوری یا دعوا",
  "svc.process.5": "پیگیری و گزارش‌دهی تا نتیجه قابل دستیابی",
  "svc.faq.kicker": "پرسش‌ها",
  "svc.faq.h2": "پرسش‌های رایج درباره خدمات",
  "svc.faq.1.q": "آیا اول باید قرارداد داشته باشیم؟",
  "svc.faq.1.a":
    "داشتن قرارداد کمک زیادی می‌کند، اما در بعضی پرونده‌ها فاکتور، رسید پرداخت، مکاتبات، رسید تحویل یا رفتار تجاری طرفین هم می‌تواند برای بررسی اولیه مهم باشد.",
  "svc.faq.2.q": "اگر طرف مقابل شرکت اماراتی باشد چه می‌شود؟",
  "svc.faq.2.a":
    "اطلاعات شرکت، مجوز، آدرس، مدیران، قرارداد و مدارک پرداخت بررسی می‌شود تا مسیر حقوقی مناسب مشخص شود.",
  "svc.faq.3.q": "آیا وصول طلب یا بازیابی دارایی تضمینی است؟",
  "svc.faq.3.a":
    "خیر. نتیجه هیچ پرونده حقوقی تضمین نمی‌شود. اما می‌توان امکان پیگیری، کیفیت مدارک، وضعیت طرف مقابل و مسیرهای اقدام را بررسی کرد.",
  "svc.faq.4.q": "آیا از ایران هم می‌توان شروع کرد؟",
  "svc.faq.4.a":
    "در بسیاری از موارد، بررسی اولیه اسناد و ارزیابی مسیر حقوقی از راه دور امکان‌پذیر است. برای اقدامات رسمی، شرایط پرونده جداگانه بررسی می‌شود.",
  "svc.faq.5.q": "چه زمانی باید فوراً اقدام کرد؟",
  "svc.faq.5.a":
    "وقتی پول جابه‌جا شده، طرف مقابل پاسخ نمی‌دهد، اسناد در خطر است، حساب یا دسترسی بسته شده یا احتمال انتقال دارایی وجود دارد، تأخیر می‌تواند ریسک را بیشتر کند.",
  "svc.cta.title": "برای بررسی مسیر حقوقی پرونده، اطلاعات اولیه را ارسال کنید",
  "svc.cta.body":
    "خلاصه موضوع، مبلغ تقریبی اختلاف، طرف مقابل و مدارک موجود را ارسال کنید. دریافت پیام به معنی پذیرش نمایندگی نیست؛ ابتدا امکان پیگیری و مسیر حقوقی بررسی می‌شود.",
  "svc.cta.primary": "ارسال پرونده برای بررسی",
  "svc.cta.secondary": "پیام در واتساپ",

  // International page
  "intl.kicker": "میز بین‌الملل",
  "intl.h1.a": "پرونده‌های حساس،",
  "intl.h1.b": "از منظر بالا اداره می‌شود.",
  "intl.intro":
    "برای موکلانی که در معرض ریسک چندحوزه‌ای هستند، به‌عنوان نقطه‌ی واحد هماهنگی عمل می‌کنیم — آرام، محرمانه و قاطع.",
  "intl.c1.t": "هماهنگی بین‌المللی",
  "intl.c1.b": "نمایندگی چندحوزه‌ای در امارات، اتحادیه اروپا، بریتانیا و میزهای ارتباطی فراتر.",
  "intl.c2.t": "حفاظت از تحرک",
  "intl.c2.b": "راهبرد محدودیت سفر، مشاوره ورود و برنامه‌ریزی پیشگیرانه تحرک.",
  "intl.c3.t": "دفاع از اعتبار",
  "intl.c3.b": "پاسخ محتاطانه به استعلام‌ها با محرمانگی در سطح اجرایی.",
  "intl.flow.title": "یک پرونده نمونه.",
  "intl.flow.s1.t": "پذیرش محرمانه",
  "intl.flow.s1.b": "گفتگوی محرمانه با موکل اصلی. ارزیابی دامنه و میزان مواجهه.",
  "intl.flow.s2.t": "نقشه‌برداری حوزه‌های قضایی",
  "intl.flow.s2.b": "هماهنگی با وکلای بین‌المللی؛ ترسیم ریسک‌های فعال و خاموش.",
  "intl.flow.s3.t": "یادداشت راهبردی",
  "intl.flow.s3.b": "برنامه مکتوب و محرمانه با اقدامات اولویت‌بندی‌شده و راهکارهای جایگزین.",
  "intl.flow.s4.t": "اجرا و هماهنگی",
  "intl.flow.s4.b": "وکلا، نهادهای ناظر و ذی‌نفعان از طریق یک کانال واحد درگیر می‌شوند.",
  "intl.flow.s5.t": "مهار و پایان‌بندی",
  "intl.flow.s5.b": "پرونده حل، مهار تأیید و پروتکل‌های پایش مستمر مستقر می‌شود.",
  "intl.cta.title": "محرمانه گفتگو کنید.",
  "intl.cta.btn": "آغاز همکاری محرمانه",

  // About page
  "about.kicker": "دفتر",
  "about.h1.a": "دفتری بوتیک ساخته‌شده برای",
  "about.h1.b": "پرونده‌های سرنوشت‌ساز.",
  "about.intro":
    "دفتر حقوقی رحیل مصطفایی یک دفتر مشاوره خصوصی است که به جمع منتخبی از سرمایه‌گذاران، بنیان‌گذاران و خانواده‌های ایرانی در امارات و خارج از آن خدمت می‌رساند. این دفتر تنها برای یک هدف وجود دارد: ارائه مشاوره حقوقی محتاطانه، ساختاریافته و قاطعانه آنجا که موضوع شخصی است.",
  "about.v1.t": "محرمانگی",
  "about.v1.b":
    "همه پرونده‌ها تحت محرمانگی مطلق انجام می‌شوند. اسامی، موضوعات و نتایج همواره محرمانه باقی می‌مانند.",
  "about.v2.t": "گزینش‌گری",
  "about.v2.b":
    "نمایندگی از طریق معرفی و بازبینی است. با تعداد محدودی موکل کار می‌کنیم تا توجهی فراتر از انتظار ارائه دهیم.",
  "about.v3.t": "هماهنگی",
  "about.v3.b":
    "شبکه‌ای بین‌المللی از وکلای همراه، دفاتر خانواده و مشاوران مورد اعتماد — هماهنگ‌شده از طریق یک کانال.",
  "about.manifesto.kicker": "بیانیه",
  "about.manifesto.q1": "«ما یک نمایندگی را با آنچه ثبت شده نمی‌سنجیم، بلکه با آنچه ",
  "about.manifesto.q2": "حفاظت شده",
  "about.manifesto.q3":
    " می‌سنجیم. بهترین کار حقوقی همان است که موکل هرگز نیاز نیست ببیند — آرام، ساختاریافته و قاطعانه نهایی.»",
  "about.cta.title": "گفتگویی را آغاز کنید.",
  "about.cta.btn": "درخواست مشاوره",

  // Insights page
  "ins.kicker": "بینش‌ها",
  "ins.h1.a": "هوشمندی حقوقی،",
  "ins.h1.b": "به‌اختصار بیان شده.",
  "ins.intro":
    "گزارش‌های دوره‌ای درباره اقامت امارات، وصیت‌نامه‌های DIFC، املاک، ساختار شرکتی و راهبردهای فرامرزی.",
  "ins.read": "مطالعه گزارش",
  "ins.cta.title": "گزارش‌های خصوصی، با درخواست.",
  "ins.cta.body": "یادداشت ماهانه‌ای کوتاه برای موکلان درباره تحولات نظارتی و ساختاری در امارات.",
  "ins.cta.btn": "درخواست دسترسی",
  "ins.cat.residency": "اقامت",
  "ins.cat.wills": "وصیت‌نامه",
  "ins.cat.property": "املاک",
  "ins.cat.corporate": "شرکتی",
  "ins.cat.international": "بین‌المللی",
  "ins.cat.wealth": "ثروت",
  "ins.p1.date": "اسفند ۱۴۰۳",
  "ins.p1.title": "مسیرهای ویزای طلایی برای سرمایه‌گذاران ایرانی در ۲۰۲۵",
  "ins.p1.excerpt":
    "مروری بر مسیرهای سرمایه‌گذاری واجد شرایط، تمدید اقامت و انتخاب‌های ساختاری که تحرک بلندمدت را تعیین می‌کنند.",
  "ins.p2.date": "بهمن ۱۴۰۳",
  "ins.p2.title": "چرا هر مقیم امارات باید وصیت‌نامه DIFC داشته باشد",
  "ins.p2.excerpt":
    "نگاهی کاربردی به قطعیت انحصار وراثت، قیمومیت و حفاظت از خانواده‌های دارای دارایی چندحوزه‌ای.",
  "ins.p3.date": "بهمن ۱۴۰۳",
  "ins.p3.title": "پنج اشتباهی که در سرمایه‌گذاری پیش‌فروش دبی باید از آن پرهیز کرد",
  "ins.p3.excerpt":
    "حفاظت‌های اسکرو، ثبت RERA، بندهای قراردادی و علائم هشداری که هر سرمایه‌گذار باید پیش از امضا بررسی کند.",
  "ins.p4.date": "دی ۱۴۰۳",
  "ins.p4.title": "منطقه آزاد یا سرزمین اصلی: چارچوب تصمیم راهبردی",
  "ins.p4.excerpt":
    "چگونگی انتخاب ساختار درست برای فعالان فرامرزی — جریان سرمایه، روابط بانکی و موقعیت سهامداران.",
  "ins.p5.date": "دی ۱۴۰۳",
  "ins.p5.title": "چه زمان و چگونه از وکلای بین‌المللی بهره بگیریم",
  "ins.p5.excerpt":
    "یادداشتی درباره هماهنگی، محرمانگی و پروتکل‌هایی که در پرونده‌های حساس میان حوزه‌های قضایی پایدار می‌مانند.",
  "ins.p6.date": "آذر ۱۴۰۳",
  "ins.p6.title": "چینش حقوقی دفتر خانواده: معماری آرام",
  "ins.p6.excerpt":
    "ساختاردهی تراست‌ها، شرکت‌های هلدینگ و لایه‌های توارث متناسب با نحوه واقعی حرکت ثروت مدرن.",

  // Contact page
  "contact.kicker": "پذیرش محرمانه",
  "contact.h1": "بررسی محرمانه پرونده تجاری یا مالی شما در امارات",
  "contact.intro":
    "اگر درگیر اختلاف تجاری، وصول مطالبات، بازیابی دارایی، اختلاف شریک یا پرونده مالی بین ایران و امارات هستید، خلاصه پرونده و مدارک اولیه را ارسال کنید تا مسیر حقوقی قابل بررسی مشخص شود.",
  "contact.hero.primary": "ارسال اطلاعات پرونده",
  "contact.hero.secondary": "پیام در واتساپ",
  "contact.before.title": "قبل از ارسال پرونده",
  "contact.before.body":
    "ارسال فرم یا پیام به معنی پذیرش نمایندگی حقوقی یا تضمین نتیجه نیست. اطلاعات اولیه فقط برای بررسی امکان پیگیری، تشخیص مسیر مناسب و هماهنگی مرحله بعدی دریافت می‌شود.",
  "contact.info.office": "دفتر",
  "contact.info.officeVal": "بیزینس بِی، دبی · امارات متحده عربی",
  "contact.info.direct": "تماس مستقیم",
  "contact.info.email": "محرمانه",
  "contact.info.hours": "ساعات کاری",
  "contact.info.hoursVal": "یکشنبه تا پنجشنبه · ۰۹:۰۰ – ۱۹:۰۰ به وقت خلیج",
  "contact.form.kicker": "فرم پذیرش محرمانه",
  "contact.form.name": "نام و نام خانوادگی",
  "contact.form.lang": "زبان ترجیحی",
  "contact.form.langPh": "English / فارسی / العربية",
  "contact.form.email": "ایمیل",
  "contact.form.phone": "شماره تماس یا واتساپ",
  "contact.form.matter": "نوع پرونده",
  "contact.form.urgency": "فوریت موضوع",
  "contact.form.amount": "مبلغ تقریبی اختلاف",
  "contact.form.counterparty": "کشور یا محل طرف مقابل",
  "contact.form.documents": "مدارک موجود",
  "contact.form.brief": "خلاصه پرونده",
  "contact.form.guidance":
    "در صورت امکان مبلغ، طرف مقابل، محل، زمان‌بندی و مدارک موجود را ذکر کنید.",
  "contact.form.briefPh":
    "لطفاً خلاصه موضوع، مبلغ تقریبی اختلاف، طرف مقابل، کشور یا شهر مرتبط، تاریخ‌های مهم، مدارک موجود و اینکه تاکنون چه اقداماتی انجام شده را بنویسید.",
  "contact.form.submit": "ارسال برای بررسی محرمانه",
  "contact.form.disclaimer": "دریافت فرم به معنی پذیرش نمایندگی نیست؛ پرونده ابتدا باید بررسی شود.",
  "contact.matter.1": "اختلاف تجاری در امارات",
  "contact.matter.2": "وصول مطالبات یا فاکتور پرداخت‌نشده",
  "contact.matter.3": "بازیابی دارایی یا پول ازدست‌رفته",
  "contact.matter.4": "کلاهبرداری یا سرمایه‌گذاری مشکوک",
  "contact.matter.5": "اختلاف شریک یا سهامدار",
  "contact.matter.6": "قرارداد یا پرونده ایران–امارات",
  "contact.matter.7": "سایر پرونده‌های مالی یا تجاری",
  "contact.urg.1": "فوری؛ احتمال انتقال دارایی یا از بین رفتن اسناد وجود دارد",
  "contact.urg.2": "فوری؛ طرف مقابل پاسخ نمی‌دهد",
  "contact.urg.3": "ظرف چند روز آینده نیاز به اقدام دارم",
  "contact.urg.4": "برای ارزیابی اولیه تماس می‌گیرم",
  "contact.urg.5": "فوریت مشخص نیست",
  "contact.include.kicker": "بررسی اولیه",
  "contact.include.h2": "چه اطلاعاتی به بررسی اولیه کمک می‌کند؟",
  "contact.include.1": "مبلغ تقریبی اختلاف یا طلب",
  "contact.include.2": "نام یا اطلاعات شخص/شرکت مقابل",
  "contact.include.3": "قرارداد، فاکتور، رسید پرداخت یا statement of account",
  "contact.include.4": "مکاتبات واتساپ، ایمیل یا پیام‌ها",
  "contact.include.5": "تاریخ شروع اختلاف و آخرین اقدام انجام‌شده",
  "contact.include.6": "اینکه طرف مقابل در امارات، ایران یا کشور دیگری است",
  "contact.urgent.h2": "چه زمانی نباید تأخیر کرد؟",
  "contact.urgent.body":
    "اگر پول جابه‌جا شده، طرف مقابل پاسخ نمی‌دهد، دسترسی به حساب یا اسناد قطع شده، احتمال انتقال دارایی وجود دارد یا مدارک در خطر است، بهتر است موضوع سریع‌تر بررسی شود.",
  "contact.whatsapp.title": "ارسال سریع از طریق واتساپ",
  "contact.whatsapp.body":
    "اگر توضیح کوتاه‌تری دارید، می‌توانید ابتدا از طریق واتساپ پیام بدهید و نوع پرونده، مبلغ تقریبی و طرف مقابل را ذکر کنید.",
  "contact.whatsapp.cta": "پیام در واتساپ",
  "contact.whatsapp.msg":
    "سلام، برای بررسی محرمانه یک پرونده تجاری یا مالی مرتبط با امارات پیام می‌دهم.",
  "contact.final.disclaimer":
    "دریافت پیام یا فرم به معنی پذیرش قطعی پرونده یا ایجاد رابطه وکیل و موکل نیست. پس از بررسی اولیه، مرحله بعدی و امکان پیگیری مشخص می‌شود.",
  "contact.success.title": "دریافت شد.",
  "contact.success.body":
    "خلاصه پرونده شما به‌صورت محرمانه دریافت شد. مسیر قابل بررسی و مرحله بعدی پیش از پذیرش هرگونه نمایندگی مشخص می‌شود.",
  "marquee.1": "وصیت‌نامه DIFC",
  "marquee.2": "دعاوی فرامرزی",
  "marquee.3": "استراتژی اقامت طلایی",
  "marquee.4": "حفاظت از دارایی",
  "marquee.5": "مشاوره تحریم‌ها",
  "marquee.6": "ساختاردهی شرکتی",
  "marquee.7": "هماهنگی بین‌المللی",
  "marquee.8": "مشاور دفتر خانوادگی",
  "marquee.9": "دعاوی املاک",
  "marquee.10": "دفاع حساس به اعتبار",

  // Homepage rebuild: commercial disputes and asset recovery
  "home.hero.kicker": "اختلافات تجاری ایران–امارات · بازیابی دارایی · وصول مطالبات",
  "home.hero.h1": "وکیل اختلافات تجاری و بازیابی دارایی برای ایرانی‌ها در امارات",
  "home.hero.lede":
    "اگر پول، طلب، سرمایه یا قرارداد تجاری شما در امارات گیر کرده، مسیر حقوقی هنوز قابل بررسی است. ما پرونده‌های تجاری ایران–امارات، وصول مطالبات، اختلاف شرکا و بازیابی دارایی را با رویکردی محرمانه و ساختاریافته پیگیری می‌کنیم.",
  "home.hero.cta.primary": "بررسی محرمانه پرونده",
  "home.hero.cta.secondary": "پیام در واتساپ",
  "home.hero.whatsappMsg":
    "سلام، برای بررسی محرمانه یک پرونده اختلاف تجاری یا بازیابی دارایی مرتبط با امارات پیام می‌دهم.",
  "home.hero.stat.1.v": "ایران–امارات",
  "home.hero.stat.1.l": "اختلاف تجاری",
  "home.hero.stat.2.v": "دارایی",
  "home.hero.stat.2.l": "بررسی بازیابی",
  "home.hero.stat.3.v": "مطالبات",
  "home.hero.stat.3.l": "مسیر وصول",
  "home.hero.available": "بررسی پرونده",
  "home.hero.location": "امارات · ایران",
  "home.hero.founder": "مشاور حقوقی",
  "home.hero.signature": "اختلافات تجاری",
  "home.hero.scroll": "پایین",
  "home.hero.est": "ایران · امارات · بازیابی دارایی",

  "home.pain.kicker": "وضعیت موکل",
  "home.pain.h2": "کدام مسئله شما را درگیر کرده؟",
  "home.pain.1.t": "تاجر واردکننده یا صادرکننده",
  "home.pain.1.b":
    "پول معامله، کالا، قرارداد یا تعهد طرف مقابل در امارات گیر کرده و نیاز به مسیر حقوقی روشن دارید.",
  "home.pain.2.t": "سرمایه‌گذار آسیب‌دیده",
  "home.pain.2.b":
    "سرمایه‌گذاری به نتیجه نرسیده، طرف مقابل پاسخ نمی‌دهد یا نشانه‌های کلاهبرداری دیده می‌شود.",
  "home.pain.3.t": "شریک درگیر اختلاف",
  "home.pain.3.b":
    "برداشت غیرمجاز، قفل شدن حساب، قطع دسترسی یا اختلاف مدیریتی، کنترل دارایی شرکت را تهدید می‌کند.",
  "home.pain.4.t": "صاحب کسب‌وکار کوچک یا متوسط",
  "home.pain.4.b":
    "فاکتورهای پرداخت‌نشده و بدهی‌های تجاری باعث فشار نقدینگی و ریسک عملیاتی شده‌اند.",
  "home.pain.5.t": "پرونده مرزی ایران–امارات",
  "home.pain.5.b":
    "قرارداد، پرداخت، اجرا، صلاحیت یا طرف تجاری بین ایران و امارات دچار ابهام شده است.",

  "home.axes.kicker": "دو مسیر حقوقی",
  "home.axes.h2": "دو مسیر اصلی خدمات",
  "home.axes.1.t": "اختلافات تجاری ایران–امارات",
  "home.axes.1.b1": "قراردادهای اجرا نشده",
  "home.axes.1.b2": "اختلاف با خریدار، فروشنده یا supplier",
  "home.axes.1.b3": "اختلاف نمایندگی، توزیع یا حمل‌ونقل",
  "home.axes.1.b4": "دعاوی و مطالبات تجاری",
  "home.axes.2.t": "بازیابی دارایی و وصول مطالبات",
  "home.axes.2.b1": "پول‌ها و مطالبات پرداخت‌نشده",
  "home.axes.2.b2": "ردیابی دارایی و بررسی مسیر بازیابی",
  "home.axes.2.b3": "پرونده‌های کلاهبرداری یا سرمایه‌گذاری مشکوک",
  "home.axes.2.b4": "اقدام حقوقی، مذاکره، اخطار و اجرا",

  "home.fast.kicker": "اقدام به‌موقع",
  "home.fast.h2": "در پرونده‌های مالی، تأخیر معمولاً به ضرر دارایی است",
  "home.fast.body":
    "هرچه زمان بیشتری بگذرد، حفظ اسناد، ردیابی پول، کنترل حساب‌ها، مذاکره مؤثر و اقدام حقوقی فوری دشوارتر می‌شود. بررسی اولیه کمک می‌کند مشخص شود اخطار رسمی، مذاکره، اقدام فوری، دعوا یا مسیر اجرای حقوقی مناسب‌تر است.",

  "home.process.kicker": "روند پرونده",
  "home.process.h2": "روند بررسی و شروع پرونده",
  "home.process.s1": "دریافت اطلاعات اولیه",
  "home.process.s2": "بررسی اسناد و طرف مقابل",
  "home.process.s3": "تشخیص مسیر حقوقی",
  "home.process.s4": "اقدام، مذاکره یا اخطار رسمی",
  "home.process.s5": "پیگیری تا نتیجه ممکن",

  "home.trust.kicker": "شناخت دو بازار",
  "home.trust.h2": "ترکیب شناخت بازار ایرانی با مسیر حقوقی امارات",
  "home.trust.body":
    "پرونده‌های ایران–امارات فقط مسئله ترجمه قرارداد نیستند. شناخت رفتار تجاری ایرانی، ساختار حقوقی امارات، مسیر مذاکره، دعوا، اجرا و محرمانگی باید هم‌زمان دیده شود.",
  "home.trust.item.1": "شناخت فرهنگ تجاری ایرانی",
  "home.trust.item.2": "مسیر حقوقی در امارات",
  "home.trust.item.3": "بررسی محرمانه اسناد",
  "home.trust.item.4": "فارسی، انگلیسی و عربی",
  "home.trust.item.5": "تمرکز بر پرونده‌های تجاری و مالی",

  "home.serviceCards.kicker": "خدمات",
  "home.serviceCards.h2": "خدمات تخصصی",
  "home.serviceCards.1": "اختلافات تجاری",
  "home.serviceCards.2": "بازیابی دارایی",
  "home.serviceCards.3": "وصول مطالبات",
  "home.serviceCards.4": "اختلاف شرکا",
  "home.serviceCards.5": "قراردادهای ایران–امارات",
  "home.serviceCards.link": "مشاهده خدمات",

  "home.faq.kicker": "پرسش‌ها",
  "home.faq.h2": "پرسش‌های رایج",
  "home.faq.1.q": "اگر خریدار در دبی پول کالا را پرداخت نکرد چه کنیم؟",
  "home.faq.1.a":
    "ابتدا قرارداد، فاکتور، رسید تحویل، مکاتبات و اطلاعات طرف مقابل بررسی می‌شود تا مسیر مناسب مثل مذاکره، اخطار رسمی، دعوا یا پیگیری وصول مطالبات مشخص شود.",
  "home.faq.2.q": "آیا بازیابی پول در امارات تضمینی است؟",
  "home.faq.2.a":
    "خیر. هیچ نتیجه حقوقی نباید تضمین شود. اما می‌توان مسیر حقوقی، مدارک، طرف مقابل، دارایی‌های قابل شناسایی و امکان اقدام را بررسی کرد.",
  "home.faq.3.q": "برای شروع پرونده اختلاف تجاری چه مدارکی لازم است؟",
  "home.faq.3.a":
    "قرارداد، فاکتور، رسید پرداخت، مکاتبات واتساپ یا ایمیل، اطلاعات شرکت یا شخص مقابل و خلاصه دقیق اتفاقات معمولاً برای بررسی اولیه لازم است.",
  "home.faq.4.q": "آیا بدون حضور در امارات می‌توان پرونده را بررسی کرد؟",
  "home.faq.4.a":
    "در بسیاری از موارد، بررسی اولیه اسناد و ارزیابی مسیر حقوقی می‌تواند از راه دور آغاز شود. برای اقدام رسمی، شرایط پرونده باید جداگانه بررسی شود.",
  "home.faq.5.q": "در اختلاف با شریک تجاری چه زمانی باید اقدام کرد؟",
  "home.faq.5.a":
    "وقتی دسترسی به حساب، اسناد، مدیریت، پرداخت‌ها یا دارایی شرکت محدود شده، تأخیر می‌تواند ریسک پرونده را بیشتر کند و بهتر است موضوع سریع بررسی شود.",

  "home.cta.h2": "قبل از اینکه مسیر بازیابی سخت‌تر شود، پرونده را بررسی کنید",
  "home.cta.body":
    "یک خلاصه کوتاه از موضوع، مبلغ تقریبی، طرف مقابل و مدارک موجود ارسال کنید. دریافت پیام به معنی پذیرش نمایندگی نیست؛ پرونده ابتدا بررسی می‌شود.",
  "home.cta.primary": "ارسال پرونده برای بررسی",
  "home.cta.secondary": "تماس از طریق واتساپ",
  "home.cta.whatsappMsg":
    "سلام، می‌خواهم یک پرونده اختلاف تجاری یا بازیابی دارایی را برای بررسی محرمانه ارسال کنم.",
};

const dict: Record<Lang, Dict> = { en, fa };

interface Ctx {
  lang: Lang;
  t: (k: string) => string;
  setLang: (l: Lang) => void;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fa");

  useEffect(() => {
    const stored =
      (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang)) || "fa";
    setLangState(stored);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
      document.documentElement.classList.toggle("font-fa", lang === "fa");
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (k: string) => dict[lang][k] ?? dict.en[k] ?? k;

  return (
    <I18nContext.Provider value={{ lang, setLang, t, dir: lang === "fa" ? "rtl" : "ltr" }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
