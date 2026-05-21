import * as React from "react"
const CornerColor = ({color}: {color: string}) => (
  <svg
    width={46}
    height={46}
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_5993_11269)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 44.7037H44.7037L0 0L0 44.7037Z"
        fill={color}
      />
      <path d="M44.7037 0L0 0L44.7037 44.7037L44.7037 0Z" fill="#FFFF" />
    </g>
    <defs>
      <clipPath id="clip0_5993_11269">
        <rect width={45.4133} height={45.4133} fill="white" />
      </clipPath>
    </defs>
  </svg>
)
export default CornerColor
