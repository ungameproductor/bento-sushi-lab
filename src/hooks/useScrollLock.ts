import { useEffect } from "react";

export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const count = Number(document.body.dataset.lock ?? "0") + 1;
    document.body.dataset.lock = String(count);
    document.body.style.overflow = "hidden";
    return () => {
      const next = Number(document.body.dataset.lock ?? "1") - 1;
      if (next <= 0) {
        delete document.body.dataset.lock;
        document.body.style.overflow = "";
      } else {
        document.body.dataset.lock = String(next);
      }
    };
  }, [locked]);
}
