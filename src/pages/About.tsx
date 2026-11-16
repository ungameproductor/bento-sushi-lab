import { Button } from "../components/Buttons";
import { PageHero } from "../components/PageHero";
import { PhotoFrame } from "../components/PhotoFrame";
import { ScrollReveal } from "../components/ScrollReveal";
import { Seo } from "../components/Seo";
import { Cloud, Plum } from "../components/JapaneseIllustrations";
import { aboutShots } from "../data/gallery";
import { restaurant, webPageJsonLd } from "../data/restaurant";

const description =
  "Bento è un sushi lab raccolto nel centro di Brindisi: cena, asporto e una preparazione che gli ospiti descrivono con cura.";

const chapters = [
  {
    title: "Una sala raccolta",
    text: "Bento occupa un indirizzo nel centro di Brindisi, in Vico De' Palmieri. Chi ci ha cenato lo descrive come un locale piccolo, con servizio al tavolo e un’accoglienza diretta. Da qui nasce il consiglio, ricorrente nelle recensioni, di prenotare.",
    shot: aboutShots[0],
  },
  {
    title: "Il nome dice già il metodo",
    text: "Sushi Lab: cucina giapponese, sushi e pesce. Non pubblichiamo una storia di famiglia né un anno di apertura, perché non ci sono stati consegnati. Resta quello che gli ospiti riconoscono: attenzione alla preparazione.",
    shot: aboutShots[1],
  },
  {
    title: "Cena, e anche da portare via",
    text: "Si viene per la sera e si può ordinare da asporto. Il tavolo si conferma al telefono. Per allergeni e richieste particolari la risposta giusta è quella della cucina, non quella di una pagina.",
    shot: aboutShots[2],
  },
];

export default function About() {
  return (
    <article className="page">
      <Seo
        title="Chi siamo | Bento Sushi Lab"
        description={description}
        path="/chi-siamo"
        jsonLd={webPageJsonLd("Chi siamo | Bento Sushi Lab", description, "/chi-siamo")}
      />
      <PageHero
        kicker="Bento"
        title="Una passione che prende forma."
        lede="Un sushi lab nel centro di Brindisi. Pochi coperti, servizio al tavolo, asporto, e una cura della preparazione che ritorna nelle parole di chi prenota."
      />
      <div className="section" style={{ paddingTop: "1.5rem" }}>
        <div className="section-wide">
          {chapters.map((chapter, index) => (
            <ScrollReveal key={chapter.title}>
              <article className={`split ${index % 2 ? "reverse" : ""}`}>
                <PhotoFrame slot={chapter.shot} />
                <div className="split-copy">
                  <h2>{chapter.title}</h2>
                  <p>{chapter.text}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
          <div className="split">
            <Plum className="philosophy-mark" />
            <div>
              <h2>Lo spazio che resta vuoto, per ora</h2>
              <p>
                Questa pagina raccoglie solo ciò che è pubblico e verificabile. La storia del laboratorio, quando il
                ristorante vorrà raccontarla, avrà qui il suo spazio.
              </p>
              <Cloud className="philosophy-mark" />
            </div>
          </div>
          <div className="visit-actions">
            <Button variant="vermilion" to="/dove-siamo">
              Come arrivare
            </Button>
            <Button href={restaurant.phoneHref}>Chiama il ristorante</Button>
          </div>
        </div>
      </div>
    </article>
  );
}
