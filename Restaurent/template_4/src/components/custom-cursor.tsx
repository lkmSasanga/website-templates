"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 420, damping: 34, mass: 0.45 });
  const springY = useSpring(cursorY, { stiffness: 420, damping: 34, mass: 0.45 });

  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      setIsVisible(true);
    };

    const handleOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setIsPointer(Boolean(target?.closest("a, button, [data-cursor='hover']")));
    };

    const handleLeaveWindow = () => setIsVisible(false);
    const handleEnterWindow = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleLeaveWindow);
    window.addEventListener("mouseenter", handleEnterWindow);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleLeaveWindow);
      window.removeEventListener("mouseenter", handleEnterWindow);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-100 hidden md:block"
      style={{
        x: springX,
        y: springY,
      }}
      animate={{
        width: isPointer ? 56 : 10,
        height: isPointer ? 56 : 10,
        marginLeft: isPointer ? -28 : -5,
        marginTop: isPointer ? -28 : -5,
        borderWidth: isPointer ? 1 : 0,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 420, damping: 30, mass: 0.4 }}
    >
      <div
        className={`h-full w-full rounded-full ${
          isPointer ? "border border-[#c76a2a] bg-transparent" : "bg-white"
        }`}
      />
    </motion.div>
  );
}
