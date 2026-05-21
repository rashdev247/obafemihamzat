import {cn} from "@/lib/utils"
import React, {useEffect, useRef, useState} from "react"

export const InfiniteScrollingSlide = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    text: string
    content: string
  }[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [start, setStart] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    updateAnimation()
    setStart(true)

    // Detect touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches
    setIsTouchDevice(isTouch)
  }, [])

  function updateAnimation() {
    if (!containerRef.current) return

    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    )

    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
    containerRef.current.style.setProperty("--animation-duration", duration)
  }

  const duplicatedItems = [...items, ...items]

  const handleMouseEnter = (index: number) => {
    if (!isTouchDevice) setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    if (!isTouchDevice) setHoveredIndex(null)
  }

  const handleClick = (index: number) => {
    if (isTouchDevice) {
      setHoveredIndex(prev => (prev === index ? null : index))
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 w-screen", className)}
    >
      <ul
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false)
          if (!isTouchDevice) setHoveredIndex(null)
        }}
        style={{
          animationPlayState: pauseOnHover && isHovered ? "paused" : "running",
        }}
      >
        {duplicatedItems.map((item, index) => {
          const originalIndex = index % items.length

          return (
            <li
              key={index}
              data-index={originalIndex}
              className="relative flex flex-col items-center w-fit border-[#EFF1F4] border-2 text-[#58627A] rounded-2xl bg-white p-4 font-bold text-[1.125rem] transition-all duration-300"
              onMouseEnter={() => handleMouseEnter(originalIndex)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(originalIndex)}
            >
              <span>{item.text}</span>

              {hoveredIndex === originalIndex && (
                <span className="absolute top-full mt-2 left-0 w-full rounded-lg bg-white border border-[#EFF1F4] text-[#051438] font-medium text-[.8rem] p-2 shadow-lg z-50">
                  {item.content}
                </span>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
