import { usePreferences } from "@/context/PreferencesContext";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef } from "react";

type TawkCallback = (error?: unknown) => void;

type TawkApi = {
  customStyle?: {
    zIndex: number | string;
  };
  onLoad?: () => void;
  setAttributes?: (attributes: Record<string, string>, callback?: TawkCallback) => void;
  addTags?: (tags: string[], callback?: TawkCallback) => void;
  minimize?: () => void;
  showWidget?: () => void;
};

declare global {
  interface Window {
    Tawk_API?: TawkApi;
    Tawk_LoadStart?: Date;
  }
}

const TAWK_SCRIPT_ID = "tawk-to-sdk";
const DEFAULT_WIDGET_ID = "default";

function getTawkConfig() {
  return {
    propertyId: process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID?.trim() || "",
    widgetId: process.env.NEXT_PUBLIC_TAWK_WIDGET_ID?.trim() || DEFAULT_WIDGET_ID,
  };
}

function getTawkScriptUrl(propertyId: string, widgetId: string) {
  return `https://embed.tawk.to/${propertyId}/${widgetId}`;
}

export default function TawkToWidget() {
  const router = useRouter();
  const { hasHydrated, preferences } = usePreferences();
  const hasLoadedScript = useRef(false);
  const config = useMemo(getTawkConfig, []);

  const visitorAttributes = useMemo(
    () => ({
      "page-path": router.asPath.slice(0, 255),
      language: preferences.language,
      "content-priority": preferences.content.priority,
      "lagos-region": preferences.content.region,
      "election-updates": preferences.content.showElectionUpdates ? "yes" : "no",
    }),
    [
      preferences.content.priority,
      preferences.content.region,
      preferences.content.showElectionUpdates,
      preferences.language,
      router.asPath,
    ],
  );

  useEffect(() => {
    if (!hasHydrated || !config.propertyId || hasLoadedScript.current) {
      return undefined;
    }

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    window.Tawk_API.customStyle = {
      zIndex: "999999",
    };
    window.Tawk_API.onLoad = () => {
      window.Tawk_API?.showWidget?.();
      window.Tawk_API?.addTags?.(["campaign-website"], () => undefined);
      window.Tawk_API?.setAttributes?.(visitorAttributes, () => undefined);
    };

    const existingScript = document.getElementById(TAWK_SCRIPT_ID);

    if (existingScript) {
      hasLoadedScript.current = true;
      return undefined;
    }

    const firstScript = document.getElementsByTagName("script")[0];
    const script = document.createElement("script");
    script.id = TAWK_SCRIPT_ID;
    script.async = true;
    script.src = getTawkScriptUrl(config.propertyId, config.widgetId);
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    firstScript.parentNode?.insertBefore(script, firstScript);
    hasLoadedScript.current = true;

    return undefined;
  }, [config.propertyId, config.widgetId, hasHydrated, visitorAttributes]);

  useEffect(() => {
    if (!config.propertyId) {
      return;
    }

    window.Tawk_API?.setAttributes?.(visitorAttributes, () => undefined);
  }, [config.propertyId, visitorAttributes]);

  useEffect(() => {
    window.Tawk_API?.minimize?.();
  }, [router.asPath]);

  return null;
}
