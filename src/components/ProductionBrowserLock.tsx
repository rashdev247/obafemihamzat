import { useEffect } from "react";

const INSPECT_SHORTCUT_KEYS = new Set(["c", "i", "j"]);

function blockEvent(event: Event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

function shouldBlockShortcut(event: KeyboardEvent) {
  const key = event.key.toLowerCase();
  const isInspectShortcut =
    (event.ctrlKey && event.shiftKey && INSPECT_SHORTCUT_KEYS.has(key)) ||
    (event.metaKey && event.altKey && INSPECT_SHORTCUT_KEYS.has(key));

  return (
    event.key === "F12" ||
    isInspectShortcut ||
    (event.ctrlKey && key === "u") ||
    (event.metaKey && event.altKey && key === "u") ||
    (event.ctrlKey && key === "s") ||
    (event.metaKey && key === "s")
  );
}

export default function ProductionBrowserLock() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (shouldBlockShortcut(event)) {
        blockEvent(event);
      }
    };

    document.addEventListener("contextmenu", blockEvent, true);
    document.addEventListener("dragstart", blockEvent, true);
    document.addEventListener("keydown", handleKeyDown, true);

    return () => {
      document.removeEventListener("contextmenu", blockEvent, true);
      document.removeEventListener("dragstart", blockEvent, true);
      document.removeEventListener("keydown", handleKeyDown, true);
    };
  }, []);

  return null;
}
