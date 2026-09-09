import CampaignLayout from "@/components/campaign/CampaignLayout";
import {
  CampaignCTA,
  CampaignHead,
  ImagePanel,
  PageHero,
  SectionIntro,
} from "@/components/campaign/CampaignPrimitives";
import { campaignAeoContent } from "@/data/aeoContent";
import {
  biographyTimeline,
  campaignImages,
  campaignSite,
} from "@/data/campaignContent";
import { getBlobImageUrl } from "@/lib/blobImages";
import { containerVariants, fadeInUp, itemVariants } from "@/lib/utils";
import { motion } from "framer-motion";
import { Award, Building2, Cpu, GraduationCap } from "lucide-react";
import Image from "next/image";
const BLOB_URL = process.env.NEXT_PUBLIC_BLOB_API_URL;
const ZigZag = `${BLOB_URL}/zigzag_sofhpm.png`;
const rectglow = getBlobImageUrl("rectglow_jlxfok.png");
const credentials = [
  {
    title: "Engineer",
    description:
      "A systems thinker trained to solve hard civic and infrastructure problems.",
    Icon: Cpu,
  },
  {
    title: "Technocrat",
    description:
      "Experience across technology, finance, public administration, and governance.",
    Icon: Building2,
  },
  {
    title: "Public Servant",
    description:
      "More than two decades helping build Lagos through reform, works, and innovation.",
    Icon: Award,
  },
  {
    title: "Education Advocate",
    description:
      "Focused on prepared minds, digital literacy, STEM, and opportunity pathways.",
    Icon: GraduationCap,
  },
];

export default function AboutPage() {
  return (
    <CampaignLayout>
      <CampaignHead
        title="About Hamzat"
        description="Read Dr. Kadri Obafemi Hamzat's biography, public service record, technology background, reform work, and leadership journey in Lagos State."
        path="/about"
        keywords={[
          "Dr Kadri Obafemi Hamzat biography",
          "Obafemi Hamzat profile",
          "Deputy Governor of Lagos State",
          "Lagos public service",
          "Lagos technology reform",
        ]}
        answerEngine={campaignAeoContent.about}
      />

      <main>
        <PageHero
          title="Service. Innovation. Results."
          description="Dr. Kadri Obafemi Hamzat has built a career around solving problems, improving systems, and creating opportunities for Lagosians."
          image={getBlobImageUrl("al-ḥamdu-l-illāhi-rabbi-l-ʿālamīn.-for-the-grace-and-favour-bestowed-upon-me-by-almighty-allah-_zlbdsb.jpg")}
        />
        <section className="bg-white px-6 py-20">
          <div className="container mx-auto grid relative gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="absolute  w-[100%] inset-0">
              <Image
                src={rectglow}
                alt="Background pattern"
                fill
                sizes="100vw"
                className="w-full"
                priority
              />
            </div>
            <div>
              <SectionIntro
                label="The biography"
                title="A modern statesman shaped by engineering, reform, and Lagos service."
                description="Born into a family rooted in public service, Dr. Kadri Obafemi Hamzat has dedicated his life to improving systems and building opportunity. His professional journey spans technology, finance, public administration, and executive governance."
              />
              <motion.div
                initial="hidden"
                variants={containerVariants}
                viewport={{ once: true, amount: 0.3 }}
                whileInView="visible"
                className="mt-8 space-y-5 text-base leading-8 text-text-secondary"
              >
                <motion.p variants={fadeInUp}>
                  He earned degrees from the University of Ibadan and Cranfield
                  University in the United Kingdom before building a respected
                  career across global institutions and Nigerian enterprise.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  His transition into public service marked the beginning of one
                  of Lagos State&apos;s most consequential governance journeys:
                  technology reform, public works, transport modernization, and
                  steady executive leadership.
                </motion.p>
                <motion.p
                  variants={fadeInUp}
                  className="font-heading text-2xl font-black leading-tight text-[var(--campaign-green-900)]"
                >
                  A bridge between experience and innovation.
                </motion.p>
              </motion.div>
            </div>
            <ImagePanel
              image={campaignImages.publicService}
              title="Competence that has been tested."
              caption="Leadership rooted in delivery, not spectacle."
              className="h-[540px]"
            />
          </div>
        </section>

        <section className="bg-bg-primary px-6 py-20">
          <div className="container mx-auto">
            <SectionIntro
              align="center"
              label="Leadership DNA"
              title="The profile Lagos needs for the next decade."
              description="The campaign positioning is competence plus stability plus innovation plus inclusiveness."
            />
            <motion.div
              initial="hidden"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.2 }}
              whileInView="visible"
              className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
            >
              {credentials.map(({ title, description, Icon }) => (
                <motion.article
                  key={title}
                  variants={itemVariants}
                  className="rounded-card border border-[rgba(6,59,46,0.12)] bg-white p-6 shadow-brand-card"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-card bg-[var(--lagos-sky)] text-[var(--campaign-green-700)]">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-black text-text-primary">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">
                    {description}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="container mx-auto grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <SectionIntro
              label="Public service timeline"
              title="A record built over time."
              description="Not an overnight campaign. A long arc of responsibility, reform, and Lagos-focused delivery."
            />
            <div className="relative">
              <div>
                <Image
                  src={ZigZag}
                  alt="Background pattern"
                  fill
                  priority
                  className="z-0 relative"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-[19px] top-0 w-px bg-[rgba(6,59,46,0.16)]"
              />
              <motion.div
                initial="hidden"
                variants={containerVariants}
                viewport={{ once: true, amount: 0.15 }}
                whileInView="visible"
                className="grid gap-6"
              >
                {biographyTimeline.map((item) => (
                  <motion.article
                    key={item.title}
                    variants={itemVariants}
                    className="relative grid gap-4 pl-14 md:grid-cols-[160px_1fr] md:gap-8"
                  >
                    <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-card bg-secondary-500 font-heading text-sm font-black text-primary-900">
                      {item.year === "2027" ? "27" : ""}
                    </span>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--campaign-green-700)]">
                      {item.year}
                    </p>
                    <div className="rounded-card border border-[rgba(6,59,46,0.12)] bg-bg-primary p-6">
                      <h3 className="font-heading text-2xl font-black text-text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-text-secondary">
                        {item.description}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--lagos-sky)] px-6 py-20">
          <div className="container mx-auto grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <ImagePanel
              image={campaignImages.ramadan}
              title="Rooted in community."
              caption="A campaign that listens before it speaks."
              className="h-[500px]"
            />
            <div>
              <SectionIntro
                label="Leadership character"
                title="Accessible, steady, and deeply Lagos-focused."
                description={`${campaignSite.shortName}'s strongest campaign asset is not noise. It is a record of showing up, understanding systems, respecting communities, and keeping Lagos moving.`}
              />
              <motion.div
                initial="hidden"
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.4 }}
                whileInView="visible"
                className="mt-8 rounded-card bg-white p-6 shadow-brand-card"
              >
                <p className="font-heading text-3xl font-black leading-tight text-[var(--campaign-green-900)]">
                  Experience is not nostalgia. It is preparation for what Lagos
                  must become next.
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
