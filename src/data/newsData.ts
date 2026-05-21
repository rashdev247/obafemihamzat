// Using blob storage URLs instead of importing PNG files
const BLOB_BASE_URL = process.env.NEXT_PUBLIC_BLOB_API_URL || "https://pluralpublic.blob.core.windows.net/website"

export const featuresNews = [
  {
    logo: `${BLOB_BASE_URL}/images/IconPunch.png`,
    link: "https://punchng.com/tech-outfit-unveils-digital-solutions-for-health-sector/?amp=",
  },
  {
    logo: `${BLOB_BASE_URL}/images/IconBusinessDay.png`,
    link: "https://businessday.ng/companies/article/plateaumed-rebrands-as-plural-health-in-digital-push-across-africa/?amp",
  },
  {
    logo: `${BLOB_BASE_URL}/images/IconLeadership.png`,
    link: "https://leadership.ng/plural-to-power-unified-patient-centered-care-with-intelligent-digital-health-tools/",
  },
  {
    logo: `${BLOB_BASE_URL}/images/IconNationalWire.png`,
    link: "https://nationalwire.com.ng/plural-health-emerges-to-tackle-africas-fragmented-healthcare-systems-with-intelligent-integrated-digital-infrastructure/",
  },
  {
    logo: `${BLOB_BASE_URL}/images/IconBusinessStandard.png`,
    link: "https://businessstandard.ng/2025/07/09/plural-health-emerges-to-tackle-africas-fragmented-healthcare-systems-with-intelligent-integrated-digital-infrastructure/",
  },
  {
    logo: `${BLOB_BASE_URL}/images/IconSuperNews.png`,
    link: "https://supernewsng.com/2025/07/09/plural-health-emerges-to-tackle-africas-fragmented-healthcare-systems-with-intelligent-integrated-digital-infrastructure/",
  },
  {
    logo: `${BLOB_BASE_URL}/images/IconBusinessNexus.png`,
    link: "https://businessnexus.com.ng/plural-health-emerges-to-tackle-africas-fragmented-healthcare-systems/",
  },
];
