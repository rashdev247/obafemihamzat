import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

export type MultiSelectOption = {
  value: string;
  label: string;
  count?: number;
};

type MultiSelectProps = {
  data: MultiSelectOption[];
  placeholder?: string;
  onChange?: (values: string[]) => void;
  className?: string;
  label?: string;
};

const MultiSelect: React.FC<MultiSelectProps> = ({
  data,
  placeholder = "Select...",
  onChange,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggleOption = (value: string) => {
    const newSelected = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];

    setSelectedValues(newSelected);
    onChange?.(newSelected);
  };

  const clearAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedValues([]);
    onChange?.([]);
  };

  return (
    <div className={clsx("relative w-full", className)} ref={containerRef}>
      <div
        className="flex items-center justify-between gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 transition-colors min-h-[44px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2 flex-1 min-w-0">
          {selectedValues.length === 0 ? (
            <span className="text-gray-500 text-sm truncate">
              {placeholder}
            </span>
          ) : (
            <span className="text-gray-900 text-sm font-medium">
              {selectedValues.length} selected
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {selectedValues.length > 0 && (
            <button
              className="text-gray-400 hover:text-gray-600 text-xs font-medium transition-colors"
              onClick={clearAll}
            >
              Clear
            </button>
          )}
          <ChevronDown
            className={clsx(
              "w-4 h-4 text-gray-400 transition-transform",
              isOpen && "transform rotate-180",
            )}
          />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-[240px] overflow-y-auto">
          {data.length === 0 ? (
            <div className="px-4 py-3 text-sm text-gray-500">
              No options available
            </div>
          ) : (
            data.map((option) => {
              const isSelected = selectedValues.includes(option.value);
              return (
                <div
                  key={option.value}
                  className={clsx(
                    "flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors",
                    isSelected && "bg-blue-50",
                  )}
                  onClick={() => handleToggleOption(option.value)}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => {}}
                      className="w-4 h-4 text-[#0B0C7D] border-gray-300 rounded focus:ring-[#0B0C7D]"
                    />
                    <span className="text-sm text-gray-700">
                      {option.label}
                    </span>
                  </div>
                  {option.count !== undefined && (
                    <span className="text-xs text-gray-400">
                      ({option.count})
                    </span>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
