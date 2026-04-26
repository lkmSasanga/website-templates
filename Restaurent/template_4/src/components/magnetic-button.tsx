"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MouseEvent } from "react";

type MagneticButtonProps = {
  href: string;
  label: string;
};

export function MagneticButton({ href, label }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 18, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 280, damping: 18, mass: 0.5 });

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - bounds.left - bounds.width / 2;
    const offsetY = event.clientY - bounds.top - bounds.height / 2;
    x.set(offsetX * 0.3);
    y.set(offsetY * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ x: springX, y: springY }}>
      <Link
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="group flex h-44 w-44 items-center justify-center rounded-full border border-[#c76a2a] bg-[#111111]/80 text-white transition-all duration-300 hover:bg-[#c76a2a] hover:text-black"
      >
        <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em]">
          {label}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </motion.div>
  );
}
