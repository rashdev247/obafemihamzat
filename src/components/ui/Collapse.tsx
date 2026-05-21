// components/Collapse.tsx
import React, {useRef, useEffect, useState} from "react"

interface CollapseProps {
  opened: boolean
  children: React.ReactNode
  transitionDuration?: number // in ms
}

const Collapse: React.FC<CollapseProps> = ({
  opened,
  children,
  transitionDuration = 300,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState("0px")

  useEffect(() => {
    if (ref.current) {
      setHeight(opened ? `${ref.current.scrollHeight}px` : "0px")
    }
  }, [opened])

  return (
    <div
      className="transition-[max-height] ease-in-out overflow-hidden"
      style={{
        maxHeight: height,
        transitionDuration: `${transitionDuration}ms`,
      }}
    >
      <div ref={ref}>{children}</div>
    </div>
  )
}

export default Collapse
