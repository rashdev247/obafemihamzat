import { useI18n } from "@/lib/i18n";
import type { LanguageCode } from "@/data/preferences";
import { useMemo } from "react";

const en = {
  home: {
    head: {
      title: "Kadri Obafemi Hamzat 2027 | APC Lagos Governorship Candidate",
      description:
        "Official campaign platform for Dr. Kadri Obafemi Hamzat, APC candidate for Lagos Governor 2027. Explore his Greater Lagos vision, achievements, news, and volunteer updates.",
    },
    hero: {
      label: "APC Governorship Candidate 2027",
      title: "Experience Meets Vision For A Greater Lagos.",
      description:
        "KOH 2027 is a people-first movement built on public service, digital transformation, infrastructure delivery, and a Lagos that creates opportunity across every division.",
      secondaryCta: "Explore The Manifesto",
    },
    heroSlides: [
      {
        title: "Experience Meets Vision",
        caption: "A tested public servant ready to move Lagos into its next chapter.",
      },
      {
        title: "Leadership In Motion",
        caption: "A campaign grounded in listening, consultation, and steady delivery.",
      },
      {
        title: "Infrastructure That Connects",
        caption:
          "Roads, rail, waterways, and public works shaped around everyday movement.",
      },
      {
        title: "A Future Built With Youth",
        caption:
          "Digital skills, enterprise, education, and opportunity for the next generation.",
      },
      {
        title: "Grassroots Energy",
        caption:
          "A people-powered campaign listening across communities, markets, campuses, and wards.",
      },
    ],
    leader: {
      imageTitle: "The Leader Lagos Trusts",
      imageCaption: "A movement grounded in public service, not noise.",
      label: "The leader Lagos trusts",
      title: "Not new to service. Built for the next chapter.",
      description:
        "From transforming Lagos' digital infrastructure to serving as Deputy Governor since 2019, Dr. Obafemi Hamzat's leadership has consistently focused on building a smarter, safer, and more prosperous Lagos for everyone.",
      qualities: ["Engineer", "Technocrat", "Reformer", "Bridge-builder"],
      quote: "A Lagos that works for everyone.",
    },
    stats: [
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
    ],
    audience: {
      label: "For every Lagosian",
      title: "The future of Lagos must include everyone.",
      description:
        "Whether you are building a business, learning a skill, moving through traffic, raising a family, or serving your community, this movement is designed around your future.",
      items: [
        "Students in Ikorodu",
        "Traders in Balogun",
        "Tech founders in Yaba",
        "Fishermen in Epe",
        "Professionals in Victoria Island",
        "Families across Alimosho",
      ],
    },
    vision: {
      label: "Vision 2027",
      title: "The next chapter of Lagos.",
      description:
        "Presidential in discipline, Lagos in spirit, and technology-forward in execution.",
      cta: "Read the full manifesto",
      pillars: [
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
      ],
    },
    map: {
      title: "Live Campaign Map",
      activeFocus: "Active focus",
      listeningTours: "Community listening tours",
      eventCalendar: "Event calendar opening soon",
      zones: [
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
      ],
    },
    press: {
      label: "News and press",
      title: "Live campaign updates.",
      description:
        "Verified updates, public reporting, and campaign announcements in one place.",
      updates: [
        {
          source: "Press",
          title: "GAC adopts Hamzat as APC consensus governorship candidate",
          date: "April 28, 2026",
        },
        {
          source: "Press",
          title: "Tinubu endorses Hamzat as Lagos APC consensus candidate",
          date: "April 29, 2026",
        },
        {
          source: "Campaign",
          title: "Official Obafemi Hamzat 2027 campaign platform",
          date: "Live",
        },
      ],
    },
    primaryResult: {
      label: "APC primary result",
      title: "Hamzat emerges APC's Lagos 2027 governorship candidate.",
      description:
        "The incumbent Deputy Governor of Lagos State secured the APC governorship ticket after polling 657,974 votes in the primary held on 21 May 2026.",
      resultSummary:
        "Hamzat defeated his sole rival, who received one vote, with the result declared at the APC secretariat in Ikeja.",
      declared: "Declared at APC Secretariat, Ikeja on 21 May 2026.",
      highlights: ["Votes polled", "Vote for sole rival", "Deputy Governor since"],
      mediaTypeVideo: "Campaign film",
      mediaTypePhoto: "Primary photo archive",
      mediaSlides: [
        {
          title: "Primary declaration video",
          caption: "Campaign film from the APC primary result declaration.",
        },
        {
          title: "Primary election moment 01",
          caption: "The result declaration begins at the APC secretariat in Ikeja.",
        },
        {
          title: "Primary election moment 02",
          caption:
            "Party leaders and supporters gather for the official outcome.",
        },
        {
          title: "Primary election moment 03",
          caption: "A chronological look at the May 21 primary proceedings.",
        },
        {
          title: "Primary election moment 04",
          caption: "The APC Lagos 2027 campaign enters its next phase.",
        },
      ],
      featureCards: [
        {
          title: "Media kit",
          copy: "Official result clips, visuals, and press assets.",
        },
        {
          title: "Speeches",
          copy: "Remarks, acceptance notes, and public statements.",
        },
        {
          title: "Campaign films",
          copy: "Short films and video moments from the movement.",
        },
      ],
    },
    gallery: {
      label: "Campaign gallery",
      title: "Lagos in motion.",
      description:
        "The imagery is human-centered: public service, infrastructure, youth, communities, and leadership presence.",
      items: [
        { title: "Experience", caption: "Leadership consultations with Lagos stakeholders." },
        { title: "Infrastructure", caption: "Inspection and commissioning moments across Lagos." },
        { title: "Movement", caption: "A people-powered coalition across communities." },
        { title: "Community", caption: "Engagements with cooperatives and grassroots groups." },
        { title: "Youth", caption: "Opening pathways for young people and civic service." },
        { title: "Faith & Service", caption: "Public leadership rooted in respect and community." },
      ],
    },
  },
  about: {
    head: {
      title: "About Hamzat",
      description:
        "Read Dr. Kadri Obafemi Hamzat's biography, public service record, technology background, reform work, and leadership journey in Lagos State.",
    },
    hero: {
      title: "Service. Innovation. Results.",
      description:
        "Dr. Kadri Obafemi Hamzat has built a career around solving problems, improving systems, and creating opportunities for Lagosians.",
    },
    biography: {
      label: "The biography",
      title: "A modern statesman shaped by engineering, reform, and Lagos service.",
      description:
        "Born into a family rooted in public service, Dr. Kadri Obafemi Hamzat has dedicated his life to improving systems and building opportunity. His professional journey spans technology, finance, public administration, and executive governance.",
      paragraphs: [
        "He earned degrees from the University of Ibadan and Cranfield University in the United Kingdom before building a respected career across global institutions and Nigerian enterprise.",
        "His transition into public service marked the beginning of one of Lagos State's most consequential governance journeys: technology reform, public works, transport modernization, and steady executive leadership.",
        "A bridge between experience and innovation.",
      ],
      imageTitle: "Competence that has been tested.",
      imageCaption: "Leadership rooted in delivery, not spectacle.",
    },
    credentials: {
      label: "Leadership DNA",
      title: "The profile Lagos needs for the next decade.",
      description:
        "The campaign positioning is competence plus stability plus innovation plus inclusiveness.",
      items: [
        {
          title: "Engineer",
          description:
            "A systems thinker trained to solve hard civic and infrastructure problems.",
        },
        {
          title: "Technocrat",
          description:
            "Experience across technology, finance, public administration, and governance.",
        },
        {
          title: "Public Servant",
          description:
            "More than two decades helping build Lagos through reform, works, and innovation.",
        },
        {
          title: "Education Advocate",
          description:
            "Focused on prepared minds, digital literacy, STEM, and opportunity pathways.",
        },
      ],
    },
    timeline: {
      label: "Public service timeline",
      title: "A record built over time.",
      description:
        "Not an overnight campaign. A long arc of responsibility, reform, and Lagos-focused delivery.",
      items: [
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
      ],
    },
    character: {
      imageTitle: "Rooted in community.",
      imageCaption: "A campaign that listens before it speaks.",
      label: "Leadership character",
      title: "Accessible, steady, and deeply Lagos-focused.",
      description:
        "Obafemi Hamzat's strongest campaign asset is not noise. It is a record of showing up, understanding systems, respecting communities, and keeping Lagos moving.",
      quote:
        "Experience is not nostalgia. It is preparation for what Lagos must become next.",
    },
  },
  visionPage: {
    head: {
      title: "Vision 2027",
      description:
        "Explore Dr. Kadri Obafemi Hamzat's Lagos 2027 vision for digital governance, jobs, education, transport, infrastructure, healthcare, and security.",
    },
    hero: {
      title: "The Next Chapter of Lagos.",
      description:
        "A smarter government. A connected economy. A more inclusive Lagos. The 2027 vision is built for people, infrastructure, opportunity, and technology.",
    },
    pillarsIntro: {
      label: "Manifesto pillars",
      title: "A governing agenda, not campaign slogans.",
      description:
        "The vision is organized around the everyday systems that determine whether Lagos works for students, traders, founders, workers, families, and communities.",
    },
    pillars: [
      {
        title: "Digital Lagos 2.0",
        summary:
          "A smarter government, connected economy, digital public services, innovation hubs, and AI-ready civic systems.",
        points: [
          "Digital governance",
          "Smart transportation systems",
          "Public Wi-Fi access",
          "Innovation hubs",
          "AI-powered public services",
        ],
      },
      {
        title: "Economic Prosperity",
        summary:
          "More SMEs, youth empowerment, investment pathways, entrepreneurship funding, and business-friendly reforms.",
        points: [
          "More jobs",
          "More SMEs",
          "Youth empowerment",
          "Investment attraction",
          "Business-friendly reforms",
        ],
      },
      {
        title: "Education & Human Capital",
        summary:
          "Modern public schools, STEM learning, digital literacy, vocational empowerment, and teacher development.",
        points: [
          "Modern public schools",
          "STEM education",
          "Vocational empowerment",
          "Digital literacy",
          "Teacher development",
        ],
      },
      {
        title: "Infrastructure Revolution",
        summary:
          "Roads, rail, waterways, smart mobility, and priority corridors that move Lagosians faster and safer.",
        points: [
          "Roads and rail",
          "Waterways",
          "Safer mobility",
          "Predictable commutes",
          "Smart infrastructure",
        ],
      },
      {
        title: "Healthcare for All",
        summary:
          "Stronger primary healthcare, maternal care, emergency response, digital health, and community clinics.",
        points: [
          "Primary healthcare",
          "Maternal care",
          "Emergency response",
          "Digital health infrastructure",
          "Community clinics",
        ],
      },
    ],
    roadmapIntro: {
      label: "Development roadmap",
      title: "A Lagos roadmap people can track.",
      description:
        "A campaign should make promises visible. The roadmap model turns priorities into phases, dashboards, and measurable public delivery.",
    },
    roadmap: [
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
    ],
    dashboardNote:
      "Public dashboard concept: priorities, milestones, and community feedback.",
    tech: {
      imageTitle: "Technology should improve everyday life.",
      imageCaption: "The Lagos future is digital, skilled, and people-first.",
      label: "Tech-forward governance",
      title: "A smarter Lagos for everyone.",
      description:
        "The purpose of technology is not decoration. It should shorten queues, improve transit, simplify business, strengthen health systems, and help young Lagosians compete globally.",
      quote:
        "Move people faster, safer, and smarter. Prepare minds. Grow enterprise. Modernize services.",
    },
  },
  impact: {
    head: {
      title: "Achievements and Impact",
      description:
        "Review Dr. Kadri Obafemi Hamzat's Lagos public service impact across digital transformation, infrastructure, public sector reform, and youth innovation.",
    },
    hero: {
      title: "Built on Results.",
      description:
        "The campaign is anchored in a public service record: digital transformation, infrastructure delivery, reform discipline, and future-focused opportunity.",
    },
    pillarsIntro: {
      label: "Impact pillars",
      title: "The proof points behind the campaign.",
      description:
        "The strongest political message is delivery that people can recognize in their daily lives.",
    },
    achievements: [
      {
        metric: "11 ERP modules",
        title: "Digital Transformation",
        description:
          "Technology-led reforms helped position Lagos as one of Africa's most digitally ambitious governments.",
      },
      {
        metric: "First cable-stayed",
        title: "Lekki-Ikoyi Link Bridge",
        description:
          "Contributions to landmark infrastructure strengthened connectivity, reduced travel pressure, and supported commerce.",
      },
      {
        metric: "Ghost workers cut",
        title: "Public Service Reform",
        description:
          "Systems thinking, technology integration, and administrative discipline improved public sector delivery.",
      },
      {
        metric: "Future ready",
        title: "Youth & Innovation",
        description:
          "Support for innovation, entrepreneurship, and digital literacy remains central to the Lagos of tomorrow.",
      },
    ],
    tracker: {
      label: "Community impact tracker",
      title: "Track the work by theme.",
      description:
        "A campaign-grade impact archive should help voters explore what has been done, where it connects to their lives, and what comes next.",
      filters: [
        { id: "all", label: "All" },
        { id: "digital", label: "Digital" },
        { id: "infrastructure", label: "Infrastructure" },
        { id: "reform", label: "Reform" },
        { id: "youth", label: "Youth" },
      ],
      items: [
        {
          categoryId: "digital",
          category: "Digital",
          title: "Digital Transformation",
          description:
            "Technology-led reforms and enterprise systems helped modernize public service delivery in Lagos.",
        },
        {
          categoryId: "infrastructure",
          category: "Infrastructure",
          title: "Urban Infrastructure",
          description:
            "Public works and transportation contributions supported a more connected Lagos mega-city.",
        },
        {
          categoryId: "reform",
          category: "Reform",
          title: "Public Service Reform",
          description:
            "Systems thinking and administrative modernization improved how government works for people.",
        },
        {
          categoryId: "youth",
          category: "Youth",
          title: "Innovation & Opportunity",
          description:
            "Youth, entrepreneurship, digital literacy, and innovation remain central to the Lagos future.",
        },
      ],
    },
    infrastructure: {
      imageTitle: "Mega-city thinking.",
      imageCaption: "Infrastructure is how opportunity moves.",
      label: "Infrastructure and modernization",
      title: "A record connected to Lagos' urban future.",
      description:
        "The achievements message should always connect past delivery to future ambition: roads, bridges, transport systems, public modernization, and a city that keeps moving.",
      cta: "Visit official archive",
    },
    gallery: {
      label: "Gallery",
      title: "Public service in pictures.",
      description:
        "The visual archive should feel emotional, human, and Lagos-specific.",
      items: [
        { title: "Experience", caption: "Leadership consultations with Lagos stakeholders." },
        { title: "Infrastructure", caption: "Inspection and commissioning moments across Lagos." },
        { title: "Movement", caption: "A people-powered coalition across communities." },
        { title: "Community", caption: "Engagements with cooperatives and grassroots groups." },
        { title: "Youth", caption: "Opening pathways for young people and civic service." },
        { title: "Faith & Service", caption: "Public leadership rooted in respect and community." },
      ],
    },
  },
  join: {
    head: {
      title: "Join The Movement",
      description:
        "Join Dr. Kadri Obafemi Hamzat's Lagos 2027 campaign movement. Volunteer, organize in your ward, join media support, register interest, or get official updates.",
    },
    hero: {
      title: "Lagos Is Rising. Be Part Of It.",
      description:
        "This campaign is bigger than politics. It is about safer communities, stronger businesses, empowered youth, better education, modern infrastructure, and a Lagos where everyone has the opportunity to thrive.",
    },
    why: {
      label: "Why this movement matters",
      title: "Forward together, ward by ward.",
      description:
        "Winning Lagos requires more than a message. It requires people: students, women, market leaders, professionals, creatives, faith communities, tech builders, artisans, and local organizers.",
      items: [
        "Safer communities",
        "Stronger businesses",
        "Empowered youth",
        "Better education",
        "Modern infrastructure",
        "Opportunity for every citizen",
      ],
      imageTitle: "Thousands of Lagosians. One future.",
      imageCaption: "Grassroots energy, organized for a greater Lagos.",
    },
    formIntro: {
      label: "Volunteer form",
      title: "Choose how you want to serve.",
      description:
        "This form is ready for backend connection later. For now, it captures the full campaign participation model and confirms the volunteer flow.",
      card:
        "Become a ward voice, campus organizer, media partner, donor contact, or community mobilizer.",
    },
    form: {
      fullName: "Full name",
      fullNamePlaceholder: "Your full name",
      phone: "Phone / WhatsApp",
      phonePlaceholder: "+234",
      email: "Email",
      emailPlaceholder: "you@example.com",
      location: "LGA / Ward",
      locationPlaceholder: "Ikeja, Ikorodu, Epe...",
      participation: "Participation type",
      message: "Message",
      messagePlaceholder: "Tell us how you want to help.",
      submit: "Submit Interest",
      submittedPrefix: "Your",
      submittedSuffix:
        "interest has been recorded locally. Connect this form to CRM, email, or campaign database when the backend is ready.",
      roles: [
        "Volunteer",
        "Ward Coordinator",
        "Youth Mobilizer",
        "Women Coalition",
        "Campus Ambassador",
        "Media Partnership",
        "Event Registration",
        "Donation Interest",
      ],
    },
    cards: [
      {
        title: "WhatsApp Community",
        description:
          "Request an invite for ward-level updates, canvassing, and event alerts.",
      },
      {
        title: "Media Partnership",
        description:
          "Support rapid response, storytelling, press coordination, and digital content.",
      },
      {
        title: "Event RSVP",
        description:
          "Register interest for town halls, youth forums, market visits, and policy events.",
      },
    ],
    newsletter: {
      title: "Get official campaign updates.",
      description:
        "News, field updates, speeches, media kit alerts, volunteer assignments, and event announcements from the For A Greater Lagos movement.",
      email: "Email address",
      placeholder: "you@example.com",
      subscribe: "Subscribe",
      submitted: "Newsletter interest saved locally for this prototype.",
    },
  },
} as const;

