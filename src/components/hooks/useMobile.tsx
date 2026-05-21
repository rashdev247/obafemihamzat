import * as React from "react"

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      // Create a media query that matches when the viewport is 1279px or less.
      const mediaQuery = window.matchMedia("(max-width: 1024px)")
      const handleChange = (e: MediaQueryListEvent) => {
        setIsMobile(e.matches)
      }

      setIsMobile(mediaQuery.matches)

      mediaQuery.addEventListener("change", handleChange)

      return () => {
        mediaQuery.removeEventListener("change", handleChange)
      }
    }
  }, [])

  return isMobile
}
