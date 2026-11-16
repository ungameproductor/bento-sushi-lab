import { Accordion } from "../components/Accordion";
import { Button } from "../components/Buttons";
import { PageHero } from "../components/PageHero";
import { Seo } from "../components/Seo";
import { faqs } from "../data/faqs";
import { restaurant, webPageJsonLd } from "../data/restaurant";

const description =
  "Prenotazioni, asporto, indirizzo e allergeni di Bento Sushi Lab a Brindisi. Le risposte usano solo informazioni confermate.";

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <article className="page">
      <Seo
        title="FAQ | Bento Sushi Lab"
        description={description}
        path="/faq"
        jsonLd={[jsonLd, webPageJsonLd("FAQ | Bento Sushi Lab", description, "/faq")]}
      />
      <PageHero
        kicker="Domande"
        title="Prima di sederti a tavola."
        lede="Risposte brevi, legate a ciò che è pubblico. Se manca un dettaglio, il telefono del ristorante è la fonte giusta."
      />
      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="section-narrow">
          <div className="faq-list">
            {faqs.map((faq) => (
              <Accordion key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="notice" style={{ margin: "2rem 0 0" }}>
            <strong>Allergeni e contaminazioni</strong>
            <p>
              Vanno sempre chiesti al ristorante, prima di ordinare. Il sito non è una dichiarazione su glutine,
              intolleranze o cucine separate.
            </p>
          </div>
          <div className="visit-actions">
            <Button variant="vermilion" href={restaurant.phoneHref}>
              Chiama {restaurant.phoneDisplay}
            </Button>
            <Button to="/menu">Vai al menù</Button>
          </div>
        </div>
      </section>
    </article>
  );
}
