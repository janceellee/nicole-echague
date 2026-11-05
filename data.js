// All portfolio content lives here so pages stay in sync.
// Anything in [brackets] is a placeholder for Nicole to fill in.
window.SITE = {
  name: "Nicole Echague",
  fullName: "Nicole Jancelle Echague",
  short: "Nicole",
  role: "Salesforce · GoHighLevel · Web Developer · API Integrations",
  location: "Philippines",
  upwork: "upwork.com/freelancers/nicolejancellee",
  github: "github.com/janceellee",
  availability: "Open to contract and full-time work with US teams"
};

// The four things Nicole leads with. Each links to the work that proves it.
window.PILLARS = [
  { id: "salesforce", title: "Salesforce", kicker: "CRM development",
    text: "Custom objects, flows, Apex and Experience Cloud portals, built sandbox-first and shipped to production.",
    points: ["Flows, Apex and Lightning components", "Experience Cloud partner portals", "Reports, dashboards and team training"],
    link: "work.html", linkLabel: "Salesforce case studies" },
  { id: "ghl", title: "GoHighLevel", kicker: "Marketing CRM",
    text: "Sub-accounts built end to end: pipelines, websites and funnels, AI agents, payments and compliant A2P messaging.",
    points: ["Pipelines, calendars and workflows", "Voice and conversation AI", "A2P 10DLC and Trust Center"],
    link: "systems.html#ghl", linkLabel: "GoHighLevel builds" },
  { id: "web", title: "Web development", kicker: "Design & build",
    text: "Brand-matched websites, funnels and landing pages, connected to a CRM from the first form.",
    points: ["Custom HTML, CSS and JavaScript", "GoHighLevel, WordPress and site builders", "Event and campaign pages"],
    link: "websites.html", linkLabel: "All websites" },
  { id: "api", title: "API integrations", kicker: "Connect everything",
    text: "REST APIs, webhooks and Zapier code steps that move data between CRMs, EHRs, accounting and order systems.",
    points: ["REST APIs, webhooks and Named Credentials", "Zapier, Make and custom code steps", "Two-way sync with error handling"],
    link: "systems.html#api", linkLabel: "See an integration" }
];

