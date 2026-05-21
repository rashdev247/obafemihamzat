import IconFacebook from "../IconComponents/IconFacebook"
import IconInstragram from "../IconComponents/IconInstragram"
import IconTwitter from "../IconComponents/IconTwitter"
const BLOB_URL = process.env.NEXT_PUBLIC_BLOB_API_URL || "https://pluralpublic.blob.core.windows.net/website";
const one = `${BLOB_URL}/images/one.png`;
const mauth = `${BLOB_URL}/images/mauth.png`;
const belldon = `${BLOB_URL}/images/belldon.png`;
const micel = `${BLOB_URL}/images/micel.png`;
const two = `${BLOB_URL}/images/two.png`;
const three = `${BLOB_URL}/images/three.png`;
const four = `${BLOB_URL}/images/four.png`;
import IconYoutube from "../IconComponents/IconYoutube"
import IconLinkedIn from "../IconComponents/IconLinkedIn"

export const categories = [
  {name: "Market Prediction", active: true},
  {name: "Finance", active: false},
  {name: "Analytics", active: false},
  {name: "Content Generation", active: false},
  {name: "Customer Support", active: false},
]

export const testimonials = [
  {
    logo: mauth,
    hospital: "Modibbo Adama University Teaching Hospital, Yola",
    message:
      "NeoEHR supercharges productivity with intuitive tools, AI suggestions, voice-to-text, and live reports — streamlining patient tracking, inventory, and remote work for busy healthcare teams",
    name: "Dr Dahiru Yunusa",
    role: "Consultant Radiologist",
    backgroundColor: "#E6FAFF", // light blue
  },
  {
    logo: mauth,
    hospital: "Modibbo Adama University Teaching Hospital, Yola",
    message:
      "Since switching to Plural Health’s NeoEHR, we’ve seen faster prescription dispensing and tighter inventory control. It’s a clear upgrade that’s improved accuracy and efficiency across the board",
    name: "Pharm. Kish Ndungati",
    role: "Pharmacist",
    backgroundColor: "#D9D6FF", // light purple
  },
  {
    logo: belldon,
    hospital: "Bell Dome Consult Hospital",
    message:
      "NeoEHR has transformed our operations—boosting revenue recovery, closing billing loopholes, and adding transparency to test orders. Tracking hospital income is now seamless and accurate ",
    name: "Jerry Chima Ekeuhie",
    role: "Medical Laboratory Scientist",
    backgroundColor: "#E6FAFF", // light blue again
  },
  {
    logo: micel,
    hospital: "Micel Hospital",
    message:
      "NeoEHR meets all our clinical needs — outpatient, inpatient, lab, and pharmacy. It's user-friendly, efficient, and our staff adapted quickly with minimal training.",
    name: "Tolulope Kolawole",
    role: "IT & Administrative Manager",
    backgroundColor: "#F0EBFF", // soft lavender
  },
]
export const pricingFAQs = [
  {
    question: "Can I switch plans later?",
    answer: "Yes, you can upgrade or downgrade anytime.",
  },
  {
    question: "How long does setup take?",
    answer: "You can get started the same day. If migrating from another EHR and you require data migration, setup will take 7–14 days.",
  },
  {
    question: "Do I need IT staff to use NeoEHR?",
    answer: "No, NeoEHR is easy to use and needs no in-house IT staff.",
  },
  {
    question: "Do you offer discounts for government institutions or NGOs?",
    answer: "Yes, we provide special pricing for eligible organizations.",
  },
  {
    question: "Is support included in all plans?",
    answer: "Yes, every plan includes support, remote or in-person, based on your plan.",
  }
]
export const ContactUsFAQs = [
  {
    question: "What is Plural, and how does it improve healthcare?",
    answer: "Plural delivers connected digital solutions that streamline hospital operations, enhance health insurance management and improve patient experiences.",
  },
  {
    question: "Which healthcare organizations can benefit from Plural’s solutions",
    answer: "Plural supports hospitals, clinics, HMOs, insurers and community health programs with scalable, intelligent technology.",
  },
  {
    question: "How does Plural ensure data privacy and security?",
    answer: "Plural follows strict data protection standards, including end-to-end encryption, compliance with healthcare regulations and secure cloud infrastructure, to safeguard patient and provider information.",
  },
  {
    question: "Is Plural’s technology easy to integrate with existing systems?",
    answer: "Yes! Plural’s flexible APIs and interoperability features enable seamless integration with existing hospital, insurance, and government systems.",
  },
  {
    question: "How can I get started with Plural’s solutions?",
    answer: "Book a demo, contact our team, or explore our products to find the right solution for your needs.",
  }
]
export const pluralFAQs = [
  {
    question: "What is Plural, and how does it improve healthcare?",
    answer:
      "Plural delivers connected digital solutions that streamline hospital operations, enhance health insurance management and improve patient experiences.",
  },
  {
    question:
      "Which healthcare organizations can benefit from Plural’s solutions",
    answer:
      "Plural supports hospitals, clinics, HMOs, insurers and community health programs with scalable, intelligent technology.",
  },
  {
    question: "How does Plural ensure data privacy and security?",
    answer:
      "Plural follows strict data protection standards, including end-to-end encryption, compliance with healthcare regulations and secure cloud infrastructure, to safeguard patient and provider information.",
  },
  {
    question: "Is Plural’s technology easy to integrate with existing systems?",
    answer:
      "Yes! Plural’s flexible APIs and interoperability features enable seamless integration with existing hospital, insurance, and government systems.",
  },
  {
    question: "How can I get started with Plural’s solutions?",
    answer:
      "Book a demo, contact our team, or explore our products to find the right solution for your needs.",
  },
]
export const neoEhrFAQs = [
  {
    question: "What makes NeoEHR different from other EHRs",
    answer:
      "NeoEHR is designed specifically for hospitals in Sub-Saharan Africa, not retrofitted. It’s interoperable, scalable, and optimized for both online and offline use.",
  },
  {
    question: "What if I already use another EHR or paper records?",
    answer:
      "You can scan your patients’ records onto NeoEHR if you’re coming from paper. We will work with you to migrate your data if you currently use another system.",
  },
  {
    question: "Is onboarding fast and simple?",
    answer:
      "In a word, yes! You can begin seeing patients on NeoEHR on day 1 if you don’t need a data migration. We partner with you to make data migration as seamless as possible if you need it.",
  },
  {
    question: "How secure is our patient data?",
    answer:
      "We use bank-grade encryption and host on secure cloud servers. Data backups and access logs ensure compliance and safety.",
  },
  {
    question: "Can I track and improve performance across departments?",
    answer:
      "Yes. You can view department and clinic-focused data on dashboards and track particular performance metrics by building reports within NeoEHR.",
  },
]
export const myneofaq = [
  {
    question: "Is myNeo Health free to use?",
    answer:
      "Yes. myNeo Health is free for patients to download and use. Some features may depend on your hospital or insurance provider’s participation.",
  },
  {
    question: "Can I use myNeo Health without an internet connection?",
    answer:
      "myNeo Health supports offline functionality so you can still access your records and appointments even in areas with limited connectivity.",
  },
  {
    question: "Can I manage my children or parents from my account?",
    answer:
      "Absolutely. myNeo Health lets you add and manage dependents for health records, appointments, and insurance renewals.",
  },
  {
    question: "How do I know if my hospital supports myNeo Health?",
    answer:
      "If your hospital uses NeoEHR or is part of the Plural network, it’s already integrated. You can ask your provider or check inside the app.",
  },
  {
    question: "Can I use myNeo Health from abroad?",
    answer:
      "Yes. Nigerians in the diaspora can use myNeo Health to support care for loved ones back home—including paying for insurance or booking appointments.",
  },
]
export const neoInsureFaq = [
  {
    question: "Can individuals self-enroll on NeoInsure?",
    answer:
      "Yes. NeoInsure supports self-enrollment, allowing individuals to register and select plans that suit their healthcare needs directly through the platform.",
  },
  {
    question: "Does NeoInsure support corporate enrollment?",
    answer:
      "Absolutely. Companies, trade unions, and public organizations can enroll their employees or members into insurance plans under corporate packages, including support for assigning benefit options per individual.",
  },
  {
    question: "What kind of benefits and plans can be created?",
    answer:
      "Insurers can create custom plans with specific benefits, then link those plans to services or care options. Enrollees may optionally be able to select those plans during the enrollment process. This provides flexibility and control over coverage structures.",
  },
  {
    question: "How does NeoInsure handle healthcare providers?",
    answer:
      "HMOs and insurers can define provider networks, set up tariffs per service and associate them with specific benefits. NeoInsure automatically uses those tariffs in the invoicing and claims generation process. This ensures that providers follow agreed pricing and service terms.",
  },
  {
    question: "Is the claims process automated?",
    answer:
      "Yes. NeoInsure enables automated claims generation after services are delivered. Hospitals submit claims through NeoInsure and claims are linked to pre-approved authorizations where relevant.",
  },
]
export const blogFaqs = [
  {
    question: "What is Plural, and how does it improve healthcare?",
    answer:
      "Plural delivers connected digital solutions that streamline hospital operations, enhance health insurance management and improve patient experiences.",
  },
  {
    question:
      "Which healthcare organizations can benefit from Plural’s solutions",
    answer:
      "Plural supports hospitals, clinics, HMOs, insurers and community health programs with scalable, intelligent technology.",
  },
  {
    question: "What kind of benefits and plans can be created?",
    answer:
      "Plural supports hospitals, clinics, HMOs, insurers and community health programs with scalable, intelligent technology.",
  },
  {
    question: "Is Plural’s technology easy to integrate with existing systems?",
    answer:
      "Yes! Plural’s flexible APIs and interoperability features enable seamless integration with existing hospital, insurance, and government systems.",
  },
  {
    question: "How can I get started with Plural’s solutions?",
    answer:
      "Book a demo, contact our team, or explore our products to find the right solution for your needs.",
  },
]
export const SOCIAL_LINKS = [
  {
    id: 1,
    icon: <IconFacebook />,
    href: "https://www.facebook.com/pluralhealth",
  },
  {
    id: 2,
    icon: <IconInstragram />,
    href: "https://www.instagram.com/plural_health/",
  },
  {
    id: 3,
    icon: <IconTwitter />,
    href: "https://x.com/plural_health",
  },
  {
    id: 4,
    icon: <IconYoutube />,
    href: "https://www.youtube.com/@pluralhealth",
  },
  {
    id: 4,
    icon: <IconLinkedIn />,
    href: "https://www.linkedin.com/company/plural-health/",
  },
]