type WidenCopyValue<TValue> = TValue extends string
  ? string
  : TValue extends readonly (infer TItem)[]
    ? readonly WidenCopyValue<TItem>[]
    : TValue extends object
      ? { readonly [TKey in keyof TValue]: WidenCopyValue<TValue[TKey]> }
      : TValue;

export type CampaignPageCopy = WidenCopyValue<typeof en>;

const pageCopy: Record<LanguageCode, CampaignPageCopy> = {
  en,
  yo: {
    home: {
      head: {
        title: "Kadri Obafemi Hamzat 2027 | Oludije Gomina APC ni Eko",
        description:
          "Oju opo ipolongo osise fun Dr. Kadri Obafemi Hamzat, oludije APC fun Gomina Eko 2027. Wo iran Eko tobi, awon aṣeyọri, iroyin, ati imudojuiwon iyọọda.",
      },
      hero: {
        label: "Oludije Gomina APC 2027",
        title: "Iriri pade iran fun Eko tobi ju.",
        description:
          "KOH 2027 je egbe ti o fi eniyan siwaju, ti a ko lori iṣẹ ilu, iyipada oni-nọmba, amayederun, ati Eko ti o n da anfaani sile kaakiri gbogbo ipin.",
        secondaryCta: "Wo manifesto naa",
      },
      heroSlides: [
        { title: "Iriri Pade Iran", caption: "Oluranṣẹ ilu ti a ti danwo, setan lati gbe Eko si ori ipele tuntun." },
        { title: "Olori Ninu Iṣe", caption: "Ipolongo ti o duro lori gbigbọ, ijumọsọrọ, ati ifijiṣẹ to daju." },
        { title: "Amayederun To So Wa Po", caption: "Opopona, reluwe, omi, ati iṣẹ ilu ti a se fun irin ajo ojoojumọ." },
        { title: "Ojo iwaju Pelu Odo", caption: "Ogbon oni-nọmba, iṣowo, eko, ati anfaani fun iran to n bo." },
        { title: "Agbara Grassroots", caption: "Ipolongo awon eniyan ti n gbo awon agbegbe, oja, ile-iwe giga, ati ward." },
      ],
      leader: {
        imageTitle: "Olori ti Eko gbekele",
        imageCaption: "Egbe ti o duro lori iṣẹ ilu, kii se ariwo.",
        label: "Olori ti Eko gbekele",
        title: "Kii se tuntun si iṣẹ. O ti setan fun ipele to n bo.",
        description:
          "Lati iyipada amayederun oni-nọmba Eko de iṣẹ bi Igbakeji Gomina lati 2019, olori Dr. Obafemi Hamzat ti dojukọ Eko to gbon, to lailewu, ati to ni ilọsiwaju fun gbogbo eniyan.",
        qualities: ["Onimọ ẹrọ", "Tekinokirati", "Atunse eto", "Oluso afara"],
        quote: "Eko ti n ṣiṣẹ fun gbogbo eniyan.",
      },
      stats: [
        { value: "25+", label: "Odun Iṣẹ", description: "Iṣẹ ilu, imọ ẹrọ, ati iṣakoso lai da duro" },
        { value: "2x", label: "Igbakeji Gomina", description: "Yan ni 2019, tun yan ni 2023" },
        { value: "1st", label: "Oracle ERP", description: "Dari fifi Oracle ERP si iṣẹ ilu akọkọ ni Africa" },
        { value: "2013", label: "Eni Eko", description: "Ti a mo fun iṣẹ, atunse, ati imotuntun" },
      ],
      audience: {
        label: "Fun gbogbo ara Eko",
        title: "Ojo iwaju Eko gbodo ko gbogbo eniyan sinu.",
        description:
          "Boya o n ko iṣowo, o n kọ ogbon, o n rin ninu traffic, o n to idile, tabi o n sin agbegbe re, egbe yi wa fun ojo iwaju re.",
        items: ["Akeko ni Ikorodu", "Onisowo ni Balogun", "Oludasile tech ni Yaba", "Apẹja ni Epe", "Amoye ni Victoria Island", "Idile kaakiri Alimosho"],
      },
      vision: {
        label: "Iran 2027",
        title: "Ipele tuntun fun Eko.",
        description: "Ilana to muna, ẹmi Eko, ati imuse ti o fi imọ ẹrọ siwaju.",
        cta: "Ka manifesto kikun",
        pillars: [
          { title: "Digital Lagos 2.0", summary: "Ijoba to gbon, ọrọ-aje to so pọ, iṣẹ ilu oni-nọmba, ibudo imotuntun, ati eto ilu to mura fun AI." },
          { title: "Iyika Amayederun", summary: "Opopona, reluwe, omi, irinajo to gbon, ati ọna pataki ti yoo gbe ara Eko yara ati lailewu." },
          { title: "Eko ati Agbara Eniyan", summary: "Ile-iwe ijoba igbalode, STEM, imọ oni-nọmba, iṣẹ ọwọ, ati idagbasoke olukọ." },
          { title: "Ilera fun Gbogbo Eniyan", summary: "Ilera alakoko to lagbara, itoju iya, esi pajawiri, ilera oni-nọmba, ati ile iwosan agbegbe." },
          { title: "Aisiki Oro-aje", summary: "SME diẹ sii, agbara fun ọdọ, idoko, owo fun iṣowo, ati atunse to rorun fun iṣowo." },
          { title: "Aabo ati Idaabobo", summary: "Eto aabo to gbon, esi agbegbe, ati isakoso pajawiri yiyara." },
        ],
      },
      map: {
        title: "Maapu Ipolongo Live",
        activeFocus: "Idojukọ lọwọlọwọ",
        listeningTours: "Irin-ajo gbigbọ agbegbe",
        eventCalendar: "Kalenda iṣẹlẹ yoo ṣii laipe",
        zones: [
          { name: "Eko Iwọ-oorun", focus: "Iṣẹ, irọrun irinajo, SME, ati iṣẹ fun idile.", wards: "Alimosho, Badagry, Ojo, Ikeja axis" },
          { name: "Eko Aarin", focus: "Oja, aabo gbogbo eniyan, iṣowo, ati atunse eti omi.", wards: "Lagos Island, Surulere, Apapa, Eti-Osa axis" },
          { name: "Eko Ila-oorun", focus: "Eko, iraye oni-nọmba, ogbin, ati idagbasoke blue economy.", wards: "Ikorodu, Epe, Ibeju-Lekki, Kosofe axis" },
        ],
      },
      press: {
        label: "Iroyin ati press",
        title: "Imudojuiwon ipolongo laaye.",
        description: "Imudojuiwon to daju, iroyin gbangba, ati ikede ipolongo ni ibi kan.",
        updates: [
          { source: "Press", title: "GAC yan Hamzat gege bi oludije gomina APC ti gbogbo eniyan gba", date: "28 April 2026" },
          { source: "Press", title: "Tinubu fọwọsi Hamzat gege bi oludije APC ni Eko", date: "29 April 2026" },
          { source: "Ipolongo", title: "Oju opo osise Obafemi Hamzat 2027", date: "Live" },
        ],
      },
      primaryResult: {
        label: "Abajade primary APC",
        title: "Hamzat di oludije gomina APC fun Eko 2027.",
        description: "Igbakeji Gomina Eko gba tiketi APC leyin ti o gba ibo 657,974 ninu primary ojo 21 May 2026.",
        resultSummary: "Hamzat bori alatako kan soso, eni ti o gba ibo kan, nigba ti a kede abajade ni secretariat APC ni Ikeja.",
        declared: "Kede ni APC Secretariat, Ikeja ni ojo 21 May 2026.",
        highlights: ["Ibo ti o gba", "Ibo fun alatako kan", "Igbakeji Gomina lati"],
        mediaTypeVideo: "Fiimu ipolongo",
        mediaTypePhoto: "Aworan primary archive",
        mediaSlides: [
          { title: "Fidio ikede primary", caption: "Fiimu ipolongo lati ikede abajade primary APC." },
          { title: "Akoko idibo primary 01", caption: "Ikede abajade bere ni secretariat APC ni Ikeja." },
          { title: "Akoko idibo primary 02", caption: "Awon olori egbe ati olufowosi pejọ fun abajade osise." },
          { title: "Akoko idibo primary 03", caption: "Wiwo ni ilana akoko lori iṣẹlẹ primary ojo 21 May." },
          { title: "Akoko idibo primary 04", caption: "Ipolongo APC Lagos 2027 wo ipele tuntun." },
        ],
        featureCards: [
          { title: "Media kit", copy: "Fidio abajade osise, aworan, ati ohun elo press." },
          { title: "Oro", copy: "Oro, iwe gbigba, ati alaye gbangba." },
          { title: "Fiimu ipolongo", copy: "Fiimu kukuru ati akoko fidio lati egbe." },
        ],
      },
      gallery: {
        label: "Gallery ipolongo",
        title: "Eko ninu išipopada.",
        description: "Aworan naa dojukọ eniyan: iṣẹ ilu, amayederun, ọdọ, agbegbe, ati ifarahan olori.",
        items: [
          { title: "Iriri", caption: "Ijumọsọrọ olori pelu awon stakeholder Eko." },
          { title: "Amayederun", caption: "Akoko ayewo ati commissioning kaakiri Eko." },
          { title: "Egbe", caption: "Iṣọkan awon eniyan kaakiri agbegbe." },
          { title: "Agbegbe", caption: "Ibasọrọ pelu cooperative ati grassroots." },
          { title: "Odo", caption: "Ṣi ọna fun ọdọ ati iṣẹ ilu." },
          { title: "Igbagbo & Iṣẹ", caption: "Olori ilu to duro lori ọwọ ati agbegbe." },
        ],
      },
    },
    about: {
      head: { title: "Nipa Hamzat", description: "Ka itan-aye Dr. Kadri Obafemi Hamzat, igbasilẹ iṣẹ ilu, imọ ẹrọ, atunse, ati irin ajo olori re ni Ipinle Eko." },
      hero: { title: "Iṣẹ. Imotuntun. Abajade.", description: "Dr. Kadri Obafemi Hamzat ti ko iṣẹ re lori sisẹ iṣoro, imudara eto, ati sise anfaani fun ara Eko." },
      biography: {
        label: "Itan-aye",
        title: "Olori ode oni ti ẹrọ, atunse, ati iṣẹ Eko da.",
        description: "Ti a bi sinu idile ti o duro lori iṣẹ ilu, Dr. Kadri Obafemi Hamzat ti fi aye re fun imudara eto ati sise anfaani. Irin ajo re bo imọ ẹrọ, owo, iṣakoso ilu, ati olori ijoba.",
        paragraphs: [
          "O gba oye lati University of Ibadan ati Cranfield University ni United Kingdom ki o to kọ iṣẹ to ni ọwọ ni ile-iṣẹ kariaye ati iṣowo Naijiria.",
          "Iwọle re sinu iṣẹ ilu bere ọkan ninu awon irin ajo ijoba to se pataki ni Eko: atunse imọ ẹrọ, iṣẹ ilu, imudojuiwon irinna, ati olori to duro.",
          "Afara laarin iriri ati imotuntun.",
        ],
        imageTitle: "Ogbon ti a ti danwo.",
        imageCaption: "Olori ti o duro lori ifijiṣẹ, kii se iranse oju.",
      },
      credentials: {
        label: "DNA Olori",
        title: "Profaili ti Eko nilo fun ewadun to n bo.",
        description: "Ipo ipolongo ni ogbon pelu iduroṣinṣin, imotuntun, ati ifisi gbogbo eniyan.",
        items: [
          { title: "Onimọ ẹrọ", description: "Eni ti o ronu nipa eto lati yanju iṣoro ilu ati amayederun to le." },
          { title: "Tekinokirati", description: "Iriri ninu imọ ẹrọ, owo, iṣakoso ilu, ati ijoba." },
          { title: "Oluranṣẹ ilu", description: "Die e sii ju ewadun meji ni kikọ Eko pelu atunse, iṣẹ, ati imotuntun." },
          { title: "Alatilẹyin Eko", description: "Dojukọ ọkan ti o mura, imọ oni-nọmba, STEM, ati ọna anfaani." },
        ],
      },
      timeline: {
        label: "Akoko iṣẹ ilu",
        title: "Igbasilẹ ti a ko lori akoko.",
        description: "Kii se ipolongo alẹ kan. O je ọna gigun ti ojuse, atunse, ati ifijiṣẹ fun Eko.",
        items: [
          { year: "Ibẹrẹ Iṣẹ", title: "Onimọ ẹrọ ati Tekinokirati Kariaye", description: "Ko iriri ninu imọ ẹrọ, owo, ati iṣakoso ilu ki o to wọ iṣẹ ilu." },
          { year: "Science & Tech", title: "Commissioner fun Science and Technology", description: "Dari imudojuiwon iṣẹ ilu pelu imọ ẹrọ, o si ran Eko lọwọ lati gbe ipilẹ oni-nọmba re ga." },
          { year: "Works", title: "Special Adviser on Works", description: "Kopa ninu eto amayederun, ifijiṣẹ, ati iṣẹ ilu ti o dojukọ irinna." },
          { year: "2019 - Bayi", title: "Igbakeji Gomina Ipinle Eko", description: "N ṣiṣẹ pelu Gomina Babajide Sanwo-Olu ninu ọkan ninu ọrọ-aje ilu nla ni Africa." },
          { year: "2027", title: "Yiyan Gbogbogbo APC", description: "Awon media pataki ni Naijiria royin bi yiyan APC/GAC fun idije gomina Eko 2027." },
        ],
      },
      character: {
        imageTitle: "Duro ninu agbegbe.",
        imageCaption: "Ipolongo ti o n gbo ki o to sọrọ.",
        label: "Iwa olori",
        title: "Rọrun lati sunmọ, duro, ati jinlẹ ninu Eko.",
        description: "Ohun ija ipolongo Obafemi Hamzat to lagbara kii se ariwo. O je igbasilẹ wiwa, oye eto, ọwọ fun agbegbe, ati mimu Eko lọ.",
        quote: "Iriri kii se nostalgia. O je igbaradi fun ohun ti Eko gbodo di nigbamii.",
      },
    },
    visionPage: {
      head: { title: "Iran 2027", description: "Ṣawari iran Eko 2027 Dr. Kadri Obafemi Hamzat fun ijoba oni-nọmba, iṣẹ, eko, irinna, amayederun, ilera, ati aabo." },
      hero: { title: "Ipele Tuntun ti Eko.", description: "Ijoba to gbon. Oro-aje to sopọ. Eko ti o fi gbogbo eniyan si. Iran 2027 wa fun eniyan, amayederun, anfaani, ati imọ ẹrọ." },
      pillarsIntro: { label: "Awon opo manifesto", title: "Eto ijoba, kii se slogan ipolongo.", description: "Iran naa wa ni ayika awon eto ojoojumọ ti o pinnu boya Eko n ṣiṣẹ fun akeko, onisowo, oludasile, osise, idile, ati agbegbe." },
      pillars: [
        { title: "Digital Lagos 2.0", summary: "Ijoba to gbon, oro-aje to sopọ, iṣẹ ilu oni-nọmba, ibudo imotuntun, ati eto ilu ti mura fun AI.", points: ["Ijoba oni-nọmba", "Eto irinna to gbon", "Wi-Fi gbogbo eniyan", "Ibudo imotuntun", "Iṣẹ ilu pelu AI"] },
        { title: "Aisiki Oro-aje", summary: "Iṣẹ diẹ sii, SME diẹ sii, agbara fun ọdọ, idoko, ati atunse to rorun fun iṣowo.", points: ["Iṣẹ diẹ sii", "SME diẹ sii", "Agbara ọdọ", "Fa idoko wole", "Atunse fun iṣowo"] },
        { title: "Eko ati Agbara Eniyan", summary: "Ile-iwe ijoba igbalode, STEM, imọ oni-nọmba, iṣẹ ọwọ, ati idagbasoke olukọ.", points: ["Ile-iwe ijoba igbalode", "Eko STEM", "Agbara iṣẹ ọwọ", "Imọ oni-nọmba", "Idagbasoke olukọ"] },
        { title: "Iyika Amayederun", summary: "Opopona, reluwe, omi, irinajo to gbon, ati ọna pataki ti n gbe ara Eko yara ati lailewu.", points: ["Opopona ati reluwe", "Ona omi", "Irinna ailewu", "Irinajo to le se asọtẹlẹ", "Amayederun to gbon"] },
        { title: "Ilera fun Gbogbo Eniyan", summary: "Ilera alakoko to lagbara, itoju iya, esi pajawiri, ilera oni-nọmba, ati ile iwosan agbegbe.", points: ["Ilera alakoko", "Itoju iya", "Esi pajawiri", "Amayederun ilera oni-nọmba", "Ile iwosan agbegbe"] },
      ],
      roadmapIntro: { label: "Roadmap idagbasoke", title: "Roadmap Eko ti eniyan le tọpinpin.", description: "Ipolongo gbodo je ki ileri han. Roadmap yi yi awon pataki pada si ipele, dashboard, ati ifijiṣẹ ti a le won." },
      roadmap: [
        { phase: "Ojo 100 Akoko", title: "Sprint Ijoba Sisi", description: "Ṣe atẹjade dashboard ifijiṣẹ to han, jẹrisi ọna pataki, ki o si mu esi ara ilu ṣiṣẹ." },
        { phase: "Odun Kin-in-ni", title: "Ifijiṣẹ Iṣẹ to Gbon", description: "Ṣe digitalize awon iṣẹ ijoba ti eniyan n wa ju, ki o si fa iraye si agbegbe pelu mobile-first." },
        { phase: "2027 - 2031", title: "Idagbasoke Eko Fun Gbogbo", description: "Fa iṣẹ, eko, irinna, ilera, ati eto imotuntun kaakiri gbogbo ipin marun Eko." },
      ],
      dashboardNote: "Erongba dashboard gbangba: awon pataki, milestone, ati esi agbegbe.",
      tech: { imageTitle: "Imọ ẹrọ gbodo mu aye ojoojumọ dara.", imageCaption: "Ojo iwaju Eko je oni-nọmba, ogbon, ati eniyan-akoko.", label: "Ijoba ti o fi tech siwaju", title: "Eko to gbon fun gbogbo eniyan.", description: "Idi imọ ẹrọ kii se fun ohun ọṣọ. O gbodo din queue ku, mu irinna dara, rorun fun iṣowo, mu eto ilera lagbara, ki o ran ọdọ Eko lọwọ lati dije kariaye.", quote: "Gbe eniyan yara, lailewu, ati pelu ogbon. Mura ọkan. Dagba iṣowo. Ṣe iṣẹ di igbalode." },
    },
    impact: {
      head: { title: "Aṣeyọri ati Ipa", description: "Wo ipa iṣẹ ilu Dr. Kadri Obafemi Hamzat ni Eko kaakiri iyipada oni-nọmba, amayederun, atunse iṣẹ ilu, ati imotuntun ọdọ." },
      hero: { title: "Ti a ko lori Abajade.", description: "Ipolongo naa duro lori igbasilẹ iṣẹ ilu: iyipada oni-nọmba, ifijiṣẹ amayederun, atunse, ati anfaani ojo iwaju." },
      pillarsIntro: { label: "Opo ipa", title: "Eri to wa leyin ipolongo.", description: "Ifiranṣẹ oselu to lagbara ju ni ifijiṣẹ ti eniyan le ri ninu aye won." },
      achievements: [
        { metric: "11 ERP modules", title: "Iyipada Oni-nọmba", description: "Atunse pelu imọ ẹrọ ran Eko lọwọ lati di ọkan ninu ijoba ti o ni afojusun oni-nọmba ni Africa." },
        { metric: "Afara cable-stayed akọkọ", title: "Lekki-Ikoyi Link Bridge", description: "Ilowosi si amayederun pataki mu asopọ lagbara, din wahala irinajo ku, o si ran commerce lọwọ." },
        { metric: "Ghost workers dinku", title: "Atunse Iṣẹ Ilu", description: "Riro nipa eto, fifi imọ ẹrọ pọ, ati iṣakoso mu ifijiṣẹ ijoba dara." },
        { metric: "Mura fun ojo iwaju", title: "Odo & Imotuntun", description: "Atilẹyin fun imotuntun, iṣowo, ati imọ oni-nọmba wa ni aarin Eko ola." },
      ],
      tracker: {
        label: "Olutọpa ipa agbegbe", title: "Tọpinpin iṣẹ nipa koko.", description: "Archive ipa ipolongo gbodo ran oludibo lọwọ lati wo ohun ti a ti se, ibi ti o kan aye won, ati ohun to n bo.",
        filters: [{ id: "all", label: "Gbogbo" }, { id: "digital", label: "Digital" }, { id: "infrastructure", label: "Amayederun" }, { id: "reform", label: "Atunse" }, { id: "youth", label: "Odo" }],
        items: [
          { categoryId: "digital", category: "Digital", title: "Iyipada Oni-nọmba", description: "Atunse pelu imọ ẹrọ ati eto enterprise ran iṣẹ ilu Eko lọwọ lati di igbalode." },
          { categoryId: "infrastructure", category: "Amayederun", title: "Amayederun Ilu", description: "Iṣẹ ilu ati irinna ran Eko mega-city lọwọ lati sopọ dara." },
          { categoryId: "reform", category: "Atunse", title: "Atunse Iṣẹ Ilu", description: "Riro nipa eto ati imudojuiwon iṣakoso mu bi ijoba ṣe n ṣiṣẹ fun eniyan dara." },
          { categoryId: "youth", category: "Odo", title: "Imotuntun & Anfaani", description: "Odo, iṣowo, imọ oni-nọmba, ati imotuntun wa ni aarin ojo iwaju Eko." },
        ],
      },
      infrastructure: { imageTitle: "Ero mega-city.", imageCaption: "Amayederun ni bi anfaani ṣe n rin.", label: "Amayederun ati imudojuiwon", title: "Igbasilẹ ti o sopọ mọ ojo iwaju ilu Eko.", description: "Ifiranṣẹ aṣeyọri gbodo so ifijiṣẹ atijo mọ afojusun ojo iwaju: opopona, afara, eto irinna, imudojuiwon iṣẹ ilu, ati ilu ti n lọ.", cta: "Ṣabẹwo si archive osise" },
      gallery: {
        label: "Gallery", title: "Iṣẹ ilu ninu aworan.", description: "Archive aworan gbodo ni ẹdun, eniyan, ati Eko pato.",
        items: [
          { title: "Iriri", caption: "Ijumọsọrọ olori pelu awon stakeholder Eko." },
          { title: "Amayederun", caption: "Akoko ayewo ati commissioning kaakiri Eko." },
          { title: "Egbe", caption: "Iṣọkan awon eniyan kaakiri agbegbe." },
          { title: "Agbegbe", caption: "Ibasọrọ pelu cooperative ati grassroots." },
          { title: "Odo", caption: "Ṣi ọna fun ọdọ ati iṣẹ ilu." },
          { title: "Igbagbo & Iṣẹ", caption: "Olori ilu to duro lori ọwọ ati agbegbe." },
        ],
      },
    },
    join: {
      head: { title: "Darapo mo Egbe", description: "Darapo mo egbe ipolongo Lagos 2027 Dr. Kadri Obafemi Hamzat. Se iyọọda, seto ni ward re, darapo fun media, forukosile ife, tabi gba imudojuiwon osise." },
      hero: { title: "Eko N Dide. Je Apakan Re.", description: "Ipolongo yi tobi ju oselu. O je nipa agbegbe ailewu, iṣowo to lagbara, ọdọ ti a fun lagbara, eko to dara, amayederun igbalode, ati Eko nibiti gbogbo eniyan le dagba." },
      why: { label: "Idi ti egbe yi se pataki", title: "Siwaju papo, ward si ward.", description: "Lati ṣẹgun Eko nilo ju ifiranṣẹ lo. O nilo eniyan: akeko, obinrin, olori oja, amoye, creative, agbegbe igbagbo, tech builders, artisans, ati olusetọ agbegbe.", items: ["Agbegbe ailewu", "Iṣowo to lagbara", "Odo ti a fun lagbara", "Eko to dara", "Amayederun igbalode", "Anfaani fun gbogbo ara ilu"], imageTitle: "Egbegberun ara Eko. Ojo iwaju kan.", imageCaption: "Agbara grassroots, ti a seto fun Eko tobi." },
      formIntro: { label: "Fọọmu iyọọda", title: "Yan bi o se fe sin.", description: "Fọọmu yi setan fun backend nigbamii. Fun bayi, o gba awoṣe ikopa ipolongo kikun, o si jẹrisi flow iyọọda.", card: "Di ohun ward, organizer campus, media partner, donor contact, tabi community mobilizer." },
      form: { fullName: "Oruko kikun", fullNamePlaceholder: "Oruko kikun re", phone: "Foonu / WhatsApp", phonePlaceholder: "+234", email: "Imeeli", emailPlaceholder: "you@example.com", location: "LGA / Ward", locationPlaceholder: "Ikeja, Ikorodu, Epe...", participation: "Iru ikopa", message: "Ifiranṣẹ", messagePlaceholder: "Sọ bi o se fe ran wa lọwọ.", submit: "Fi Ife Ranṣẹ", submittedPrefix: "Ife re fun", submittedSuffix: "ti wa ni ipamọ sile lori ẹrọ. So fọọmu yi mọ CRM, imeeli, tabi database ipolongo nigba ti backend ba setan.", roles: ["Iyọọda", "Ward Coordinator", "Youth Mobilizer", "Women Coalition", "Campus Ambassador", "Media Partnership", "Event Registration", "Donation Interest"] },
      cards: [
        { title: "Agbegbe WhatsApp", description: "Beere invite fun imudojuiwon ward, canvassing, ati alert iṣẹlẹ." },
        { title: "Media Partnership", description: "Ṣe atilẹyin rapid response, storytelling, press coordination, ati akoonu oni-nọmba." },
        { title: "Event RSVP", description: "Forukosile ife fun town hall, youth forum, ibẹwo oja, ati iṣẹlẹ policy." },
      ],
      newsletter: { title: "Gba imudojuiwon ipolongo osise.", description: "Iroyin, imudojuiwon aaye, ọrọ, media kit alert, iṣẹ iyọọda, ati ikede iṣẹlẹ lati egbe Fun Eko Tobi Ju.", email: "Adiresi imeeli", placeholder: "you@example.com", subscribe: "Forukosile", submitted: "Ife newsletter ti fipamọ sile fun prototype yi." },
    },
  },
  ha: en,
  ig: en,
};

export function getCampaignPageCopy(language: LanguageCode) {
  return pageCopy[language] ?? pageCopy.en;
}

export function useCampaignPageCopy() {
  const { language } = useI18n();
  return useMemo(() => getCampaignPageCopy(language), [language]);
}
