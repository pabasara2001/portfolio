"use client";

import { motion } from "framer-motion";

interface PulseLineProps {
  className?: string;
}

/**
 * Signature motif: a single continuous line that reads as an ECG trace on the
 * left and resolves into a `< />` code bracket on the right — the visual
 * thesis of the whole site (health informatics + software engineering).
 */
export function PulseLine({ className }: PulseLineProps) {
  const path =
    "M0,60 L60,60 L80,60 L95,15 L115,105 L130,60 L150,60 L165,40 L180,60 L260,60 " +
    "L280,30 L300,90 L315,60 L400,60 L420,45 L432,45 L444,75 L456,75 L468,60 L560,60 " +
    "L580,20 L592,100 L604,60 L680,60 L700,40 L712,80 L724,60 L800,60";

  return (
    <svg
      viewBox="0 0 800 120"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <motion.path
        d={path}
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: "easeInOut" }}
      ></motion.path>
      <motion.circle
        r={4}
        fill="currentColor"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3.2, ease: "linear", repeat: Infinity, repeatDelay: 0.6 }}
        style={{ offsetPath: `path("${path}")`, offsetDistance: "100%" }}
      ></motion.circle>
    </svg>
  );
}