// Every website Nicole has designed and built. Screenshots live in assets/.
window.WEBSITES = [
  { id: "mino", title: "Mino", client: "Physician-led peptide therapy", shot: "assets/site-1.jpg", kind: "salesforce", kindLabel: "Company website",
    blurb: "The brand site for a New York peptide therapy clinic, with an age check, cookie consent and a contact form that creates records in Salesforce.",
    tools: ["WordPress", "Custom CSS", "Salesforce"] },
  { id: "backtheblue", title: "Back the Blue", client: "Mino partner campaign", shot: "assets/site-2.jpg", kind: "salesforce", kindLabel: "Campaign landing page",
    blurb: "A navy-and-gold campaign page for first responders and their unions, with a scrolling partner bar, radio tie-in and its own intake form.",
    tools: ["HTML/CSS", "Salesforce Sites", "Intake form"] },
  { id: "premier", title: "Premier Health", client: "Mino partner portal", shot: "assets/site-3.jpg", kind: "salesforce", kindLabel: "Partner portal",
    blurb: "A co-branded page for an in-person clinic partnership, with services, a doctor profile and visit requests that book straight into the EHR.",
    tools: ["Experience Cloud", "LWC", "EHR booking API"] },
  { id: "belkin", title: "Belkin × Mino", client: "Physician referral program", shot: "assets/site-4.jpg", kind: "salesforce", kindLabel: "Membership site",
    blurb: "A private membership site for a referring physician's patients, with membership tiers, FAQ, login and invoicing.",
    tools: ["Salesforce Sites", "Visualforce", "Invoicing"] },
  { id: "babe", title: "B.A.B.E. × Mino", client: "Women's wellness community", shot: "assets/site-5.jpg", kind: "salesforce", kindLabel: "Membership site + portal",
    blurb: "A soft, editorial membership site for a women's community, with its own member portal and an on-page assistant.",
    tools: ["Experience Cloud", "Member portal", "Custom typography"] },
  { id: "btoba", title: "BTOBA × Mino", client: "Officers' association", shot: "assets/site-6.jpg", kind: "salesforce", kindLabel: "Association program page",
    blurb: "A wellness program page for a bridge and tunnel officers' association, built around the association's own badge and colors.",
    tools: ["Experience Cloud", "Guest flows", "Intake"] },
  { id: "pasba", title: "PA-SBA × Mino", client: "Police union benefit", shot: "assets/site-7.jpg", kind: "salesforce", kindLabel: "Member benefit site",
    blurb: "A $0 member benefit site for a police union, with clear cost tiles, QR enrollment and leads routed into Salesforce.",
    tools: ["Website builder", "Email-to-Salesforce", "QR enrollment"] },
  { id: "northport", title: "Northport Wellness × Mino", client: "Practice partner", shot: "assets/site-8.jpg", kind: "salesforce", kindLabel: "Practice partner portal",
    blurb: "A portal where a wellness practice sets its own prices, invoices patients and has products shipped to their door.",
    tools: ["Experience Cloud", "Pricing & invoicing", "Video hero"] },
  { id: "wegotu", title: "We Got U", client: "Full-service marketing agency", shot: "assets/web-wegotu.jpg", kind: "ghl", kindLabel: "Agency website + funnels",
    blurb: "GoHighLevel website, funnels and lead-to-booking automation for a full-service marketing agency.",
    tools: ["GoHighLevel", "Funnels", "Calendars"] },
  { id: "goldengoose", title: "Golden Goose", client: "Creator platform", shot: "assets/web-goldengoose.jpg", kind: "ghl", kindLabel: "Platform site",
    blurb: "Platform site with pipeline stages, partner onboarding and automated follow-up.",
    tools: ["GoHighLevel", "Pipelines", "Workflows"] },
  { id: "optimizetax", title: "Optimize Tax Pro", client: "Tax preparation software", shot: "assets/web-optimizetax.jpg", kind: "ghl", kindLabel: "Marketing site",
    blurb: "Marketing site plus a client-intake pipeline, demo booking and reminder workflows.",
    tools: ["GoHighLevel", "Intake pipeline", "Demo booking"] },
  { id: "fundedva", title: "Funded VA", client: "VA home loans", shot: "assets/web-fundedva.jpg", kind: "ghl", kindLabel: "Lead-generation funnel",
    blurb: "Lead-generation funnel with a multi-step eligibility quiz wired into the CRM.",
    tools: ["GoHighLevel", "Quiz funnel", "Lead routing"] },
  { id: "infinite", title: "Infinite Revolution", client: "Overdrive Edition launch", shot: "assets/web-infinite.jpg", kind: "ghl", kindLabel: "Product launch page",
    blurb: "Product landing and launch build with automated capture, nurture and hand-off.",
    tools: ["GoHighLevel", "Launch funnel", "Webhooks"] },
  { id: "taxestogo", title: "Taxes To Go", client: "Mobile tax app", shot: "assets/web-taxestogo.jpg", kind: "ghl", kindLabel: "CRM + marketing site",
    blurb: "Full CRM and marketing-site build in GoHighLevel: pages, forms, pipelines and follow-up automation.",
    tools: ["GoHighLevel", "Forms", "Automation"] },
  { id: "seminar-va", title: "VA Home Loan Buyer Seminar", client: "Columbus, GA veterans campaign", shot: "assets/web-seminar-va.jpg", kind: "campaign", kindLabel: "Event registration",
    blurb: "Event registration page and seminar funnel for a veterans home-buying campaign.",
    tools: ["Eventbrite", "Seminar funnel", "Promotion"] },
  { id: "seminar-fishing", title: "Fishing for Buyers & Sellers", client: "Atlanta real-estate seminar", shot: "assets/web-seminar-fishing.jpg", kind: "campaign", kindLabel: "Event registration",
    blurb: "Real-estate seminar registration page and promotion for an Atlanta agent.",
    tools: ["Eventbrite", "Event page", "Promotion"] }
];

window.SITE_KINDS = [
  { id: "all", label: "All websites" },
  { id: "salesforce", label: "Salesforce-connected" },
  { id: "ghl", label: "GoHighLevel" },
  { id: "campaign", label: "Event campaigns" }
];

