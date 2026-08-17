import { campaignNavItems, campaignSite } from "@/data/campaignContent";
import { campaignNavTranslationKeys, useI18n } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="campaign-dark-section bg-[var(--campaign-green-950)] text-white">
      <div className="container mx-auto px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_1fr]">
          <div>
            <Image
              src="/logo.webp"
              alt={`${campaignSite.name} logo`}
              width={120}
              height={120}
              className="h-22 w-22 object-contain"
            />
            <p className="mt-5 max-w-[420px] text-2xl font-black leading-tight text-white">
              {t("campaign.tagline")}
            </p>
            <p className="mt-4 max-w-[460px] text-sm leading-7 text-white/70">
              {t("footer.description")}
            </p>
          </div>

          <nav className="grid gap-3 sm:grid-cols-2" aria-label={t("footer.navigation")}>
            {campaignNavItems.map((item) => {
              const labelKey = campaignNavTranslationKeys[item.href];
              const label = labelKey ? t(labelKey) : item.label;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-bold text-white/78 transition-colors duration-300 hover:text-secondary-400"
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/settings"
              className="text-sm font-bold text-white/78 transition-colors duration-300 hover:text-secondary-400"
            >
              {t("nav.settings")}
            </Link>
          </nav>

          <div>
            <p className="font-heading text-lg font-black text-white">
              {t("footer.campaignUpdates")}
            </p>
            <form className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
              <label className="sr-only" htmlFor="campaign-email">
                {t("footer.emailLabel")}
              </label>
              <input
                id="campaign-email"
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="h-12 rounded-card border border-white/16 bg-white/10 px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/50 focus:border-secondary-500 focus:bg-white/14"
              />
              <button
                type="submit"
                className="button-lift h-12 rounded-card bg-secondary-500 px-5 text-sm font-black text-primary-900 transition-all duration-300 hover:bg-secondary-400"
              >
                {t("footer.subscribe")}
              </button>
            </form>
            <p className="mt-4 text-xs leading-6 text-white/55">
              {t("footer.helper")}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/12 pt-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <span>{t("footer.copyright")}</span>
          <span>{t("footer.diaspora")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
