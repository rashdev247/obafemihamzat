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
  achievements,
  campaignImages,
  galleryItems,
} from "@/data/campaignContent";
import { containerVariants, fadeInUp, itemVariants } from "@/lib/utils";
import {
  ArrowUpRight,
  Building,
  Cpu,
  Filter,
  UsersRound,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

const impactFilters = ["All", "Digital", "Infrastructure", "Reform", "Youth"];

const impactItems = [
  {
    category: "Digital",
    title: "Digital Transformation",
    description:
      "Technology-led reforms and enterprise systems helped modernize public service delivery in Lagos.",
    Icon: Cpu,
  },
  {
    category: "Infrastructure",
    title: "Urban Infrastructure",
    description:
      "Public works and transportation contributions supported a more connected Lagos mega-city.",
    Icon: Building,
  },
  {
    category: "Reform",
    title: "Public Service Reform",
    description:
      "Systems thinking and administrative modernization improved how government works for people.",
    Icon: Wrench,
  },
  {
    category: "Youth",
    title: "Innovation & Opportunity",
    description:
      "Youth, entrepreneurship, digital literacy, and innovation remain central to the Lagos future.",
    Icon: UsersRound,
  },
];

export default function AchievementsPage() {
  const [filter, setFilter] = useState("All");
  const filteredItems = useMemo(
    () =>
      filter === "All"
        ? impactItems
        : impactItems.filter((item) => item.category === filter),
    [filter]
  );

  return (
    <CampaignLayout>
      <CampaignHead
        title="Achievements and Impact"
        description="Review Dr. Kadri Obafemi Hamzat's Lagos public service impact across digital transformation, infrastructure, public sector reform, and youth innovation."
        path="/achievements"
        keywords={[
          "Obafemi Hamzat achievements",
          "Lagos digital transformation",
          "Lagos infrastructure achievements",
          "public service reform Lagos",
          "Hamzat impact record",
        ]}
        answerEngine={campaignAeoContent.achievements}
      />

      <main>
        <PageHero
          title="Built on Results."
          description="The campaign is anchored in a public service record: digital transformation, infrastructure delivery, reform discipline, and future-focused opportunity."
          image={campaignImages.impact}
        />
        <section className="bg-white px-6 py-20">
          <div className="container mx-auto">
            <SectionIntro
              align="center"
              label="Impact pillars"
              title="The proof points behind the campaign."
              description="The strongest political message is delivery that people can recognize in their daily lives."
            />
            <motion.div
              initial="hidden"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.2 }}
              whileInView="visible"
              className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
            >
              {achievements.map((item) => (
                <motion.article
                  key={item.title}
                  variants={itemVariants}
                  className="rounded-card border border-[rgba(6,59,46,0.12)] bg-bg-primary p-6"
                >
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary-500">
                    {item.metric}
                  </p>
                  <h2 className="mt-5 font-heading text-2xl font-black leading-tight text-text-primary">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-text-secondary">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-bg-primary px-6 py-20">
          <div className="container mx-auto grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <SectionIntro
                label="Community impact tracker"
                title="Track the work by theme."
                description="A campaign-grade impact archive should help voters explore what has been done, where it connects to their lives, and what comes next."
              />
              <motion.div
                initial="hidden"
                variants={containerVariants}
                viewport={{ once: true, amount: 0.3 }}
                whileInView="visible"
                className="mt-8 flex flex-wrap gap-3"
              >
                {impactFilters.map((item) => (
                  <motion.button
                    key={item}
                    type="button"
                    onClick={() => setFilter(item)}
                    variants={itemVariants}
                    className={`inline-flex h-11 items-center gap-2 rounded-card border px-4 text-sm font-black transition-colors duration-200 ${
                      filter === item
                        ? "border-[var(--campaign-green-900)] bg-[var(--campaign-green-900)] text-white"
                        : "border-[rgba(6,59,46,0.16)] bg-white text-text-primary hover:border-secondary-500"
                    }`}
                  >
                    <Filter aria-hidden="true" className="h-4 w-4" />
                    {item}
                  </motion.button>
                ))}
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.2 }}
              whileInView="visible"
              className="grid gap-4"
            >
              {filteredItems.map(({ title, description, Icon, category }) => (
                <motion.article
                  key={title}
                  variants={itemVariants}
                  className="grid gap-5 rounded-card border border-[rgba(6,59,46,0.12)] bg-white p-6 shadow-brand-card md:grid-cols-[auto_1fr]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-card bg-[var(--lagos-sky)] text-[var(--campaign-green-700)]">
                    <Icon aria-hidden="true" className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary-500">
                      {category}
                    </p>
                    <h3 className="mt-2 font-heading text-2xl font-black text-text-primary">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-text-secondary">
                      {description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="campaign-dark-section bg-[var(--campaign-green-950)] px-6 py-20 text-white">
          <div className="container mx-auto grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <ImagePanel
              image={campaignImages.infrastructure}
              title="Mega-city thinking."
              caption="Infrastructure is how opportunity moves."
              className="h-[540px]"
            />
            <div>
              <SectionIntro
                inverse
                label="Infrastructure and modernization"
                title="A record connected to Lagos' urban future."
                description="The achievements message should always connect past delivery to future ambition: roads, bridges, transport systems, public modernization, and a city that keeps moving."
              />
              <motion.a
                initial="hidden"
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.5 }}
                whileInView="visible"
                href="https://www.obafemihamzat.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-card bg-secondary-500 px-6 text-sm font-black text-primary-900 transition-colors duration-200 hover:bg-secondary-400"
              >
                Visit official archive
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="container mx-auto">
            <SectionIntro
              align="center"
              label="Gallery"
              title="Public service in pictures."
              description="The visual archive should feel emotional, human, and Lagos-specific."
            />
            <motion.div
              initial="hidden"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.2 }}
              whileInView="visible"
              className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {galleryItems.map((item) => (
                <motion.figure
                  key={item.title}
                  variants={itemVariants}
                  className="group overflow-hidden rounded-card border border-[rgba(6,59,46,0.12)] bg-bg-primary"
                >
                  <div className="relative h-[280px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="p-5">
                    <p className="font-heading text-xl font-black text-text-primary">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                      {item.caption}
                    </p>
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>
          </div>
        </section>

        <CampaignCTA />
      </main>
    </CampaignLayout>
  );
}