// Screens from inside client systems (from the 2026 PDF portfolio).
window.SYSTEMS = [
  { group: "ghl", title: "CRM dashboard", text: "Pipeline value, opportunities, contacts, tasks and appointment performance.", shot: "assets/ghl-dashboard.jpg" },
  { group: "ghl", title: "Opportunity pipeline", text: "Stage-level sales and fulfillment tracking with customer records.", shot: "assets/ghl-pipeline.jpg" },
  { group: "ghl", title: "Lead nurture workflow", text: "Lead capture, opportunity creation, booking and follow-up automation.", shot: "assets/ghl-nurture.jpg" },
  { group: "api", title: "Webhook CRM routing", text: "Webhook intake with assignment, tagging, email and notification branches.", shot: "assets/ghl-webhook.jpg" },
  { group: "ghl", title: "Voice AI receptionist", text: "Voice agent with call objectives, availability and response guidance.", shot: "assets/ghl-voice-ai.jpg" },
  { group: "ghl", title: "AI client portal", text: "Onboarding progress, document uploads, training and launch readiness.", shot: "assets/ghl-portal.jpg" },
  { group: "ghl", title: "A2P 10DLC registration", text: "Approved brand, campaign and phone registration for compliant SMS.", shot: "assets/ghl-a2p.jpg" },
  { group: "ghl", title: "Digital course", text: "Modules, lessons, certificates, pricing and controlled student access.", shot: "assets/ghl-course.jpg" },
  { group: "ghl", title: "Conversation AI assistant", text: "Website chat assistant with training, goals, rules and conversation logs.", shot: "assets/ghl-chat-ai.jpg" },
  { group: "ghl", title: "Membership offer", text: "Recurring membership with courses, workshops, resources and checkout.", shot: "assets/ghl-membership.jpg" },
  { group: "ghl", title: "Invoice management", text: "Draft, due, paid and overdue invoice monitoring and search.", shot: "assets/ghl-invoices.jpg" },
  { group: "ghl", title: "Invoice builder", text: "Business details, payment options, line items, taxes and preview.", shot: "assets/ghl-invoice-builder.jpg" },
  { group: "api", title: "Payment integrations", text: "Payment providers for invoices, orders, subscriptions and links.", shot: "assets/ghl-payments.jpg" },
  { group: "api", title: "Multi-step automation", text: "Triggers, filters, routing, record updates and downstream actions in Zapier.", shot: "assets/zap-multistep.jpg" },
  { group: "api", title: "Invoice and order orchestration", text: "Webhook intake, JavaScript parsing, formatting and order sync.", shot: "assets/zap-orders.jpg" },
  { group: "api", title: "Developer API connector", text: "Private authentication, custom actions, mapping and API automation.", shot: "assets/zap-api-connector.jpg" },
  { group: "zoho", title: "Financial dashboard", text: "Cash flow, receivables, payables, income and operating-expense reporting.", shot: "assets/zoho-dashboard.jpg" },
  { group: "zoho", title: "Inventory items", text: "Warehouse inventory, stock status, pricing and reorder visibility.", shot: "assets/zoho-inventory.jpg" },
  { group: "zoho", title: "Expense management", text: "Expense tracking across operating accounts and cost categories.", shot: "assets/zoho-expenses.jpg" },
  { group: "zoho", title: "Payments received", text: "Customer payments, invoice application, references and unused balances.", shot: "assets/zoho-payments.jpg" },
  { group: "zoho", title: "A/R aging", text: "Current and overdue balances organized for receivables monitoring.", shot: "assets/zoho-ar-aging.jpg" },
  { group: "zoho", title: "Bank reconciliation", text: "Statement-to-book matching with categorized and unmatched transactions.", shot: "assets/zoho-bankrec.jpg" },
  { group: "zoho", title: "Purchase orders", text: "Supplier orders, delivery dates, open commitments and billed values.", shot: "assets/zoho-po.jpg" },
  { group: "zoho", title: "Inventory adjustments", text: "Quantity corrections, warehouse adjustments and value movements.", shot: "assets/zoho-adjustments.jpg" },
  { group: "zoho", title: "Invoice creation", text: "Customer, payment terms, items, taxes, shipping and invoice preparation.", shot: "assets/zoho-invoice.jpg" },
  { group: "zoho", title: "Profit and loss", text: "Period-based income and expense reporting with account detail.", shot: "assets/zoho-pnl.jpg" }
];

window.SYSTEM_GROUPS = [
  { id: "all", label: "All screens" },
  { id: "ghl", label: "GoHighLevel" },
  { id: "api", label: "API & Zapier" },
  { id: "zoho", label: "Zoho finance" }
];

// A live client integration, step by step (GoHighLevel → Zapier → NetSuite).
window.API_FLOW = [
  { kind: "Trigger", app: "GoHighLevel", title: "Invoice webhook",
    text: "Fires on a new or paid invoice. The payload carries contact details, billing address, invoice number and prefix, issue date and the raw invoice-items block.",
    sample: '{\n  "event": "InvoicePaid",\n  "invoiceNumber": "INV-1042",\n  "issueDate": "2026-09-24",\n  "contact": { "name": "…", "email": "…" },\n  "invoiceItems": "Item: …\\nQty: 2\\nAmount: 149.00 …"\n}' },
  { kind: "Step", app: "Zapier Formatter", title: "Normalize dates",
    text: "Converts the invoice issue date and date of birth to MM/DD/YYYY, the format NetSuite expects.",
    sample: 'issueDate:  2026-09-24  →  09/24/2026\ndateOfBirth: 1990-03-07 →  03/07/1990' },
  { kind: "Step", app: "Zapier Code (JS)", title: "Parse line items",
    text: "Splits the raw invoiceItems text into blocks, pulls name, quantity and amount per line, validates them, and outputs a clean items_json array.",
    sample: 'const blocks = input.invoiceItems.split(/\\n(?=Item:)/);\nconst items = blocks.map(b => ({\n  name: b.match(/Item: (.*)/)[1].trim(),\n  qty: Number(b.match(/Qty: (\\d+)/)[1]),\n  amount: Number(b.match(/Amount: ([\\d.]+)/)[1])\n}));\nreturn { items_json: JSON.stringify(items) };' },
  { kind: "Action", app: "NetSuite", title: "Import order",
    text: "Creates the sales order, mapping name, email, phone, address, order number, order date, date of birth and the parsed line-items JSON.",
    sample: 'POST /record/v1/salesOrder\n{\n  "tranId": "INV-1042",\n  "tranDate": "09/24/2026",\n  "item": { "items": [ … parsed items_json … ] }\n}' }
];

