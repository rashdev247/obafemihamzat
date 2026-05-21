/* eslint-disable react/display-name */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useRef, useEffect, useLayoutEffect} from "react"

type CustomMenuProps = {
  children: React.ReactNode
}

type MenuContextProps = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  targetRef: React.RefObject<HTMLDivElement | null>
}

const CustomMenuContext = React.createContext<MenuContextProps | undefined>(
  undefined
)

const CustomMenu: React.FC<CustomMenuProps> & {
  Target: React.FC<{children: React.ReactNode}>
  Dropdown: React.FC<{
    children: React.ReactNode
    direction?: "up" | "down" | "auto"
    align?: "left" | "right" | "auto"
    width?: string
  }>
  Item: React.FC<{
    children: React.ReactNode
    leftIcon?: React.ReactNode
    disabled?: boolean
    index?: number;
    onClick?: () => void
  }>
} = ({children}) => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <CustomMenuContext.Provider value={{open, setOpen, targetRef}}>
      <div ref={menuRef} className="relative w-fit cursor-pointer inline-block">
        {children}
      </div>
    </CustomMenuContext.Provider>
  )
}

CustomMenu.Target = ({children}) => {
  const context = React.useContext(CustomMenuContext)
  if (!context) {
    throw new Error("CustomMenu.Target must be used within a CustomMenu")
  }
  const {setOpen, targetRef} = context
  return (
    <div
      ref={targetRef}
      onClick={() => setOpen(prev => !prev)}
      className="cursor-pointer inline-flex items-center"
    >
      {children}
    </div>
  )
}

CustomMenu.Dropdown = ({
  children,
  direction = "auto",
  align = "auto",
  width = "170",
}) => {
  const context = React.useContext(CustomMenuContext)
  if (!context) {
    throw new Error("CustomMenu.Dropdown must be used within a CustomMenu")
  }
  const {open, targetRef} = context
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [computedDirection, setComputedDirection] = useState<"up" | "down">(
    "down"
  )
  const [computedHorizontal, setComputedHorizontal] = useState<
    "left" | "right"
  >("left")

  useLayoutEffect(() => {
    if (!open || !targetRef.current || !dropdownRef.current) return

    const targetRect = targetRef.current.getBoundingClientRect()
    const dropdownRect = dropdownRef.current.getBoundingClientRect()
    const dropdownHeight = dropdownRect.height
    const dropdownWidth = dropdownRect.width

    if (direction !== "auto") {
      setComputedDirection(direction)
    } else {
      const spaceBelow = window.innerHeight - targetRect.bottom
      const spaceAbove = targetRect.top
      if (spaceBelow < dropdownHeight && spaceAbove >= dropdownHeight) {
        setComputedDirection("up")
      } else {
        setComputedDirection("down")
      }
    }

    if (align !== "auto") {
      setComputedHorizontal(align)
    } else {
      const spaceRight = window.innerWidth - targetRect?.left
      const spaceLeft = targetRect?.right
      if (spaceRight < dropdownWidth && spaceLeft >= dropdownWidth) {
        setComputedHorizontal("right")
      } else {
        setComputedHorizontal("left")
      }
    }
  }, [open, direction, align, targetRef])

  const verticalClasses =
    computedDirection === "down" ? "mt-2" : "bottom-full mb-2"
  const horizontalClasses = computedHorizontal === "left" ? "left-0" : "right-0"

  return open ? (
    <div
      ref={dropdownRef}
      style={{
        boxShadow: "0px 4px 4px 0px #0000000D",
        zIndex: 13,
        width: `${width}px`,
      }}
      className={`absolute z-13 bg-white border border-[#DFE2E9] cursor-pointer rounded-[15px] ${verticalClasses} ${horizontalClasses}`}
    >
      {children}
    </div>
  ) : null
}

CustomMenu.Item = ({children, leftIcon, disabled, onClick, index}) => {
  const classes = `flex items-center border-b  border-dashed border-[#DFE2E9] cursor-pointer gap-2 px-4 py-2 text-sm text-gray-700  hover:bg-[#D7E3FC] ${
    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
  }`
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick()
    }
  }
  return (
    <div
      className={classes}
      style={{
        ...(index === 0 && {
          borderBottomWidth: "1px",
          borderBottomStyle: "dashed",
          borderBottomColor: "#DFE2E9",
        }),
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
      }}
      first-type-of
      onClick={handleClick}
    >
      {leftIcon && <span>{leftIcon}</span>}
      <span style={{width: "100%"}}>{children}</span>
    </div>
  )
}

export default CustomMenu
