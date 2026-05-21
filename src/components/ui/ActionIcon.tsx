// components/ui/ActionIcon.tsx
import React from "react"
import clsx from "clsx"

type ActionIconProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  className?: string
  children: React.ReactNode
  "data-testid"?: string
}

const ActionIcon = ({
  onClick,
  disabled = false,
  className = "",
  children,
  ...props
}: ActionIconProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "w-8 h-8 flex items-center justify-center rounded-md border transition-colors",
        disabled
          ? "bg-gray-200 cursor-not-allowed text-gray-400 border-gray-200"
          : "bg-white hover:bg-gray-100 border-gray-300 text-[#051438]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default ActionIcon
