import { getBlobImageUrl } from "@/lib/blobImages";

export const campaignSite = {
  name: "Dr. Kadri Obafemi Hamzat",
  shortName: "Obafemi Hamzat",
  title: "Obafemi Hamzat 2027 | For A Greater Lagos",
  description:
    "A modern Lagos-focused campaign platform for Dr. Kadri Obafemi Hamzat's 2027 governorship movement: competence, stability, innovation, and inclusion.",
  url: "https://drobafemihamzat.vercel.app",
  officialUrl: "https://www.obafemihamzat.com/",
  tagline: "For A Greater Lagos",
};

export const campaignNavItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Hamzat" },
  { href: "/vision-2027", label: "Vision 2027" },
  { href: "/achievements", label: "Impact" },
  { href: "/news", label: "News" },
  { href: "/join", label: "Join" },
];

export const campaignImages = {
  community: getBlobImageUrl(
    "i-attended-the-lagos-state-cooperative-federation-_lascofed_-cooperative-festival.the-lagos-stat_hefsrg.jpg",
  ),
  impact: getBlobImageUrl("i-represented-the-governor-of-lagos-state-mr-babajide-olusola-sanwo-olu-as-special-guest-at-the_ocylpk.jpg"),
  infrastructure: getBlobImageUrl(
    "today-i-joined-the-governor-of-lagos-state-mr-babajide-olusola-sanwo-olu-as-we-inaugurated-the-_4_afunb1.jpg",
  ),
  leadership: getBlobImageUrl(
    "today-i-met-with-former-governor-and-minister-mr-babatunde-raji-fashola-and-hon.-olajumoke-oko-_11_eyp1pb.jpg",
  ),
  publicService: getBlobImageUrl(
    "i-want-to-congratulate-mr.-governor-babajide-sanwo-olu-on-the-successful-presentation-of-the-ye_qfkimw.jpg",
  ),
  ramadan: getBlobImageUrl(
    "today-i-attended-the-annual-ramadan-lecture-hosted-by-the-ansar-ud-deen-society-of-nigeria-lag_t8z0fl.jpg",
  ),
  youth: getBlobImageUrl(
    "today-i-represented-the-governor-at-the-opening-of-the-duke-of-edinburgh-international-award-ig_w7lt7l.jpg",
  ),
};

export const movementStats = [
  {
    value: "25+",
    label: "Years Service",
    description: "Continuous public service, technology, and governance",
  },
  {
    value: "2x",
    label: "Deputy Governor",
    description: "Elected in 2019 and re-elected in 2023",
  },
  {
    value: "1st",
    label: "Oracle ERP",
    description: "Led Africa-first public-sector Oracle ERP deployment",
  },
  {
    value: "2013",
    label: "Lagos Man",
    description: "Recognized for service, reform, and innovation",
  },
];

export const primaryResult = {
  videoUrl:
    "https://res.cloudinary.com/duafntunw/video/upload/v1779466522/AQPRK7XozdV_u-3CU_a009KbdWTG1RuEbGg4doFeWbGJwvxGNSOw7e7reWznsr4gEDQMzzYvwFF4RkK99SyNc80KtPNsxDGM4TBHZx0_fu8kds.mp4",
  mediaSlides: [
    {
      type: "video",
      src: "https://res.cloudinary.com/duafntunw/video/upload/v1779466522/AQPRK7XozdV_u-3CU_a009KbdWTG1RuEbGg4doFeWbGJwvxGNSOw7e7reWznsr4gEDQMzzYvwFF4RkK99SyNc80KtPNsxDGM4TBHZx0_fu8kds.mp4",
      title: "Primary declaration video",
      caption: "Campaign film from the APC primary result declaration.",
    },
    {
      type: "image",
      src: getBlobImageUrl("primary-election-images-1_mu24qh.jpg"),
      title: "Primary election moment 01",
      caption: "The result declaration begins at the APC secretariat in Ikeja.",
    },
    {
      type: "image",
      src: getBlobImageUrl("primary-election-images-2_io60ho.jpg"),
      title: "Primary election moment 02",
      caption: "Party leaders and supporters gather for the official outcome.",
    },
    {
      type: "image",
      src: getBlobImageUrl("primary-election-images-3_hgwchi.jpg"),
      title: "Primary election moment 03",
      caption: "A chronological look at the May 21 primary proceedings.",
    },
    {
      type: "image",
      src: getBlobImageUrl("primary-election-images-4_hjezlb.jpg"),
      title: "Primary election moment 04",
      caption: "The APC Lagos 2027 campaign enters its next phase.",
    },
  ],
  label: "APC primary result",
  title:
    "Hamzat emerges APC’s Lagos 2027 governorship candidate.",
  description:
    "The incumbent Deputy Governor of Lagos State secured the APC governorship ticket after polling 657,974 votes in the primary held on 21 May 2026.",
  location: "APC Secretariat, Ikeja",
  resultDate: "21 May 2026",
  resultSummary:
    "Hamzat defeated his sole rival, who received one vote, with the result declared at the APC secretariat in Ikeja.",
  highlights: [
    {
      value: "657,974",
      label: "Votes polled",
    },
    {
      value: "1",
      label: "Vote for sole rival",
    },
    {
      value: "2019",
      label: "Deputy Governor since",
    },
  ],
};

