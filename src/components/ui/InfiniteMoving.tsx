"use client"

import {cn} from "@/lib/utils"
import React, {useEffect, useRef, useState} from "react"
import DynamicIcon from "@/components/DynamicIcon"

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    logo: string
  }[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)
      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true)
        scrollerRef.current?.appendChild(duplicatedItem)
      })
      updateAnimation()
      setStart(true)
    }
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

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden",
        "mask-gradient",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((company, index) => (
          <li key={index} className="flex items-center space-x-2">
            <DynamicIcon name={company.logo} />
          </li>
        ))}
      </ul>
    </div>
  )
}
