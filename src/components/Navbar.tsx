import { campaignNavItems, campaignSite } from "@/data/campaignContent";
import { campaignNavTranslationKeys, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  Lightbulb,
  Newspaper,
  Trophy,
  UserRound,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { CiSettings } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/Sheet";
import IconMenu from "./IconComponents/IconMenu";

const headerLayoutTransition = {
  type: "spring",
  stiffness: 420,
  damping: 38,
  mass: 0.7,
};

const navSwapTransition = {
  duration: 0.32,
  ease: [0.22, 1, 0.36, 1],
};

const navIcons: Record<string, LucideIcon> = {
  "/": Home,
  "/about": UserRound,
  "/vision-2027": Lightbulb,
  "/achievements": Trophy,
  "/news": Newspaper,
  "/join": UsersRound,
};

const isCurrentRoute = (pathname: string, href: string) =>
  href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setExpandedMenu(false);
    setMobileMenuOpen(false);
  }, [router.asPath]);

  useEffect(() => {
    setExpandedMenu(false);
  }, [scrolled]);

  const showDesktopNav = !scrolled || expandedMenu;
  const settingsActive = isCurrentRoute(router.pathname, "/settings");

  return (
    <motion.header
      layout
      transition={headerLayoutTransition}
      className={cn(
        "fixed left-1/2 top-0 z-50 -translate-x-1/2 bg-white transition-all duration-300 ease-in-out backdrop-blur-[20px]",
        "w-full py-1",
        scrolled
          ? cn(
              "lg:top-3 lg:rounded-2xl lg:border lg:border-[#F9F9FA]",
              expandedMenu
                ? "lg:w-[calc(100%-3rem)] lg:max-w-[1200px]"
                : "lg:w-auto lg:max-w-fit",
            )
          : "lg:top-4 lg:w-[calc(100%-3rem)] lg:max-w-[1200px] lg:rounded-2xl",
      )}
      style={{
        boxShadow: "-4px 4px 24px 3px rgba(11, 12, 125, 0.04)",
      }}
    >
      <motion.div
        layout
        transition={headerLayoutTransition}
        className="mx-auto flex items-center justify-between gap-4 px-5 text-textColor sm:px-6"
      >
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <Image
            src="/logo.webp"
            alt={`${campaignSite.name} logo`}
            width={100}
            height={100}
            priority
            className="h-16 w-16 object-contain"
          />
          <span className="hidden font-heading text-[15px] font-black leading-tight text-primary-900 sm:block">
            Obafemi
            <span className="block text-[var(--campaign-green-700)]">
              Hamzat 2027
            </span>
          </span>
        </Link>

        <AnimatePresence mode="popLayout" initial={false}>
          {scrolled && !expandedMenu ? (
            <motion.nav
              key="compact-menu"
              layout
              initial={{ opacity: 0, x: 28, scale: 0.94, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -24, scale: 0.96, filter: "blur(8px)" }}
              transition={navSwapTransition}
              className="hidden items-center px-6 lg:flex"
            >
              <motion.button
                type="button"
                onClick={() => setExpandedMenu(true)}
                className="relative flex cursor-pointer items-center gap-2 font-[500] text-text-secondary transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-0 after:rounded-2xl after:bg-[#063B2E] after:transition-all after:duration-300 hover:text-[#063B2E] hover:after:w-full"
                aria-expanded={expandedMenu}
                aria-label={t("nav.expand")}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                <IconMenu size={28} color="#475467" />
                <span>{t("nav.menu")}</span>
              </motion.button>
            </motion.nav>
          ) : (
            showDesktopNav && (
              <motion.nav
                key="expanded-menu"
                layout
                initial={{
                  opacity: 0,
                  x: -22,
                  scale: 0.98,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                exit={{ opacity: 0, x: 24, scale: 0.98, filter: "blur(8px)" }}
                transition={navSwapTransition}
                className="hidden items-center gap-1 lg:flex"
                aria-label={t("nav.primary")}
              >
                {campaignNavItems.map((item, index) => {
                  const Icon = navIcons[item.href] || Home;
                  const active = isCurrentRoute(router.pathname, item.href);
                  const labelKey = campaignNavTranslationKeys[item.href];
                  const label = labelKey ? t(labelKey) : item.label;

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        ...navSwapTransition,
                        delay: index * 0.025,
                      }}
                    >
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "relative flex items-center gap-2 whitespace-nowrap rounded-card px-2.5 py-2 text-sm font-[500] transition-all duration-300 xl:px-3",
                          "after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:rounded-2xl after:transition-all after:duration-300",
                          active
                            ? "font-bold text-[#063B2E] after:w-full after:bg-secondary-500"
                            : "text-text-secondary after:w-0 after:bg-[#063B2E] hover:text-primary-900 hover:after:w-full",
                        )}
                      >
                        <Icon aria-hidden="true" className="h-4 w-4" />
                        <span>{label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>
            )
          )}
        </AnimatePresence>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/settings"
            aria-label={t("nav.openSettings")}
            aria-current={settingsActive ? "page" : undefined}
            className={cn(
              "button-lift inline-flex h-10 w-10 items-center justify-center rounded-card border text-primary-900 transition-all duration-300",
              settingsActive
                ? "border-secondary-500 bg-[rgba(212,166,42,0.18)]"
                : "border-[rgba(6,59,46,0.12)] bg-white hover:border-secondary-500",
            )}
          >
            <CiSettings aria-hidden="true" className="h-5 w-5" />
            <span className="sr-only">{t("nav.settings")}</span>
          </Link>
          <Link
            href="/join"
            className="button-lift inline-flex h-10 items-center justify-center whitespace-nowrap rounded-card bg-[var(--secondary-500)] px-5 text-sm font-black text-[var(--campaign-green-900)] transition-all duration-300 hover:text-white hover:bg-[var(--campaign-green-700)]"
          >
            {t("nav.joinMovement")}
          </Link>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger onClick={() => setMobileMenuOpen(true)}>
              <IconMenu />
              <span className="sr-only">{t("nav.openMenu")}</span>
            </SheetTrigger>
            <SheetContent
              isOpen={mobileMenuOpen}
              onClose={() => setMobileMenuOpen(false)}
              position="right"
            >
              <nav
                className="mt-12 flex flex-col items-start text-white"
                aria-label={t("nav.mobile")}
              >
                {campaignNavItems.map((item) => {
                  const Icon = navIcons[item.href] || Home;
                  const active = isCurrentRoute(router.pathname, item.href);
                  const labelKey = campaignNavTranslationKeys[item.href];
                  const label = labelKey ? t(labelKey) : item.label;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "mb-6 flex w-full items-center gap-3 rounded-card px-3 py-2 text-[16px] font-semibold transition-all duration-300",
                        active
                          ? "bg-white text-primary-900"
                          : "text-white hover:bg-white/10",
                      )}
                    >
                      <Icon aria-hidden="true" className="h-5 w-5" />
                      <span>{label}</span>
                    </Link>
                  );
                })}
                <Link
                  href="/settings"
                  aria-current={settingsActive ? "page" : undefined}
                  className={cn(
                    "mb-6 flex w-full items-center gap-3 rounded-card px-3 py-2 text-[16px] font-semibold transition-all duration-300",
                    settingsActive
                      ? "bg-white text-primary-900"
                      : "text-white hover:bg-white/10",
                  )}
                >
                  <CiSettings aria-hidden="true" className="h-5 w-5" />
                  <span>{t("nav.settings")}</span>
                </Link>
                <Link
                  href="/join"
                  className="bg-[var(--secondary-500)] whitespace-nowrap cursor-pointer border border-[var(--secondary-500)] flex items-center w-full justify-center text-white font-semibold rounded-[10px] h-[40px] px-4 text-sm animate-fade-in animation-delay-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  {t("nav.joinMovement")}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>

      <AnimatePresence initial={false}>
        <motion.div
          key={showDesktopNav ? "expanded-rail" : "compact-rail"}
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 bottom-0 hidden h-px bg-[linear-gradient(90deg,transparent,var(--secondary-500),transparent)] lg:block"
          initial={{ opacity: 0, scaleX: 0.2 }}
          animate={{ opacity: showDesktopNav ? 0.72 : 0.46, scaleX: 1 }}
          exit={{ opacity: 0, scaleX: 0.35 }}
          transition={navSwapTransition}
        />
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
