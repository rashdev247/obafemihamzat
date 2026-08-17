import { getBlobImageUrl } from "@/lib/blobImages";
import {
  SITE_IMAGE,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";
import { containerVariants, fadeInUp, itemVariants } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Home,
  Landmark,
  Newspaper,
  Search,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const pageTitle = `Page Not Found | ${SITE_NAME}`;
const pageDescription =
  "The page you requested could not be found. Return to Dr. Kadri Obafemi Hamzat's official digital platform.";
const leadershipEventImage = getBlobImageUrl(
  "i-represented-the-governor-of-lagos-state-mr-babajide-olusola-sanwo-olu-as-special-guest-at-the_ocylpk.jpg",
);

const recoveryLinks = [
  {
    href: "/",
    label: "Return home",
    description: "Go back to the main digital profile.",
    Icon: Home,
    external: false,
  },
  {
    href: `${SITE_URL}/`,
    label: "Leadership profile",
    description: "Restart from the official site entry point.",
    Icon: Landmark,
    external: true,
  },
  {
    href: "https://www.obafemihamzat.com/",
    label: "Official updates",
    description: "Visit the public service archive.",
    Icon: Newspaper,
    external: true,
  },
] as const;

export default function Custom404() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:locale" content={SITE_LOCALE} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/404`} />
        <meta property="og:image" content={SITE_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={SITE_IMAGE} />
        <link rel="canonical" href={`${SITE_URL}/404`} />
      </Head>

      <main className="relative min-h-screen overflow-hidden bg-bg-primary text-text-primary">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-[58%] brand-gradient-primary" />
          <div className="absolute inset-x-0 bottom-0 h-[52%] bg-bg-primary" />
          <div
            className="absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          <div className="absolute left-0 top-[55%] h-px w-full bg-secondary-500/40" />
        </div>

        <header className="relative z-10 border-b border-white/15 bg-primary-900/80 text-white backdrop-blur-xl">
          <div className="container mx-auto flex items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.webp"
                alt={`${SITE_NAME} logo`}
                width={64}
                height={64}
                priority
                className="h-14 w-14 object-contain"
              />
              <span className="hidden max-w-[180px] font-heading text-sm font-semibold leading-tight sm:block">
                Dr. Kadri Obafemi Hamzat
              </span>
            </Link>

            <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-secondary-400"
              >
                Home
              </Link>
              <a
                href="https://www.obafemihamzat.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-secondary-400"
              >
                Official site
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </nav>
          </div>
        </header>

        <section className="container relative z-10 mx-auto grid min-h-[calc(100vh-97px)] items-center gap-12 px-6 py-12 lg:grid-cols-[minmax(0,0.94fr)_minmax(420px,1.06fr)] lg:py-16">
          <motion.div
            initial="hidden"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.3 }}
            whileInView="visible"
            className="max-w-[690px] text-white"
          >
            <motion.p
              variants={fadeInUp}
              className="font-heading text-[5.5rem] font-black leading-none text-secondary-500 md:text-[8rem] xl:text-[10rem]"
            >
              404
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="mt-5 max-w-[12ch] font-heading text-4xl font-bold leading-[1.05] text-white md:text-6xl"
            >
              This page is no longer on the record.
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-[560px] text-base leading-8 text-white/78 md:text-lg"
            >
              The address may have moved while the platform is being shaped
              into a clearer public leadership archive. Use the links below to
              return to verified Obafemi Hamzat content.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/"
                className="btn-secondary inline-flex h-12 items-center justify-center rounded-card px-6 text-sm font-bold transition-transform duration-200 hover:-translate-y-0.5"
              >
                Go back home
              </Link>
              <a
                href="https://www.obafemihamzat.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-card border border-white/35 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur transition-colors duration-200 hover:bg-white hover:text-primary-900"
              >
                Visit official site
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="mt-12 grid gap-3 text-text-primary sm:grid-cols-3"
            >
              {recoveryLinks.map(({ href, label, description, Icon, external }) => {
                const className =
                  "group flex min-h-[132px] flex-col justify-between rounded-card border border-primary-900/10 bg-surface p-4 shadow-[0_18px_45px_rgba(7,47,107,0.12)] transition duration-200 hover:-translate-y-1 hover:border-secondary-500/60";
                const content = (
                  <>
                    <span className="flex h-10 w-10 items-center justify-center rounded-card bg-bg-secondary text-primary-900 transition-colors duration-200 group-hover:bg-secondary-500 group-hover:text-primary-900">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-heading text-base font-bold text-primary-900">
                        {label}
                      </span>
                      <span className="mt-2 block text-sm leading-6 text-text-secondary">
                        {description}
                      </span>
                    </span>
                  </>
                );

                return external ? (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    variants={itemVariants}
                    className={className}
                  >
                    {content}
                  </motion.a>
                ) : (
                  <motion.div key={href} variants={itemVariants}>
                    <Link href={href} className={className}>
                      {content}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34, scale: 0.97 }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative min-h-[440px] lg:min-h-[620px]"
          >
            <div
              aria-hidden="true"
              className="absolute -right-6 top-6 hidden h-40 w-40 border-[18px] border-secondary-500/35 lg:block"
            />
            <div
              aria-hidden="true"
              className="absolute -left-5 bottom-20 hidden h-44 w-44 border-[18px] border-white/20 lg:block"
            />

            <div className="relative h-[440px] overflow-hidden rounded-card bg-primary-900 shadow-[0_30px_80px_rgba(7,47,107,0.28)] md:h-[560px] lg:h-[620px]">
              <Image
                src={leadershipEventImage}
                alt="Large Lagos public service gathering"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/88 via-primary-900/12 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                <div className="h-1 w-20 rounded-card bg-secondary-500" />
                <p className="mt-5 max-w-[430px] font-heading text-2xl font-bold leading-tight md:text-3xl">
                  Public leadership stays accountable to people, places, and
                  progress.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-7 left-6 right-6 grid grid-cols-[auto_1fr] items-center gap-4 rounded-card border border-primary-900/10 bg-surface p-4 shadow-[0_18px_50px_rgba(7,47,107,0.16)] md:left-10 md:right-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-card bg-primary-900 text-white">
                <Search aria-hidden="true" className="h-5 w-5" />
              </span>
              <p className="text-sm font-semibold leading-6 text-text-secondary">
                We could not locate this specific page, but the official
                platform is still available from the homepage.
              </p>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