// Client engagements (from the 2026 PDF portfolio).
window.ENGAGEMENTS = [
  { role: "Operations & Finance Administrator", org: "Bermuda Bulk Gases", when: "Mar 2025 – Sep 2026",
    scope: "Day-to-day finance operations for a bulk-gas distributor: AP, bank reconciliation, procurement and reporting on Zoho Books and Google Sheets, plus GoHighLevel administration.",
    did: ["Owned the full AP cycle: invoice intake, GL coding, approval routing and scheduled vendor payments, reconciled every month-end.", "Ran monthly bank reconciliations, cleared discrepancies and aged items, and kept audit-ready documentation.", "Managed the vendor lifecycle: onboarding, W-9 and payment details, PO tracking and payment-status updates."],
    tools: ["Zoho Books", "Zoho Inventory", "Google Sheets", "GoHighLevel", "SOPs"],
    result: "A clean, current, audit-ready AP function and documented processes the business can run without me." },
  { role: "GHL CRM & Operations Specialist", org: "We Got U", when: "Mar 2026 – Sep 2026",
    scope: "End-to-end GoHighLevel build and ongoing administration for a service business.",
    did: ["Configured the sub-account from the ground up: pipelines, stages, custom fields, tags, users and permissions.", "Built websites and funnel pages tied to CRM customer journeys, with an automated lead-to-booking flow.", "Set up automated stage movement, task creation and internal notifications so nothing sat idle."],
    tools: ["GoHighLevel", "Funnels", "Workflows", "Calendars", "Email / SMS"],
    result: "One system for pipeline, communication and booking that the team runs without outside help." },
  { role: "GHL CRM & Automation Specialist", org: "Infinite Revolution", when: "Sep 2025 – Mar 2026",
    scope: "Automation and integration layer for an existing GoHighLevel CRM.",
    did: ["Designed the automation backbone: multi-step workflows, triggers and internal notifications across capture, nurture and hand-off.", "Integrated GoHighLevel with external apps through APIs and webhooks for two-way data sync and automated status updates.", "Standardized fields, tags and pipeline stages, cleaned duplicates, and built pipeline and conversion dashboards."],
    tools: ["GoHighLevel", "API / Webhooks", "A2P 10DLC", "Dashboards"],
    result: "Reliable automated data flow and compliant messaging, with reporting leadership can trust." },
  { role: "GHL CRM & Web Specialist", org: "Bernard Gooden Real Estate", when: "Jan 2025 – Aug 2025",
    scope: "Full GoHighLevel setup for an individual real-estate agent.",
    did: ["Built and updated websites, landing pages, forms and calls to action connected to CRM journeys.", "Completed A2P 10DLC and Trust Center requirements: consent language, phone setup and email domains.", "Set up lead pipelines, automated follow-up, appointment booking and database-reactivation campaigns."],
    tools: ["GoHighLevel", "Websites / Funnels", "A2P 10DLC", "API / Webhooks"],
    result: "A working lead-to-close system for a solo agent, with reactivation campaigns bringing back old leads." },
  { role: "GHL Systems Specialist", org: "Golden Goose", when: "Jul 2024 – Dec 2024",
    scope: "Pipeline architecture and automation design in GoHighLevel.",
    did: ["Created pipelines and opportunity stages aligned with lead qualification, onboarding and service delivery.", "Configured triggers, workflows, task reminders, notifications, email, SMS, calendars, forms and surveys.", "Completed A2P 10DLC brand and campaign registration, documented processes and delivered walkthroughs."],
    tools: ["GoHighLevel", "Pipelines", "A2P 10DLC", "Surveys / Forms"],
    result: "A structured pipeline and automation set the team could operate confidently." },
  { role: "GHL CRM & Data Specialist", org: "Optimize Tax Pro", when: "Mar 2024 – Jun 2024",
    scope: "CRM data migration and system configuration for a tax practice.",
    did: ["Consolidated, cleaned, merged and imported client records into GoHighLevel without duplicates.", "Mapped fields, reviewed contact accuracy, maintained tags and stages, and verified complete records.", "Built client-intake pipelines, appointment scheduling, and document-request and reminder workflows."],
    tools: ["GoHighLevel", "Data Migration", "API / Webhooks", "Scheduling"],
    result: "A clean, deduplicated database and an intake process that runs on autopilot." },
  { role: "GHL Systems Specialist", org: "Producers Wealth", when: "Mar 2023 – Sep 2023",
    scope: "Ground-up GoHighLevel build for a financial-services practice.",
    did: ["Configured the sub-account, users, permissions, pipelines and custom fields.", "Built long-term follow-up sequences, appointment reminders and re-engagement campaigns across email and SMS.", "Completed A2P 10DLC registration, email authentication and consent and opt-out handling."],
    tools: ["GoHighLevel", "A2P 10DLC", "Email Auth", "SOPs"],
    result: "A compliant, fully documented CRM a financial team could adopt immediately." }
];

