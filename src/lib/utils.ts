import {clsx, type ClassValue} from "clsx"
import { Variants } from "framer-motion"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fadeInUp = {
  hidden: {opacity: 0, y: 40},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
} as Variants

export const containerStagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
} as Variants

export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
} as Variants

export const itemVariants = {
  hidden: {opacity: 0, y: 30, scale: 0.95},
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
} as Variants
export const itemVariantsTwo = {
  hidden: {opacity: 0, y: 30},
  visible: {opacity: 1, y: 0, transition: {duration: 0.4, ease: "easeOut"}},
  hover: {scale: 1.03, transition: {type: "spring", stiffness: 300}},
} as Variants
export type StatusColors = {
  [key: string]: { bg: string; color: string; text?: string; border?: string };
};
export const statusColors: StatusColors = {
  Basic: { bg: '#EFF1F4', color: '#3B3C3D', text: 'Basic' },
  Advanced: { bg: '#FFEEDB', color: '#D47400', text: 'Advanced' },
  Professional: { bg: '#E2F8EB ', color: '#34985F', text: 'Professional' },
  Institutional: { bg: '#E7E7FC ', color: '#343493', text: 'Institutional' },
  Organization: { bg: '#EFDBFF', color: '#A22CFF', text: 'Organization' },
  default: { bg: '#E2F8EB', color: '#27AE60' },
};