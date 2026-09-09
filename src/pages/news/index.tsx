import React from "react";
import type { GetServerSideProps } from "next";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogItemsSection from "@/components/blog/BlogItemsSection";
import CampaignLayout from "@/components/campaign/CampaignLayout";
import {
  CampaignCTA,
  CampaignHead,
  PageHero,
  SectionIntro,
} from "@/components/campaign/CampaignPrimitives";
import { campaignAeoContent } from "@/data/aeoContent";
import Title from "@/components/shared/Title";
import { getAllBlogPosts } from "@/lib/codaService";
import { useI18n } from "@/lib/i18n";
import { generateBlogListSchema } from "@/lib/seo";
import type { BlogPost } from "@/types";
import { containerVariants, itemVariants } from "@/lib/utils";
import { motion } from "framer-motion";
import { CalendarDays, Newspaper, Radio } from "lucide-react";
import Head from "next/head";
import { getBlobImageUrl } from "@/lib/blobImages";

interface BlogPageProps {
  posts: BlogPost[];
}

const newsStatItems = [
  {
    labelKey: "news.stats.campaignBriefs.label" as const,
    descriptionKey: "news.stats.campaignBriefs.description" as const,
    Icon: Newspaper,
  },
  {
    labelKey: "news.stats.pressWatch.label" as const,
    descriptionKey: "news.stats.pressWatch.description" as const,
    Icon: Radio,
  },
  {
    labelKey: "news.stats.events.label" as const,
    descriptionKey: "news.stats.events.description" as const,
    Icon: CalendarDays,
  },
];

const NewsPage: React.FC<BlogPageProps> = ({ posts }) => {
  const { t } = useI18n();
  const pageDescription = t("news.meta.description");
  const newsStats = newsStatItems.map(({ labelKey, descriptionKey, Icon }) => ({
    label: t(labelKey),
    description: t(descriptionKey),
    Icon,
  }));

  return (
    <CampaignLayout>
      <CampaignHead
        title={t("news.meta.title")}
        description={pageDescription}
        path="/news"
        keywords={[
          "Obafemi Hamzat news",
          "Kadri Obafemi Hamzat campaign updates",
          "Hamzat 2027 news",
          "Lagos APC campaign news",
          "Lagos governorship 2027 updates",
        ]}
        answerEngine={campaignAeoContent.news}
      />
      <Head>
        <script
          key="news-item-list-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              ...generateBlogListSchema(posts),
            }),
          }}
        />
      </Head>

      <main className="min-h-screen overflow-hidden" aria-label={t("news.mainLabel")}>
        <Title text={t("news.title")} />
        <PageHero
          title={t("news.hero.title")}
          description={t("news.hero.description")}
          image={getBlobImageUrl("today-i-attended-the-year-2025-eid-ul-adha-celebration-with-the-first-family-of-lagos-state-at_othnyq.jpg")}
        >
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#latest-news"
              className="button-lift inline-flex h-12 items-center justify-center rounded-card bg-secondary-500 px-6 text-sm font-black text-primary-900 transition-all duration-300 hover:bg-secondary-400"
            >
              {t("news.hero.browse")}
            </a>
            <a
              href="#news-archive"
              className="button-lift inline-flex h-12 items-center justify-center rounded-card border border-white/35 bg-white/10 px-6 text-sm font-black text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-[var(--campaign-green-900)]"
            >
              {t("news.hero.search")}
            </a>
          </div>
        </PageHero>

        <section id="latest-news" className="bg-white px-6 py-20">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionIntro
              label={t("news.latest.label")}
              title={t("news.latest.title")}
              description={t("news.latest.description")}
            />
            <motion.div
              initial="hidden"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.2 }}
              whileInView="visible"
              className="grid gap-4 md:grid-cols-3"
            >
              {newsStats.map(({ label, description, Icon }) => (
                <motion.article
                  key={label}
                  variants={itemVariants}
                  className="interactive-card rounded-card border border-[rgba(6,59,46,0.12)] bg-bg-primary p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-card bg-[var(--lagos-sky)] text-[var(--campaign-green-700)]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-black text-text-primary">
                    {label}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">
                    {description}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <BlogItemsSection posts={posts} />

        <section id="news-archive" className="bg-bg-primary pb-20">
          <BlogGrid
            posts={posts}
            title={t("news.archive.title")}
            searchPlaceholder={t("news.archive.search")}
            emptyTitle={t("news.archive.emptyTitle")}
            emptyDescription={t("news.archive.emptyDescription")}
          />
        </section>

        <CampaignCTA />
      </main>
    </CampaignLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const posts = await getAllBlogPosts();

    return {
      props: {
        posts: posts || [],
      },
    };
  } catch (outerError) {
    console.error("Error in getServerSideProps:", outerError);
    return {
      props: {
        posts: [],
      },
    };
  }
};

export default NewsPage;
