import { usePreferences } from "@/context/PreferencesContext";
import { useI18n } from "@/lib/i18n";
import { MessageCircle } from "lucide-react";
import dynamic from "next/dynamic";

function CommentsLoading() {
  const { t } = useI18n();

  return (
    <div className="mt-8 min-h-[260px] rounded-card border border-[rgba(6,59,46,0.1)] bg-bg-primary p-6 text-sm font-semibold text-text-secondary">
      {t("comments.loading")}
    </div>
  );
}

const DiscussionEmbed = dynamic(
  () => import("disqus-react").then((module) => module.DiscussionEmbed),
  {
    ssr: false,
    loading: () => <CommentsLoading />,
  },
);

type DisqusCommentsProps = {
  identifier: string;
  title: string;
  url: string;
  shortname?: string;
};

const defaultShortname = "https-obafemihamzat-vercel-a";

const normalizeShortname = (value?: string) => {
  const normalized = value
    ?.trim()
    .replace(/^https?:\/\//i, "")
    .replace(/\.disqus\.com.*$/i, "")
    .replace(/\/.*$/, "");

  if (!normalized || normalized === "your-disqus-shortname") {
    return defaultShortname;
  }

  return normalized;
};

const configuredShortname = normalizeShortname(
  process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
);

const DisqusComments = ({
  identifier,
  title,
  url,
  shortname,
}: DisqusCommentsProps) => {
  const { preferences, setPreferences } = usePreferences();
  const { t } = useI18n();
  const disqusShortname = normalizeShortname(shortname || configuredShortname);

  if (!disqusShortname) {
    return null;
  }

  if (!preferences.privacy.allowComments) {
    return (
      <section className="bg-bg-primary px-6 py-16">
        <div className="container mx-auto">
          <div className="rounded-card border border-[rgba(6,59,46,0.12)] bg-white p-6 shadow-brand-card md:p-8">
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-[var(--campaign-green-700)]">
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              {t("comments.eyebrow")}
            </p>
            <h2 className="mt-4 font-heading text-3xl font-black leading-tight text-[var(--campaign-green-950)] md:text-5xl">
              {t("comments.disabledTitle")}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary md:text-lg">
              {t("comments.disabledBody")}
            </p>
            <button
              type="button"
              onClick={() =>
                setPreferences((current) => ({
                  ...current,
                  privacy: {
                    ...current.privacy,
                    allowComments: true,
                  },
                }))
              }
              className="mt-6 inline-flex h-12 items-center justify-center rounded-card bg-secondary-500 px-6 text-sm font-black text-primary-900 transition-colors duration-200 hover:bg-secondary-400"
            >
              {t("comments.enable")}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-bg-primary px-6 py-16">
      <div className="container mx-auto">
        <div className="rounded-card border border-[rgba(6,59,46,0.12)] bg-white p-6 shadow-brand-card md:p-8">
          <div className="grid gap-6 border-b border-[rgba(6,59,46,0.1)] pb-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-[var(--campaign-green-700)]">
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                {t("comments.eyebrow")}
              </p>
              <h2 className="mt-4 font-heading text-3xl font-black leading-tight text-[var(--campaign-green-950)] md:text-5xl">
                {t("comments.title")}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary md:text-lg">
                {t("comments.body")}
              </p>
            </div>
            <div className="rounded-card bg-[var(--lagos-sky)] px-4 py-3 text-sm font-black text-[var(--campaign-green-700)]">
              {t("comments.powered")}
            </div>
          </div>

          <div className="mt-8 min-h-[320px]">
            <DiscussionEmbed
              shortname={disqusShortname}
              config={{
                url,
                identifier,
                title,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisqusComments;
