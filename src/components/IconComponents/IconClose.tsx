import * as React from "react"
const IconClose = ({onClick}: {onClick: () => void}) => (
  <svg
    width={24}
    height={24}
    onClick={onClick}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{cursor: "pointer"}}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.8688 12L1.83447 2.96569L2.96584 1.83432L12.0002 10.8686L21.0345 1.83432L22.1658 2.96569L13.1315 12L22.1658 21.0343L21.0345 22.1657L12.0002 13.1314L2.96584 22.1657L1.83447 21.0343L10.8688 12Z"
      fill="#A6AFC2"
    />
  </svg>
)
export default IconClose
