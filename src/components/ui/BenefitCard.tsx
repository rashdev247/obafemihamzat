import React from "react"

type BenefitCardProps = {
  title: string
  description: string
  bgColor: string
  CornerColor: React.ReactElement
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  description,
  bgColor,
  CornerColor,
}) => {
  return (
    <div
      className={`relative w-full  py-6 px-4`}
      style={{backgroundColor: bgColor}}
    >
      {CornerColor && (
        <div className="absolute top-0 -right-1 w-12 h-12">{CornerColor}</div>
      )}
      <h3 className="text-[20px] font-semibold mb-[22px] text-[#000000]">
        {title}
      </h3>
      <p className="text-[16px] text-[#000000] font-medium whitespace-pre-line">
        {description}
      </p>
    </div>
  )
}

export default BenefitCard
