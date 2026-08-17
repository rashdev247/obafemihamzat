import { motion, useReducedMotion } from "framer-motion";

type CampaignStat = {
  value: string;
  label: string;
  description: string;
};

type AnimatedStatCardProps = {
  stat: CampaignStat;
  index: number;
};

export default function AnimatedStatCard({
  stat,
  index,
}: AnimatedStatCardProps) {
  const shouldReduceMotion = useReducedMotion();

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
        aria-label={`${stat.value} ${stat.label}`}
        className="font-heading text-5xl font-black leading-none text-white tabular-nums [text-shadow:0_10px_30px_rgba(0,0,0,0.18)]"
      >
        {stat.value}
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
