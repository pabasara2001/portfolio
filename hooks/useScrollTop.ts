"use client";

import { useEffect, useState } from "react";

/** Returns true once the page has scrolled past `threshold` px. Used for the back-to-top button and sticky nav background. */
export function usePastScrollThreshold(threshold = 400) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => setPast(window.scrollY > threshold);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return past;
}
