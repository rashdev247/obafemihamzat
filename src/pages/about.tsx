import CampaignLayout from "@/components/campaign/CampaignLayout";
import {
  CampaignCTA,
  CampaignHead,
  ImagePanel,
  PageHero,
  SectionIntro,
} from "@/components/campaign/CampaignPrimitives";
import {
  biographyTimeline,
  campaignImages,
  campaignSite,
} from "@/data/campaignContent";
import { Award, Building2, Cpu, GraduationCap } from "lucide-react";

const credentials = [
  {
    title: "Engineer",
    description:
      "A systems thinker trained to solve hard civic and infrastructure problems.",
    Icon: Cpu,
  },
  {
    title: "Technocrat",
    description:
      "Experience across technology, finance, public administration, and governance.",
    Icon: Building2,
  },
  {
    title: "Public Servant",
    description:
      "More than two decades helping build Lagos through reform, works, and innovation.",
    Icon: Award,
  },
  {
    title: "Education Advocate",
    description:
      "Focused on prepared minds, digital literacy, STEM, and opportunity pathways.",
    Icon: GraduationCap,
  },
];

export default function AboutPage() {
  return (
    <CampaignLayout>
      <CampaignHead
        title="About Hamzat"
        description="Learn about Dr. Kadri Obafemi Hamzat's biography, public service record, technology background, and Lagos leadership journey."
        path="/about"
      />

      <main>
        <PageHero
          title="Service. Innovation. Results."
          description="Dr. Kadri Obafemi Hamzat has built a career around solving problems, improving systems, and creating opportunities for Lagosians."
          image={campaignImages.leadership}
        />

        <section className="bg-white px-6 py-20">
          <div className="container mx-auto grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionIntro
                label="The biography"
                title="A modern statesman shaped by engineering, reform, and Lagos service."
                description="Born into a family rooted in public service, Dr. Kadri Obafemi Hamzat has dedicated his life to improving systems and building opportunity. His professional journey spans technology, finance, public administration, and executive governance."
              />
              <div className="mt-8 space-y-5 text-base leading-8 text-text-secondary">
                <p>
                  He earned degrees from the University of Ibadan and Cranfield
                  University in the United Kingdom before building a respected
                  career across global institutions and Nigerian enterprise.
                </p>
                <p>
                  His transition into public service marked the beginning of one
                  of Lagos State&apos;s most consequential governance journeys:
                  technology reform, public works, transport modernization, and
                  steady executive leadership.
                </p>
                <p className="font-heading text-2xl font-black leading-tight text-[var(--campaign-green-900)]">
                  A bridge between experience and innovation.
                </p>
              </div>
            </div>
            <ImagePanel
              image={campaignImages.publicService}
              title="Competence that has been tested."
              caption="Leadership rooted in delivery, not spectacle."
              className="h-[540px]"
            />
          </div>
        </section>

        <section className="bg-bg-primary px-6 py-20">
          <div className="container mx-auto">
            <SectionIntro
              align="center"
              label="Leadership DNA"
              title="The profile Lagos needs for the next decade."
              description="The campaign positioning is competence plus stability plus innovation plus inclusiveness."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {credentials.map(({ title, description, Icon }) => (
                <article
                  key={title}
                  className="rounded-card border border-[rgba(6,59,46,0.12)] bg-white p-6 shadow-brand-card"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-card bg-[var(--lagos-sky)] text-[var(--campaign-green-700)]">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-black text-text-primary">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="container mx-auto grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <SectionIntro
              label="Public service timeline"
              title="A record built over time."
              description="Not an overnight campaign. A long arc of responsibility, reform, and Lagos-focused delivery."
            />
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-[19px] top-0 w-px bg-[rgba(6,59,46,0.16)]"
              />
              <div className="grid gap-6">
                {biographyTimeline.map((item) => (
                  <article
                    key={item.title}
                    className="relative grid gap-4 pl-14 md:grid-cols-[160px_1fr] md:gap-8"
                  >
                    <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-card bg-secondary-500 font-heading text-sm font-black text-primary-900">
                      {item.year === "2027" ? "27" : ""}
                    </span>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--campaign-green-700)]">
                      {item.year}
                    </p>
                    <div className="rounded-card border border-[rgba(6,59,46,0.12)] bg-bg-primary p-6">
                      <h3 className="font-heading text-2xl font-black text-text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-text-secondary">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--lagos-sky)] px-6 py-20">
          <div className="container mx-auto grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <ImagePanel
              image={campaignImages.ramadan}
              title="Rooted in community."
              caption="A campaign that listens before it speaks."
              className="h-[500px]"
            />
            <div>
              <SectionIntro
                label="Leadership character"
                title="Accessible, steady, and deeply Lagos-focused."
                description={`${campaignSite.shortName}'s strongest campaign asset is not noise. It is a record of showing up, understanding systems, respecting communities, and keeping Lagos moving.`}
              />
              <div className="mt-8 rounded-card bg-white p-6 shadow-brand-card">
                <p className="font-heading text-3xl font-black leading-tight text-[var(--campaign-green-900)]">
                  Experience is not nostalgia. It is preparation for what
                  Lagos must become next.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CampaignCTA />
      </main>
    </CampaignLayout>
  );
}