window.EDUCATION = [
  { title: "MBA", org: "National Dong Hwa University", note: "University Scholar" },
  { title: "BSBA, Financial Management", org: "Far Eastern University", note: "City Scholar · LSEG Scholar" },
  { title: "Certified Financial Information Associate", org: "February 2025", note: "Certification" },
  { title: "TOEIC 965", org: "English proficiency", note: "Certification" }
];

window.CATEGORIES = [
  { id: "all", label: "All work" },
  { id: "salesforce", label: "Salesforce builds" },
  { id: "integrations", label: "API integrations" },
  { id: "automation", label: "Automation" },
  { id: "portals", label: "Portals & web" }
];

window.CASES = [
  {
    id: "partner-portals",
    repo: true,
    title: "Co-branded partner portals",
    kicker: "Experience Cloud · 6 sites",
    summary: "A reusable portal template that let a telehealth clinic launch a branded landing page, intake form and patient flow for each new partner in days instead of weeks.",
    categories: ["portals", "salesforce"],
    released: "2026-10-27",
    status: "Live",
    role: "Lead developer — architecture, build, launch, documentation",
    timeline: "Sep – Oct 2026",
    org: "Mino, telehealth clinic (production org)",
    stack: ["Experience Cloud", "Lightning Web Components", "Apex", "Guest user sharing", "Custom domains / CDN", "Google Docs"],
    metrics: [
      { value: "6", label: "partner sites launched" },
      { value: "1", label: "shared template behind all of them" },
      { value: "[x] days", label: "from signed partner to live site" }
    ],
    problem: "Every new partner (employers, associations, member groups) needed its own branded page and intake path, and each one was being built by hand. Launches were slow, sites drifted apart, and patient data from each one arrived in a slightly different shape.",
    approach: [
      "Mapped what every partner actually needed: a landing page, an intake form, a booking or invoice path, and a way to track where leads came from.",
      "Built one Experience Cloud template with partner-specific branding (logo, colors, copy) driven by configuration instead of code.",
      "Routed every form into the same patient (lead) object with a partner field, so reporting worked the same across all sites.",
      "Worked out guest user access and sharing rules so public forms could create records without exposing any data."
    ],
    build: [
      { type: "Site", name: "Experience Cloud template with per-partner branding" },
      { type: "LWC", name: "Intake form component with validation and partner tagging" },
      { type: "Apex", name: "Guest-safe controller for creating patient records" },
      { type: "Config", name: "Custom domains on the CDN for each partner URL" },
      { type: "Docs", name: "Step-by-step guide so the team can launch the next partner" }
    ],
    outcome: [
      "Six partner sites live on one template, each with its own URL and branding.",
      "Every intake lands in Salesforce tagged with its partner, so the team can see volume per partner.",
      "A written launch guide means a new partner no longer depends on one person."
    ],
    lesson: "Custom domains on the CDN only accept Experience Cloud sites, which shaped the whole architecture. Finding that limit early saved a rebuild."
  },
  {
    id: "ehr-sync",
    repo: true,
    title: "EHR to Salesforce sync",
    kicker: "REST API · scheduled Apex",
    summary: "A two-way bridge between the clinic's electronic health record and Salesforce, so appointments and orders show up where the care team already works.",
    categories: ["integrations", "salesforce"],
    released: "2026-10-28",
    status: "Live in sandbox",
    role: "Developer — API design, build, testing",
    timeline: "Oct 2026",
    org: "Mino, telehealth clinic (sandbox, prod pending)",
    stack: ["Apex", "REST API", "Named Credentials", "Scheduled Apex", "Custom metadata"],
    metrics: [
      { value: "30 min", label: "sync interval" },
      { value: "0", label: "manual re-entry once live" },
      { value: "[x]", label: "records synced in testing" }
    ],
    problem: "Staff were copying appointment and order details by hand from the EHR into Salesforce. That was slow, and every copy was a chance for a typo in a patient record.",
    approach: [
      "Read the EHR API docs and mapped its patient, appointment and billing objects onto Salesforce fields.",
      "Stored credentials in Named Credentials so no secrets live in code.",
      "Ran the sync as scheduled Apex twice an hour, with each run picking up only what changed.",
      "Built and tested everything in a sandbox before asking for a production key."
    ],
    build: [
      { type: "Apex", name: "API client with retry and error logging" },
      { type: "Apex", name: "Scheduled sync jobs at :05 and :35 past the hour" },
      { type: "Metadata", name: "Product/SKU mapping table the team can edit without code" },
      { type: "Tests", name: "Mocked API tests covering success, timeout and bad data" }
    ],
    outcome: [
      "Appointments and orders sync automatically in sandbox.",
      "Product mapping lives in configuration, so new SKUs don't need a deploy.",
      "Ready for production once the clinic issues the live API key."
    ],
    lesson: "Sync jobs that hold locks on a class block deployments of that class. Pausing and restarting jobs became part of the deploy checklist."
  },
  {
    id: "lead-automation",
    repo: true,
    title: "Speed-to-lead and follow-up flags",
    kicker: "Flows · scheduled jobs",
    summary: "Automations that make sure no new patient waits too long for a reply and no unfinished order gets forgotten.",
    categories: ["automation", "salesforce"],
    released: "2026-10-29",
    status: "Live",
    role: "Developer — requirements, build, rollout",
    timeline: "Oct 2026",
    org: "Mino, telehealth clinic (production org)",
    stack: ["Record-triggered Flows", "Scheduled Apex", "List views", "Reports & dashboards"],
    metrics: [
      { value: "3", label: "automations shipped" },
      { value: "[x] min", label: "target first-response time" },
      { value: "0", label: "duplicate sends after launch" }
    ],
    problem: "New leads sometimes sat untouched, and orders that stalled halfway (missing payment, missing details) had no owner. The team only noticed when a patient complained.",
    approach: [
      "Defined exact rules with the clinic: what counts as needing follow-up, and after how long.",
      "Built a Needs Follow-up flag and an Incomplete Order flag that set themselves and clear themselves.",
      "Put flagged records into list views the team checks every morning.",
      "Checked historical records before turning it on, so old orders that had already been handled were not flagged again."
    ],
    build: [
      { type: "Flow", name: "Speed-to-lead routing and first-touch timer" },
      { type: "Apex", name: "Scheduled job that flags stale leads" },
      { type: "Apex", name: "Incomplete-order detector" },
      { type: "Views", name: "Team list views and a dashboard for follow-ups" }
    ],
    outcome: [
      "Every stalled lead or order now shows up in one list with a clear owner.",
      "Rolled out without re-sending anything to patients who had already been contacted.",
      "The team works from a queue instead of from memory."
    ],
    lesson: "Before turning on any automation that messages people, check which records already got that message by hand."
  },
  {
    id: "intake-forms",
    repo: true,
    title: "Website intake to Salesforce",
    kicker: "Web forms · lead capture",
    summary: "Connected outside websites and online stores to Salesforce so every inquiry becomes a tracked patient record, including in HIPAA-sensitive flows.",
    categories: ["integrations", "portals"],
    released: "2026-10-29",
    status: "Live",
    role: "Developer — form design, integration, QA",
    timeline: "Oct 2026",
    org: "Mino, telehealth clinic + partner sites",
    stack: ["Salesforce Sites", "Visualforce", "Email-to-record", "WooCommerce", "GoDaddy forms"],
    metrics: [
      { value: "4", label: "intake sources connected" },
      { value: "1", label: "patient object for all of them" },
      { value: "BAA", label: "signed before any health data flowed" }
    ],
    problem: "Inquiries came in from a store, partner websites and a landing page, and each one went to a different inbox. Some were never logged at all.",
    approach: [
      "Listed every place a patient could reach out and where that message ended up.",
      "Picked the right connector per source: direct form post, email-to-record, or store webhook.",
      "Made sure a Business Associate Agreement was signed before any health information moved.",
      "Matched incoming records against existing ones to avoid duplicates."
    ],
    build: [
      { type: "Site", name: "Branded intake forms hosted on Salesforce" },
      { type: "Email", name: "Email-to-record for forms that can only send email" },
      { type: "Webhook", name: "Store order to patient record" },
      { type: "Apex", name: "Duplicate matching on email and phone" }
    ],
    outcome: [
      "Inquiries from every connected source land in one place.",
      "Each record shows which site it came from.",
      "One source is still waiting on mail forwarding; the integration is built and ready."
    ],
    lesson: "An integration is only live when the data actually arrives. I test with a real submission end to end, not just the form."
  },
  {
    id: "sms-guardrails",
    repo: true,
    title: "SMS guardrails",
    kicker: "Messaging · compliance",
    summary: "Rules that stop patient texts from going out at 6 AM, plus the debugging that found why a whole line of texts was failing.",
    categories: ["automation", "integrations"],
    released: "2026-10-28",
    status: "Live",
    role: "Developer — diagnosis, fix, monitoring",
    timeline: "Oct 2026",
    org: "Mino, telehealth clinic (production org)",
    stack: ["Apex", "Phone/SMS API", "Scheduled jobs", "Custom settings"],
    metrics: [
      { value: "9–7", label: "ET sending window enforced" },
      { value: "1 day", label: "to find the root cause of failed texts" },
      { value: "0", label: "early-morning texts since" }
    ],
    problem: "Shipping and invoice texts were going out between 6 and 8 AM, and on one day texts from the main line simply stopped sending with no clear error.",
    approach: [
      "Traced when each automated text fired and found jobs that ignored the patient's local time.",
      "Added a quiet-hours check that holds messages and releases them at 9 AM ET.",
      "For the failed texts, checked the provider's logs, then billing, and found the SMS credit purchase had failed on an expired card.",
      "Wrote the steps down so the next person checks billing first."
    ],
    build: [
      { type: "Apex", name: "Quiet-hours hold queue" },
      { type: "Job", name: "Release job for held messages" },
      { type: "Setting", name: "Configurable sending window" },
      { type: "Runbook", name: "Troubleshooting steps for failed texts" }
    ],
    outcome: [
      "Patients only get texts between 9 AM and 7 PM ET.",
      "The failed-text issue was fixed in a day once billing was identified.",
      "Switching the sending number is a config change, not a code change."
    ],
    lesson: "Not every outage is a code problem. Checking the account and billing early can save hours of debugging."
  },
  {
    id: "qr-tracking",
    repo: true,
    title: "QR code library",
    kicker: "Tracking · Experience Cloud",
    summary: "A Salesforce tab for creating QR codes that count every scan, so the team can see which flyer, event or partner is bringing people in.",
    categories: ["salesforce", "portals"],
    released: "2026-10-29",
    status: "Live",
    role: "Developer — design and build",
    timeline: "Oct 2026",
    org: "Mino, telehealth clinic (production org)",
    stack: ["Custom objects", "Visualforce", "Guest user sharing", "Lightning tabs"],
    metrics: [
      { value: "1", label: "tab for every QR code" },
      { value: "Every", label: "scan counted" },
      { value: "[x]", label: "codes in use" }
    ],
    problem: "Printed QR codes pointed straight at websites, so nobody knew which flyer or event worked.",
    approach: [
      "Made each QR code point to a short redirect page that logs the scan, then sends the person on.",
      "Gave the team a tab to create codes, set their destination and see scan counts.",
      "Added a sharing rule so the public redirect page can record scans safely."
    ],
    build: [
      { type: "Object", name: "QR Code record with destination and scan count" },
      { type: "Page", name: "Public redirect page that counts and forwards" },
      { type: "Tab", name: "QR Codes tab for creating and tracking codes" }
    ],
    outcome: [
      "Every printed code is now measurable.",
      "Destinations can change without reprinting anything."
    ],
    lesson: "A redirect you control is worth more than a direct link. It gives you data and lets you fix mistakes after printing."
  },
  {
    id: "order-error-report",
    title: "Daily failed-order report",
    kicker: "Zapier · Google Sheets",
    summary: "An automated report that collects every failed fulfillment order each weekday and puts it in front of the person who can fix it.",
    categories: ["automation", "integrations"],
    released: "2026-10-20",
    status: "Live",
    role: "Builder — workflow and mapping",
    timeline: "Oct 2026",
    org: "Mino, telehealth clinic + fulfillment partner",
    stack: ["Zapier", "Google Sheets", "Gmail", "Scheduled tasks"],
    metrics: [
      { value: "1:45 PM", label: "daily report, weekdays" },
      { value: "Mon", label: "covers Sat through Mon" },
      { value: "0", label: "orders lost in an inbox" }
    ],
    problem: "Orders sent to the fulfillment partner sometimes failed with a vague error, and failures were buried in email.",
    approach: [
      "Found the most common cause: product names in Zapier didn't exactly match the partner's item list.",
      "Built a SKU-to-item mapping table so names always match.",
      "Set up a weekday report that gathers failures into a private sheet and sends a notice."
    ],
    build: [
      { type: "Zap", name: "Order sender with SKU-to-item mapping" },
      { type: "Task", name: "Weekday failed-order collector" },
      { type: "Sheet", name: "Private daily report with notification" }
    ],
    outcome: [
      "Failed orders are caught the same day.",
      "The most common error is now prevented by the mapping table."
    ],
    lesson: "When an error says \"please choose an item\", the problem is usually the data, not the automation."
  }
];

