import { motion, useMotionValue, useSpring } from "motion/react";
import type { MouseEvent, ReactNode } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
  ariaLabel?: string;
};

export function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  type = "button",
  external,
  ariaLabel,
}: Props) {
  const reduced = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.2 });

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.18);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.18);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const shared = {
    className,
    onMouseMove: handleMove,
    onMouseLeave: reset,
    style: reduced ? undefined : { x: springX, y: springY },
    "aria-label": ariaLabel,
  };

  if (href) {
    return (
      <motion.a
        {...shared}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button {...shared} type={type} onClick={onClick}>
      {children}
    </motion.button>
  );
}
