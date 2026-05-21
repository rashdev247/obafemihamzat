import {cn} from "@/lib/utils"
import Image, { StaticImageData } from "next/image"

import React, {useCallback, useEffect, useRef, useState} from "react"

export const InfinitMoveFeatureSlider = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    logo: StaticImageData | string
    link: string
  }[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [start, setStart] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [, setHoveredIndex] = useState<number | null>(null)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const updateAnimation = useCallback(() => {
    if (!containerRef.current) return

    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    )

    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
    containerRef.current.style.setProperty("--animation-duration", duration)
  }, [direction, speed])

  useEffect(() => {
    updateAnimation()
    setStart(true)

    // Detect touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches
    setIsTouchDevice(isTouch)
  }, [updateAnimation])

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
              className="relative flex flex-col items-center transition-all duration-300"
              onMouseEnter={() => handleMouseEnter(originalIndex)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(originalIndex)}
            >
              <a href={item?.link} style={{display:"inline-block"}} target="_blank" rel="noopener noreferrer">
                <Image 
                  src={item.logo} 
                  alt="Partner logo" 
                  height={96}
                  width={200}
                  loading="lazy"
                  {...(typeof item.logo !== 'string' && { placeholder: "blur" })}
                  style={{height: "96px", width: "auto"}}
                />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
