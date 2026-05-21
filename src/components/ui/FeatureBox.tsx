import {ReactNode} from "react"
import {cn} from "@/lib/utils"

interface FeatureBoxProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
  classNameTwo?: string
}

export default function FeatureBox({
  icon,
  title,
  description,
  className,
  classNameTwo,
}: FeatureBoxProps) {
  return (
    <div className={cn("flex flex-col items-start", className)}>
      <div className={cn(classNameTwo)}>
        <div>{icon}</div>
        <h3 className="text-[24px] font-semibold mb-4 mt-6 text-[#12141D]">
          {title}
        </h3>
        <p className="text-sm font-bold text-[#677597]">{description}</p>
      </div>
    </div>
  )
}
