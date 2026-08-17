import CampaignLayout from "@/components/campaign/CampaignLayout";
import { CampaignHead } from "@/components/campaign/CampaignPrimitives";
import {
  contentPriorityOptions,
  languageOptions,
  readingWidthOptions,
  regionOptions,
  textScaleOptions,
  themeOptions,
  type CampaignPreferences,
  type ContentPriorityPreference,
  type LanguageCode,
  type PreferenceOption,
  type ReadingWidthPreference,
  type RegionPreference,
  type TextScalePreference,
  type ThemePreference,
} from "@/data/preferences";
import { usePreferences } from "@/context/PreferencesContext";
import { useI18n, type I18nKey, type Translate } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import {
  Accessibility,
  Bell,
  Check,
  Globe2,
  MapPin,
  Newspaper,
  Palette,
  RotateCcw,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type SettingsSectionProps = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

type ToggleRowProps = {
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

type OptionTranslationKeys<TValue extends string> = Record<
  TValue,
  {
    label: I18nKey;
    description: I18nKey;
  }
>;

const languageTranslationKeys: Record<
  LanguageCode,
  {
    label: I18nKey;
    nativeLabel: I18nKey;
    description: I18nKey;
  }
> = {
  en: {
    label: "settings.language.en.label",
    nativeLabel: "settings.language.en.native",
    description: "settings.language.en.description",
  },
  yo: {
    label: "settings.language.yo.label",
    nativeLabel: "settings.language.yo.native",
    description: "settings.language.yo.description",
  },
  ha: {
    label: "settings.language.ha.label",
    nativeLabel: "settings.language.ha.native",
    description: "settings.language.ha.description",
  },
  ig: {
    label: "settings.language.ig.label",
    nativeLabel: "settings.language.ig.native",
    description: "settings.language.ig.description",
  },
};

const textScaleTranslationKeys: OptionTranslationKeys<TextScalePreference> = {
  standard: {
    label: "settings.textScale.standard.label",
    description: "settings.textScale.standard.description",
  },
  large: {
    label: "settings.textScale.large.label",
    description: "settings.textScale.large.description",
  },
  larger: {
    label: "settings.textScale.larger.label",
    description: "settings.textScale.larger.description",
  },
};

const themeTranslationKeys: OptionTranslationKeys<ThemePreference> = {
  light: {
    label: "settings.theme.light.label",
    description: "settings.theme.light.description",
  },
  dark: {
    label: "settings.theme.dark.label",
    description: "settings.theme.dark.description",
  },
  system: {
    label: "settings.theme.system.label",
    description: "settings.theme.system.description",
  },
};

const readingWidthTranslationKeys: OptionTranslationKeys<ReadingWidthPreference> = {
  comfortable: {
    label: "settings.readingWidth.comfortable.label",
    description: "settings.readingWidth.comfortable.description",
  },
  compact: {
    label: "settings.readingWidth.compact.label",
    description: "settings.readingWidth.compact.description",
  },
};

const contentPriorityTranslationKeys: OptionTranslationKeys<ContentPriorityPreference> = {
  all: {
    label: "settings.contentPriority.all.label",
    description: "settings.contentPriority.all.description",
  },
  campaign: {
    label: "settings.contentPriority.campaign.label",
    description: "settings.contentPriority.campaign.description",
  },
  policy: {
    label: "settings.contentPriority.policy.label",
    description: "settings.contentPriority.policy.description",
  },
  events: {
    label: "settings.contentPriority.events.label",
    description: "settings.contentPriority.events.description",
  },
  community: {
    label: "settings.contentPriority.community.label",
    description: "settings.contentPriority.community.description",
  },
};

const regionTranslationKeys: OptionTranslationKeys<RegionPreference> = {
  all: {
    label: "settings.region.all.label",
    description: "settings.region.all.description",
  },
  "lagos-west": {
    label: "settings.region.lagos-west.label",
    description: "settings.region.lagos-west.description",
  },
  "lagos-central": {
    label: "settings.region.lagos-central.label",
    description: "settings.region.lagos-central.description",
  },
  "lagos-east": {
    label: "settings.region.lagos-east.label",
    description: "settings.region.lagos-east.description",
  },
};

function translateOptions<TValue extends string>(
  options: readonly PreferenceOption<TValue>[],
  keys: OptionTranslationKeys<TValue>,
  t: Translate,
) {
  return options.map((option) => ({
    ...option,
    label: t(keys[option.value].label),
    description: t(keys[option.value].description),
  }));
}

function SettingsSection({
  icon: Icon,
  eyebrow,
  title,
  description,
  children,
}: SettingsSectionProps) {
  return (
    <section className="border-b border-[rgba(6,59,46,0.12)] py-8 first:pt-0 last:border-b-0 last:pb-0">
      <div className="grid gap-4 md:grid-cols-[auto_1fr]">
        <div className="flex h-11 w-11 items-center justify-center rounded-card bg-[var(--lagos-sky)] text-[var(--campaign-green-700)]">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--campaign-green-700)]">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-black text-primary-900">{title}</h2>
          <p className="mt-2 max-w-2xl text-sm font-medium leading-6 text-text-secondary">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function SegmentGroup<TValue extends string>({
  options,
  value,
  onChange,
}: {
  options: readonly PreferenceOption<TValue>[];
  value: TValue;
  onChange: (value: TValue) => void;
}) {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {options.map((option) => {
        const selected = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              "min-h-[92px] rounded-card border px-4 py-3 text-left transition-all duration-200",
              selected
                ? "border-secondary-500 bg-[rgba(212,166,42,0.14)] text-primary-900"
                : "border-[rgba(6,59,46,0.12)] bg-bg-primary text-text-secondary hover:border-secondary-500/70 hover:bg-white",
            )}
            aria-pressed={selected}
          >
            <span className="flex items-start justify-between gap-3">
              <span className="font-heading text-base font-black text-primary-900">
                {option.label}
              </span>
              {selected && (
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-500 text-primary-900">
                  <Check aria-hidden="true" className="h-3.5 w-3.5" />
                </span>
              )}
            </span>
            <span className="mt-2 block text-sm font-medium leading-6 text-text-secondary">
              {option.description}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function LanguageGroup({
  value,
  onChange,
  t,
}: {
  value: CampaignPreferences["language"];
  onChange: (value: CampaignPreferences["language"]) => void;
  t: Translate;
}) {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {languageOptions.map((option) => {
        const selected = option.value === value;
        const keys = languageTranslationKeys[option.value];
        const availabilityKey =
          option.availability === "live"
            ? "settings.availability.live"
            : "settings.availability.planned";

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              "min-h-[126px] rounded-card border px-4 py-4 text-left transition-all duration-200",
              selected
                ? "border-secondary-500 bg-[rgba(212,166,42,0.14)]"
                : "border-[rgba(6,59,46,0.12)] bg-bg-primary hover:border-secondary-500/70 hover:bg-white",
            )}
            aria-pressed={selected}
          >
            <span className="flex items-start justify-between gap-3">
              <span>
                <span className="block font-heading text-lg font-black text-primary-900">
                  {t(keys.label)}
                </span>
                <span className="mt-1 block text-sm font-bold text-[var(--campaign-green-700)]">
                  {t(keys.nativeLabel)}
                </span>
              </span>
              <span
                className={cn(
                  "rounded-full px-2.5 py-1 text-[11px] font-black uppercase tracking-[0.08em]",
                  option.availability === "live"
                    ? "bg-[var(--lagos-sky)] text-[var(--campaign-green-700)]"
                    : "bg-white text-text-muted",
                )}
              >
                {t(availabilityKey)}
              </span>
            </span>
            <span className="mt-3 block text-sm font-medium leading-6 text-text-secondary">
              {t(keys.description)}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function ToggleRow({ label, description, checked, onChange }: ToggleRowProps) {
  return (
    <div className="grid gap-4 rounded-card border border-[rgba(6,59,46,0.12)] bg-bg-primary p-4 sm:grid-cols-[1fr_auto] sm:items-center">
      <div>
        <p className="font-heading text-base font-black text-primary-900">{label}</p>
        <p className="mt-1 text-sm font-medium leading-6 text-text-secondary">
          {description}
        </p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          "flex h-8 w-14 shrink-0 items-center rounded-full p-1 transition-colors duration-200",
          checked ? "bg-[var(--campaign-green-700)]" : "bg-[#D0D5DD]",
        )}
      >
        <span
          className={cn(
            "h-6 w-6 rounded-full bg-white shadow-sm transition-transform duration-200",
            checked ? "translate-x-6" : "translate-x-0",
          )}
        />
        <span className="sr-only">{label}</span>
      </button>
    </div>
  );
}

export default function SettingsPage() {
  const { preferences, setPreferences, resetPreferences, hasHydrated } = usePreferences();
  const { t } = useI18n();

  const updatePreference = (updater: (current: CampaignPreferences) => CampaignPreferences) => {
    setPreferences(updater);
  };

  const translatedTextScaleOptions = translateOptions(
    textScaleOptions,
    textScaleTranslationKeys,
    t,
  );
  const translatedThemeOptions = translateOptions(themeOptions, themeTranslationKeys, t);
  const translatedReadingWidthOptions = translateOptions(
    readingWidthOptions,
    readingWidthTranslationKeys,
    t,
  );
  const translatedContentPriorityOptions = translateOptions(
    contentPriorityOptions,
    contentPriorityTranslationKeys,
    t,
  );
  const translatedRegionOptions = translateOptions(regionOptions, regionTranslationKeys, t);

  return (
    <CampaignLayout>
      <CampaignHead
        title={t("settings.meta.title")}
        description={t("settings.meta.description")}
        path="/settings"
        keywords={[
          "Obafemi Hamzat settings",
          "Hamzat campaign language preferences",
          "Lagos 2027 accessibility settings",
          "campaign notification preferences",
        ]}
        robots="noindex, nofollow"
      />

      <main className="bg-bg-primary px-6 pb-20 pt-28 md:pt-32">
        <div className="container mx-auto">
          <div className="grid gap-6 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
            <aside className="lg:sticky lg:top-28">
              <div className="rounded-card border border-[rgba(6,59,46,0.12)] bg-white p-6 shadow-brand-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-card bg-[var(--campaign-green-900)] text-white">
                  <SlidersHorizontal aria-hidden="true" className="h-5 w-5" />
                </div>
                <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-[var(--campaign-green-700)]">
                  {t("settings.sidebar.eyebrow")}
                </p>
                <h1 className="mt-3 text-4xl font-black leading-tight text-primary-900">
                  {t("settings.sidebar.title")}
                </h1>
                <p className="mt-4 text-base font-medium leading-7 text-text-secondary">
                  {t("settings.sidebar.description")}
                </p>
                <div className="mt-6 border-l-4 border-secondary-500 bg-bg-secondary py-3 pl-4 pr-3">
                  <p className="text-sm font-black text-primary-900">
                    {hasHydrated
                      ? t("settings.sidebar.saved")
                      : t("settings.sidebar.loading")}
                  </p>
                  <p className="mt-1 text-sm font-medium leading-6 text-text-secondary">
                    {t("settings.sidebar.stored")}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={resetPreferences}
                  className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-card border border-[rgba(6,59,46,0.18)] bg-white px-4 text-sm font-black text-primary-900 transition-colors duration-200 hover:border-secondary-500"
                >
                  <RotateCcw aria-hidden="true" className="h-4 w-4" />
                  {t("settings.sidebar.reset")}
                </button>
              </div>
            </aside>

            <div className="grid gap-6">
              <SettingsSection
                icon={Globe2}
                eyebrow={t("settings.language.eyebrow")}
                title={t("settings.language.title")}
                description={t("settings.language.description")}
              >
                <LanguageGroup
                  value={preferences.language}
                  t={t}
                  onChange={(language) =>
                    updatePreference((current) => ({
                      ...current,
                      language,
                    }))
                  }
                />
              </SettingsSection>

              <SettingsSection
                icon={Accessibility}
                eyebrow={t("settings.accessibility.eyebrow")}
                title={t("settings.accessibility.title")}
                description={t("settings.accessibility.description")}
              >
                <div className="grid gap-5">
                  <SegmentGroup
                    options={translatedTextScaleOptions}
                    value={preferences.accessibility.textScale}
                    onChange={(textScale) =>
                      updatePreference((current) => ({
                        ...current,
                        accessibility: {
                          ...current.accessibility,
                          textScale,
                        },
                      }))
                    }
                  />
                  <div className="grid gap-3 md:grid-cols-2">
                    <ToggleRow
                      label={t("settings.toggle.highContrast.label")}
                      description={t("settings.toggle.highContrast.description")}
                      checked={preferences.accessibility.highContrast}
                      onChange={(highContrast) =>
                        updatePreference((current) => ({
                          ...current,
                          accessibility: {
                            ...current.accessibility,
                            highContrast,
                          },
                        }))
                      }
                    />
                    <ToggleRow
                      label={t("settings.toggle.reducedMotion.label")}
                      description={t("settings.toggle.reducedMotion.description")}
                      checked={preferences.accessibility.reducedMotion}
                      onChange={(reducedMotion) =>
                        updatePreference((current) => ({
                          ...current,
                          accessibility: {
                            ...current.accessibility,
                            reducedMotion,
                          },
                        }))
                      }
                    />
                  </div>
                </div>
              </SettingsSection>

              <SettingsSection
                icon={Palette}
                eyebrow={t("settings.display.eyebrow")}
                title={t("settings.display.title")}
                description={t("settings.display.description")}
              >
                <div className="grid gap-5">
                  <SegmentGroup
                    options={translatedThemeOptions}
                    value={preferences.display.theme}
                    onChange={(theme) =>
                      updatePreference((current) => ({
                        ...current,
                        display: {
                          ...current.display,
                          theme,
                        },
                      }))
                    }
                  />
                  <SegmentGroup
                    options={translatedReadingWidthOptions}
                    value={preferences.display.readingWidth}
                    onChange={(readingWidth) =>
                      updatePreference((current) => ({
                        ...current,
                        display: {
                          ...current.display,
                          readingWidth,
                        },
                      }))
                    }
                  />
                </div>
              </SettingsSection>

              <SettingsSection
                icon={Newspaper}
                eyebrow={t("settings.news.eyebrow")}
                title={t("settings.news.title")}
                description={t("settings.news.description")}
              >
                <div className="grid gap-5">
                  <SegmentGroup
                    options={translatedContentPriorityOptions}
                    value={preferences.content.priority}
                    onChange={(priority) =>
                      updatePreference((current) => ({
                        ...current,
                        content: {
                          ...current.content,
                          priority,
                        },
                      }))
                    }
                  />
                  <ToggleRow
                    label={t("settings.toggle.electionUpdates.label")}
                    description={t("settings.toggle.electionUpdates.description")}
                    checked={preferences.content.showElectionUpdates}
                    onChange={(showElectionUpdates) =>
                      updatePreference((current) => ({
                        ...current,
                        content: {
                          ...current.content,
                          showElectionUpdates,
                        },
                      }))
                    }
                  />
                </div>
              </SettingsSection>

              <SettingsSection
                icon={MapPin}
                eyebrow={t("settings.location.eyebrow")}
                title={t("settings.location.title")}
                description={t("settings.location.description")}
              >
                <SegmentGroup
                  options={translatedRegionOptions}
                  value={preferences.content.region}
                  onChange={(region) =>
                    updatePreference((current) => ({
                      ...current,
                      content: {
                        ...current.content,
                        region,
                      },
                    }))
                  }
                />
              </SettingsSection>

              <SettingsSection
                icon={ShieldCheck}
                eyebrow={t("settings.privacy.eyebrow")}
                title={t("settings.privacy.title")}
                description={t("settings.privacy.description")}
              >
                <div className="grid gap-3 md:grid-cols-2">
                  <ToggleRow
                    label={t("settings.toggle.analytics.label")}
                    description={t("settings.toggle.analytics.description")}
                    checked={preferences.privacy.allowAnalytics}
                    onChange={(allowAnalytics) =>
                      updatePreference((current) => ({
                        ...current,
                        privacy: {
                          ...current.privacy,
                          allowAnalytics,
                        },
                      }))
                    }
                  />
                  <ToggleRow
                    label={t("settings.toggle.comments.label")}
                    description={t("settings.toggle.comments.description")}
                    checked={preferences.privacy.allowComments}
                    onChange={(allowComments) =>
                      updatePreference((current) => ({
                        ...current,
                        privacy: {
                          ...current.privacy,
                          allowComments,
                        },
                      }))
                    }
                  />
                </div>
              </SettingsSection>

              <SettingsSection
                icon={Bell}
                eyebrow={t("settings.notifications.eyebrow")}
                title={t("settings.notifications.title")}
                description={t("settings.notifications.description")}
              >
                <div className="grid gap-3 md:grid-cols-3">
                  <ToggleRow
                    label={t("settings.toggle.newsletter.label")}
                    description={t("settings.toggle.newsletter.description")}
                    checked={preferences.notifications.newsletter}
                    onChange={(newsletter) =>
                      updatePreference((current) => ({
                        ...current,
                        notifications: {
                          ...current.notifications,
                          newsletter,
                        },
                      }))
                    }
                  />
                  <ToggleRow
                    label={t("settings.toggle.events.label")}
                    description={t("settings.toggle.events.description")}
                    checked={preferences.notifications.events}
                    onChange={(events) =>
                      updatePreference((current) => ({
                        ...current,
                        notifications: {
                          ...current.notifications,
                          events,
                        },
                      }))
                    }
                  />
                  <ToggleRow
                    label={t("settings.toggle.volunteer.label")}
                    description={t("settings.toggle.volunteer.description")}
                    checked={preferences.notifications.volunteer}
                    onChange={(volunteer) =>
                      updatePreference((current) => ({
                        ...current,
                        notifications: {
                          ...current.notifications,
                          volunteer,
                        },
                      }))
                    }
                  />
                </div>
              </SettingsSection>
            </div>
          </div>
        </div>
      </main>
    </CampaignLayout>
  );
}
