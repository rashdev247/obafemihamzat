import * as React from "react"
const IconPrev = ({
  onClick,
  disabled,
}: {
  onClick: () => void
  disabled: boolean
}) => (
  <svg
    width={57}
    height={56}
    onClick={onClick}
    viewBox="0 0 57 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{pointerEvents: disabled ? "none" : "auto"}}
  >
    <rect
      x={1}
      y={0.5}
      width={55}
      height={55}
      rx={27.5}
      fill="white"
      fillOpacity={0.9}
    />
    <rect x={1} y={0.5} width={55} height={55} rx={27.5} stroke="#EAECF0" />
    <path
      d="M35.5 28H21.5M21.5 28L28.5 35M21.5 28L28.5 21"
      stroke="#667085"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default IconPrev
