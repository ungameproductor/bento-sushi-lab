import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAppUI } from "../context/AppUI";
import { useFocusTrap } from "../hooks/useFocusTrap";
import { useScrollLock } from "../hooks/useScrollLock";
import { Button } from "./Buttons";

export function CookieConsent() {
  const {
    consent,
    introPhase,
    acceptAll,
    rejectAll,
    setMaps,
    preferencesOpen,
    openPreferences,
    closePreferences,
  } = useAppUI();
  const [maps, setMapsChoice] = useState(consent?.maps ?? false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (preferencesOpen) setMapsChoice(consent?.maps ?? false);
  }, [consent, preferencesOpen]);
  const showBanner = consent === null && introPhase === "done" && !preferencesOpen;

  useScrollLock(preferencesOpen);
  useFocusTrap(preferencesOpen, dialogRef);

  if (introPhase !== "done") return null;

  return (
    <>
      {showBanner && (
        <div className="cookie-bar" role="dialog" aria-label="Consenso cookie">
          <p>
            Memorizziamo solo la tua scelta. La mappa di OpenStreetMap, un servizio di terzi, parte se la
            accetti.{" "}
            <Link to="/cookie">Come funziona</Link>
          </p>
          <div className="cookie-actions">
            <Button variant="vermilion" onClick={acceptAll}>
              Accetta tutti
            </Button>
            <Button onClick={rejectAll}>Rifiuta tutti</Button>
            <Button onClick={openPreferences}>Personalizza</Button>
          </div>
        </div>
      )}
      {preferencesOpen && (
        <div className="dialog-backdrop" onClick={closePreferences}>
          <div
            className="dialog"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-title"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 id="cookie-title">Preferenze</h2>
            <p className="quiet">
              Il sito non carica statistiche né pubblicità. Puoi cambiare idea quando vuoi dal piè di pagina.
            </p>
            <div className="toggle">
              <div>
                <strong>Tecnici</strong>
                <p>Sempre attivi. Ricordano questa scelta in questo browser.</p>
              </div>
              <span>Attivi</span>
            </div>
            <div className="toggle">
              <div>
                <strong>Mappe</strong>
                <p>Carica OpenStreetMap nelle pagine in cui compare la mappa.</p>
              </div>
              <label>
                <span className="sr-only">Consenti le mappe</span>
                <input
                  type="checkbox"
                  checked={maps}
                  onChange={(event) => setMapsChoice(event.target.checked)}
                />
              </label>
            </div>
            <div className="dialog-actions">
              <Button variant="vermilion" onClick={() => setMaps(maps)}>
                Salva scelta
              </Button>
              <Button onClick={closePreferences}>Chiudi</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
