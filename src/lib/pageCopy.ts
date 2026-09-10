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
  ha: {
    ...en,
    home: {
      ...en.home,
      head: {
        title: "Kadri Obafemi Hamzat 2027 | Dan takarar Gwamnan APC na Lagos",
        description:
          "Dandalin kamfen na hukuma na Dr. Kadri Obafemi Hamzat, dan takarar APC na Gwamnan Lagos 2027. Duba hangen Greater Lagos, nasarori, labarai, da sabbin bayanan masu sa kai.",
      },
      hero: {
        label: "Dan takarar Gwamnan APC 2027",
        title: "Kwarewa Ta Hadu Da Hangen Nesa Don Lagos Mai Girma.",
        description:
          "KOH 2027 yunkuri ne da ke sanya mutane gaba, wanda ya ginu kan aikin jama'a, sauyin dijital, gina kayan more rayuwa, da Lagos mai bude dama ga kowane yanki.",
        secondaryCta: "Duba Manifesto",
      },
      heroSlides: [
        { title: "Kwarewa Ta Hadu Da Hangen Nesa", caption: "Gogaggen mai hidimar jama'a da ya shirya kai Lagos mataki na gaba." },
        { title: "Jagoranci Cikin Aiki", caption: "Kamfen da ya ginu kan sauraro, tuntuba, da aiki mai natsuwa." },
        { title: "Kayan More Rayuwa Masu Hada Mutane", caption: "Hanyoyi, jirgin kasa, ruwa, da ayyukan jama'a don saukaka zirga-zirgar yau da kullum." },
        { title: "Makoma Tare Da Matasa", caption: "Kwarewar dijital, kasuwanci, ilimi, da dama ga tsara mai zuwa." },
        { title: "Karfin Al'umma", caption: "Kamfen na jama'a da ke sauraron unguwanni, kasuwanni, makarantu, da ward-ward." },
      ],
      leader: {
        imageTitle: "Jagoran Da Lagos Ta Amince Da Shi",
        imageCaption: "Yunkuri da ya ginu kan hidimar jama'a, ba hayaniya ba.",
        label: "Jagoran da Lagos ta amince da shi",
        title: "Ba sabon shiga aikin hidima ba. Ya shirya babi na gaba.",
        description:
          "Daga sauya tsarin dijital na Lagos zuwa zama Mataimakin Gwamna tun 2019, jagorancin Dr. Obafemi Hamzat ya mayar da hankali kan Lagos mai hankali, aminci, da wadata ga kowa.",
        qualities: ["Injiniya", "Masanin fasaha", "Mai kawo gyara", "Mai hada jama'a"],
        quote: "Lagos da ke aiki ga kowa.",
      },
      stats: [
        { value: "25+", label: "Shekaru Na Hidima", description: "Hidimar jama'a, fasaha, da shugabanci ba tare da katsewa ba" },
        { value: "2x", label: "Mataimakin Gwamna", description: "An zabe shi a 2019 kuma aka sake zabarsa a 2023" },
        { value: "1st", label: "Oracle ERP", description: "Ya jagoranci fara amfani da Oracle ERP a bangaren gwamnati a Afirka" },
        { value: "2013", label: "Mutumin Lagos", description: "An yaba masa kan hidima, gyara, da kirkire-kirkire" },
      ],
      audience: {
        label: "Ga kowane dan Lagos",
        title: "Makomar Lagos dole ta kunshi kowa.",
        description:
          "Ko kana gina kasuwanci, koyon sana'a, wucewa cikin cunkoso, renon iyali, ko hidimar al'umma, wannan yunkuri an tsara shi ne da makomarka a zuciya.",
        items: [
          "Dalibai a Ikorodu",
          "Yan kasuwa a Balogun",
          "Masu kirkirar fasaha a Yaba",
          "Masunta a Epe",
          "Kwararru a Victoria Island",
          "Iyali a fadin Alimosho",
        ],
      },
      vision: {
        label: "Hangen 2027",
        title: "Babi na gaba na Lagos.",
        description:
          "Da tsari mai tsauri, ruhin Lagos, da aiwatarwa mai amfani da fasaha.",
        cta: "Karanta cikakken manifesto",
        pillars: [
          { title: "Digital Lagos 2.0", summary: "Gwamnati mai hankali, tattalin arziki mai hade, hidimomin jama'a na dijital, cibiyoyin kirkire-kirkire, da tsarin birni mai shirin AI." },
          { title: "Juyin Kayan More Rayuwa", summary: "Hanyoyi, jirgin kasa, ruwa, zirga-zirga mai hankali, da muhimman hanyoyi da ke motsa mutanen Lagos cikin sauri da aminci." },
          { title: "Ilimi Da Karfin Dan Adam", summary: "Makarantun gwamnati na zamani, STEM, ilimin dijital, koyon sana'a, da bunkasa malamai." },
          { title: "Lafiya Ga Kowa", summary: "Ingantaccen kiwon lafiya na farko, kula da mata, agajin gaggawa, lafiyar dijital, da asibitocin al'umma." },
          { title: "Ci Gaban Tattalin Arziki", summary: "Karin SME, karfafa matasa, hanyoyin zuba jari, tallafin kasuwanci, da sauye-sauye masu saukaka kasuwanci." },
          { title: "Tsaro Da Aminci", summary: "Tsarin tsaro mai hankali, hanyoyin mayar da martani na al'umma, da saurin daidaita agajin gaggawa." },
        ],
      },
      map: {
        title: "Taswirar Kamfen Kai Tsaye",
        activeFocus: "Abin da ake mayar da hankali",
        listeningTours: "Ziyarar sauraron al'umma",
        eventCalendar: "Kalanda na abubuwa zai bude nan ba da jimawa ba",
        zones: [
          { name: "Lagos West", focus: "Ayyuka, saukin sufuri, SME, da hidimomi masu kula da iyali.", wards: "Alimosho, Badagry, Ojo, Ikeja axis" },
          { name: "Lagos Central", focus: "Kasuwanni, tsaron jama'a, kasuwanci, da sabunta bakin ruwa.", wards: "Lagos Island, Surulere, Apapa, Eti-Osa axis" },
          { name: "Lagos East", focus: "Ilimi, samun fasaha, noma, da bunkasar blue economy.", wards: "Ikorodu, Epe, Ibeju-Lekki, Kosofe axis" },
        ],
      },
      press: {
        label: "Labarai da press",
        title: "Sabbin bayanan kamfen kai tsaye.",
        description:
          "Sabbin bayanai tabbatattu, rahotannin jama'a, da sanarwar kamfen a wuri daya.",
        updates: [
          { source: "Press", title: "GAC ta amince da Hamzat a matsayin dan takarar gwamnan APC na hadin kai", date: "28 April 2026" },
          { source: "Press", title: "Tinubu ya goyi bayan Hamzat a matsayin dan takarar APC na Lagos", date: "29 April 2026" },
          { source: "Kamfen", title: "Dandalin kamfen na hukuma na Obafemi Hamzat 2027", date: "Live" },
        ],
      },
      primaryResult: {
        label: "Sakamakon primary na APC",
        title: "Hamzat ya zama dan takarar gwamnan APC na Lagos 2027.",
        description:
          "Mataimakin Gwamnan Lagos ya samu tikitin gwamnan APC bayan ya samu kuri'u 657,974 a primary da aka gudanar ranar 21 May 2026.",
        resultSummary:
          "Hamzat ya doke abokin hamayyarsa daya, wanda ya samu kuri'a daya, yayin da aka sanar da sakamakon a sakatariyar APC a Ikeja.",
        declared: "An sanar a APC Secretariat, Ikeja ranar 21 May 2026.",
        highlights: ["Kuri'u da aka samu", "Kuri'a ga abokin hamayya", "Mataimakin Gwamna tun"],
        mediaTypeVideo: "Fim din kamfen",
        mediaTypePhoto: "Rumbun hotunan primary",
        mediaSlides: [
          { title: "Bidiyon sanarwar primary", caption: "Fim din kamfen daga sanarwar sakamakon primary na APC." },
          { title: "Lokacin primary 01", caption: "Sanarwar sakamako ta fara a sakatariyar APC a Ikeja." },
          { title: "Lokacin primary 02", caption: "Shugabannin jam'iyya da magoya baya sun taru don sakamakon hukuma." },
          { title: "Lokacin primary 03", caption: "Kallo bisa tsarin lokaci na abubuwan primary na ranar 21 May." },
          { title: "Lokacin primary 04", caption: "Kamfen din APC Lagos 2027 ya shiga sabon mataki." },
        ],
        featureCards: [
          { title: "Media kit", copy: "Bidiyon sakamako na hukuma, hotuna, da kayan press." },
          { title: "Jawabai", copy: "Jawabai, bayanan karba, da sanarwar jama'a." },
          { title: "Fina-finan kamfen", copy: "Gajerun fina-finai da lokutan bidiyo daga yunkurin." },
        ],
      },
      gallery: {
        label: "Hotunan kamfen",
        title: "Lagos cikin motsi.",
        description:
          "Hotunan suna mayar da hankali ga mutane: hidimar jama'a, kayan more rayuwa, matasa, al'umma, da kasancewar jagoranci.",
        items: [
          { title: "Kwarewa", caption: "Tattaunawar jagoranci da masu ruwa da tsaki na Lagos." },
          { title: "Kayan more rayuwa", caption: "Lokutan dubawa da kaddamarwa a fadin Lagos." },
          { title: "Yunkuri", caption: "Hadakar jama'a a fadin al'ummomi." },
          { title: "Al'umma", caption: "Hulda da kungiyoyin hadin gwiwa da grassroots." },
          { title: "Matasa", caption: "Bude hanyoyi ga matasa da hidimar jama'a." },
          { title: "Imani & Hidima", caption: "Jagorancin jama'a da ya ginu kan girmamawa da al'umma." },
        ],
      },
    },
    about: {
      ...en.about,
      head: {
        title: "Game da Hamzat",
        description:
          "Karanta tarihin Dr. Kadri Obafemi Hamzat, aikin jama'a, tushen fasaha, aikin gyara, da tafiyar jagorancinsa a Jihar Lagos.",
      },
      hero: {
        title: "Hidima. Kirkire-kirkire. Sakamako.",
        description:
          "Dr. Kadri Obafemi Hamzat ya gina aikinsa kan warware matsaloli, inganta tsare-tsare, da samar da dama ga mutanen Lagos.",
      },
      biography: {
        label: "Tarihi",
        title: "Dan siyasar zamani da injiniya, gyara, da hidimar Lagos suka siffanta.",
        description:
          "An haife shi a cikin iyali mai tushen hidimar jama'a, Dr. Kadri Obafemi Hamzat ya sadaukar da rayuwarsa wajen inganta tsare-tsare da gina dama. Tafiyarsa ta shafi fasaha, kudi, gudanarwar jama'a, da shugabancin zartarwa.",
        paragraphs: [
          "Ya samu digiri daga University of Ibadan da Cranfield University a United Kingdom kafin ya gina aiki mai martaba a cibiyoyi na duniya da kasuwancin Najeriya.",
          "Shigarsa hidimar jama'a ta bude daya daga cikin manyan tafiyoyin gwamnati a Lagos: gyaran fasaha, ayyukan jama'a, sabunta sufuri, da jagoranci mai natsuwa.",
          "Gada tsakanin kwarewa da kirkire-kirkire.",
        ],
        imageTitle: "Kwarewar da aka gwada.",
        imageCaption: "Jagoranci da ya ginu kan aiki, ba nunawa ba.",
      },
      credentials: {
        label: "Asalin Jagoranci",
        title: "Bayanan martabar da Lagos ke bukata a shekaru goma masu zuwa.",
        description:
          "Matsayin kamfen shi ne kwarewa tare da kwanciyar hankali, kirkire-kirkire, da hadin kai.",
        items: [
          { title: "Injiniya", description: "Mai tunanin tsarin da aka horar don magance manyan matsalolin jama'a da kayan more rayuwa." },
          { title: "Masanin fasaha", description: "Kwarewa a fasaha, kudi, gudanarwar jama'a, da shugabanci." },
          { title: "Mai hidimar jama'a", description: "Fiye da shekaru ashirin yana taimakawa gina Lagos ta hanyar gyara, ayyuka, da kirkire-kirkire." },
          { title: "Mai goyon bayan ilimi", description: "Mai mayar da hankali kan shirye-shiryen tunani, ilimin dijital, STEM, da hanyoyin dama." },
        ],
      },
      timeline: {
        label: "Lokutan hidimar jama'a",
        title: "Tarihi da aka gina a hankali.",
        description:
          "Ba kamfen na dare daya ba ne. Doguwar tafiya ce ta alhaki, gyara, da aiki mai amfani ga Lagos.",
        items: [
          { year: "Farkon Aiki", title: "Injiniya da Masanin Fasaha na Duniya", description: "Ya gina kwarewa a fasaha, kudi, da gudanarwar jama'a kafin shiga hidimar jama'a." },
          { year: "Science & Tech", title: "Kwamishina na Science and Technology", description: "Ya jagoranci sabunta bangaren jama'a ta fasaha kuma ya taimaka wajen gina tushen dijital na Lagos." },
          { year: "Works", title: "Special Adviser on Works", description: "Ya ba da gudummawa ga tsara kayan more rayuwa, aikin aiwatarwa, da ayyukan jama'a masu mayar da hankali kan sufuri." },
          { year: "2019 - Yanzu", title: "Mataimakin Gwamnan Jihar Lagos", description: "Yana aiki tare da Gwamna Babajide Sanwo-Olu a daya daga cikin manyan tattalin arzikin birane a Afirka." },
          { year: "2027", title: "Zabin Hadin Kai na APC", description: "Manyan kafofin watsa labarai na Najeriya sun ruwaito shi a matsayin zabin APC/GAC na takarar gwamnan Lagos 2027." },
        ],
      },
      character: {
        imageTitle: "Mai tushe a cikin al'umma.",
        imageCaption: "Kamfen da ke sauraro kafin ya yi magana.",
        label: "Halin jagoranci",
        title: "Mai saukin kai, mai natsuwa, kuma mai zurfin sanin Lagos.",
        description:
          "Babban karfin kamfen na Obafemi Hamzat ba hayaniya ba ne. Tarihi ne na kasancewa a wurin aiki, fahimtar tsare-tsare, girmama al'umma, da ci gaba da motsa Lagos.",
        quote:
          "Kwarewa ba wai komawa baya ba ce. Shiri ce ga abin da Lagos za ta zama a gaba.",
      },
    },
    visionPage: {
      ...en.visionPage,
      head: {
        title: "Hangen 2027",
        description:
          "Binciki hangen Lagos 2027 na Dr. Kadri Obafemi Hamzat kan gwamnatin dijital, ayyuka, ilimi, sufuri, kayan more rayuwa, lafiya, da tsaro.",
      },
      hero: {
        title: "Babi Na Gaba Na Lagos.",
        description:
          "Gwamnati mai hankali. Tattalin arziki mai hade. Lagos mai kunsar kowa. Hangen 2027 an gina shi ne don mutane, kayan more rayuwa, dama, da fasaha.",
      },
      pillarsIntro: {
        label: "Ginshikan manifesto",
        title: "Ajandar mulki, ba kalaman kamfen kawai ba.",
        description:
          "Hangen yana kewaye da tsarin yau da kullum da ke nuna ko Lagos tana aiki ga dalibai, yan kasuwa, masu kirkira, ma'aikata, iyalai, da al'ummomi.",
      },
      pillars: [
        { title: "Digital Lagos 2.0", summary: "Gwamnati mai hankali, tattalin arziki mai hade, hidimomin jama'a na dijital, cibiyoyin kirkire-kirkire, da tsarin gari mai shirin AI.", points: ["Gwamnatin dijital", "Tsarin sufuri mai hankali", "Wi-Fi na jama'a", "Cibiyoyin kirkire-kirkire", "Hidimomin jama'a masu AI"] },
        { title: "Ci Gaban Tattalin Arziki", summary: "Karin SME, karfafa matasa, hanyoyin zuba jari, tallafin kasuwanci, da sauye-sauye masu saukaka kasuwanci.", points: ["Karin ayyuka", "Karin SME", "Karfafa matasa", "Jawo zuba jari", "Gyare-gyaren kasuwanci"] },
        { title: "Ilimi Da Karfin Dan Adam", summary: "Makarantun gwamnati na zamani, STEM, ilimin dijital, koyon sana'a, da bunkasa malamai.", points: ["Makarantun gwamnati na zamani", "Ilimin STEM", "Koyon sana'a", "Ilimin dijital", "Bunkasa malamai"] },
        { title: "Juyin Kayan More Rayuwa", summary: "Hanyoyi, jirgin kasa, ruwa, zirga-zirga mai hankali, da muhimman hanyoyi da ke motsa mutanen Lagos cikin sauri da aminci.", points: ["Hanyoyi da jirgin kasa", "Hanyoyin ruwa", "Zirga-zirga mafi aminci", "Lokacin tafiya mai tabbas", "Kayan more rayuwa masu hankali"] },
        { title: "Lafiya Ga Kowa", summary: "Ingantaccen kiwon lafiya na farko, kula da mata, agajin gaggawa, lafiyar dijital, da asibitocin al'umma.", points: ["Kiwon lafiya na farko", "Kula da mata", "Agajin gaggawa", "Tsarin lafiya na dijital", "Asibitocin al'umma"] },
      ],
      roadmapIntro: {
        label: "Taswirar ci gaba",
        title: "Taswirar Lagos da mutane za su iya bi.",
        description:
          "Kamfen ya kamata ya sa alkawura su zama bayyane. Tsarin taswira yana juya fifiko zuwa matakai, dashboard, da aikin jama'a mai aunawa.",
      },
      roadmap: [
        { phase: "Kwanaki 100 Na Farko", title: "Gudun Budaddiyar Gwamnati", description: "Buga dashboard na aiki mai gaskiya, tabbatar da muhimman hanyoyi, da kunna hanyoyin jin ra'ayin jama'a." },
        { phase: "Shekara Ta Farko", title: "Isar Da Hidima Mai Hankali", description: "Mayar da manyan hidimomin gwamnati zuwa dijital kuma fadada samun dama a matakin al'umma ta hanyar mobile-first." },
        { phase: "2027 - 2031", title: "Ci Gaban Lagos Mai Kunsar Kowa", description: "Fadada ayyuka, ilimi, sufuri, lafiya, da shirye-shiryen kirkire-kirkire a dukkan yankuna biyar na Lagos." },
      ],
      dashboardNote:
        "Ra'ayin dashboard na jama'a: fifiko, matakai, da ra'ayin al'umma.",
      tech: {
        imageTitle: "Fasaha ya kamata ta inganta rayuwar yau da kullum.",
        imageCaption: "Makomar Lagos dijital ce, mai kwarewa, kuma tana sanya mutane gaba.",
        label: "Mulki mai amfani da fasaha",
        title: "Lagos mai hankali ga kowa.",
        description:
          "Manufar fasaha ba ado ba ce. Ya kamata ta rage layi, inganta sufuri, saukaka kasuwanci, karfafa lafiya, kuma ta taimaka wa matasan Lagos yin gasa a duniya.",
        quote:
          "Motsa mutane cikin sauri, aminci, da hankali. Shirya tunani. Bunkasa kasuwanci. Sabunta hidimomi.",
      },
    },
    impact: {
      ...en.impact,
      head: {
        title: "Nasarori da Tasiri",
        description:
          "Duba tasirin hidimar jama'a na Dr. Kadri Obafemi Hamzat a Lagos a fannonin sauyin dijital, kayan more rayuwa, gyaran bangaren jama'a, da kirkire-kirkiren matasa.",
      },
      hero: {
        title: "An Gina Shi Kan Sakamako.",
        description:
          "Kamfen din ya dogara ne da tarihin hidimar jama'a: sauyin dijital, aiwatar da kayan more rayuwa, tsarin gyara, da damar gaba.",
      },
      pillarsIntro: {
        label: "Ginshikan tasiri",
        title: "Hujjojin da ke bayan kamfen.",
        description:
          "Sakon siyasa mafi karfi shi ne aikin da mutane za su iya gani a rayuwarsu ta yau da kullum.",
      },
      achievements: [
        { metric: "11 ERP modules", title: "Sauyin Dijital", description: "Gyare-gyaren da fasaha ta jagoranta sun taimaka wajen sanya Lagos cikin gwamnatocin Afirka masu karfin dijital." },
        { metric: "First cable-stayed", title: "Lekki-Ikoyi Link Bridge", description: "Gudummawa ga muhimman kayan more rayuwa ta karfafa hade-hade, rage matsin zirga-zirga, da tallafa wa kasuwanci." },
        { metric: "An rage ghost workers", title: "Gyaran Hidimar Jama'a", description: "Tunanin tsari, hada fasaha, da natsuwar gudanarwa sun inganta isar da hidimar gwamnati." },
        { metric: "Shirin gaba", title: "Matasa & Kirkire-kirkire", description: "Tallafi ga kirkire-kirkire, kasuwanci, da ilimin dijital yana ci gaba da zama tsakiyar Lagos ta gobe." },
      ],
      tracker: {
        label: "Mai bin tasirin al'umma",
        title: "Bi aikin ta jigo.",
        description:
          "Rumbun tasirin kamfen ya kamata ya taimaka wa masu zabe su bincika abin da aka yi, inda ya shafi rayuwarsu, da abin da ke gaba.",
        filters: [
          { id: "all", label: "Duka" },
          { id: "digital", label: "Dijital" },
          { id: "infrastructure", label: "Kayan more rayuwa" },
          { id: "reform", label: "Gyara" },
          { id: "youth", label: "Matasa" },
        ],
        items: [
          { categoryId: "digital", category: "Dijital", title: "Sauyin Dijital", description: "Gyare-gyaren fasaha da tsarin enterprise sun taimaka wajen sabunta hidimar jama'a a Lagos." },
          { categoryId: "infrastructure", category: "Kayan more rayuwa", title: "Kayan More Rayuwa Na Birni", description: "Ayyukan jama'a da gudummawar sufuri sun tallafa wa Lagos mega-city mai hade." },
          { categoryId: "reform", category: "Gyara", title: "Gyaran Hidimar Jama'a", description: "Tunanin tsari da sabunta gudanarwa sun inganta yadda gwamnati ke aiki ga mutane." },
          { categoryId: "youth", category: "Matasa", title: "Kirkire-kirkire & Dama", description: "Matasa, kasuwanci, ilimin dijital, da kirkire-kirkire suna tsakiyar makomar Lagos." },
        ],
      },
      infrastructure: {
        imageTitle: "Tunanin mega-city.",
        imageCaption: "Kayan more rayuwa shi ne yadda dama ke motsi.",
        label: "Kayan more rayuwa da sabuntawa",
        title: "Tarihi da ke hade da makomar birnin Lagos.",
        description:
          "Sakon nasarori ya kamata ya hada aikin baya da burin gaba: hanyoyi, gadoji, tsarin sufuri, sabunta jama'a, da birnin da ke ci gaba da motsi.",
        cta: "Ziyarci rumbun hukuma",
      },
      gallery: {
        label: "Hotuna",
        title: "Hidimar jama'a cikin hotuna.",
        description:
          "Rumbun hotuna ya kamata ya kasance mai motsa rai, mai nuna mutane, kuma na musamman ga Lagos.",
        items: [
          { title: "Kwarewa", caption: "Tattaunawar jagoranci da masu ruwa da tsaki na Lagos." },
          { title: "Kayan more rayuwa", caption: "Lokutan dubawa da kaddamarwa a fadin Lagos." },
          { title: "Yunkuri", caption: "Hadakar jama'a a fadin al'ummomi." },
          { title: "Al'umma", caption: "Hulda da kungiyoyin hadin gwiwa da grassroots." },
          { title: "Matasa", caption: "Bude hanyoyi ga matasa da hidimar jama'a." },
          { title: "Imani & Hidima", caption: "Jagorancin jama'a da ya ginu kan girmamawa da al'umma." },
        ],
      },
    },
    join: {
      ...en.join,
      head: {
        title: "Shiga Yunkurin",
        description:
          "Shiga yunkurin kamfen na Lagos 2027 na Dr. Kadri Obafemi Hamzat. Yi sa kai, shirya a ward dinka, shiga tallafin media, nuna sha'awa, ko karbi sabbin bayanan hukuma.",
      },
      hero: {
        title: "Lagos Tana Tashi. Ka Kasance Cikin Ta.",
        description:
          "Wannan kamfen ya fi siyasa girma. Yana nufin al'ummomi masu aminci, kasuwanci masu karfi, matasa masu karfi, ilimi mai kyau, kayan more rayuwa na zamani, da Lagos inda kowa ke da damar bunkasa.",
      },
      why: {
        label: "Dalilin da yunkurin yake da muhimmanci",
        title: "Gaba tare, ward bayan ward.",
        description:
          "Cin Lagos yana bukatar fiye da sako. Yana bukatar mutane: dalibai, mata, shugabannin kasuwa, kwararru, masu kirkira, al'ummomin addini, masu fasaha, masu sana'a, da masu shirya al'umma.",
        items: ["Al'ummomi masu aminci", "Kasuwanci masu karfi", "Matasa masu karfi", "Ilimi mai kyau", "Kayan more rayuwa na zamani", "Dama ga kowane dan kasa"],
        imageTitle: "Dubban mutanen Lagos. Makoma daya.",
        imageCaption: "Karfin al'umma, an tsara shi don Lagos mai girma.",
      },
      formIntro: {
        label: "Fom din sa kai",
        title: "Zabi yadda kake son yin hidima.",
        description:
          "Wannan fom ya shirya don hadin backend daga baya. A yanzu, yana daukar cikakken tsarin shiga kamfen kuma yana tabbatar da tafiyar sa kai.",
        card:
          "Zama muryar ward, mai tsara campus, abokin media, mai tuntubar masu bayarwa, ko mai motsa al'umma.",
      },
      form: {
        fullName: "Cikakken suna",
        fullNamePlaceholder: "Cikakken sunanka",
        phone: "Waya / WhatsApp",
        phonePlaceholder: "+234",
        email: "Email",
        emailPlaceholder: "you@example.com",
        location: "LGA / Ward",
        locationPlaceholder: "Ikeja, Ikorodu, Epe...",
        participation: "Nau'in shiga",
        message: "Sako",
        messagePlaceholder: "Fada mana yadda kake son taimakawa.",
        submit: "Aika Sha'awa",
        submittedPrefix: "An rubuta sha'awarka ta",
        submittedSuffix:
          "a cikin wannan na'ura. Hada wannan fom da CRM, email, ko database na kamfen idan backend ya shirya.",
        roles: [
          "Mai sa kai",
          "Mai tsara ward",
          "Mai motsa matasa",
          "Hadakar mata",
          "Jakadan campus",
          "Hadakar media",
          "Rajistar taro",
          "Sha'awar bayarwa",
        ],
      },
      cards: [
        { title: "Al'ummar WhatsApp", description: "Nemi gayyata don sabbin bayanan ward, canvassing, da sanarwar abubuwa." },
        { title: "Hadakar Media", description: "Tallafa wa martani cikin sauri, labarai, daidaita press, da abun dijital." },
        { title: "Event RSVP", description: "Yi rajistar sha'awa ga town halls, youth forums, ziyarar kasuwa, da abubuwan policy." },
      ],
      newsletter: {
        title: "Karbi sabbin bayanan kamfen na hukuma.",
        description:
          "Labarai, sabbin bayanan filin aiki, jawabi, sanarwar media kit, ayyukan masu sa kai, da sanarwar taro daga yunkurin For A Greater Lagos.",
        email: "Adireshin email",
        placeholder: "you@example.com",
        subscribe: "Yi rajista",
        submitted: "An ajiye sha'awar newsletter a cikin wannan prototype.",
      },
    },
  },
  ig: {
    ...en,
    home: {
      ...en.home,
      head: {
        title: "Kadri Obafemi Hamzat 2027 | Onye APC Na-acho Gọvanọ Lagos",
        description:
          "Ikpo okwu mkposa gọọmenti maka Dr. Kadri Obafemi Hamzat, onye APC na-acho Gọvanọ Lagos 2027. Lelee ọhụụ Greater Lagos, mmezu, akuko, na mmelite ndị ọrụ afọ ofufo.",
      },
      hero: {
        label: "Onye APC Na-acho Gọvanọ 2027",
        title: "Ahụmahụ Na Ọhụụ Maka Lagos Ka Mma.",
        description:
          "KOH 2027 bụ mmeghari na-ebute mmadụ ụzọ, wuru na ọrụ ọha, mgbanwe dijitalụ, akụrụngwa, na Lagos na-emepe ohere n'akụkụ niile.",
        secondaryCta: "Lelee Manifesto",
      },
      heroSlides: [
        { title: "Ahụmahụ Na Ọhụụ", caption: "Onye ọrụ ọha a nwalere, dị njikere ibuga Lagos n'isi nke ọzọ." },
        { title: "Ndú N'ọrụ", caption: "Mkposa gbadoro ụkwụ na ige ntị, mkparịta ụka, na mmezu nwayọọ." },
        { title: "Akụrụngwa Na-ejikọta", caption: "Ụzọ, ụgbọ oloko, ụzọ mmiri, na ọrụ ọha a haziri maka njem kwa ụbọchị." },
        { title: "Ọdịnihu Wuru Na Ndị Ntorobịa", caption: "Nkà dijitalụ, azụmahịa, agụmakwụkwọ, na ohere maka ọgbọ na-abịa." },
        { title: "Ike Grassroots", caption: "Mkposa ndị mmadụ na-ege obodo, ahịa, campus, na ward ntị." },
      ],
      leader: {
        imageTitle: "Onye Ndú Lagos Tụkwasịrị Obi",
        imageCaption: "Mmeghari gbadoro ụkwụ na ọrụ ọha, ọ bụghị mkpọtụ.",
        label: "Onye ndu Lagos tukwasiri obi",
        title: "Ọ bụghị onye ọhụrụ n'ọrụ. Kwadebere maka isi nke ọzọ.",
        description:
          "Site n'ịgbanwe akụrụngwa dijitalụ Lagos ruo n'ịrụ ọrụ dị ka Deputy Governor kemgbe 2019, ndu Dr. Obafemi Hamzat lekwasịrị anya na Lagos nwere ọgụgụ isi, nchekwa, na ọganihu maka onye ọ bụla.",
        qualities: ["Injinia", "Onye teknokrat", "Onye mmezi", "Onye jikota ndi mmadu"],
        quote: "Lagos na-arụ ọrụ maka onye ọ bụla.",
      },
      stats: [
        { value: "25+", label: "Afọ Ọrụ", description: "Ọrụ ọha, teknụzụ, na ọchịchị na-aga n'ihu" },
        { value: "2x", label: "Deputy Governor", description: "A họpụtara ya na 2019 ma họpụtakwa ọzọ na 2023" },
        { value: "1st", label: "Oracle ERP", description: "Duru mbido Oracle ERP nke mbụ n'ọrụ ọha n'Afrika" },
        { value: "2013", label: "Nwa Lagos", description: "A matara ya maka ọrụ, mmezi, na ihe ọhụrụ" },
      ],
      audience: {
        label: "Maka onye Lagos ọ bụla",
        title: "Ọdịnihu Lagos ga-etinyerịrị onye ọ bụla.",
        description:
          "Ma ị na-ewu azụmahịa, na-amụ nkà, na-agafe okporo ụzọ juru, na-azụ ezinụlọ, ma ọ bụ na-ejere obodo gị ozi, mmeghari a haziri ya gburugburu ọdịnihu gị.",
        items: [
          "Ụmụ akwụkwọ na Ikorodu",
          "Ndị ahịa na Balogun",
          "Ndị malitere tech na Yaba",
          "Ndị ọkụ azụ na Epe",
          "Ndị ọkachamara na Victoria Island",
          "Ezinụlọ gafee Alimosho",
        ],
      },
      vision: {
        label: "Ọhụụ 2027",
        title: "Isi nke ọzọ nke Lagos.",
        description:
          "Disiplin dị ka presidency, mmụọ Lagos, na mmezu na-ebute teknụzụ ụzọ.",
        cta: "Gụọ manifesto zuru ezu",
        pillars: [
          { title: "Digital Lagos 2.0", summary: "Gọọmenti nwere ọgụgụ isi, akụ na ụba jikọtara, ọrụ ọha dijitalụ, hub ihe ọhụrụ, na sistemụ obodo dị njikere maka AI." },
          { title: "Mgbanwe Akụrụngwa", summary: "Ụzọ, ụgbọ oloko, ụzọ mmiri, smart mobility, na corridors ga-ebuga ndị Lagos ngwa ngwa na nchekwa." },
          { title: "Agụmakwụkwọ & Ike Mmadụ", summary: "Ụlọ akwụkwọ ọha nke oge a, STEM, ọgụgụ dijitalụ, ike ọrụ aka, na mmepe ndị nkuzi." },
          { title: "Ahụike Maka Onye Ọ Bula", summary: "Ahụike mbụ siri ike, nlekọta nne, mmeghachi mberede, ahụike dijitalụ, na ụlọọgwụ obodo." },
          { title: "Ọganihu Akụ Na Ụba", summary: "SME karịa, ike ndị ntorobịa, ụzọ itinye ego, ego azụmahịa, na mmezi na-eme ka azụmahịa dị mfe." },
          { title: "Nchekwa & Udo", summary: "Akụrụngwa nchekwa nwere ọgụgụ isi, usoro mmeghachi obodo, na nhazi mberede ngwa ngwa." },
        ],
      },
      map: {
        title: "Map Mkposa Na-aga N'ihu",
        activeFocus: "Ihe a na-elekwasị anya",
        listeningTours: "Njem ige obodo ntị",
        eventCalendar: "Kalenda ihe omume ga-emeghe n'oge adịghị anya",
        zones: [
          { name: "Lagos West", focus: "Ọrụ, enyemaka njem, SME, na ọrụ lekwasịrị ezinụlọ anya.", wards: "Alimosho, Badagry, Ojo, Ikeja axis" },
          { name: "Lagos Central", focus: "Ahịa, nchekwa ọha, azụmahịa, na imegharị waterfront.", wards: "Lagos Island, Surulere, Apapa, Eti-Osa axis" },
          { name: "Lagos East", focus: "Agụmakwụkwọ, ohere dijitalụ, ọrụ ugbo, na uto blue economy.", wards: "Ikorodu, Epe, Ibeju-Lekki, Kosofe axis" },
        ],
      },
      press: {
        label: "Akuko na press",
        title: "Mmelite mkposa na-aga n'ihu.",
        description:
          "Mmelite a kwadoro, akụkọ ọha, na ọkwa mkposa n'otu ebe.",
        updates: [
          { source: "Press", title: "GAC kwadoro Hamzat dị ka onye APC kwenyere maka gọvanọ", date: "28 April 2026" },
          { source: "Press", title: "Tinubu kwadoro Hamzat dị ka onye APC kwenyere na Lagos", date: "29 April 2026" },
          { source: "Mkposa", title: "Ikpo okwu mkposa Obafemi Hamzat 2027 nke gọọmenti", date: "Live" },
        ],
      },
      primaryResult: {
        label: "Nsonaazụ primary APC",
        title: "Hamzat ghọrọ onye APC na-acho gọvanọ Lagos 2027.",
        description:
          "Deputy Governor Lagos State nwetara tiketi gọvanọ APC mgbe ọ nwetara votu 657,974 na primary e mere na 21 May 2026.",
        resultSummary:
          "Hamzat meriri onye otu ya n'ịsọ mpi, onye nwetara otu votu, ma kwupụta nsonaazụ na APC secretariat na Ikeja.",
        declared: "A kwupụtara ya na APC Secretariat, Ikeja na 21 May 2026.",
        highlights: ["Votu enwetara", "Votu maka onye mpi", "Deputy Governor kemgbe"],
        mediaTypeVideo: "Fiim mkposa",
        mediaTypePhoto: "Akpa foto primary",
        mediaSlides: [
          { title: "Vidiyo nkwupụta primary", caption: "Fiim mkposa site na nkwupụta nsonaazụ primary APC." },
          { title: "Oge primary 01", caption: "Nkwupụta nsonaazụ bidoro na APC secretariat na Ikeja." },
          { title: "Oge primary 02", caption: "Ndị isi pati na ndị nkwado zukọrọ maka nsonaazụ gọọmenti." },
          { title: "Oge primary 03", caption: "Nlele n'usoro oge nke omume primary nke 21 May." },
          { title: "Oge primary 04", caption: "Mkposa APC Lagos 2027 batara n'ọkwa ọhụrụ." },
        ],
        featureCards: [
          { title: "Media kit", copy: "Vidiyo nsonaazụ gọọmenti, foto, na akụrụngwa press." },
          { title: "Okwu", copy: "Okwu, ndetu nnabata, na nkwupụta ọha." },
          { title: "Fiim mkposa", copy: "Fiim mkpirikpi na oge vidiyo site na mmeghari." },
        ],
      },
      gallery: {
        label: "Gallery mkposa",
        title: "Lagos n'ime mmegharị.",
        description:
          "Foto ndị ahụ lekwasịrị mmadụ anya: ọrụ ọha, akụrụngwa, ntorobịa, obodo, na ịdị adị nke ndu.",
        items: [
          { title: "Ahụmahụ", caption: "Mkparịta ụka ndu na ndị nwere oke na Lagos." },
          { title: "Akụrụngwa", caption: "Oge nyocha na commissioning gafee Lagos." },
          { title: "Mmeghari", caption: "Njikọ ndị mmadụ gafee obodo." },
          { title: "Obodo", caption: "Mmekọrịta na cooperatives na grassroots." },
          { title: "Ntorobịa", caption: "Imepe ụzọ maka ndị ntorobịa na ọrụ obodo." },
          { title: "Okwukwe & Ọrụ", caption: "Ndú ọha gbadoro ụkwụ na nkwanye ùgwù na obodo." },
        ],
      },
    },
    about: {
      ...en.about,
      head: {
        title: "Banyere Hamzat",
        description:
          "Gụọ biography Dr. Kadri Obafemi Hamzat, ndekọ ọrụ ọha, ndabere teknụzụ, ọrụ mmezi, na njem ndu ya na Lagos State.",
      },
      hero: {
        title: "Ọrụ. Ihe Ọhụrụ. Nsonaazụ.",
        description:
          "Dr. Kadri Obafemi Hamzat ewuola ọrụ ya gburugburu idozi nsogbu, imezi sistemụ, na imepụta ohere maka ndị Lagos.",
      },
      biography: {
        label: "Biography",
        title: "Onye statesman nke oge a nke injinia, mmezi, na ọrụ Lagos kpụpụtara.",
        description:
          "A mụrụ Dr. Kadri Obafemi Hamzat n'ezinụlọ gbadoro ụkwụ n'ọrụ ọha, o tinyela ndụ ya n'imezi sistemụ na iwu ohere. Njem ọrụ ya gafere teknụzụ, ego, ọchịchị ọha, na ndu executive.",
        paragraphs: [
          "Ọ nwetara degrees site na University of Ibadan na Cranfield University na United Kingdom tupu o wuo ọrụ a na-akwanyere ùgwù na ụlọ ọrụ ụwa na azụmahịa Nigeria.",
          "Ịbanye ya n'ọrụ ọha malitere otu n'ime njem ọchịchị kacha baa uru na Lagos State: mmezi teknụzụ, public works, modernisation njem, na ndu siri ike.",
          "Àkwà mmiri n'etiti ahụmahụ na ihe ọhụrụ.",
        ],
        imageTitle: "Ikike a nwalere.",
        imageCaption: "Ndú gbadoro ụkwụ na mmezu, ọ bụghị ngosi.",
      },
      credentials: {
        label: "DNA Ndú",
        title: "Profaịlụ Lagos chọrọ maka afọ iri na-abịa.",
        description:
          "Ntọala mkposa bụ ikike tinyere ịdịgide, ihe ọhụrụ, na itinye onye ọ bụla.",
        items: [
          { title: "Injinia", description: "Onye na-eche sistemụ, zụrụ iji dozie nsogbu obodo na akụrụngwa siri ike." },
          { title: "Teknokrat", description: "Ahụmahụ gafee teknụzụ, ego, ọchịchị ọha, na governance." },
          { title: "Onye Ọrụ Ọha", description: "Karịrị afọ iri abụọ n'inyere aka iwulite Lagos site na mmezi, ọrụ, na ihe ọhụrụ." },
          { title: "Onye Na-akwado Agụmakwụkwọ", description: "Lekwasịrị anya na uche kwadebere, ọgụgụ dijitalụ, STEM, na ụzọ ohere." },
        ],
      },
      timeline: {
        label: "Usoro oge ọrụ ọha",
        title: "Ndekọ wuru n'ime oge.",
        description:
          "Ọ bụghị mkposa abalị. Ọ bụ ogologo njem nke ọrụ, mmezi, na mmezu maka Lagos.",
        items: [
          { year: "Mbido Ọrụ", title: "Injinia na Teknokrat Ụwa", description: "Wuru ahụmahụ gafee teknụzụ, ego, na ọchịchị ọha tupu ịbanye n'ọrụ ọha." },
          { year: "Science & Tech", title: "Commissioner for Science and Technology", description: "Duru modernisation ọrụ ọha site na teknụzụ ma nyere aka ịkwalite ntọala dijitalụ Lagos." },
          { year: "Works", title: "Special Adviser on Works", description: "Nyere aka na nhazi akụrụngwa, discipline mmezu, na public works lekwasịrị njem anya." },
          { year: "2019 - Ugbu a", title: "Deputy Governor of Lagos State", description: "Na-arụ ọrụ n'akụkụ Governor Babajide Sanwo-Olu n'otu n'ime akụ na ụba obodo kacha ibu n'Afrika." },
          { year: "2027", title: "Nhọrọ APC Kwesịrị Ịkwado", description: "Ndị mgbasa ozi ukwu Nigeria kọrọ ya dị ka nhọrọ APC/GAC maka asọmpi gọvanọ Lagos 2027." },
        ],
      },
      character: {
        imageTitle: "Gbanyere mkpọrọgwụ n'obodo.",
        imageCaption: "Mkposa na-ege ntị tupu ọ kwuo.",
        label: "Àgwà ndu",
        title: "Dị mfe iru, siri ike, ma lekwasịrị Lagos anya nke ọma.",
        description:
          "Akụ kacha sie ike n'ime mkposa Obafemi Hamzat abụghị mkpọtụ. Ọ bụ ndekọ nke ịpụta, ịghọta sistemụ, ịkwanyere obodo ùgwù, na ime ka Lagos na-aga n'ihu.",
        quote:
          "Ahụmahụ abụghị nostalgia. Ọ bụ nkwadebe maka ihe Lagos ga-abụ ọzọ.",
      },
    },
    visionPage: {
      ...en.visionPage,
      head: {
        title: "Ọhụụ 2027",
        description:
          "Nyochaa ọhụụ Lagos 2027 nke Dr. Kadri Obafemi Hamzat maka ọchịchị dijitalụ, ọrụ, agụmakwụkwọ, njem, akụrụngwa, ahụike, na nchekwa.",
      },
      hero: {
        title: "Isi Ọzọ Nke Lagos.",
        description:
          "Gọọmenti nwere ọgụgụ isi. Akụ na ụba jikọtara. Lagos na-etinye onye ọ bụla. Ọhụụ 2027 wuru maka mmadụ, akụrụngwa, ohere, na teknụzụ.",
      },
      pillarsIntro: {
        label: "Ogidi manifesto",
        title: "Agenda ọchịchị, ọ bụghị slogan mkposa.",
        description:
          "Ọhụụ a haziri ya gburugburu sistemụ kwa ụbọchị na-ekpebi ma Lagos na-arụ ọrụ maka ụmụ akwụkwọ, ndị ahịa, founders, ndị ọrụ, ezinụlọ, na obodo.",
      },
      pillars: [
        { title: "Digital Lagos 2.0", summary: "Gọọmenti nwere ọgụgụ isi, akụ na ụba jikọtara, ọrụ ọha dijitalụ, hub ihe ọhụrụ, na sistemụ obodo dị njikere maka AI.", points: ["Ọchịchị dijitalụ", "Smart transportation systems", "Wi-Fi ọha", "Hub ihe ọhụrụ", "Ọrụ ọha AI kwadoro"] },
        { title: "Ọganihu Akụ Na Ụba", summary: "SME karịa, ike ndị ntorobịa, ụzọ itinye ego, ego azụmahịa, na mmezi na-eme ka azụmahịa dị mfe.", points: ["Ọrụ karịa", "SME karịa", "Ike ndị ntorobịa", "Ịdọta itinye ego", "Mmezi na-akwado azụmahịa"] },
        { title: "Agụmakwụkwọ & Ike Mmadụ", summary: "Ụlọ akwụkwọ ọha nke oge a, STEM, ọgụgụ dijitalụ, ike ọrụ aka, na mmepe ndị nkuzi.", points: ["Ụlọ akwụkwọ ọha nke oge a", "Agụmakwụkwọ STEM", "Ike ọrụ aka", "Ọgụgụ dijitalụ", "Mmepe ndị nkuzi"] },
        { title: "Mgbanwe Akụrụngwa", summary: "Ụzọ, ụgbọ oloko, ụzọ mmiri, smart mobility, na corridors ga-ebuga ndị Lagos ngwa ngwa na nchekwa.", points: ["Ụzọ na ụgbọ oloko", "Ụzọ mmiri", "Njem dị nchebe", "Commute a pụrụ ịtụ anya", "Akụrụngwa nwere ọgụgụ isi"] },
        { title: "Ahụike Maka Onye Ọ Bula", summary: "Ahụike mbụ siri ike, nlekọta nne, mmeghachi mberede, ahụike dijitalụ, na ụlọọgwụ obodo.", points: ["Ahụike mbụ", "Nlekọta nne", "Mmeghachi mberede", "Akụrụngwa ahụike dijitalụ", "Ụlọọgwụ obodo"] },
      ],
      roadmapIntro: {
        label: "Roadmap mmepe",
        title: "Roadmap Lagos ndị mmadụ nwere ike iso.",
        description:
          "Mkposa kwesịrị ime ka nkwa pụta ìhè. Ụdị roadmap na-atụgharị priorities ka ọ bụrụ phases, dashboards, na mmezu ọha a pụrụ ịtụ.",
      },
      roadmap: [
        { phase: "Ụbọchị 100 Mbụ", title: "Open Government Sprint", description: "Bipụta dashboard mmezu doro anya, kwado corridors kacha mkpa, ma mee ka ụzọ nzaghachi ụmụ amaala rụọ ọrụ." },
        { phase: "Afọ Mbụ", title: "Smart Service Delivery", description: "Mee ka ọrụ gọọmenti a na-achọkarị bụrụ dijitalụ ma gbasaa ohere obodo site na mobile-first channels." },
        { phase: "2027 - 2031", title: "Uto Lagos Maka Onye Ọ Bula", description: "Gbasaa ọrụ, agụmakwụkwọ, njem, ahụike, na mmemme ihe ọhụrụ gafee divisions ise niile nke Lagos." },
      ],
      dashboardNote:
        "Echiche dashboard ọha: priorities, milestones, na nzaghachi obodo.",
      tech: {
        imageTitle: "Teknụzụ kwesịrị ime ka ndụ kwa ụbọchị ka mma.",
        imageCaption: "Ọdịnihu Lagos bụ dijitalụ, nwere nkà, ma na-ebute mmadụ ụzọ.",
        label: "Ọchịchị na-ebute tech ụzọ",
        title: "Lagos nwere ọgụgụ isi maka onye ọ bụla.",
        description:
          "Ebumnuche teknụzụ abụghị ịchọ mma. Ọ kwesịrị ibelata ahịrị, ime ka njem ka mma, mee azụmahịa mfe, mee ka usoro ahụike sie ike, ma nyere ndị ntorobịa Lagos aka ịsọmpi n'ụwa.",
        quote:
          "Bugharịa ndị mmadụ ngwa ngwa, n'enweghị ihe egwu, na n'amamihe. Kwadebe uche. Too azụmahịa. Mee ọrụ ka ọ bụrụ nke oge a.",
      },
    },
    impact: {
      ...en.impact,
      head: {
        title: "Mmezu na Mmetụta",
        description:
          "Nyochaa mmetụta ọrụ ọha Dr. Kadri Obafemi Hamzat na Lagos gafee mgbanwe dijitalụ, akụrụngwa, mmezi public sector, na ihe ọhụrụ ndị ntorobịa.",
      },
      hero: {
        title: "Wuru Na Nsonaazụ.",
        description:
          "Mkposa a gbadoro ụkwụ na ndekọ ọrụ ọha: mgbanwe dijitalụ, mmezu akụrụngwa, discipline mmezi, na ohere maka ọdịnihu.",
      },
      pillarsIntro: {
        label: "Ogidi mmetụta",
        title: "Ihe akaebe dị n'azụ mkposa.",
        description:
          "Ozi ndọrọ ndọrọ ọchịchị kacha sie ike bụ mmezu ndị mmadụ nwere ike ịhụ na ndụ kwa ụbọchị.",
      },
      achievements: [
        { metric: "11 ERP modules", title: "Mgbanwe Dijitalụ", description: "Mmezi teknụzụ duziri nyere Lagos aka ịdị n'etiti gọọmenti Afrika nwere nnukwu ebumnuche dijitalụ." },
        { metric: "First cable-stayed", title: "Lekki-Ikoyi Link Bridge", description: "Onyinye na akụrụngwa pụrụ iche siri njikọ ike, belata nrụgide njem, ma kwado azụmahịa." },
        { metric: "Ghost workers belatara", title: "Mmezi Ọrụ Ọha", description: "Echiche sistemụ, ijikọ teknụzụ, na discipline nchịkwa mere ka ọrụ gọọmenti ka mma." },
        { metric: "Njikere maka ọdịnihu", title: "Ntorobịa & Ihe Ọhụrụ", description: "Nkwado maka ihe ọhụrụ, entrepreneurship, na ọgụgụ dijitalụ ka nọ n'etiti Lagos nke echi." },
      ],
      tracker: {
        label: "Nlele mmetụta obodo",
        title: "Soro ọrụ site na isiokwu.",
        description:
          "Archive mmetụta mkposa kwesịrị inyere ndị ntuli aka nyochaa ihe emerela, ebe o metụtara ndụ ha, na ihe na-abịa.",
        filters: [
          { id: "all", label: "Niile" },
          { id: "digital", label: "Dijitalụ" },
          { id: "infrastructure", label: "Akụrụngwa" },
          { id: "reform", label: "Mmezi" },
          { id: "youth", label: "Ntorobịa" },
        ],
        items: [
          { categoryId: "digital", category: "Dijitalụ", title: "Mgbanwe Dijitalụ", description: "Mmezi teknụzụ na enterprise systems nyere aka ime ka public service delivery na Lagos bụrụ nke oge a." },
          { categoryId: "infrastructure", category: "Akụrụngwa", title: "Akụrụngwa Obodo", description: "Public works na onyinye transportation kwadoro Lagos mega-city jikọtara nke ọma." },
          { categoryId: "reform", category: "Mmezi", title: "Mmezi Ọrụ Ọha", description: "Echiche sistemụ na modernization nchịkwa mere ka gọọmenti si arụ ọrụ maka mmadụ ka mma." },
          { categoryId: "youth", category: "Ntorobịa", title: "Ihe Ọhụrụ & Ohere", description: "Ntorobịa, entrepreneurship, ọgụgụ dijitalụ, na ihe ọhụrụ dị n'etiti ọdịnihu Lagos." },
        ],
      },
      infrastructure: {
        imageTitle: "Echiche mega-city.",
        imageCaption: "Akụrụngwa bụ otú ohere si aga.",
        label: "Akụrụngwa na modernization",
        title: "Ndekọ jikọtara na ọdịnihu obodo Lagos.",
        description:
          "Ozi mmezu kwesịrị ijikọ ọrụ gara aga na ebumnuche ọdịnihu: ụzọ, bridges, transport systems, public modernization, na obodo na-aga n'ihu.",
        cta: "Gaa na archive gọọmenti",
      },
      gallery: {
        label: "Gallery",
        title: "Ọrụ ọha n'ime foto.",
        description:
          "Archive foto kwesịrị ịdị mmetụta, mmadụ, ma bụrụ nke Lagos kpọmkwem.",
        items: [
          { title: "Ahụmahụ", caption: "Mkparịta ụka ndu na ndị nwere oke na Lagos." },
          { title: "Akụrụngwa", caption: "Oge nyocha na commissioning gafee Lagos." },
          { title: "Mmeghari", caption: "Njikọ ndị mmadụ gafee obodo." },
          { title: "Obodo", caption: "Mmekọrịta na cooperatives na grassroots." },
          { title: "Ntorobịa", caption: "Imepe ụzọ maka ndị ntorobịa na ọrụ obodo." },
          { title: "Okwukwe & Ọrụ", caption: "Ndú ọha gbadoro ụkwụ na nkwanye ùgwù na obodo." },
        ],
      },
    },
    join: {
      ...en.join,
      head: {
        title: "Soro Mmeghari",
        description:
          "Soro mmeghari mkposa Lagos 2027 nke Dr. Kadri Obafemi Hamzat. Rụọ ọrụ afọ ofufo, hazie na ward gị, soro nkwado media, debanye mmasị, ma ọ bụ nata mmelite gọọmenti.",
      },
      hero: {
        title: "Lagos Na-ebili. Soro Na Ya.",
        description:
          "Mkposa a karịrị ndọrọ ndọrọ ọchịchị. Ọ bụ maka obodo dị nchebe, azụmahịa siri ike, ndị ntorobịa nwere ike, agụmakwụkwọ ka mma, akụrụngwa nke oge a, na Lagos ebe onye ọ bụla nwere ohere ito.",
      },
      why: {
        label: "Ihe mere mmeghari a ji dị mkpa",
        title: "Gaba ọnụ, ward n'ward.",
        description:
          "Imeri Lagos chọrọ ihe karịrị ozi. Ọ chọrọ mmadụ: ụmụ akwụkwọ, ụmụ nwanyị, ndị isi ahịa, ndị ọkachamara, creatives, obodo okwukwe, tech builders, artisans, na ndị nhazi obodo.",
        items: ["Obodo dị nchebe", "Azụmahịa siri ike", "Ndị ntorobịa nwere ike", "Agụmakwụkwọ ka mma", "Akụrụngwa nke oge a", "Ohere maka nwa amaala ọ bụla"],
        imageTitle: "Puku kwuru puku ndị Lagos. Otu ọdịnihu.",
        imageCaption: "Ike grassroots, ahaziri maka Lagos ka mma.",
      },
      formIntro: {
        label: "Fọm ọrụ afọ ofufo",
        title: "Họrọ otu ịchọrọ isi jee ozi.",
        description:
          "Fọm a dị njikere maka njikọ backend n'ọdịnihu. Maka ugbu a, ọ na-anakọta ụdị isonye mkposa zuru ezu ma kwado flow ndị ọrụ afọ ofufo.",
        card:
          "Bụrụ olu ward, onye nhazi campus, media partner, donor contact, ma ọ bụ community mobilizer.",
      },
      form: {
        fullName: "Aha zuru ezu",
        fullNamePlaceholder: "Aha gị zuru ezu",
        phone: "Ekwentị / WhatsApp",
        phonePlaceholder: "+234",
        email: "Email",
        emailPlaceholder: "you@example.com",
        location: "LGA / Ward",
        locationPlaceholder: "Ikeja, Ikorodu, Epe...",
        participation: "Ụdị isonye",
        message: "Ozi",
        messagePlaceholder: "Gwa anyị otu ịchọrọ isi nyere aka.",
        submit: "Zipu Mmasị",
        submittedPrefix: "Edekọrọ mmasị gị maka",
        submittedSuffix:
          "n'ọrụ mpaghara a. Jikọọ fọm a na CRM, email, ma ọ bụ database mkposa mgbe backend dị njikere.",
        roles: [
          "Onye ọrụ afọ ofufo",
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
        { title: "Obodo WhatsApp", description: "Rịọ invite maka mmelite ward, canvassing, na alerts ihe omume." },
        { title: "Media Partnership", description: "Kwado rapid response, storytelling, press coordination, na ọdịnaya dijitalụ." },
        { title: "Event RSVP", description: "Debanye mmasị maka town halls, youth forums, ahịa visits, na policy events." },
      ],
      newsletter: {
        title: "Nata mmelite mkposa gọọmenti.",
        description:
          "Akuko, mmelite field, speeches, media kit alerts, ọrụ ndị ọrụ afọ ofufo, na ọkwa ihe omume sitere na mmeghari For A Greater Lagos.",
        email: "Adreesị email",
        placeholder: "you@example.com",
        subscribe: "Debanye aha",
        submitted: "Echekwara mmasị newsletter n'obere prototype a.",
      },
    },
  },
};

export function getCampaignPageCopy(language: LanguageCode) {
  return pageCopy[language] ?? pageCopy.en;
}

export function useCampaignPageCopy() {
  const { language } = useI18n();
  return useMemo(() => getCampaignPageCopy(language), [language]);
}
