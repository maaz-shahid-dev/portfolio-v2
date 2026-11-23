import { motion } from "motion/react";
import type { PropsWithChildren } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: PropsWithChildren<{ delay?: number; className?: string }>) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
