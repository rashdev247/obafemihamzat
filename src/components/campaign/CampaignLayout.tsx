import { campaignNavItems, campaignSite } from "@/data/campaignContent";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { useState } from "react";

type CampaignLayoutProps = {
  children: ReactNode;
};

function CampaignHeader() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const isActive = (href: string) =>
    href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(6,59,46,0.12)] bg-white/92 backdrop-blur-xl">
      <div className="container mx-auto flex h-[82px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <Image
            src="/logo.webp"
            alt={`${campaignSite.name} logo`}
            width={64}
            height={64}
            priority
            className="h-14 w-14 object-contain"
          />
          <span className="hidden font-heading text-[15px] font-black leading-tight text-primary-900 sm:block">
            Obafemi
            <span className="block text-[var(--campaign-green-700)]">
              Hamzat 2027
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-card border border-[rgba(6,59,46,0.12)] bg-white p-1 shadow-[0_12px_30px_rgba(7,47,107,0.06)] lg:flex">
          {campaignNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-card px-4 py-2 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                isActive(item.href)
                  ? "bg-[var(--campaign-green-900)] text-white"
                  : "text-text-secondary hover:bg-bg-secondary hover:text-primary-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={campaignSite.officialUrl}
            target="_blank"
            rel="noreferrer"
            className="button-lift inline-flex h-11 items-center gap-2 rounded-card border border-[rgba(6,59,46,0.18)] px-4 text-sm font-bold text-[var(--campaign-green-900)] transition-all duration-300 hover:border-secondary-500 hover:bg-secondary-500/10"
          >
            Official site
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
          <Link
            href="/join"
            className="button-lift inline-flex h-11 items-center rounded-card bg-secondary-500 px-5 text-sm font-black text-primary-900 transition-all duration-300 hover:bg-secondary-400"
          >
            Join Movement
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-card border border-[rgba(6,59,46,0.18)] text-[var(--campaign-green-900)] transition-all duration-300 hover:border-secondary-500 hover:bg-secondary-500/10 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[rgba(6,59,46,0.12)] bg-white px-6 py-4 lg:hidden">
          <nav className="container mx-auto grid gap-2">
            {campaignNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-card px-4 py-3 text-sm font-bold transition-all duration-300 ${
                  isActive(item.href)
                    ? "bg-[var(--campaign-green-900)] text-white"
                    : "bg-bg-secondary text-text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function CampaignFooter() {
  return (
    <footer className="campaign-dark-section bg-[var(--campaign-green-950)] text-white">
      <div className="container mx-auto px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_1fr]">
          <div>
            <Image
              src="/logo.webp"
              alt={`${campaignSite.name} logo`}
              width={88}
              height={88}
              className="h-20 w-20 object-contain"
            />
            <p className="mt-5 max-w-[420px] text-2xl font-black leading-tight text-white">
              {campaignSite.tagline}
            </p>
            <p className="mt-4 max-w-[460px] text-sm leading-7 text-white/70">
              A people-first movement for competence, stability, innovation,
              and inclusive Lagos growth.
            </p>
          </div>

          <nav className="grid gap-3 sm:grid-cols-2">
            {campaignNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-bold text-white/78 transition-colors duration-300 hover:text-secondary-400"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={campaignSite.officialUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-bold text-white/78 transition-colors duration-300 hover:text-secondary-400"
            >
              Official Website
            </a>
          </nav>

          <div>
            <p className="font-heading text-lg font-black text-white">
              Campaign Updates
            </p>
            <form className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
              <label className="sr-only" htmlFor="campaign-email">
                Email address
              </label>
              <input
                id="campaign-email"
                type="email"
                placeholder="Email address"
                className="h-12 rounded-card border border-white/16 bg-white/10 px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/50 focus:border-secondary-500 focus:bg-white/14"
              />
              <button
                type="submit"
                className="button-lift h-12 rounded-card bg-secondary-500 px-5 text-sm font-black text-primary-900 transition-all duration-300 hover:bg-secondary-400"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-xs leading-6 text-white/55">
              Volunteer, press, and movement announcements for Lagos 2027.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/12 pt-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <span>© 2027 Obafemi Hamzat Campaign Movement.</span>
          <span>Built for Lagosians at home and in the diaspora.</span>
        </div>
      </div>
    </footer>
  );
}

export default function CampaignLayout({ children }: CampaignLayoutProps) {
  return (
    <div className="min-h-screen bg-bg-primary font-body text-text-secondary">
      <CampaignHeader />
      {children}
      <CampaignFooter />
    </div>
  );
}