export const heroSlides = [
  {
    image: campaignImages.impact,
    title: "Experience Meets Vision",
    caption:
      "A tested public servant ready to move Lagos into its next chapter.",
  },
  {
    image: campaignImages.leadership,
    title: "Leadership In Motion",
    caption:
      "A campaign grounded in listening, consultation, and steady delivery.",
  },
  {
    image: campaignImages.infrastructure,
    title: "Infrastructure That Connects",
    caption:
      "Roads, rail, waterways, and public works shaped around everyday movement.",
  },
  {
    image: campaignImages.youth,
    title: "A Future Built With Youth",
    caption:
      "Digital skills, enterprise, education, and opportunity for the next generation.",
  },
  {
    image: campaignImages.community,
    title: "Grassroots Energy",
    caption:
      "A people-powered campaign listening across communities, markets, campuses, and wards.",
  },
];

export const lagosAudience = [
  "Students in Ikorodu",
  "Traders in Balogun",
  "Tech founders in Yaba",
  "Fishermen in Epe",
  "Professionals in Victoria Island",
  "Families across Alimosho",
];

export const biographyTimeline = [
  {
    year: "Early Career",
    title: "Engineer and Global Technocrat",
    description:
      "Built experience across technology, finance, and public administration before entering public service.",
  },
  {
    year: "Science & Tech",
    title: "Commissioner for Science and Technology",
    description:
      "Led technology-driven public sector modernization and helped advance Lagos' digital foundations.",
  },
  {
    year: "Works",
    title: "Special Adviser on Works",
    description:
      "Contributed to infrastructure planning, delivery discipline, and transportation-focused public works.",
  },
  {
    year: "2019 - Present",
    title: "Deputy Governor of Lagos State",
    description:
      "Serving alongside Governor Babajide Sanwo-Olu in one of Africa's largest city economies.",
  },
  {
    year: "2027",
    title: "APC Consensus Choice",
    description:
      "Reported by major Nigerian media as the APC/GAC consensus choice for the Lagos 2027 governorship race.",
  },
];

export const visionPillars = [
  {
    title: "Digital Lagos 2.0",
    summary:
      "A smarter government, connected economy, digital public services, innovation hubs, and AI-ready civic systems.",
  },
  {
    title: "Infrastructure Revolution",
    summary:
      "Roads, rail, waterways, smart mobility, and priority corridors that move Lagosians faster and safer.",
  },
  {
    title: "Education & Human Capital",
    summary:
      "Modern public schools, STEM learning, digital literacy, vocational empowerment, and teacher development.",
  },
  {
    title: "Healthcare for All",
    summary:
      "Stronger primary healthcare, maternal care, emergency response, digital health, and community clinics.",
  },
  {
    title: "Economic Prosperity",
    summary:
      "More SMEs, youth empowerment, investment pathways, entrepreneurship funding, and business-friendly reforms.",
  },
  {
    title: "Security & Safety",
    summary:
      "Smarter safety infrastructure, community response systems, and faster emergency coordination.",
  },
];

