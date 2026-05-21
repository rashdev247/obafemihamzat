import { campaignSite } from "@/data/campaignContent";
import Head from "next/head";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type CampaignHeadProps = {
  title: string;
  description: string;
  path?: string;
};

export function CampaignHead({ title, description, path = "" }: CampaignHeadProps) {
  const pageTitle = `${title} | ${campaignSite.shortName}`;
  const url = `${campaignSite.url}${path}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Obafemi Hamzat 2027, Lagos governorship, Greater Lagos, APC Lagos, Kadri Obafemi Hamzat"
      />
      <meta property="og:site_name" content={campaignSite.name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${campaignSite.url}/logo.webp`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={url} />
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
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {label && (
        <p
          className={`mb-4 text-xs font-black uppercase tracking-[0.22em] ${
            inverse ? "text-secondary-400" : "text-[var(--campaign-green-700)]"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`font-heading text-3xl font-black leading-tight md:text-5xl ${
          inverse ? "text-white" : "text-text-primary"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-8 md:text-lg ${
            inverse ? "text-white/72" : "text-text-secondary"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

type PageHeroProps = {
  title: string;
  description: string;
  image: StaticImageData;
  children?: ReactNode;
};

export function PageHero({ title, description, image, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--campaign-green-950)] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="container relative z-10 mx-auto grid min-h-[520px] items-center gap-12 px-6 py-16 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <h1 className="max-w-[11ch] font-heading text-5xl font-black leading-[0.98] text-white md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
            {description}
          </p>
          {children}
        </div>
        <div className="relative min-h-[420px]">
          <div className="absolute -left-5 top-7 h-24 w-24 border-[14px] border-secondary-500/45" />
          <div className="relative h-[420px] overflow-hidden rounded-card shadow-[0_30px_90px_rgba(0,0,0,0.25)] md:h-[520px]">
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,20,18,0.68)] via-transparent to-transparent" />
          </div>
        </div>
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
  primaryLabel = "Join The Movement",
  secondaryHref = "/vision-2027",
  secondaryLabel = "Read The Vision",
}: CTAGroupProps) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Link
        href={primaryHref}
        className="inline-flex h-12 items-center justify-center rounded-card bg-secondary-500 px-6 text-sm font-black text-primary-900 transition-colors duration-200 hover:bg-secondary-400"
      >
        {primaryLabel}
      </Link>
      <Link
        href={secondaryHref}
        className="inline-flex h-12 items-center justify-center rounded-card border border-white/35 bg-white/10 px-6 text-sm font-black text-white backdrop-blur transition-colors duration-200 hover:bg-white hover:text-[var(--campaign-green-900)]"
      >
        {secondaryLabel}
      </Link>
    </div>
  );
}

type ImagePanelProps = {
  image: StaticImageData;
  title: string;
  caption?: string;
  className?: string;
};

export function ImagePanel({ image, title, caption, className = "" }: ImagePanelProps) {
  return (
    <figure className={`relative overflow-hidden rounded-card bg-primary-900 ${className}`}>
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 1024px) 100vw, 46vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/82 via-primary-900/10 to-transparent" />
      {(title || caption) && (
        <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white">
          <div className="h-1 w-14 bg-secondary-500" />
          <p className="mt-4 font-heading text-2xl font-black leading-tight">
            {title}
          </p>
          {caption && <p className="mt-2 text-sm leading-6 text-white/72">{caption}</p>}
        </figcaption>
      )}
    </figure>
  );
}

export function CampaignCTA() {
  return (
    <section className="bg-[var(--campaign-green-950)] px-6 py-20 text-white">
      <div className="container mx-auto grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <SectionIntro
          inverse
          label="Join the movement"
          title="Lagos is rising. Be part of it."
          description="This campaign is about safer communities, stronger businesses, empowered youth, better education, modern infrastructure, and a Lagos where every citizen has room to thrive."
        />
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link
            href="/join#movement-form"
            className="inline-flex h-12 items-center justify-center rounded-card bg-secondary-500 px-6 text-sm font-black text-primary-900 transition-colors duration-200 hover:bg-secondary-400"
          >
            Volunteer Now
          </Link>
          <Link
            href="/join#newsletter"
            className="inline-flex h-12 items-center justify-center rounded-card border border-white/30 px-6 text-sm font-black text-white transition-colors duration-200 hover:bg-white hover:text-[var(--campaign-green-900)]"
          >
            Get Updates
          </Link>
        </div>
      </div>
    </section>
  );
}
