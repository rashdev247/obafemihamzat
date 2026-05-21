import * as React from "react"
const IconPlay = () => (
  <svg
    width={80}
    height={81}
    viewBox="0 0 80 81"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_5993_16499)">
      <rect y={0.5} width={80} height={80} rx={40} fill="white" />
      <path
        d="M31.6992 32.8856C31.6992 30.5351 34.2797 29.0976 36.2783 30.3348L48.5787 37.9494C50.4733 39.1222 50.4733 41.8781 48.5787 43.051L36.2783 50.6655C34.2797 51.9027 31.6992 50.4652 31.6992 48.1147V32.8856Z"
        fill="#677597"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_5993_16499"
        x={0}
        y={0.5}
        width={80}
        height={80}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius={48}
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_5993_16499"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_5993_16499"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_5993_16499"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default IconPlay
