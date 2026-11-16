import { useEffect, useState } from "react";
import type { MenuItem } from "../data/menu";
import { useScrollLock } from "../hooks/useScrollLock";

function missing(value: string | null, placeholder: boolean) {
  if (value) return value;
  return placeholder ? "Da inserire" : "Non indicato: chiedere al ristorante";
}

export function MenuCard({ item }: { item: MenuItem }) {
  const [open, setOpen] = useState(false);
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(item.image) && !failed;
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
    <article className="menu-card">
      {item.placeholder && <p className="draft-stamp">Bozza</p>}
      <div className="photo-frame-inner" style={{ minHeight: "11rem", position: "relative" }}>
        {showImage ? (
          <img
            src={item.image ?? undefined}
            alt={item.imageAlt ?? item.name}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
          />
        ) : (
          <p className="photo-waiting">Fotografia da inserire</p>
        )}
      </div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <dl className="meta-list">
        <div>
          <dt>Prezzo</dt>
          <dd>{missing(item.price, item.placeholder)}</dd>
        </div>
        <div>
          <dt>Ingredienti</dt>
          <dd>{missing(item.ingredients, item.placeholder)}</dd>
        </div>
        <div>
          <dt>Allergeni</dt>
          <dd>{missing(item.allergens, item.placeholder)}</dd>
        </div>
      </dl>
      {showImage && (
        <button type="button" className="btn" onClick={() => setOpen(true)}>
          Ingrandisci la fotografia
        </button>
      )}
      {open && showImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.imageAlt ?? item.name}>
          <button type="button" className="icon-btn" onClick={() => setOpen(false)} aria-label="Chiudi">
            ×
          </button>
          <img src={item.image ?? undefined} alt={item.imageAlt ?? item.name} />
        </div>
      )}
    </article>
  );
}
