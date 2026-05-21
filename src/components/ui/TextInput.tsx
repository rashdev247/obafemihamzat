import React, {forwardRef, InputHTMLAttributes} from "react"
import clsx from "clsx"

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  withoutIcon?: boolean
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({className, withoutIcon, ...props}, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={clsx(
          `w-full bg-white rounded-[10px] shrink-0 border text-[16px] font-[500] border-[#DFE2E9] ${
            withoutIcon
              ? "placeholder:text-[16px] placeholder:text-[#A6AFC2]"
              : "placeholder:text-[16px] placeholder:text-[#A6AFC2]"
          }  leading-[21px] h-[41px] px-3 ${withoutIcon ? "pl-4" : "pl-10"} ${
            withoutIcon ? "text-[#4B4B4B]" : "text-gray-800"
          }  focus:outline-none`,
          className
        )}
      />
    )
  }
)

TextInput.displayName = "TextInput"

export default TextInput
