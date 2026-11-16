import { Button } from "../components/Buttons";
import { MapEmbed } from "../components/MapEmbed";
import { PageHero } from "../components/PageHero";
import { Seo } from "../components/Seo";
import { useAppUI } from "../context/AppUI";
import {
  directionsUrl,
  hoursCopy,
  restaurant,
  restaurantJsonLd,
  webPageJsonLd,
} from "../data/restaurant";

const description =
  "Bento Sushi Lab è in Vico De' Palmieri 6/8, 72100 Brindisi. Telefono +39 338 135 4874. Gli orari si confermano chiamando.";

export default function LocationPage() {
  const { openReservation } = useAppUI();

  return (
    <article className="page">
      <Seo
        title="Dove siamo | Bento Sushi Lab"
        description={description}
        path="/dove-siamo"
        jsonLd={[
          restaurantJsonLd(),
          webPageJsonLd("Dove siamo | Bento Sushi Lab", description, "/dove-siamo"),
        ]}
      />
      <PageHero
        kicker="Brindisi"
        title="Ci trovi a Brindisi."
        lede="Nel centro, in Vico De' Palmieri. Le schede pubbliche lo collocano nei pressi della chiesa di Santa Lucia."
      />
      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="section-wide visit-grid">
          <div>
            <h2>Indirizzo</h2>
            <p>
              Bento Sushi Lab
              <br />
              {restaurant.street}
              <br />
              {restaurant.postalCode} {restaurant.city} ({restaurant.province})
              <br />
              {restaurant.country}
            </p>
            <p>
              <a className="text-link" href={restaurant.phoneHref}>
                {restaurant.phoneDisplay}
              </a>
            </p>
            <h2 style={{ marginTop: "1.6rem" }}>{hoursCopy.title}</h2>
            <p>{hoursCopy.text}</p>
            <p className="quiet">{hoursCopy.hint}</p>
            <h2 style={{ marginTop: "1.6rem" }}>Prenotazioni</h2>
            <p>
              Si consiglia di prenotare, soprattutto per la cena. La conferma è telefonica. L’asporto si concorda
              allo stesso numero.
            </p>
            <div className="visit-actions">
              <Button variant="vermilion" onClick={openReservation}>
                Prenota un tavolo
              </Button>
              <Button href={directionsUrl}>Apri navigazione</Button>
              <Button href={restaurant.phoneHref}>Chiama</Button>
            </div>
            <nav className="visit-actions" aria-label="Profili ufficiali">
              <a className="text-link" href={restaurant.socials.instagram} target="_blank" rel="noreferrer noopener">
                Instagram
              </a>
              <a className="text-link" href={restaurant.socials.facebook} target="_blank" rel="noreferrer noopener">
                Facebook
              </a>
              <a className="text-link" href={restaurant.socials.tripadvisor} target="_blank" rel="noreferrer noopener">
                Tripadvisor
              </a>
            </nav>
          </div>
          <MapEmbed />
        </div>
      </section>
    </article>
  );
}
