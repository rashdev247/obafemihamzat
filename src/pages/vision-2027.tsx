import CampaignLayout from "@/components/campaign/CampaignLayout";
import {
  AnswerEngineSection,
  CampaignCTA,
  CampaignHead,
  ImagePanel,
  PageHero,
  SectionIntro,
} from "@/components/campaign/CampaignPrimitives";
import { campaignAeoContent } from "@/data/aeoContent";
import { campaignImages, roadmap, visionPillars } from "@/data/campaignContent";
import { containerVariants, fadeInUp, itemVariants } from "@/lib/utils";
import {
  BriefcaseBusiness,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  Route,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { getBlobImageUrl } from "@/lib/blobImages";

const pillarDetails = [
  {
    ...visionPillars[0],
    Icon: Smartphone,
    points: [
      "Digital governance",
      "Smart transportation systems",
      "Public Wi-Fi access",
      "Innovation hubs",
      "AI-powered public services",
    ],
  },
  {
    ...visionPillars[1],
    Icon: BriefcaseBusiness,
    points: [
      "More jobs",
      "More SMEs",
      "Youth empowerment",
      "Investment attraction",
      "Business-friendly reforms",
    ],
  },
  {
    ...visionPillars[2],
    Icon: GraduationCap,
    points: [
      "Modern public schools",
      "STEM education",
      "Vocational empowerment",
      "Digital literacy",
      "Teacher development",
    ],
  },
  {
    ...visionPillars[3],
    Icon: Route,
    points: [
      "Roads and rail",
      "Waterways",
      "Safer mobility",
      "Predictable commutes",
      "Smart infrastructure",
    ],
  },
  {
    ...visionPillars[4],
    Icon: HeartPulse,
    points: [
      "Primary healthcare",
      "Maternal care",
      "Emergency response",
      "Digital health infrastructure",
      "Community clinics",
    ],
  },
];

export default function VisionPage() {
  const [activePhase, setActivePhase] = useState(roadmap[0]);

  return (
    <CampaignLayout>
      <CampaignHead
        title="Vision 2027"
        description="Explore Dr. Kadri Obafemi Hamzat's Lagos 2027 vision for digital governance, jobs, education, transport, infrastructure, healthcare, and security."
        path="/vision-2027"
        keywords={[
          "Obafemi Hamzat Vision 2027",
          "Lagos 2027 manifesto",
          "Digital Lagos 2.0",
          "Lagos infrastructure plan",
          "Lagos jobs education healthcare",
        ]}
        answerEngine={campaignAeoContent.vision}
      />

      <main>
        <PageHero
          title="The Next Chapter of Lagos."
          description="A smarter government. A connected economy. A more inclusive Lagos. The 2027 vision is built for people, infrastructure, opportunity, and technology."
          image={getBlobImageUrl(
            "i-represented-the-governor-of-lagos-state-mr-babajide-olusola-sanwo-olu-as-special-guest-at-the-_1_fptuu4.jpg",
          )}
        />

        <AnswerEngineSection content={campaignAeoContent.vision} />

        <section className="bg-white px-6 py-20">
          <div className="container mx-auto">
            <SectionIntro
              align="center"
              label="Manifesto pillars"
              title="A governing agenda, not campaign slogans."
              description="The vision is organized around the everyday systems that determine whether Lagos works for students, traders, founders, workers, families, and communities."
            />
            <motion.div
              initial="hidden"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.16 }}
              whileInView="visible"
              className="mt-12 grid gap-5"
            >
              {pillarDetails.map(({ title, summary, points, Icon }, index) => (
                <motion.article
                  key={title}
                  variants={itemVariants}
                  className={`grid gap-8 rounded-card border border-[rgba(6,59,46,0.12)] p-6 md:grid-cols-[0.82fr_1.18fr] md:p-8 ${
                    index % 2 === 0 ? "bg-bg-primary" : "bg-white"
                  }`}
                >
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-card bg-[var(--campaign-green-900)] text-white">
                      <Icon aria-hidden="true" className="h-7 w-7" />
                    </div>
                    <h2 className="mt-5 font-heading text-3xl font-black leading-tight text-text-primary">
                      {title}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-text-secondary">
                      {summary}
                    </p>
                  </div>
                  <motion.div
                    variants={containerVariants}
                    className="grid gap-3 sm:grid-cols-2"
                  >
                    {points.map((point) => (
                      <motion.div
                        key={point}
                        variants={itemVariants}
                        className="flex min-h-[78px] items-center rounded-card border border-[rgba(6,59,46,0.1)] bg-white px-5 font-bold text-primary-900 shadow-[0_12px_30px_rgba(7,47,107,0.05)]"
                      >
                        {point}
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="campaign-dark-section bg-[var(--campaign-green-950)] px-6 py-20 text-white">
          <div className="container mx-auto grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionIntro
                inverse
                label="Development roadmap"
                title="A Lagos roadmap people can track."
                description="A campaign should make promises visible. The roadmap model turns priorities into phases, dashboards, and measurable public delivery."
              />
              <motion.div
                initial="hidden"
                variants={containerVariants}
                viewport={{ once: true, amount: 0.25 }}
                whileInView="visible"
                className="mt-8 grid gap-3"
              >
                {roadmap.map((phase) => (
                  <motion.button
                    key={phase.phase}
                    type="button"
                    onClick={() => setActivePhase(phase)}
                    variants={itemVariants}
                    className={`rounded-card border px-5 py-4 text-left transition-colors duration-200 ${
                      activePhase.phase === phase.phase
                        ? "border-secondary-500 bg-secondary-500 text-primary-900"
                        : "border-white/14 bg-white/8 text-white hover:bg-white/14"
                    }`}
                  >
                    <span className="block text-xs font-black uppercase tracking-[0.18em]">
                      {phase.phase}
                    </span>
                    <span className="mt-2 block font-heading text-xl font-black">
                      {phase.title}
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.3 }}
              whileInView="visible"
              className="rounded-card bg-white p-8 text-text-primary shadow-[0_30px_90px_rgba(0,0,0,0.18)]"
            >
              <Lightbulb
                aria-hidden="true"
                className="h-10 w-10 text-secondary-500"
              />
              <p className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-[var(--campaign-green-700)]">
                {activePhase.phase}
              </p>
              <h3 className="mt-4 font-heading text-4xl font-black leading-tight text-text-primary">
                {activePhase.title}
              </h3>
              <p className="mt-5 text-lg leading-8 text-text-secondary">
                {activePhase.description}
              </p>
              <div className="mt-8 h-2 overflow-hidden rounded-card bg-bg-secondary">
                <div className="h-full w-2/3 bg-secondary-500" />
              </div>
              <p className="mt-4 text-sm font-bold text-text-muted">
                Public dashboard concept: priorities, milestones, and community
                feedback.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="bg-bg-primary px-6 py-20">
          <div className="container mx-auto grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <ImagePanel
              image={campaignImages.youth}
              title="Technology should improve everyday life."
              caption="The Lagos future is digital, skilled, and people-first."
              className="h-[520px]"
            />
            <div>
              <SectionIntro
                label="Tech-forward governance"
                title="A smarter Lagos for everyone."
                description="The purpose of technology is not decoration. It should shorten queues, improve transit, simplify business, strengthen health systems, and help young Lagosians compete globally."
              />
              <motion.div
                initial="hidden"
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.4 }}
                whileInView="visible"
                className="mt-8 rounded-card bg-white p-6 shadow-brand-card"
              >
                <p className="font-heading text-2xl font-black leading-tight text-[var(--campaign-green-900)]">
                  Move people faster, safer, and smarter. Prepare minds. Grow
                  enterprise. Modernize services.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <CampaignCTA />
      </main>
    </CampaignLayout>
  );
}
