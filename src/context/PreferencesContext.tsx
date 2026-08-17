import {
  defaultPreferences,
  languageOptions,
  type CampaignPreferences,
  type ContentPriorityPreference,
  type LanguageCode,
  type ReadingWidthPreference,
  type RegionPreference,
  type TextScalePreference,
  type ThemePreference,
} from "@/data/preferences";
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "obafemi-hamzat-preferences-v1";

type PreferencesContextValue = {
  preferences: CampaignPreferences;
  hasHydrated: boolean;
  setPreferences: (
    updater: CampaignPreferences | ((current: CampaignPreferences) => CampaignPreferences),
  ) => void;
  resetPreferences: () => void;
};

const PreferencesContext = createContext<PreferencesContextValue | undefined>(undefined);

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isOneOf = <TValue extends string>(
  value: unknown,
  allowedValues: readonly TValue[],
): value is TValue => typeof value === "string" && allowedValues.includes(value as TValue);

const languageValues = languageOptions.map((option) => option.value);
const textScaleValues: readonly TextScalePreference[] = ["standard", "large", "larger"];
const themeValues: readonly ThemePreference[] = ["light", "dark", "system"];
const readingWidthValues: readonly ReadingWidthPreference[] = ["comfortable", "compact"];
const contentPriorityValues: readonly ContentPriorityPreference[] = [
  "all",
  "campaign",
  "policy",
  "events",
  "community",
];
const regionValues: readonly RegionPreference[] = [
  "all",
  "lagos-west",
  "lagos-central",
  "lagos-east",
];

function readBoolean(value: unknown, fallback: boolean) {
  return typeof value === "boolean" ? value : fallback;
}

function mergeStoredPreferences(value: unknown): CampaignPreferences {
  if (!isRecord(value)) {
    return defaultPreferences;
  }

  const accessibility = isRecord(value.accessibility) ? value.accessibility : {};
  const display = isRecord(value.display) ? value.display : {};
  const content = isRecord(value.content) ? value.content : {};
  const privacy = isRecord(value.privacy) ? value.privacy : {};
  const notifications = isRecord(value.notifications) ? value.notifications : {};

  return {
    language: isOneOf<LanguageCode>(value.language, languageValues)
      ? value.language
      : defaultPreferences.language,
    accessibility: {
      textScale: isOneOf(accessibility.textScale, textScaleValues)
        ? accessibility.textScale
        : defaultPreferences.accessibility.textScale,
      highContrast: readBoolean(
        accessibility.highContrast,
        defaultPreferences.accessibility.highContrast,
      ),
      reducedMotion: readBoolean(
        accessibility.reducedMotion,
        defaultPreferences.accessibility.reducedMotion,
      ),
    },
    display: {
      theme: isOneOf(display.theme, themeValues)
        ? display.theme
        : defaultPreferences.display.theme,
      readingWidth: isOneOf(display.readingWidth, readingWidthValues)
        ? display.readingWidth
        : defaultPreferences.display.readingWidth,
    },
    content: {
      priority: isOneOf(content.priority, contentPriorityValues)
        ? content.priority
        : defaultPreferences.content.priority,
      region: isOneOf(content.region, regionValues)
        ? content.region
        : defaultPreferences.content.region,
      showElectionUpdates: readBoolean(
        content.showElectionUpdates,
        defaultPreferences.content.showElectionUpdates,
      ),
    },
    privacy: {
      allowAnalytics: readBoolean(
        privacy.allowAnalytics,
        defaultPreferences.privacy.allowAnalytics,
      ),
      allowComments: readBoolean(privacy.allowComments, defaultPreferences.privacy.allowComments),
    },
    notifications: {
      newsletter: readBoolean(
        notifications.newsletter,
        defaultPreferences.notifications.newsletter,
      ),
      events: readBoolean(notifications.events, defaultPreferences.notifications.events),
      volunteer: readBoolean(notifications.volunteer, defaultPreferences.notifications.volunteer),
    },
  };
}

function readStoredPreferences() {
  if (typeof window === "undefined") {
    return defaultPreferences;
  }

  try {
    const rawPreferences = window.localStorage.getItem(STORAGE_KEY);

    if (!rawPreferences) {
      return defaultPreferences;
    }

    return mergeStoredPreferences(JSON.parse(rawPreferences));
  } catch {
    return defaultPreferences;
  }
}

function applyDocumentPreferences(preferences: CampaignPreferences) {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  const language = languageOptions.find((option) => option.value === preferences.language);

  root.lang = language?.locale ?? "en-NG";
  root.dataset.language = preferences.language;
  root.dataset.theme = preferences.display.theme;
  root.dataset.textScale = preferences.accessibility.textScale;
  root.dataset.contrast = preferences.accessibility.highContrast ? "high" : "standard";
  root.dataset.motion = preferences.accessibility.reducedMotion ? "reduced" : "standard";
  root.dataset.readingWidth = preferences.display.readingWidth;
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [preferences, updatePreferences] = useState(defaultPreferences);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    updatePreferences(readStoredPreferences());
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    applyDocumentPreferences(preferences);
  }, [preferences]);

  useEffect(() => {
    if (!hasHydrated || typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  }, [hasHydrated, preferences]);

  const value = useMemo<PreferencesContextValue>(
    () => ({
      preferences,
      hasHydrated,
      setPreferences: (updater) => {
        updatePreferences((current) =>
          typeof updater === "function" ? updater(current) : updater,
        );
      },
      resetPreferences: () => updatePreferences(defaultPreferences),
    }),
    [hasHydrated, preferences],
  );

  return (
    <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);

  if (!context) {
    throw new Error("usePreferences must be used within PreferencesProvider");
  }

  return context;
}
