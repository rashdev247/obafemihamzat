import {useEffect, useState} from "react"

export const ScaledDesktopLayout: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const newScale = width < 1440 ? width / 1440 : 1
      setScale(newScale)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="w-screen h-screen overflow-auto">
      <div
        className="w-[1440px] origin-top-left"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          height: `${100 / scale}vh`, // prevents vertical clipping
        }}
      >
        {children}
      </div>
    </div>
  )
}
