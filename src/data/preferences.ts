export type LanguageCode = "en" | "yo" | "ha" | "ig";
export type TextScalePreference = "standard" | "large" | "larger";
export type ThemePreference = "light" | "dark" | "system";
export type ReadingWidthPreference = "comfortable" | "compact";
export type ContentPriorityPreference =
  | "all"
  | "campaign"
  | "policy"
  | "events"
  | "community";
export type RegionPreference = "all" | "lagos-west" | "lagos-central" | "lagos-east";

export type PreferenceOption<TValue extends string> = {
  value: TValue;
  label: string;
  description: string;
};

export type LanguageOption = PreferenceOption<LanguageCode> & {
  locale: string;
  nativeLabel: string;
  availability: "live" | "planned";
};

export type CampaignPreferences = {
  language: LanguageCode;
  accessibility: {
    textScale: TextScalePreference;
    highContrast: boolean;
    reducedMotion: boolean;
  };
  display: {
    theme: ThemePreference;
    readingWidth: ReadingWidthPreference;
  };
  content: {
    priority: ContentPriorityPreference;
    region: RegionPreference;
    showElectionUpdates: boolean;
  };
  privacy: {
    allowAnalytics: boolean;
    allowComments: boolean;
  };
  notifications: {
    newsletter: boolean;
    events: boolean;
    volunteer: boolean;
  };
};

export const languageOptions: readonly LanguageOption[] = [
  {
    value: "en",
    label: "English",
    nativeLabel: "English",
    locale: "en-NG",
    availability: "live",
    description: "Default site language and campaign copy.",
  },
  {
    value: "yo",
    label: "Yoruba",
    nativeLabel: "Yoruba",
    locale: "yo-NG",
    availability: "live",
    description: "For Lagos communities that prefer Yoruba updates.",
  },
  {
    value: "ha",
    label: "Hausa",
    nativeLabel: "Hausa",
    locale: "ha-NG",
    availability: "live",
    description: "For Hausa-speaking supporters and readers.",
  },
  {
    value: "ig",
    label: "Igbo",
    nativeLabel: "Igbo",
    locale: "ig-NG",
    availability: "live",
    description: "For Igbo-speaking supporters and readers.",
  },
];

export const textScaleOptions: readonly PreferenceOption<TextScalePreference>[] = [
  {
    value: "standard",
    label: "Standard",
    description: "The current campaign typography scale.",
  },
  {
    value: "large",
    label: "Large",
    description: "Slightly larger body copy for easier reading.",
  },
  {
    value: "larger",
    label: "Larger",
    description: "Maximum readable size without changing the layout.",
  },
];

export const themeOptions: readonly PreferenceOption<ThemePreference>[] = [
  {
    value: "light",
    label: "Light",
    description: "Use the campaign's default light interface.",
  },
  {
    value: "dark",
    label: "Dark",
    description: "Use darker surfaces for low-light reading.",
  },
  {
    value: "system",
    label: "System",
    description: "Follow the device display preference.",
  },
];

export const readingWidthOptions: readonly PreferenceOption<ReadingWidthPreference>[] = [
  {
    value: "comfortable",
    label: "Comfortable",
    description: "Use the standard page width.",
  },
  {
    value: "compact",
    label: "Compact",
    description: "Narrow long-form reading sections.",
  },
];

export const contentPriorityOptions: readonly PreferenceOption<ContentPriorityPreference>[] = [
  {
    value: "all",
    label: "All Updates",
    description: "Campaign, policy, events, and community stories.",
  },
  {
    value: "campaign",
    label: "Campaign",
    description: "Announcements, speeches, and movement updates.",
  },
  {
    value: "policy",
    label: "Policy",
    description: "Vision 2027, governance, and issue-based updates.",
  },
  {
    value: "events",
    label: "Events",
    description: "Rallies, town halls, and public engagements.",
  },
  {
    value: "community",
    label: "Community",
    description: "Ward-level, grassroots, and supporter stories.",
  },
];

export const regionOptions: readonly PreferenceOption<RegionPreference>[] = [
  {
    value: "all",
    label: "All Lagos",
    description: "Show statewide campaign updates.",
  },
  {
    value: "lagos-west",
    label: "Lagos West",
    description: "Alimosho, Ojo, Badagry, Ikeja, and nearby communities.",
  },
  {
    value: "lagos-central",
    label: "Lagos Central",
    description: "Lagos Island, Surulere, Apapa, Eti-Osa, and nearby communities.",
  },
  {
    value: "lagos-east",
    label: "Lagos East",
    description: "Ikorodu, Epe, Ibeju-Lekki, Kosofe, and nearby communities.",
  },
];

export const defaultPreferences: CampaignPreferences = {
  language: "en",
  accessibility: {
    textScale: "standard",
    highContrast: false,
    reducedMotion: false,
  },
  display: {
    theme: "light",
    readingWidth: "comfortable",
  },
  content: {
    priority: "all",
    region: "all",
    showElectionUpdates: true,
  },
  privacy: {
    allowAnalytics: false,
    allowComments: true,
  },
  notifications: {
    newsletter: true,
    events: true,
    volunteer: false,
  },
};
