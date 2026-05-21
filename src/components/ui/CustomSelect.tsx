/* eslint-disable @typescript-eslint/no-unused-expressions */
import clsx from "clsx"
import {useState, useRef, useEffect} from "react"
import LoaderSpinner from "./Loader"
import IconFilter from "../IconComponents/IconFilter"

export type Option = {value: string; label: string}

type CustomSelectProps = {
  data: Option[]
  placeholder?: string
  searchable?: boolean
  value?: string
  onChange?: (value: string) => void
  onItemSubmit?: (item: Option) => void
  className?: string
  label?: string
  loadingState?: boolean
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  data,
  placeholder = "Sort by:",
  searchable = false,
  className,
  onChange,
  loadingState,
  onItemSubmit,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropUp, setDropUp] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (isOpen && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const dropdownHeight = 240
      const spaceBelow = window.innerHeight - rect.bottom
      const spaceAbove = rect.top

      if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
        setDropUp(true)
      } else {
        setDropUp(false)
      }
    }
  }, [isOpen])

  const filteredData = data.filter(option =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  )

  const handleSelect = (option: Option) => {
    setSelectedOption(option)
    onChange && onChange(option.value)
    setIsOpen(false)
    onItemSubmit?.(option)
    setSearchValue("")
  }

  const dropdownStyle = dropUp
    ? {
        bottom: "calc(100% + 4px)",
        top: "auto",
        transformOrigin: "bottom",
        transform: isOpen ? "rotateX(0deg)" : "rotateX(90deg)",
        opacity: isOpen ? 1 : 0,
      }
    : {
        top: "calc(100% + 4px)",
        bottom: "auto",
        transformOrigin: "top",
        transform: isOpen ? "rotateX(0deg)" : "rotateX(-90deg)",
        opacity: isOpen ? 1 : 0,
      }

  return (
    <div
      className="relative cursor-pointer w-full max-w-[190px]"
      ref={containerRef}
    >
      <div
        className="w-full shrink-0 text-[14px] font-[500] placeholder:text-[11px] placeholder:text-[#979797] leading-[21px] h-[42px] px-4  text-gray-800 focus:outline-none flex items-center justify-between"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <div className="flex items-center gap-2">
          <IconFilter />
          <span
            className={`${
              selectedOption
                ? "font-[500] text-[16px] text-[#051438]"
                : "text-[#677597] font-[500] text-[16px]"
            }`}
          >
            {selectedOption ? selectedOption?.label : placeholder}
          </span>
        </div>
        {loadingState ? (
          <LoaderSpinner size={10} color="#335F32" />
        ) : (
          <svg
            className={`w-4 h-4 ml-2 transition-transform duration-300 transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </div>

      <div
        className="absolute left-0 right-0 z-10 max-h-60 overflow-auto transition-transform duration-300"
        style={dropdownStyle}
      >
        {searchable && (
          <div className="p-2">
            <div className="relative w-full max-w-[374px]">
              <span className="absolute left-4 top-[10px] text-gray-400">
                <IconFilter />
              </span>
              <input
                type="text"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                placeholder="Search..."
                className={clsx(
                  "w-full rounded-[10px] shrink-0 border text-[14px] font-[500]  placeholder:text-[11px] placeholder:text-[#979797] leading-[21px] h-[39px] px-4 pl-10 text-gray-800 focus:outline-none",
                  className
                )}
              />
            </div>
          </div>
        )}
        <ul className="bg-white rounded-2xl border-1 shadow-md border-[#DFE2E9]">
          {filteredData.length > 0 ? (
            filteredData.map(option => (
              <li
                key={option.value}
                onClick={() => handleSelect(option)}
                className="p-2 hover:bg-gray-100 rounded-2xl cursor-pointer font-medium text-[#051438]"
              >
                {option.label}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No options found</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default CustomSelect
