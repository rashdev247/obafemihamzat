// Icon component names for dynamic loading
export const IconComponents = {
  IconCalender: 'IconCalender',
  IconJet: 'IconJet',
  IconScan: 'IconScan',
  IconJustice: 'IconJustice',
  IconComputer: 'IconComputer',
  IconWifi: 'IconWifi',
  IconBook: 'IconBook',
  IconAccess: 'IconAccess',
  IconRecord: 'IconRecord',
  IconShield: 'IconShield',
  IconUser: 'IconUser',
  IconBell: 'IconBell',
} as const;

// Using blob storage URLs instead of importing PNG files
const BLOB_BASE_URL = process.env.NEXT_PUBLIC_BLOB_API_URL || "https://pluralpublic.blob.core.windows.net/website"

export const benefits = [
  {
    title: "Simplifies Payments",
    description:
      "Accept all kinds of payments — cash, card, bank transfers, or patient wallets — powered by Moniepoint and Sterling. All transactions, one dashboard—instant receipts",
  },
  {
    title: "Saves you money",
    description:
      "Automate admin & billing, reduce pharmacy losses. Cut paper, printing, data entry",
  },
  {
    title: "Speeds up insurance operations",
    description:
      "Automate preauthorization requests & directly submit claims for our integrated insurers. Download claims for others, and improve operational efficiency.",
  },
  {
    title: "Improves Clinical Care",
    description:
      "Utilize standard clinical protocols & intelligent suggestions. Document faster with voice-to-text, and access complete patient histories at every point of care.",
  },
  {
    title: "Better Reporting & Oversight",
    description:
      "Monitor financials, patient volumes, clinical & staff metrics via real-time dashboards. Build reports with ease.",
  },
  {
    title: "Usable via desktop or mobile app",
    description:
      "Doing ward rounds as a nurse or doctor? No worries! Just download the NeoEHR app from the app store and work easily",
  },
  {
    title: "Stay connected, even offline",
    description:
      "NeoEHR supports offline functionality through our mobile app. Also, our hybrid version runs on local servers with cloud backup—so your hospital stays operational even when connectivity is limited.",
  },
  {
    title: "Easy onboarding",
    description:
      "We'll migrate your data, work with you to digitize your paper records and train your team.",
  },
];

export const features = [
  {
    icon: IconComponents.IconCalender,
    title: "Patient check-in and visit automation",
  },
  {
    icon: IconComponents.IconJet,
    title: "Faster payments integrated directly to your EHR",
  },
  {
    icon: IconComponents.IconScan,
    title: "Scan-as-you-go paper record digitization",
  },
  {
    icon: IconComponents.IconJustice,
    title: "Speedier insurance operations with our insurance integrations",
  },
  {
    icon: IconComponents.IconComputer,
    title: "Access on desktop and mobile",
  },
  {
    icon: IconComponents.IconWifi,
    title: "Works offline when internet is unstable",
  },
];

export const featuresPricing = [
  {
    icon: `${BLOB_BASE_URL}/images/IconDicom.png`,
    title: "DICOM/PACS Integration",
  },
  {
    icon: `${BLOB_BASE_URL}/images/IconTraining.png`,
    title: "Onsite Training: Priced based on location and facility size",
  },
  {
    icon: `${BLOB_BASE_URL}/images/IconDatabase.png`,
    title: "Data Migration: Starting from ₦150,000",
  },
  {
    icon: `${BLOB_BASE_URL}/images/IconChat.png`,
    title: "SMS Messaging: Pay-as-you-use pricing",
  },
  {
    icon: `${BLOB_BASE_URL}/images/IconPos.png`,
    title: "POS",
  },
  {
    icon: `${BLOB_BASE_URL}/images/IconIntegration.png`,
    title:
      "Custom Integrations: Quoted per project (e.g., HMO or lab integrations)",
  },
];

export const featuresMyNeo = [
  {
    icon: IconComponents.IconBook,
    title: "Book Appointments",
    content:
      "Schedule visits with your hospital, lab or doctor and avoid long queues.",
    color: "#E7E7FC",
  },
  {
    icon: IconComponents.IconAccess,
    content:
      "Join video or voice appointments with doctors directly through the app—convenient, private and secure.",
    title: "Access Teleconsults",
    color: "#E5F9FF",
  },
  {
    icon: IconComponents.IconRecord,
    content:
      "Access your prescriptions, diagnoses, lab results and referrals anytime.",
    title: "View Your Records",
    color: "#F2F1FE",
  },
  {
    icon: IconComponents.IconShield,
    title: "Track Your Insurance",
    content:
      "View active plans, coverage details, and renewal timelines in one tap.",
    color: "#E2F8EB",
  },
  {
    icon: IconComponents.IconBell,
    title: "Get Notified",
    content:
      "Receive reminders for appointments, vaccinations, medication refills, and health checks.",
    color: "#FFDBDB",
  },
  {
    icon: IconComponents.IconUser,
    title: "Manage Family Members",
    content:
      "Add dependents, track their care and pay their premiums from one account.",
    color: "#E7E7FC",
  },
];

export const neoInsureItems = [
  {
    title: "Sell Plans Faster",
    description:
      "Enrolment and renewal via USSD, web app, WhatsApp, POS agents and QR codes—even for diaspora buyers.",
    position: "top",
  },
  {
    title: "Tap into Diaspora Sales",
    description:
      "Diaspora-based family and friends can easily pay for or renew insurance plans for loved ones in Nigeria using our supported international payment options.",
    position: "left",
  },
  {
    title: "Sell to Groups & Corporates",
    description:
      "Use our Corporate Enrolment Portal to manage group policies and empower HR teams to handle staff benefits.",
    position: "center",
  },
  {
    title: "Grow with referrals",
    description:
      "Launch agent-led and peer-to-peer campaigns using our embedded referral tools.",
    position: "right",
  },
  {
    title: "Get Marketing Support",
    description:
      "We'll help you design targeted messaging for different customer segments and channels",
    position: "bottom",
  },
];
