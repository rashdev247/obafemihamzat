import CampaignLayout from "@/components/campaign/CampaignLayout";
import {
  CampaignCTA,
  CampaignHead,
  CTAGroup,
  ImagePanel,
  SectionIntro,
} from "@/components/campaign/CampaignPrimitives";
import {
  CampaignGalleryCarousel,
  CampaignHeroCarousel,
  PrimaryResultMediaCarousel,
} from "@/components/campaign/CampaignCarousels";
import {
  campaignImages,
  campaignUpdates,
  lagosAudience,
  lagosZones,
  movementStats,
  primaryResult,
  visionPillars,
} from "@/data/campaignContent";
import {
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  MapPin,
  Radio,
  Vote,
} from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AnimatedStatCard = dynamic(
  () => import("@/components/campaign/AnimatedStatCard"),
  { ssr: false },
);

export default function Home() {
  const [activeZone, setActiveZone] = useState(lagosZones[0]);

  return (
    <CampaignLayout>
      <CampaignHead
        title="Kadri Obafemi Hamzat 2027 | APC Lagos Governorship Candidate"
        description="Official campaign platform for Dr. Kadri Obafemi Hamzat, APC candidate for Lagos Governor 2027. Explore his Greater Lagos vision, achievements, news, and volunteer updates."
        keywords={[
          "Kadri Obafemi Hamzat 2027",
          "Obafemi Hamzat Lagos Governor",
          "APC Lagos governorship candidate",
          "Lagos 2027 election",
          "For A Greater Lagos",
          "Greater Lagos vision",
        ]}
      />

      <main>
        <section className="campaign-dark-section relative overflow-hidden bg-[var(--campaign-green-950)] text-white">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.34) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.34) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-secondary-500/18 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[var(--campaign-green-500)]/18 blur-3xl"
          />
          <div className="container relative z-10 mx-auto grid min-h-[calc(100vh-82px)] items-center gap-12 px-6 py-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="min-w-0 max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-3 rounded-card border border-white/14 bg-white/10 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-secondary-400 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-secondary-500" />
                APC Governorship Candidate 2027
              </div>
              <h1 className="max-w-[10ch] break-words font-heading text-4xl font-black leading-[0.95] text-white [text-shadow:0_12px_44px_rgba(0,0,0,0.34)] xs:text-5xl md:max-w-none md:text-7xl xl:text-8xl">
                Experience Meets Vision For A Greater Lagos.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
                KOH 2027 is a people-first movement built on public service,
                digital transformation, infrastructure delivery, and a Lagos
                that creates opportunity across every division.
              </p>
              <CTAGroup secondaryLabel="Explore The Manifesto" />
            </div>

            <div className="relative min-h-[540px] min-w-0">
              <div className="hero-orbit absolute -right-8 top-10 h-40 w-40 border-[18px] border-secondary-500/45" />
              <div className="hero-orbit absolute -left-6 bottom-20 h-32 w-32 border-[14px] border-white/18 [animation-delay:-3s]" />
              <CampaignHeroCarousel />
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="container mx-auto grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <ImagePanel
              image={campaignImages.impact}
              title="The Leader Lagos Trusts"
              caption="A movement grounded in public service, not noise."
              className="h-[460px]"
            />
            <div>
              <SectionIntro
                label="The leader Lagos trusts"
                title="Not new to service. Built for the next chapter."
                description="From transforming Lagos' digital infrastructure to serving as Deputy Governor since 2019, Dr. Obafemi Hamzat's leadership has consistently focused on building a smarter, safer, and more prosperous Lagos for everyone."
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Engineer", "Technocrat", "Reformer", "Bridge-builder"].map(
                  (item) => (
                    <div
                      key={item}
                      className="interactive-card rounded-card border border-[rgba(6,59,46,0.12)] bg-bg-primary p-5"
                    >
                      <p className="font-heading text-xl font-black text-primary-900">
                        {item}.
                      </p>
                    </div>
                  )
                )}
              </div>
              <blockquote className="mt-8 border-l-4 border-secondary-500 pl-5 font-heading text-3xl font-black leading-tight text-[var(--campaign-green-900)]">
                A Lagos that works for everyone.
              </blockquote>
            </div>
          </div>
        </section>

        <section
          id="impact-metrics"
          className="stats-gradient-section relative overflow-hidden px-6 py-20"
        >
          <div className="container relative z-10 mx-auto grid gap-4 md:grid-cols-4">
            {movementStats.map((stat, index) => (
              <AnimatedStatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </section>

        <section className="bg-[var(--lagos-sky)] px-6 py-20">
          <div className="container mx-auto">
            <SectionIntro
              align="center"
              label="For every Lagosian"
              title="The future of Lagos must include everyone."
              description="Whether you are building a business, learning a skill, moving through traffic, raising a family, or serving your community, this movement is designed around your future."
            />
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {lagosAudience.map((item) => (
                <div
                  key={item}
                  className="interactive-card flex min-h-[92px] items-center rounded-card border border-[rgba(6,59,46,0.12)] bg-white px-5 text-lg font-black text-primary-900 shadow-[0_12px_35px_rgba(7,47,107,0.06)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="vision-2027-preview"
          className="lagos-gradient-section relative overflow-hidden px-6 py-24"
        >
          <div
            aria-hidden="true"
            className="lagos-gradient-faces absolute inset-y-0 right-0 w-full bg-cover bg-center opacity-[0.2] md:w-[78%] md:opacity-[0.36]"
          >
            <Image
              src={campaignImages.community}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-[var(--campaign-green-500)]/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -right-20 bottom-16 h-96 w-96 rounded-full bg-secondary-500/18 blur-3xl"
          />
          <div className="container relative z-10 mx-auto grid gap-12 lg:grid-cols-[0.86fr_1.14fr]">
            <div>
              <SectionIntro
                label="Vision 2027"
                title="The next chapter of Lagos."
                description="Presidential in discipline, Lagos in spirit, and technology-forward in execution."
              />
              <Link
                href="/vision-2027"
                className="button-lift mt-8 inline-flex h-12 items-center gap-2 rounded-card bg-[var(--campaign-green-900)] px-6 text-sm font-black text-white transition-all duration-300 hover:bg-[var(--campaign-green-700)]"
              >
                Read the full manifesto
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {visionPillars.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className={`interactive-card rounded-card border p-6 backdrop-blur-xl ${
                    index === 0
                      ? "border-white/18 bg-[linear-gradient(135deg,var(--campaign-green-900)_0%,var(--campaign-green-700)_100%)] text-white shadow-[0_24px_60px_rgba(3,31,25,0.2)] md:col-span-2"
                      : "border-white/70 bg-white/[0.82] shadow-[0_18px_50px_rgba(7,47,107,0.08)]"
                  }`}
                >
                  <p
                    className={`font-heading text-2xl font-black ${
                      index === 0 ? "text-white" : "text-text-primary"
                    }`}
                  >
                    {pillar.title}
                  </p>
                  <p
                    className={`mt-4 text-sm leading-7 ${
                      index === 0 ? "text-white/72" : "text-text-secondary"
                    }`}
                  >
                    {pillar.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bg-primary px-6 py-20">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="campaign-dark-section interactive-card rounded-card bg-[var(--campaign-green-950)] p-6 text-white md:p-8">
              <div className="flex items-center gap-3">
                <MapPin aria-hidden="true" className="h-6 w-6 text-secondary-400" />
                <p className="font-heading text-2xl font-black text-white">
                  Live Campaign Map
                </p>
              </div>
              <div className="mt-6 grid gap-3">
                {lagosZones.map((zone) => (
                  <button
                    key={zone.name}
                    type="button"
                    onClick={() => setActiveZone(zone)}
                    className={`rounded-card border px-4 py-4 text-left transition-all duration-300 hover:-translate-y-0.5 ${
                      activeZone.name === zone.name
                        ? "border-secondary-500 bg-secondary-500 text-primary-900"
                        : "border-white/14 bg-white/8 text-white hover:bg-white/14"
                    }`}
                  >
                    <span className="block font-heading text-lg font-black">
                      {zone.name}
                    </span>
                    <span className="mt-1 block text-sm opacity-75">
                      {zone.wards}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div className="interactive-card rounded-card border border-[rgba(6,59,46,0.12)] bg-white p-8 shadow-brand-card">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--campaign-green-700)]">
                Active focus
              </p>
              <h3 className="mt-4 font-heading text-4xl font-black leading-tight text-text-primary">
                {activeZone.name}
              </h3>
              <p className="mt-5 text-lg leading-8 text-text-secondary">
                {activeZone.focus}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="interactive-card rounded-card bg-bg-secondary p-5">
                  <Radio aria-hidden="true" className="h-5 w-5 text-[var(--campaign-green-700)]" />
                  <p className="mt-4 font-bold text-text-primary">
                    Community listening tours
                  </p>
                </div>
                <div className="interactive-card rounded-card bg-bg-secondary p-5">
                  <CalendarDays aria-hidden="true" className="h-5 w-5 text-[var(--campaign-green-700)]" />
                  <p className="mt-4 font-bold text-text-primary">
                    Event calendar opening soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="container mx-auto">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <SectionIntro
                label="News and press"
                title="Live campaign updates."
                description="Verified updates, public reporting, and campaign announcements in one place."
              />
              <div className="grid gap-4">
                {campaignUpdates.map((update) => (
                  <a
                    key={update.href}
                    href={update.href}
                    target="_blank"
                    rel="noreferrer"
                    className="interactive-card group grid gap-4 rounded-card border border-[rgba(6,59,46,0.12)] bg-bg-primary p-5 transition-all duration-300 hover:border-secondary-500 md:grid-cols-[auto_1fr_auto] md:items-center"
                  >
                    <span className="rounded-card bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-[var(--campaign-green-700)]">
                      {update.source}
                    </span>
                    <span>
                      <span className="block font-heading text-xl font-black text-text-primary">
                        {update.title}
                      </span>
                      <span className="mt-1 block text-sm text-text-muted">
                        {update.date}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-5 w-5 text-text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-secondary-500"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="primary-result"
          className="campaign-dark-section primary-result-section relative overflow-hidden px-6 py-24 text-white"
        >
          <div className="container relative z-10 mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-secondary-400">
                {primaryResult.label}
              </p>
              <h2 className="mt-5 max-w-4xl font-heading text-4xl font-black leading-tight text-white md:text-6xl">
                {primaryResult.title}
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
                {primaryResult.description}
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {primaryResult.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="interactive-card rounded-card border border-white/18 bg-white/10 p-4 backdrop-blur-xl"
                  >
                    <p className="font-heading text-3xl font-black text-secondary-400">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-white/72">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="interactive-card flex items-start gap-3 rounded-card border border-white/14 bg-white/8 p-4">
                  <BadgeCheck
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-secondary-400"
                  />
                  <p className="text-sm leading-7 text-white/76">
                    {primaryResult.resultSummary}
                  </p>
                </div>
                <div className="interactive-card flex items-start gap-3 rounded-card border border-white/14 bg-white/8 p-4">
                  <Vote
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-secondary-400"
                  />
                  <p className="text-sm leading-7 text-white/76">
                    Declared at {primaryResult.location} on{" "}
                    {primaryResult.resultDate}.
                  </p>
                </div>
              </div>
            </div>

            <PrimaryResultMediaCarousel />
          </div>
        </section>

        <section className="bg-bg-primary px-6 py-20">
          <div className="container mx-auto">
            <SectionIntro
              align="center"
              label="Campaign gallery"
              title="Lagos in motion."
              description="The imagery is human-centered: public service, infrastructure, youth, communities, and leadership presence."
            />
            <CampaignGalleryCarousel />
          </div>
        </section>

        <CampaignCTA />
      </main>
    </CampaignLayout>
  );
}
