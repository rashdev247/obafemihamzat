import * as React from "react"
const IconNext = ({
  onClick,
  disabled,
}: {
  onClick: () => void
  disabled: boolean
}) => (
  <svg
    width={57}
    onClick={onClick}
    height={56}
    viewBox="0 0 57 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{pointerEvents: disabled ? "none":"auto"}}
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
      d="M21.5 28H35.5M35.5 28L28.5 21M35.5 28L28.5 35"
      stroke="#667085"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default IconNext