window.SERVICES = [
  {
    id: "build", title: "Salesforce development",
    blurb: "Custom objects, flows, Apex and Lightning components that fit how your team works.",
    deliverables: ["Data model and page layouts", "Record-triggered and scheduled flows", "Apex classes with tests", "Experience Cloud portals", "Sandbox to production deployment"],
    timeline: "[2–6 weeks]", cases: ["lead-automation", "qr-tracking", "partner-portals"]
  },
  {
    id: "ghl", title: "GoHighLevel systems",
    blurb: "Sub-accounts built end to end and tied to real customer journeys, with compliant messaging from day one.",
    deliverables: ["Pipelines, stages and custom fields", "Websites, funnels and forms", "Calendars and booking", "Email and SMS workflows", "Voice and conversation AI", "A2P 10DLC and Trust Center"],
    timeline: "[1–4 weeks]", cases: []
  },
  {
    id: "web", title: "Website design & development",
    blurb: "Custom websites, funnels and landing pages, designed for the brand and wired into your CRM.",
    deliverables: ["Design direction and layout", "Responsive build", "Forms connected to your CRM", "Custom domain and SSL", "Speed and SEO basics"],
    timeline: "[1–4 weeks per site]", cases: ["partner-portals", "intake-forms"]
  },
  {
    id: "integrations", title: "API integrations",
    blurb: "Connect your CRM to your EHR, accounting, store, phone system or anything else with an API.",
    deliverables: ["API mapping document", "Secure auth (Named Credentials, private apps)", "Webhooks and scheduled sync", "Zapier and Make with code steps", "Error logging and alerts", "Runbook for your team"],
    timeline: "[1–8 weeks]", cases: ["ehr-sync", "intake-forms", "sms-guardrails"]
  },
  {
    id: "finance", title: "Finance operations",
    blurb: "Accounts payable and expense management kept clean, current and audit-ready.",
    deliverables: ["Invoice intake and GL coding", "Approval routing and vendor payments", "Bank reconciliation", "Month-end close support", "W-9 and 1099 support", "Power BI and Excel reporting"],
    timeline: "[Monthly retainer]", cases: []
  },
  {
    id: "support", title: "Ongoing admin & support",
    blurb: "A dependable person for fixes, small changes, user questions and safe releases.",
    deliverables: ["Monthly hours block", "Fix and change requests", "Release checks before every deploy", "User training sessions"],
    timeline: "[Monthly retainer]", cases: []
  }
];