export const achievements = [
  {
    title: "Digital Transformation",
    description:
      "Technology-led reforms helped position Lagos as one of Africa's most digitally ambitious governments.",
    metric: "11 ERP modules",
  },
  {
    title: "Lekki-Ikoyi Link Bridge",
    description:
      "Contributions to landmark infrastructure strengthened connectivity, reduced travel pressure, and supported commerce.",
    metric: "First cable-stayed",
  },
  {
    title: "Public Service Reform",
    description:
      "Systems thinking, technology integration, and administrative discipline improved public sector delivery.",
    metric: "Ghost workers cut",
  },
  {
    title: "Youth & Innovation",
    description:
      "Support for innovation, entrepreneurship, and digital literacy remains central to the Lagos of tomorrow.",
    metric: "Future ready",
  },
];

export const roadmap = [
  {
    phase: "First 100 Days",
    title: "Open Government Sprint",
    description:
      "Publish a transparent delivery dashboard, confirm priority corridors, and activate citizen feedback loops.",
  },
  {
    phase: "Year One",
    title: "Smart Service Delivery",
    description:
      "Digitize high-demand government services and expand community-level access through mobile-first channels.",
  },
  {
    phase: "2027 - 2031",
    title: "Inclusive Lagos Growth",
    description:
      "Scale jobs, education, transport, healthcare, and innovation programs across all five divisions of Lagos.",
  },
];

export const movementRoles = [
  "Volunteer",
  "Ward Coordinator",
  "Youth Mobilizer",
  "Women Coalition",
  "Campus Ambassador",
  "Media Partnership",
  "Event Registration",
  "Donation Interest",
];

export const campaignUpdates = [
  {
    source: "Press",
    title: "GAC adopts Hamzat as APC consensus governorship candidate",
    date: "April 28, 2026",
    href: "https://www.channelstv.com/2026/04/28/2027-gac-adopts-hamzat-as-apcs-consensus-governorship-candidate/",
  },
  {
    source: "Press",
    title: "Tinubu endorses Hamzat as Lagos APC consensus candidate",
    date: "April 29, 2026",
    href: "https://www.channelstv.com/2026/04/29/2027-tinubu-endorses-hamzat-as-lagos-apc-consensus-governorship-candidate/",
  },
  {
    source: "Campaign",
    title: "Official Obafemi Hamzat 2027 campaign platform",
    date: "Live",
    href: "https://www.obafemihamzat.com/",
  },
];

export type CampaignGalleryItem = {
  image: string;
  title: string;
  caption: string;
};

export const galleryItems: CampaignGalleryItem[] = [
  {
    image: campaignImages.leadership,
    title: "Experience",
    caption: "Leadership consultations with Lagos stakeholders.",
  },
  {
    image: campaignImages.infrastructure,
    title: "Infrastructure",
    caption: "Inspection and commissioning moments across Lagos.",
  },
  {
    image: campaignImages.impact,
    title: "Movement",
    caption: "A people-powered coalition across communities.",
  },
  {
    image: campaignImages.community,
    title: "Community",
    caption: "Engagements with cooperatives and grassroots groups.",
  },
  {
    image: campaignImages.youth,
    title: "Youth",
    caption: "Opening pathways for young people and civic service.",
  },
  {
    image: campaignImages.ramadan,
    title: "Faith & Service",
    caption: "Public leadership rooted in respect and community.",
  },
];

export const lagosZones = [
  {
    name: "Lagos West",
    focus: "Jobs, transport relief, SMEs, and family-centered services.",
    wards: "Alimosho, Badagry, Ojo, Ikeja axis",
  },
  {
    name: "Lagos Central",
    focus: "Markets, public safety, enterprise, and waterfront renewal.",
    wards: "Lagos Island, Surulere, Apapa, Eti-Osa axis",
  },
  {
    name: "Lagos East",
    focus: "Education, digital access, agriculture, and blue economy growth.",
    wards: "Ikorodu, Epe, Ibeju-Lekki, Kosofe axis",
  },
];
