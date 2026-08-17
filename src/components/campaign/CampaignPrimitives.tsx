import { campaignSite } from "@/data/campaignContent";
import { useI18n } from "@/lib/i18n";
import { containerVariants, fadeInUp, itemVariants } from "@/lib/utils";
import {
  SITE_IMAGE,
  SITE_KEYWORDS,
  SITE_LANGUAGE,
  SITE_LOCALE,
  SITE_NAME,
  getCampaignKeywords,
  generateCampaignPageSchema,
  normalizeKeywords,
  toAbsoluteUrl,
} from "@/lib/seo";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type CampaignHeadProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  robots?: string;
};

export function CampaignHead({
  title,
  description,
  path = "",
  image = SITE_IMAGE,
  keywords = SITE_KEYWORDS,
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
}: CampaignHeadProps) {
  const pageTitle = title.includes("|") ? title : `${title} | ${campaignSite.shortName}`;
  const url = toAbsoluteUrl(path || "/");
  const mergedKeywords = getCampaignKeywords(keywords);
  const schema = generateCampaignPageSchema({
    title: pageTitle,
    description,
    url,
    image,
    keywords: mergedKeywords,
    breadcrumbs:
      path && path !== "/"
        ? [
            { name: "Home", url: toAbsoluteUrl("/") },
            { name: title, url },
          ]
        : [{ name: "Home", url }],
  });

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={normalizeKeywords(mergedKeywords)} />
      <meta name="author" content={SITE_NAME} />
      <meta name="publisher" content={SITE_NAME} />
      <meta name="robots" content={robots} />
      <meta property="og:locale" content={SITE_LOCALE} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Dr. Kadri Obafemi Hamzat campaign preview for Lagos 2027"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta
        name="twitter:image:alt"
        content="Dr. Kadri Obafemi Hamzat campaign preview for Lagos 2027"
      />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang={SITE_LANGUAGE} href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      <script
        key="campaign-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}

type SectionIntroProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionIntro({
  label,
  title,
  description,
  align = "left",
  inverse = false,
}: SectionIntroProps) {
  return (
    <motion.div
      initial="hidden"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.3 }}
      whileInView="visible"
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      {label && (
        <motion.p
          variants={fadeInUp}
          className={`mb-4 text-xs font-black uppercase tracking-[0.22em] ${
            inverse ? "text-secondary-400" : "text-[var(--campaign-green-700)]"
          }`}
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        variants={fadeInUp}
        className={`font-heading text-3xl font-black leading-tight md:text-5xl ${
          inverse ? "text-white" : "text-[var(--campaign-green-950)]"
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeInUp}
          className={`mt-5 text-base leading-8 md:text-lg ${
            inverse ? "text-white/72" : "text-text-secondary"
          }`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

type PageHeroProps = {
  title: string;
  description: string;
  image: string;
  children?: ReactNode;
};

export function PageHero({ title, description, image, children }: PageHeroProps) {
  return (
    <section className="campaign-dark-section relative overflow-hidden bg-[var(--campaign-green-950)] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.34) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.34) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="container relative z-10 mx-auto grid min-h-[640px] items-center gap-12 px-6 pb-20 pt-32 lg:min-h-[760px] lg:grid-cols-[0.92fr_1.08fr] lg:pb-24 lg:pt-36">
        <motion.div
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.35 }}
          whileInView="visible"
        >
          <motion.h1
            variants={fadeInUp}
            className="max-w-[11ch] font-heading text-5xl font-black leading-[0.98] text-white [text-shadow:0_10px_38px_rgba(0,0,0,0.3)] md:text-7xl"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl"
          >
            {description}
          </motion.p>
          {children && <motion.div variants={fadeInUp}>{children}</motion.div>}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
          className="relative min-h-[420px]"
        >
          <div className="absolute -left-5 top-7 h-24 w-24 border-[14px] border-secondary-500/45" />
          <div className="interactive-card relative h-[420px] overflow-hidden rounded-card shadow-[0_30px_90px_rgba(0,0,0,0.25)] md:h-[420px]">
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,20,18,0.68)] via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type CTAGroupProps = {
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTAGroup({
  primaryHref = "/join",
  primaryLabel,
  secondaryHref = "/vision-2027",
  secondaryLabel,
}: CTAGroupProps) {
  const { t } = useI18n();
  const resolvedPrimaryLabel = primaryLabel ?? t("cta.join");
  const resolvedSecondaryLabel = secondaryLabel ?? t("cta.readVision");

  return (
    <motion.div
      initial="hidden"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.4 }}
      whileInView="visible"
      className="mt-8 flex flex-col gap-3 sm:flex-row"
    >
      <Link
        href={primaryHref}
        className="button-lift inline-flex h-12 items-center justify-center rounded-card bg-secondary-500 px-6 text-sm font-black text-primary-900 transition-all duration-300 hover:bg-secondary-400"
      >
        <motion.span variants={itemVariants}>{resolvedPrimaryLabel}</motion.span>
      </Link>
      <Link
        href={secondaryHref}
        className="button-lift inline-flex h-12 items-center justify-center rounded-card border border-white/35 bg-white/10 px-6 text-sm font-black text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-[var(--campaign-green-900)]"
      >
        <motion.span variants={itemVariants}>{resolvedSecondaryLabel}</motion.span>
      </Link>
    </motion.div>
  );
}

type ImagePanelProps = {
  image: string;
  title: string;
  caption?: string;
  className?: string;
};

export function ImagePanel({ image, title, caption, className = "" }: ImagePanelProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 34 }}
      viewport={{ once: true, amount: 0.25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={`interactive-card group relative overflow-hidden rounded-card bg-primary-900 ${className}`}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 1024px) 100vw, 46vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/82 via-primary-900/10 to-transparent" />
      {(title || caption) && (
        <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white">
          <div className="h-1 w-14 bg-secondary-500 transition-all duration-300 group-hover:w-20" />
          <p className="mt-4 font-heading text-2xl font-black leading-tight">
            {title}
          </p>
          {caption && <p className="mt-2 text-sm leading-6 text-white/72">{caption}</p>}
        </figcaption>
      )}
    </motion.figure>
  );
}

export function CampaignCTA() {
  const { t } = useI18n();

  return (
    <section className="campaign-dark-section bg-[var(--campaign-green-950)] px-6 py-20 text-white">
      <motion.div
        initial="hidden"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.35 }}
        whileInView="visible"
        className="container mx-auto grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"
      >
        <SectionIntro
          inverse
          label={t("campaignCta.label")}
          title={t("campaignCta.title")}
          description={t("campaignCta.description")}
        />
        <motion.div
          variants={containerVariants}
          className="flex flex-col gap-3 sm:flex-row lg:flex-col"
        >
          <Link
            href="/join#movement-form"
            className="button-lift inline-flex h-12 items-center justify-center rounded-card bg-secondary-500 px-6 text-sm font-black text-primary-900 transition-all duration-300 hover:bg-secondary-400"
          >
            <motion.span variants={itemVariants}>{t("cta.volunteerNow")}</motion.span>
          </Link>
          <Link
            href="/join#newsletter"
            className="button-lift inline-flex h-12 items-center justify-center rounded-card border border-white/30 px-6 text-sm font-black text-white transition-all duration-300 hover:bg-white hover:text-[var(--campaign-green-900)]"
          >
            <motion.span variants={itemVariants}>{t("cta.getUpdates")}</motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
