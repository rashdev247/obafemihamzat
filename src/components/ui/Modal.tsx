import {
  useEffect,
  useRef,
  createContext,
  useContext,
  ReactNode,
  FC,
} from "react"
import {createPortal} from "react-dom"
import {AnimatePresence, motion} from "framer-motion"
import clsx from "clsx"

// Modal Props
type ModalProps = {
  opened: boolean
  onClose: () => void
  children: ReactNode
  position?: "center" | "top" | "bottom" | "left" | "right"
  zIndex?: number
  lockScroll?: boolean
  withOverlay?: boolean
  size?: string // e.g., "90%", "70%", "40%"
  isMobile?: boolean;
}

type ModalSubComponent = FC<{children: ReactNode}> & {
  displayName?: string
}

const ModalContext = createContext<{onClose: () => void} | null>(null)

// Main Modal
export const Modal = ({
  opened,
  onClose,
  children,
  position = "center",
  zIndex = 1000,
  lockScroll = true,
  withOverlay = true,
  size = "90%", // Default to 90%
  isMobile,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const lastFocused = useRef<Element | null>(null)

  useEffect(() => {
    if (!opened) return
    lastFocused.current = document.activeElement

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (lockScroll) document.body.style.overflow = "hidden"
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      if (lockScroll) document.body.style.overflow = ""
      if (lastFocused.current && lastFocused.current instanceof HTMLElement) {
        lastFocused.current.focus()
      }
    }
  }, [opened, lockScroll, onClose])

  if (typeof window === "undefined") return null

  return createPortal(
    <AnimatePresence>
      {opened && (
        <ModalContext.Provider value={{onClose}}>
          <div
            className="fixed inset-0"
            style={{zIndex}}
            aria-modal="true"
            role="dialog"
          >
            {withOverlay && (
              <motion.div
                className="absolute inset-0 bg-black/50"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
              />
            )}

            <div
              className={clsx("fixed flex w-full h-full md:p-4", {
                "items-center justify-center": position === "center",
                "items-start justify-center pt-20": position === "top",
                "items-end justify-center pb-20": position === "bottom",
                "items-center justify-start pl-10": position === "left",
                "items-center justify-end pr-10": position === "right",
              })}
              onClick={e => {
                if (e.target === e.currentTarget) onClose()
              }}
            >
              <motion.div
                ref={modalRef}
                className="bg-white rounded-xl shadow-xl relative"
                style={{width: size, height: isMobile ? "100vh" : "90vh"}}
                initial={{scale: 0.95, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                exit={{scale: 0.95, opacity: 0}}
                transition={{duration: 0.2}}
              >
                {children}
              </motion.div>
            </div>
          </div>
        </ModalContext.Provider>
      )}
    </AnimatePresence>,
    document.body
  )
}

// Subcomponents
const ModalTitle: ModalSubComponent = ({children}) => (
  <h2 className="text-xl font-semibold p-4 pb-0">{children}</h2>
)
ModalTitle.displayName = "Modal.Title"

const ModalBody: ModalSubComponent = ({children}) => (
  <div className="p-4 pt-2">{children}</div>
)
ModalBody.displayName = "Modal.Body"

type ModalCloseButtonProps = {
  onClick: () => void
  className?: string
}

const ModalCloseButton: FC<ModalCloseButtonProps> = ({onClick, className}) => (
  <button
    onClick={onClick}
    aria-label="Close modal"
    className={clsx(
      "absolute top-3 right-3 text-gray-500 hover:text-black text-xl",
      className
    )}
  >
    &times;
  </button>
)
ModalCloseButton.displayName = "Modal.CloseButton"

const ModalContent: ModalSubComponent = ({children}) => (
  <div className="w-full">{children}</div>
)
ModalContent.displayName = "Modal.Content"

const ModalOverlay: ModalSubComponent = () => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
)
ModalOverlay.displayName = "Modal.Overlay"

// Hook (optional but useful)
export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) throw new Error("useModal must be used within a <Modal />")
  return context
}

// Assign subcomponents
Modal.Title = ModalTitle
Modal.Body = ModalBody
Modal.CloseButton = ModalCloseButton
Modal.Content = ModalContent
Modal.Overlay = ModalOverlay
