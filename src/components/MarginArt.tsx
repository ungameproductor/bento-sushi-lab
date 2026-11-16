import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useAppUI } from "../context/AppUI";
import { Bamboo, Cherry, Crane, Fuji, Pagoda, Wave } from "./JapaneseIllustrations";

export function MarginArt() {
  const reduce = useReducedMotion() === true;
  const { heroDelay } = useAppUI();
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 1800], [0, reduce ? 0 : -80]);
  const yFast = useTransform(scrollY, [0, 1800], [0, reduce ? 0 : 60]);
  const appear = reduce || heroDelay === 0 ? { opacity: 1 } : { opacity: 0 };

  return (
    <>
      <aside className="margin-art" aria-hidden="true">
        <motion.div style={{ y: ySlow }} initial={appear} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: heroDelay === 0 ? 0.1 : 1.05 }}>
          <Fuji />
        </motion.div>
        <motion.div style={{ y: yFast }} initial={appear} animate={{ opacity: 0.9 }} transition={{ duration: 0.8, delay: heroDelay === 0 ? 0.15 : 1.2 }}>
          <Cherry />
        </motion.div>
        <motion.div style={{ y: ySlow }} initial={appear} animate={{ opacity: 0.85 }} transition={{ duration: 0.8, delay: heroDelay === 0 ? 0.2 : 1.3 }}>
          <Crane />
        </motion.div>
      </aside>
    </>
  );
}

export function MarginArtRight() {
  const reduce = useReducedMotion() === true;
  const { heroDelay } = useAppUI();
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 1800], [0, reduce ? 0 : 70]);
  const yFast = useTransform(scrollY, [0, 1800], [0, reduce ? 0 : -50]);
  const appear = reduce || heroDelay === 0 ? { opacity: 1 } : { opacity: 0 };

  return (
    <aside className="margin-art" aria-hidden="true">
      <motion.div style={{ y: yFast }} initial={appear} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: heroDelay === 0 ? 0.1 : 1.1 }}>
        <Wave />
      </motion.div>
      <motion.div style={{ y: ySlow }} initial={appear} animate={{ opacity: 0.9 }} transition={{ duration: 0.8, delay: heroDelay === 0 ? 0.2 : 1.25 }}>
        <Bamboo />
      </motion.div>
      <motion.div style={{ y: yFast }} initial={appear} animate={{ opacity: 0.85 }} transition={{ duration: 0.8, delay: heroDelay === 0 ? 0.25 : 1.35 }}>
        <Pagoda />
      </motion.div>
    </aside>
  );
}