export const DELIVERABLES = [
  {
    id: 1,
    image: one,
    title: "Neo EHR",
    subtitle: "Smarter, faster, and simpler clinical workflows.",
    btnText: "Try NeoEHR for free",
    content:
      "Easily access your medical records, manage appointments, track insurance coverage and stay connected to your healthcare providers—all in one seamless app.",
  },
  {
    id: 2,
    image: two,
    title: "Neo Primary Care",
    subtitle: "Strengthening frontline care with smarter tools.",
    btnText: "Book a Demo",
    content:
      "Equip community health workers with an intuitive platform that simplifies patient management, enhances clinical decision-making with the National Standing Orders, and improves health outcomes at scale.",
  },
  {
    id: 3,
    image: three,
    title: "Neo Insure",
    subtitle: "Optimizing health insurance operations for insurers and HMOs.",
    btnText: "Book a Demo",
    content:
      "Scale enrolment, improve renewals and cut losses with an intelligent platform that automates claims processing, strengthens enrollee management and ensures better health outcomes.",
  },
  {
    id: 4,
    image: four,
    title: "myNeo Health",
    subtitle: "Smarter, faster, and simpler clinical workflows.",
    btnText: null,
    content:
      "Easily access your medical records, manage appointments, track insurance coverage and stay connected to your healthcare providers—all in one seamless app.",
  },
]

export const heroSliderCarouselData = [
  {
    id: 1,
    title: "Smart. Simple. Powerful healthcare—built for everyone",
    subtitle:
      "Delivering intelligent, easy-to-use solutions for healthcare providers, insurers and innovators.",
  },
  {
    id: 2,
    title: "A Complete Digital Health Ecosystem",
    subtitle:
      "From EHR to health insurance, our tools are built to serve every stakeholder in the healthcare ecosystem.",
  },
  {
    id: 3,
    title: "Simplifying Lab and Pharmacy Operations",
    subtitle:
      "Get faster, accurate results and seamless medication management with our integrated platform.",
  },
  {
    id: 4,
    title: "Better Care, Faster for Every Patient",
    subtitle:
      "Our software give patients fast access to health records and personalized care for better outcomes.",
  },
]
