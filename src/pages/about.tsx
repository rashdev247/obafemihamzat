import CampaignLayout from "@/components/campaign/CampaignLayout";
import {
  CampaignCTA,
  CampaignHead,
  ImagePanel,
  PageHero,
  SectionIntro,
} from "@/components/campaign/CampaignPrimitives";
import { campaignAeoContent } from "@/data/aeoContent";
import { campaignImages } from "@/data/campaignContent";
import { getBlobImageUrl } from "@/lib/blobImages";
import { useCampaignPageCopy } from "@/lib/pageCopy";
import { containerVariants, fadeInUp, itemVariants } from "@/lib/utils";
import { motion } from "framer-motion";
import { Award, Building2, Cpu, GraduationCap } from "lucide-react";
import Image from "next/image";
const BLOB_URL = process.env.NEXT_PUBLIC_BLOB_API_URL;
const ZigZag = `${BLOB_URL}/zigzag_sofhpm.png`;
const rectglow = getBlobImageUrl("rectglow_jlxfok.png");
const credentialIcons = [Cpu, Building2, Award, GraduationCap];

export default function AboutPage() {
  const { about } = useCampaignPageCopy();

  return (
    <CampaignLayout>
      <CampaignHead
        title={about.head.title}
        description={about.head.description}
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
          title={about.hero.title}
          description={about.hero.description}
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
                label={about.biography.label}
                title={about.biography.title}
                description={about.biography.description}
              />
              <motion.div
                initial="hidden"
                variants={containerVariants}
                viewport={{ once: true, amount: 0.3 }}
                whileInView="visible"
                className="mt-8 space-y-5 text-base leading-8 text-text-secondary"
              >
                {about.biography.paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={paragraph}
                    variants={fadeInUp}
                    className={
                      index === about.biography.paragraphs.length - 1
                        ? "font-heading text-2xl font-black leading-tight text-[var(--campaign-green-900)]"
                        : undefined
                    }
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            </div>
            <ImagePanel
              image={campaignImages.publicService}
              title={about.biography.imageTitle}
              caption={about.biography.imageCaption}
              className="h-[540px]"
            />
          </div>
        </section>

        <section className="bg-bg-primary px-6 py-20">
          <div className="container mx-auto">
            <SectionIntro
              align="center"
              label={about.credentials.label}
              title={about.credentials.title}
              description={about.credentials.description}
            />
            <motion.div
              initial="hidden"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.2 }}
              whileInView="visible"
              className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
            >
              {about.credentials.items.map(({ title, description }, index) => {
                const Icon = credentialIcons[index] ?? Cpu;

                return (
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
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="container mx-auto grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <SectionIntro
              label={about.timeline.label}
              title={about.timeline.title}
              description={about.timeline.description}
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
                {about.timeline.items.map((item) => (
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
              title={about.character.imageTitle}
              caption={about.character.imageCaption}
              className="h-[500px]"
            />
            <div>
              <SectionIntro
                label={about.character.label}
                title={about.character.title}
                description={about.character.description}
              />
              <motion.div
                initial="hidden"
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.4 }}
                whileInView="visible"
                className="mt-8 rounded-card bg-white p-6 shadow-brand-card"
              >
                <p className="font-heading text-3xl font-black leading-tight text-[var(--campaign-green-900)]">
                  {about.character.quote}
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
