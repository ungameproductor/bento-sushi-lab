import { useEffect, useState } from "react";
import type { PhotoSlot } from "../data/gallery";
import { useScrollLock } from "../hooks/useScrollLock";

type Props = {
  slot: PhotoSlot;
  className?: string;
  tall?: boolean;
  quiet?: boolean;
};

export function PhotoFrame({ slot, className = "", tall = false, quiet = false }: Props) {
  const [failed, setFailed] = useState(false);
  const [open, setOpen] = useState(false);
  const showImage = Boolean(slot.src) && !failed;
  useScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <figure className={`photo-frame ${className}`}>
      <div className="photo-frame-inner" style={tall ? { minHeight: "100%" } : undefined}>
        {showImage ? (
          <img
            src={slot.src ?? undefined}
            alt={slot.alt}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
          />
        ) : (
          <InkWash />
        )}
        {!showImage && !quiet && <p className="photo-waiting">Fotografia da inserire</p>}
        {showImage && (
          <button type="button" className="btn photo-open" onClick={() => setOpen(true)}>
            Ingrandisci
          </button>
        )}
      </div>
      <figcaption className="photo-caption">{slot.caption}</figcaption>
      {open && showImage && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={slot.alt}
          onClick={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <button type="button" className="icon-btn" onClick={() => setOpen(false)} aria-label="Chiudi">
            ×
          </button>
          <img src={slot.src ?? undefined} alt={slot.alt} />
        </div>
      )}
    </figure>
  );
}

function InkWash() {
  return (
    <svg className="ink-wash" viewBox="0 0 400 520" aria-hidden="true">
      <ellipse cx="210" cy="210" rx="130" ry="90" fill="currentColor" opacity="0.08" />
      <ellipse cx="250" cy="280" rx="80" ry="54" fill="currentColor" opacity="0.06" />
      <path d="M40 430c80-70 150 20 320-40" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
      <path d="M70 120c40 20 50 48 18 62" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}
