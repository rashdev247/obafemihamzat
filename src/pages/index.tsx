import CampaignLayout from "@/components/campaign/CampaignLayout";
import {
  CampaignCTA,
  CampaignHead,
  CTAGroup,
  ImagePanel,
  SectionIntro,
} from "@/components/campaign/CampaignPrimitives";
import {
  campaignImages,
  campaignSite,
  campaignUpdates,
  lagosAudience,
  lagosZones,
  movementStats,
  visionPillars,
} from "@/data/campaignContent";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  MapPin,
  Play,
  Radio,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeZone, setActiveZone] = useState(lagosZones[0]);

  return (
    <CampaignLayout>
      <CampaignHead
        title="For A Greater Lagos"
        description={campaignSite.description}
      />

      <main>
        <section className="relative overflow-hidden bg-[var(--campaign-green-950)] text-white">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.36) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.36) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="container relative z-10 mx-auto grid min-h-[calc(100vh-82px)] items-center gap-12 px-6 py-12 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="max-w-3xl">
              <h1 className="font-heading text-5xl font-black leading-[0.95] text-white md:text-7xl xl:text-8xl">
                A Greater Lagos Begins Now.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
                For over two decades, Dr. Obafemi Hamzat has helped shape the
                future of Lagos through innovation, infrastructure, education,
                and people-centered leadership. Now, he is ready to lead Lagos
                into a new era of prosperity, inclusion, and excellence.
              </p>
              <CTAGroup />
              <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
                {["Competence", "Stability", "Innovation"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 border-l-2 border-secondary-500 bg-white/6 px-4 py-3 text-sm font-bold text-white/85"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="h-4 w-4 text-secondary-400"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[540px]">
              <div className="absolute -right-8 top-10 h-40 w-40 border-[18px] border-secondary-500/45" />
              <div className="absolute -left-6 bottom-20 h-32 w-32 border-[14px] border-white/18" />
              <div className="relative h-[520px] overflow-hidden rounded-card bg-primary-900 shadow-[0_35px_100px_rgba(0,0,0,0.32)] md:h-[640px]">
                <Image
                  src={campaignImages.leadership}
                  alt="Dr. Obafemi Hamzat with Lagos political and community leaders"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,31,25,0.88)] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="max-w-md border-l-4 border-secondary-500 pl-5">
                    <p className="font-heading text-3xl font-black leading-tight text-white">
                      Experience. Vision. Progress.
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/70">
                      A campaign built for every Lagosian, from grassroots
                      communities to the innovation economy.
                    </p>
                  </div>
                </div>
              </div>
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
                      className="rounded-card border border-[rgba(6,59,46,0.12)] bg-bg-primary p-5"
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

        <section className="bg-bg-primary px-6 py-16">
          <div className="container mx-auto grid gap-4 md:grid-cols-4">
            {movementStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-card border border-[rgba(6,59,46,0.12)] bg-white p-6 shadow-brand-card"
              >
                <p className="font-heading text-4xl font-black text-[var(--campaign-green-900)]">
                  {stat.value}
                </p>
                <p className="mt-3 font-heading text-lg font-black text-text-primary">
                  {stat.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {stat.description}
                </p>
              </div>
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
                  className="flex min-h-[92px] items-center rounded-card border border-[rgba(6,59,46,0.12)] bg-white px-5 text-lg font-black text-primary-900 shadow-[0_12px_35px_rgba(7,47,107,0.06)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="container mx-auto grid gap-12 lg:grid-cols-[0.86fr_1.14fr]">
            <div>
              <SectionIntro
                label="Vision 2027"
                title="The next chapter of Lagos."
                description="Presidential in discipline, Lagos in spirit, and technology-forward in execution."
              />
              <Link
                href="/vision-2027"
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-card bg-[var(--campaign-green-900)] px-6 text-sm font-black text-white transition-colors duration-200 hover:bg-[var(--campaign-green-700)]"
              >
                Read the full manifesto
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {visionPillars.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className={`rounded-card border border-[rgba(6,59,46,0.12)] p-6 ${
                    index === 0
                      ? "bg-[var(--campaign-green-900)] text-white md:col-span-2"
                      : "bg-bg-primary"
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
            <div className="rounded-card bg-[var(--campaign-green-950)] p-6 text-white md:p-8">
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
                    className={`rounded-card border px-4 py-4 text-left transition-colors duration-200 ${
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
            <div className="rounded-card border border-[rgba(6,59,46,0.12)] bg-white p-8 shadow-brand-card">
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
                <div className="rounded-card bg-bg-secondary p-5">
                  <Radio aria-hidden="true" className="h-5 w-5 text-[var(--campaign-green-700)]" />
                  <p className="mt-4 font-bold text-text-primary">
                    Community listening tours
                  </p>
                </div>
                <div className="rounded-card bg-bg-secondary p-5">
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
                    className="group grid gap-4 rounded-card border border-[rgba(6,59,46,0.12)] bg-bg-primary p-5 transition-colors duration-200 hover:border-secondary-500 md:grid-cols-[auto_1fr_auto] md:items-center"
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
                      className="h-5 w-5 text-text-muted transition-colors duration-200 group-hover:text-secondary-500"
                    />
                  </a>
                ))}
              </div>
            </div>
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
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <ImagePanel
                image={campaignImages.infrastructure}
                title="Move people smarter"
                className="h-[320px]"
              />
              <ImagePanel
                image={campaignImages.community}
                title="Stay close to communities"
                className="h-[320px]"
              />
              <ImagePanel
                image={campaignImages.youth}
                title="Prepare the next generation"
                className="h-[320px]"
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="container mx-auto grid gap-8 rounded-card border border-[rgba(6,59,46,0.12)] bg-[var(--campaign-green-900)] p-8 text-white md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-card bg-secondary-500 text-primary-900">
                <Play aria-hidden="true" className="h-5 w-5 fill-current" />
              </div>
              <h2 className="mt-5 max-w-3xl font-heading text-3xl font-black leading-tight text-white md:text-5xl">
                Media kit, speeches, and campaign films.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">
                A central archive for press teams, volunteers, community
                organizers, and Lagosians following the movement.
              </p>
            </div>
            <Link
              href="/achievements"
              className="inline-flex h-12 items-center justify-center rounded-card bg-secondary-500 px-6 text-sm font-black text-primary-900 transition-colors duration-200 hover:bg-secondary-400"
            >
              View Impact
            </Link>
          </div>
        </section>

        <CampaignCTA />
      </main>
    </CampaignLayout>
  );
}
