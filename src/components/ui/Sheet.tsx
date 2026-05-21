"use client"

import {cn} from "@/lib/utils"
import {AnimatePresence, motion} from "framer-motion"
import {X} from "lucide-react"
import {ReactNode} from "react"

interface SheetProps {
  children: ReactNode
}

export function Sheet({children}: SheetProps) {
  return <div className="relative">{children}</div>
}

interface SheetTriggerProps {
  children: ReactNode
  onClick?: () => void
}

export function SheetTrigger({children, onClick}: SheetTriggerProps) {
  return (
    <button onClick={onClick} className="cursor-pointer flex items-center justify-center">
      {children}
    </button>
  )
}

interface SheetContentProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  position?: "left" | "right" | "top" | "bottom"
}

export function SheetContent({
  isOpen,
  onClose,
  children,
  position = "right",
}: SheetContentProps) {
  const positionClasses = {
    left: "left-0 top-0 h-full w-72",
    right: "right-0 top-0 h-full w-72",
    top: "top-0 left-0 w-full h-64",
    bottom: "bottom-0 left-0 w-full h-64",
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 0.2}}
            exit={{opacity: 0}}
            transition={{duration: 0.3}}
            className="fixed inset-0 bg-[#0037FF] h-[100vh]"
            onClick={onClose}
          />
          <motion.div
            initial={{
              x:
                position === "right"
                  ? "100%"
                  : position === "left"
                  ? "-100%"
                  : 0,
              y:
                position === "top"
                  ? "-100%"
                  : position === "bottom"
                  ? "100%"
                  : 0,
            }}
            animate={{x: 0, y: 0}}
            exit={{
              x:
                position === "right"
                  ? "100%"
                  : position === "left"
                  ? "-100%"
                  : 0,
              y:
                position === "top"
                  ? "-100%"
                  : position === "bottom"
                  ? "100%"
                  : 0,
            }}
            transition={{duration: 0.3}}
            className={cn(
              "fixed bg-[#051438] z-60 shadow-lg p-4 rounded-lg",
              positionClasses[position]
            )}
            style={{height: "100vh"}}
          >
            <button className="absolute top-5 right-4" onClick={onClose}>
              <X className="w-6 h-6" color="white" />
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
