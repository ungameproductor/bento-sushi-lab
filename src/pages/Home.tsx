import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { heroContainer, heroItem } from "../animations/motion";
import { Button } from "../components/Buttons";
import { Divider } from "../components/Divider";
import { MapEmbed } from "../components/MapEmbed";
import { PhotoFrame } from "../components/PhotoFrame";
import { ScrollReveal, Stagger, StaggerItem } from "../components/ScrollReveal";
import { Seo } from "../components/Seo";
import { Cherry, Crane, Wave } from "../components/JapaneseIllustrations";
import { useAppUI } from "../context/AppUI";
import { experienceShots, instagramSlots } from "../data/gallery";
import { citedPreparations } from "../data/menu";
import {
  directionsUrl,
  hoursCopy,
  identityBlocks,
  philosophy,
  restaurant,
  restaurantJsonLd,
  webPageJsonLd,
} from "../data/restaurant";
import { reviews } from "../data/reviews";

const description =
  "Bento Sushi Lab, cucina giapponese nel centro di Brindisi. Vico De' Palmieri 6/8. Prenotazioni e asporto al +39 338 135 4874.";

export default function Home() {
  return (
    <>
      <Seo
        title="Bento Sushi Lab | L'arte del sushi a Brindisi"
        description={description}
        path="/"
        jsonLd={[
          restaurantJsonLd(),
          webPageJsonLd("Bento Sushi Lab", description, "/"),
        ]}
      />
      <Hero />
      <Divider />
      <Philosophy />
      <Divider />
      <Experience />
      <Divider />
      <Selection />
      <Divider />
      <Identity />
      <Divider />
      <Reviews />
      <Divider />
      <Instagram />
      <Divider />
      <Visit />
    </>
  );
}

function Hero() {
  const reduce = useReducedMotion() === true;
  const { heroDelay, openReservation } = useAppUI();
  const controls = useAnimation();

  useEffect(() => {
    if (reduce || heroDelay === 0) {
      void controls.set("show");
      return;
    }
    const timeout = window.setTimeout(() => {
      void controls.start("show");
    }, heroDelay);
    return () => window.clearTimeout(timeout);
  }, [controls, heroDelay, reduce]);

  return (
    <header className="hero">
      <p className="vertical-label">寿司研究室</p>
      <Cherry className="hero-art hero-art-left" />
      <Wave className="hero-art hero-art-right" />
      <motion.div
        className="hero-copy"
        variants={heroContainer}
        initial={reduce || heroDelay === 0 ? "show" : "hidden"}
        animate={controls}
      >
        <motion.p className="hero-kanji" variants={heroItem} aria-hidden="true">
          弁当
        </motion.p>
        <motion.h1 className="display" variants={heroItem}>
          Bento
        </motion.h1>
        <motion.p className="eyebrow" variants={heroItem}>
          Japanese Sushi Lab
        </motion.p>
        <motion.p className="claim" variants={heroItem}>
          {restaurant.claim}
        </motion.p>
        <motion.div className="hero-actions" variants={heroItem}>
          <Button variant="vermilion" to="/menu">
            Scopri il menù
          </Button>
          <Button onClick={openReservation}>Prenota un tavolo</Button>
        </motion.div>
        <motion.p className="hero-meta" variants={heroItem}>
          {restaurant.street} · {restaurant.city}
        </motion.p>
      </motion.div>
    </header>
  );
}

function Philosophy() {
  return (
    <section className="section" id="filosofia">
      <div className="section-wide philosophy">
        <ScrollReveal>
          <div className="center-left center">
            <p className="kicker">La filosofia</p>
            <h2>
              <span className="kanji-title">{philosophy.kanji}</span>
              {" — "}
              {philosophy.title}
            </h2>
            <p className="lede">{philosophy.text}</p>
            <p className="quiet">{philosophy.note}</p>
          </div>
        </ScrollReveal>
        <Crane className="philosophy-mark" />
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="esperienza">
      <div className="section-wide">
        <ScrollReveal>
          <p className="kicker">Sushi Lab</p>
          <h2>Il sushi prende forma.</h2>
          <p className="lede">
            Queste cornici aspettano le fotografie del laboratorio: piatti, mani, banco. Finché non arrivano,
            autorizzate, il sito non le sostituisce con immagini di altri locali.
          </p>
        </ScrollReveal>
        <div className="collage">
          <PhotoFrame slot={experienceShots[0]} className="tall" tall />
          <PhotoFrame slot={experienceShots[1]} />
          <blockquote className="collage-quote">
            <p>«Il miglior sushi di Brindisi.»</p>
            <footer>Simone Iaia · Google</footer>
          </blockquote>
        </div>
        <div style={{ marginTop: "0.85rem" }}>
          <PhotoFrame slot={experienceShots[2]} />
        </div>
      </div>
    </section>
  );
}

