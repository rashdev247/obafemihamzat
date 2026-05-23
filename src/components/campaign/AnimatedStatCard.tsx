import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type CampaignStat = {
  value: string;
  label: string;
  description: string;
};

type AnimatedStatCardProps = {
  stat: CampaignStat;
  index: number;
};

function parseCounterValue(value: string) {
  const match = value.match(/^(\D*)(\d+)(.*)$/);

  if (!match) {
    return {
      isNumeric: false,
      prefix: "",
      suffix: value,
      target: 0,
    };
  }

  return {
    isNumeric: true,
    prefix: match[1] ?? "",
    suffix: match[3] ?? "",
    target: Number(match[2]),
  };
}

export default function AnimatedStatCard({
  stat,
  index,
}: AnimatedStatCardProps) {
  const counterRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(counterRef, {
    margin: "-80px",
    once: true,
  });
  const shouldReduceMotion = useReducedMotion();
  const parsedValue = useMemo(() => parseCounterValue(stat.value), [stat.value]);
  const [displayValue, setDisplayValue] = useState(
    shouldReduceMotion || !parsedValue.isNumeric ? parsedValue.target : 0,
  );

  useEffect(() => {
    if (!parsedValue.isNumeric || !isInView) return;

    if (shouldReduceMotion) {
      setDisplayValue(parsedValue.target);
      return;
    }

    const controls = animate(0, parsedValue.target, {
      duration: 1.35 + index * 0.12,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [
    index,
    isInView,
    parsedValue.isNumeric,
    parsedValue.target,
    shouldReduceMotion,
  ]);

  const value = parsedValue.isNumeric
    ? `${parsedValue.prefix}${displayValue}${parsedValue.suffix}`
    : stat.value;

  return (
    <motion.article
      className="stats-glass-card rounded-card p-6 md:p-7"
      initial={{ opacity: 0, y: 22, scale: 0.97 }}
      transition={{
        delay: index * 0.07,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ margin: "-80px", once: true }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              scale: 1.015,
              y: -6,
            }
      }
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
    >
      <p
        ref={counterRef}
        aria-label={`${stat.value} ${stat.label}`}
        className="font-heading text-5xl font-black leading-none text-white tabular-nums [text-shadow:0_10px_30px_rgba(0,0,0,0.18)]"
      >
        {value}
      </p>
      <p className="mt-5 font-heading text-xl font-black text-white">
        {stat.label}
      </p>
      <p className="mt-4 text-sm leading-7 text-white/76">
        {stat.description}
      </p>
    </motion.article>
  );
}
