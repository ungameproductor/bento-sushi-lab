import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useAppUI } from "../context/AppUI";

export function PaperIntro() {
  const reduce = useReducedMotion() === true;
  const { introPhase, skipIntro } = useAppUI();
  const skipRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (reduce || introPhase !== "intro") return;
    skipRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") skipIntro();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [introPhase, reduce, skipIntro]);

  if (reduce || introPhase !== "intro") return null;

  return (
    <div className="intro-overlay">
      <motion.div
        className="intro-panel intro-panel-top"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.25, ease: [0.76, 0.04, 0.18, 1], delay: 0.12 }}
        aria-hidden="true"
      />
      <motion.div
        className="intro-panel intro-panel-bottom"
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{ duration: 1.25, ease: [0.76, 0.04, 0.18, 1], delay: 0.12 }}
        aria-hidden="true"
      />
      <button ref={skipRef} type="button" className="intro-skip" onClick={skipIntro}>
        Salta introduzione
      </button>
    </div>
  );
}
