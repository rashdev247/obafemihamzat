import CampaignLayout from "@/components/campaign/CampaignLayout";
import {
  CampaignHead,
  ImagePanel,
  PageHero,
  SectionIntro,
} from "@/components/campaign/CampaignPrimitives";
import { campaignAeoContent } from "@/data/aeoContent";
import { campaignImages } from "@/data/campaignContent";
import { useCampaignPageCopy } from "@/lib/pageCopy";
import { containerVariants, fadeInUp, itemVariants } from "@/lib/utils";
import {
  CheckCircle2,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  UsersRound,
} from "lucide-react";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

const cardIcons = [MessageCircle, Megaphone, MapPin];

export default function JoinPage() {
  const { join } = useCampaignPageCopy();
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const selectedRole = join.form.roles[selectedRoleIndex] ?? join.form.roles[0];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleNewsletter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNewsletterSubmitted(true);
  };

  return (
    <CampaignLayout>
      <CampaignHead
        title={join.head.title}
        description={join.head.description}
        path="/join"
        keywords={[
          "join Obafemi Hamzat campaign",
          "Hamzat 2027 volunteer",
          "Lagos 2027 campaign movement",
          "APC Lagos volunteer",
          "For A Greater Lagos movement",
        ]}
        answerEngine={campaignAeoContent.join}
      />

      <main>
        <PageHero
          title={join.hero.title}
          description={join.hero.description}
          image={campaignImages.community}
        />

        <section className="bg-white px-6 py-20">
          <div className="container mx-auto grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div>
              <SectionIntro
                label={join.why.label}
                title={join.why.title}
                description={join.why.description}
              />
              <motion.div
                initial="hidden"
                variants={containerVariants}
                viewport={{ once: true, amount: 0.25 }}
                whileInView="visible"
                className="mt-8 grid gap-3 sm:grid-cols-2"
              >
                {join.why.items.map((item) => (
                  <motion.div
                    key={item}
                    variants={itemVariants}
                    className="flex items-center gap-3 rounded-card border border-[rgba(6,59,46,0.12)] bg-bg-primary p-4"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="h-5 w-5 text-[var(--campaign-green-700)]"
                    />
                    <span className="font-bold text-text-primary">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <ImagePanel
              image={campaignImages.impact}
              title={join.why.imageTitle}
              caption={join.why.imageCaption}
              className="h-[520px]"
            />
          </div>
        </section>

        <section id="movement-form" className="bg-bg-primary px-6 py-20">
          <div className="container mx-auto grid gap-12 lg:grid-cols-[0.76fr_1.24fr]">
            <div>
              <SectionIntro
                label={join.formIntro.label}
                title={join.formIntro.title}
                description={join.formIntro.description}
              />
              <motion.div
                initial="hidden"
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.45 }}
                whileInView="visible"
                className="campaign-dark-section mt-8 rounded-card bg-[var(--campaign-green-900)] p-6 text-white"
              >
                <UsersRound aria-hidden="true" className="h-8 w-8 text-secondary-400" />
                <p className="mt-5 font-heading text-2xl font-black leading-tight text-white">
                  {join.formIntro.card}
                </p>
              </motion.div>
            </div>

            <motion.form
              initial="hidden"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.2 }}
              whileInView="visible"
              onSubmit={handleSubmit}
              className="rounded-card border border-[rgba(6,59,46,0.12)] bg-white p-6 shadow-brand-card md:p-8"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="full-name"
                    className="text-sm font-black text-text-primary"
                  >
                    {join.form.fullName}
                  </label>
                  <input
                    id="full-name"
                    required
                    className="mt-2 h-12 w-full rounded-card border border-[#D0D5DD] px-4 text-sm outline-none transition-colors focus:border-[var(--campaign-green-700)]"
                    placeholder={join.form.fullNamePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-black text-text-primary">
                    {join.form.phone}
                  </label>
                  <input
                    id="phone"
                    required
                    className="mt-2 h-12 w-full rounded-card border border-[#D0D5DD] px-4 text-sm outline-none transition-colors focus:border-[var(--campaign-green-700)]"
                    placeholder={join.form.phonePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-black text-text-primary">
                    {join.form.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-2 h-12 w-full rounded-card border border-[#D0D5DD] px-4 text-sm outline-none transition-colors focus:border-[var(--campaign-green-700)]"
                    placeholder={join.form.emailPlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="location" className="text-sm font-black text-text-primary">
                    {join.form.location}
                  </label>
                  <input
                    id="location"
                    required
                    className="mt-2 h-12 w-full rounded-card border border-[#D0D5DD] px-4 text-sm outline-none transition-colors focus:border-[var(--campaign-green-700)]"
                    placeholder={join.form.locationPlaceholder}
                  />
                </div>
              </div>

              <fieldset className="mt-6">
                <legend className="text-sm font-black text-text-primary">
                  {join.form.participation}
                </legend>
                <motion.div
                  initial="hidden"
                  variants={containerVariants}
                  viewport={{ once: true, amount: 0.2 }}
                  whileInView="visible"
                  className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {join.form.roles.map((role, index) => (
                    <motion.button
                      key={role}
                      type="button"
                      onClick={() => setSelectedRoleIndex(index)}
                      variants={itemVariants}
                      className={`min-h-[70px] rounded-card border px-4 py-3 text-left text-sm font-black transition-colors duration-200 ${
                        selectedRoleIndex === index
                          ? "border-[var(--campaign-green-900)] bg-[var(--campaign-green-900)] text-white"
                          : "border-[#D0D5DD] bg-bg-primary text-text-primary hover:border-secondary-500"
                      }`}
                    >
                      {role}
                    </motion.button>
                  ))}
                </motion.div>
              </fieldset>

              <div className="mt-6">
                <label htmlFor="message" className="text-sm font-black text-text-primary">
                  {join.form.message}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="mt-2 w-full rounded-card border border-[#D0D5DD] px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--campaign-green-700)]"
                  placeholder={join.form.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                className="mt-6 h-12 w-full rounded-card bg-secondary-500 px-6 text-sm font-black text-primary-900 transition-colors duration-200 hover:bg-secondary-400"
              >
                {join.form.submit}
              </button>

              {submitted && (
                <p className="mt-4 rounded-card bg-[var(--lagos-sky)] p-4 text-sm font-bold leading-6 text-[var(--campaign-green-900)]">
                  {join.form.submittedPrefix} {selectedRole}{" "}
                  {join.form.submittedSuffix}
                </p>
              )}
            </motion.form>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <motion.div
            initial="hidden"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.2 }}
            whileInView="visible"
            className="container mx-auto grid gap-4 md:grid-cols-3"
          >
            {join.cards.map(({ title, description }, index) => {
              const Icon = cardIcons[index] ?? MessageCircle;

              return (
                <motion.article
                  key={title}
                  variants={itemVariants}
                  className="rounded-card border border-[rgba(6,59,46,0.12)] bg-bg-primary p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-card bg-[var(--campaign-green-900)] text-white">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 font-heading text-2xl font-black text-text-primary">
                    {title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">
                    {description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        <section id="newsletter" className="campaign-dark-section bg-[var(--campaign-green-950)] px-6 py-20 text-white">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial="hidden"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.3 }}
              whileInView="visible"
            >
              <Mail aria-hidden="true" className="h-10 w-10 text-secondary-400" />
              <motion.h2
                variants={fadeInUp}
                className="mt-5 max-w-2xl font-heading text-4xl font-black leading-tight text-white md:text-5xl"
              >
                {join.newsletter.title}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-5 max-w-xl text-base leading-8 text-white/72"
              >
                {join.newsletter.description}
              </motion.p>
            </motion.div>
            <motion.form
              initial="hidden"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.3 }}
              whileInView="visible"
              onSubmit={handleNewsletter}
              className="rounded-card bg-white p-6 text-text-primary md:p-8"
            >
              <label htmlFor="newsletter-email" className="text-sm font-black">
                {join.newsletter.email}
              </label>
              <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto]">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  className="h-12 rounded-card border border-[#D0D5DD] px-4 text-sm outline-none transition-colors focus:border-[var(--campaign-green-700)]"
                  placeholder={join.newsletter.placeholder}
                />
                <button
                  type="submit"
                  className="h-12 rounded-card bg-secondary-500 px-6 text-sm font-black text-primary-900 transition-colors duration-200 hover:bg-secondary-400"
                >
                  {join.newsletter.subscribe}
                </button>
              </div>
              {newsletterSubmitted && (
                <p className="mt-4 text-sm font-bold text-[var(--campaign-green-700)]">
                  {join.newsletter.submitted}
                </p>
              )}
            </motion.form>
          </div>
        </section>
      </main>
    </CampaignLayout>
  );
}
