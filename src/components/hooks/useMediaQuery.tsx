import {useState, useEffect} from "react"

/**
 * Custom hook to check if a media query matches.
 * @param query - Media query string (e.g., '(min-width: 900px)')
 * @returns boolean indicating whether the query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches
    }
    return false
  })

  useEffect(() => {
    if (typeof window === "undefined") return

    const mediaQueryList = window.matchMedia(query)

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    mediaQueryList.addEventListener("change", listener)

    // Set initial value
    setMatches(mediaQueryList.matches)

    return () => {
      mediaQueryList.removeEventListener("change", listener)
    }
  }, [query])

  return matches
}
