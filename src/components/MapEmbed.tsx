import { osmEmbedUrl, osmUrl } from "../data/restaurant";
import { useAppUI } from "../context/AppUI";
import { Button } from "./Buttons";

export function MapEmbed() {
  const { consent, setMaps } = useAppUI();
  const allowed = consent?.maps === true;

  if (!allowed) {
    return (
      <div className="map-locked">
        <p>
          La mappa è un contenuto di OpenStreetMap. Resta ferma finché non chiedi di vederla: aprirla contatta i
          loro server.
        </p>
        <div className="visit-actions">
          <Button variant="vermilion" onClick={() => setMaps(true)}>
            Mostra la mappa
          </Button>
          <Button href={osmUrl}>Apri OpenStreetMap</Button>
        </div>
      </div>
    );
  }

  return (
    <iframe
      className="map-frame"
      title="Mappa di Bento Sushi Lab, Vico De' Palmieri, Brindisi"
      src={osmEmbedUrl}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
