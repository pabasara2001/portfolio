"use client";

import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

/** Ambient hero backdrop: soft gradient wash, floating shapes, and a glow that follows the cursor. */
export function HeroBackground() {
  const { x, y } = useMousePosition();

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* base gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,194,168,0.16),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_90%_20%,rgba(255,176,32,0.08),transparent)]" />

      {/* cursor glow — desktop only via CSS media handled by parent, harmless on touch */}
      <motion.div
        className="absolute h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl"
        animate={{ x: x - 210, y: y - 210 }}
        transition={{ type: "spring", damping: 30, stiffness: 60, mass: 0.6 }}
      />

      {/* floating shapes */}
      <motion.div
        className="absolute left-[8%] top-[18%] h-40 w-40 rounded-[2rem] border border-accent/20 bg-accent/5 backdrop-blur-sm"
        animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[10%] top-[30%] h-24 w-24 rounded-full border border-amber/25 bg-amber/5"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[12%] left-[18%] h-16 w-16 rotate-45 border border-border bg-card/40"
        animate={{ rotate: [45, 65, 45], y: [0, -12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* fine grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
    </div>
  );
}
