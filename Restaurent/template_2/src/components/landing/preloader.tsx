"use client";

import { motion } from "framer-motion";

type PreloaderProps = {
  isVisible: boolean;
};

export function Preloader({ isVisible }: PreloaderProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
      aria-hidden={!isVisible}
    >
      <div className="relative flex flex-col items-center gap-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="font-serif text-3xl tracking-[0.35em] text-foreground md:text-4xl"
        >
          NOIR ET OR
        </motion.p>
        <div className="h-px w-44 overflow-hidden bg-white/15">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.8,
              ease: [0.83, 0, 0.17, 1],
            }}
            className="h-full w-24 bg-gradient-to-r from-transparent via-accent to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
}