function Selection() {
  return (
    <section className="section" id="sapori">
      <div className="section-wide">
        <ScrollReveal>
          <p className="kicker">Dal racconto degli ospiti</p>
          <h2>Una selezione di sapori.</h2>
          <p className="lede">
            La carta completa, con prezzi e ingredienti, si legge in sala. Qui ci sono le preparazioni che
            ritornano nelle recensioni pubbliche: non un listino.
          </p>
        </ScrollReveal>
        <Stagger className="cited-grid">
          {citedPreparations.map((item) => (
            <StaggerItem key={item.id}>
              <article className="cited-card">
                <h3>{item.name}</h3>
                <p>{item.note}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
        <div className="section-cta">
          <Button variant="vermilion" to="/menu">
            Esplora il menù completo
          </Button>
        </div>
      </div>
    </section>
  );
}

function Identity() {
  return (
    <section className="section" id="identita">
      <div className="section-narrow">
        <ScrollReveal>
          <p className="kicker">Il locale</p>
          <h2>Ogni dettaglio ha il suo significato.</h2>
        </ScrollReveal>
        {identityBlocks.map((block) => (
          <ScrollReveal key={block.title}>
            <article className="split" style={{ gridTemplateColumns: "1fr" }}>
              <div>
                <h3>{block.title}</h3>
                <p>{block.text}</p>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="section" id="recensioni">
      <div className="section-wide">
        <ScrollReveal>
          <p className="kicker">Voci pubbliche</p>
          <h2>Le parole di chi ci ha scelto.</h2>
          <p className="rating-line">
            {restaurant.rating.value.toLocaleString("it-IT")}/5
            <span>
              {restaurant.rating.count} recensioni su {restaurant.rating.platform}
            </span>
          </p>
          <p className="quiet">
            Estratti fedeli alle fonti, con la traduzione quando il testo originale è in inglese. La raccolta
            intera, nel bene e nel meno bene, resta su Tripadvisor.
          </p>
        </ScrollReveal>
        <Stagger className="quotes">
          {reviews.map((review) => (
            <StaggerItem key={review.id}>
              <blockquote className="quote">
                <p>«{review.original}»</p>
                {review.translation && (
                  <p className="translation">
                    <span className="sr-only">Traduzione. </span>
                    {review.translation}
                  </p>
                )}
                <footer>
                  <cite>{review.author}</cite>
                  {" · "}
                  {review.platform}
                  {review.context ? ` · ${review.context}` : ""}
                  {" · "}
                  {review.date}
                  {" · "}
                  <a href={review.href} target="_blank" rel="noreferrer noopener">
                    Fonte
                  </a>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </Stagger>
        <div className="section-cta">
          <Button href={restaurant.socials.tripadvisor}>Leggi su Tripadvisor</Button>
        </div>
      </div>
    </section>
  );
}

function Instagram() {
  return (
    <section className="section" id="instagram">
      <div className="section-wide">
        <ScrollReveal>
          <p className="kicker">{restaurant.socials.instagramHandle}</p>
          <h2>Segui il nostro mondo.</h2>
          <p className="lede">
            Il racconto fotografico vive sul profilo ufficiale. Questa griglia è pronta ad accogliere gli scatti,
            quando il ristorante ne autorizza la pubblicazione.
          </p>
        </ScrollReveal>
        <div className="ig-grid">
          {instagramSlots.map((slot) => (
            <PhotoFrame key={slot.id} slot={slot} quiet />
          ))}
        </div>
        <div className="section-cta">
          <Button variant="vermilion" href={restaurant.socials.instagram}>
            Apri Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="section" id="visita">
      <div className="section-wide">
        <ScrollReveal>
          <p className="kicker">Brindisi</p>
          <h2>Ci trovi a Brindisi.</h2>
        </ScrollReveal>
        <div className="visit-grid">
          <div>
            <p>
              {restaurant.street}
              <br />
              {restaurant.postalCode} {restaurant.city} ({restaurant.province})
              <br />
              {restaurant.country}
            </p>
            <ul className="visit-list">
              <li>
                <a href={restaurant.phoneHref}>{restaurant.phoneDisplay}</a>
              </li>
              <li>
                <strong>{hoursCopy.title}. </strong>
                {hoursCopy.text}
              </li>
            </ul>
            <p className="quiet">{hoursCopy.hint}</p>
            <div className="visit-actions">
              <Button variant="vermilion" href={directionsUrl}>
                Indicazioni
              </Button>
              <Button href={restaurant.phoneHref}>Contatta il ristorante</Button>
            </div>
          </div>
          <MapEmbed />
        </div>
      </div>
    </section>
  );
}
