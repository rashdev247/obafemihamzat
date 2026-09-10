import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type PulsePageLoaderProps = {
  label?: string;
  tone?: "light" | "dark";
  className?: string;
};

export default function PulsePageLoader({
  label = "Loading page content",
  tone = "light",
  className = "",
}: PulsePageLoaderProps) {
  const shouldReduceMotion = useReducedMotion();
  const isDark = tone === "dark";

  return (
    <div
      aria-live="polite"
      role="status"
      className={`flex min-h-[320px] items-center justify-center px-6 py-12 ${className}`}
    >
      <motion.div
        animate={
          shouldReduceMotion
            ? { opacity: 1, scale: 1 }
            : {
                opacity: [0.78, 1, 0.78],
                scale: [0.96, 1.06, 0.96],
              }
        }
        className={`relative flex h-28 w-28 items-center justify-center rounded-card border p-4 shadow-[0_22px_60px_rgba(7,47,107,0.14)] ${
          isDark
            ? "border-white/18 bg-white/10 backdrop-blur-xl"
            : "border-[rgba(6,59,46,0.12)] bg-white"
        }`}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: 1.35,
                ease: "easeInOut",
                repeat: Infinity,
              }
        }
      >
        {!shouldReduceMotion && (
          <motion.span
            aria-hidden="true"
            animate={{
              opacity: [0.42, 0],
              scale: [1, 1.48],
            }}
            className={`absolute inset-0 rounded-card border ${
              isDark ? "border-secondary-400/50" : "border-secondary-500/45"
            }`}
            transition={{
              duration: 1.35,
              ease: "easeOut",
              repeat: Infinity,
            }}
          />
        )}
        <Image
          src="/logo-loader.png"
          alt=""
          width={84}
          height={84}
          sizes="84px"
          className="relative z-10 h-20 w-20 object-contain"
        />
      </motion.div>
      <span className="sr-only">{label}</span>
    </div>
  );
}
