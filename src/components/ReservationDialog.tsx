import { X } from "lucide-react";
import { useRef, useState } from "react";
import { restaurant } from "../data/restaurant";
import { useAppUI } from "../context/AppUI";
import { useFocusTrap } from "../hooks/useFocusTrap";
import { useScrollLock } from "../hooks/useScrollLock";
import { Button } from "./Buttons";

type Draft = {
  name: string;
  date: string;
  time: string;
  people: string;
  notes: string;
};

const empty: Draft = { name: "", date: "", time: "", people: "2", notes: "" };

export function ReservationDialog() {
  const { reservationOpen, closeReservation } = useAppUI();
  const [draft, setDraft] = useState<Draft>(empty);
  const [preview, setPreview] = useState("");
  const [copied, setCopied] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useScrollLock(reservationOpen);
  useFocusTrap(reservationOpen, dialogRef);

  if (!reservationOpen) return null;

  function reminder() {
    return [
      "Prenotazione Bento Sushi Lab",
      draft.name && `Nome: ${draft.name}`,
      draft.date && `Data: ${draft.date}`,
      draft.time && `Ora: ${draft.time}`,
      `Persone: ${draft.people}`,
      draft.notes && `Note: ${draft.notes}`,
      `Da confermare telefonicamente al ${restaurant.phoneDisplay}.`,
    ]
      .filter(Boolean)
      .join("\n");
  }

  async function copyReminder() {
    const text = reminder();
    setPreview(text);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="dialog-backdrop" onClick={closeReservation}>
      <div
        className="dialog"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="reservation-title"
        onClick={(event) => event.stopPropagation()}
        onKeyDown={(event) => {
          if (event.key === "Escape") closeReservation();
        }}
      >
        <div className="dialog-head">
          <h2 id="reservation-title">Prenota un tavolo</h2>
          <button type="button" className="icon-btn" onClick={closeReservation} aria-label="Chiudi">
            <X aria-hidden="true" />
          </button>
        </div>
        <p>
          La prenotazione si conferma solo al telefono. Il modulo prepara un promemoria da leggere durante la
          chiamata e non invia nulla.
        </p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            void copyReminder();
          }}
        >
          <label className="field">
            <span>Nome</span>
            <input
              value={draft.name}
              onChange={(event) => setDraft({ ...draft, name: event.target.value })}
              autoComplete="name"
            />
          </label>
          <label className="field">
            <span>Data</span>
            <input
              type="date"
              value={draft.date}
              onChange={(event) => setDraft({ ...draft, date: event.target.value })}
            />
          </label>
          <label className="field">
            <span>Ora</span>
            <input
              type="time"
              value={draft.time}
              onChange={(event) => setDraft({ ...draft, time: event.target.value })}
            />
          </label>
          <label className="field">
            <span>Persone</span>
            <select
              value={draft.people}
              onChange={(event) => setDraft({ ...draft, people: event.target.value })}
            >
              {Array.from({ length: 10 }, (_, index) => String(index + 1)).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Note</span>
            <textarea
              value={draft.notes}
              onChange={(event) => setDraft({ ...draft, notes: event.target.value })}
            />
          </label>
          <div className="dialog-actions">
            <Button variant="vermilion" href={restaurant.phoneHref}>
              Chiama {restaurant.phoneDisplay}
            </Button>
            <Button type="submit">Copia promemoria</Button>
          </div>
        </form>
        {preview && (
          <p className="reminder" role="status">
            {copied ? "Promemoria copiato." : "Copia non riuscita: tieni questo testo a portata di mano."}
            {"\n"}
            {preview}
          </p>
        )}
      </div>
    </div>
  );
}