window.SKILLS = [
  { group: "Salesforce", items: [
    { name: "Apex", cases: ["ehr-sync", "lead-automation", "sms-guardrails", "partner-portals"] },
    { name: "Flows", cases: ["lead-automation"] },
    { name: "Lightning Web Components", cases: ["partner-portals"] },
    { name: "Experience Cloud", cases: ["partner-portals", "qr-tracking"] },
    { name: "Visualforce", cases: ["qr-tracking", "intake-forms"] },
    { name: "Sharing & guest access", cases: ["partner-portals", "qr-tracking"] },
    { name: "Reports & dashboards", cases: ["lead-automation"] }
  ]},
  { group: "GoHighLevel", items: [
    { name: "Sub-account builds", cases: [] },
    { name: "Pipelines & calendars", cases: [] },
    { name: "Workflows & automations", cases: [] },
    { name: "Voice & conversation AI", cases: [] },
    { name: "Courses, memberships & payments", cases: [] },
    { name: "A2P 10DLC & Trust Center", cases: [] }
  ]},
  { group: "API integrations", items: [
    { name: "REST APIs", cases: ["ehr-sync"] },
    { name: "Webhooks", cases: ["intake-forms"] },
    { name: "Named Credentials", cases: ["ehr-sync"] },
    { name: "Zapier & Make (with code steps)", cases: ["order-error-report"] },
    { name: "SMS / telephony APIs", cases: ["sms-guardrails"] },
    { name: "NetSuite, Zoho & payment providers", cases: [] }
  ]},
  { group: "Web development", items: [
    { name: "HTML, CSS & JavaScript", cases: ["partner-portals"] },
    { name: "Responsive layout", cases: ["partner-portals"] },
    { name: "WordPress & site builders", cases: [] },
    { name: "Custom domains & DNS", cases: ["partner-portals"] }
  ]},
  { group: "Finance & data", items: [
    { name: "QuickBooks Online & Zoho Books", cases: [] },
    { name: "AP, reconciliation & month-end close", cases: [] },
    { name: "Advanced Excel & VBA", cases: [] },
    { name: "Power BI dashboards", cases: [] }
  ]}
];
