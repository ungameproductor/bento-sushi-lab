import { useEffect, useState } from "react";
import { Button } from "../components/Buttons";
import { MenuCard } from "../components/MenuCard";
import { PageHero } from "../components/PageHero";
import { Seo } from "../components/Seo";
import { Stagger, StaggerItem } from "../components/ScrollReveal";
import { citedPreparations, menuCategories, menuItems, type MenuCategoryId } from "../data/menu";
import { restaurant, webPageJsonLd } from "../data/restaurant";
import { useAppUI } from "../context/AppUI";

const description =
  "Le preparazioni di Bento Sushi Lab citate dagli ospiti e la struttura pronta per il menu ufficiale. Prezzi e allergeni si confermano in sala, a Brindisi.";

export default function MenuPage() {
  const { openReservation } = useAppUI();
  const [filter, setFilter] = useState<MenuCategoryId | "tutte">("tutte");
  const [spy, setSpy] = useState<MenuCategoryId>("antipasti");
  const real = menuItems.filter((item) => !item.placeholder);
  const drafts = menuItems.filter((item) => item.placeholder);
  const visibleDrafts =
    filter === "tutte" ? drafts : drafts.filter((item) => item.category === filter);
  const visibleReal = filter === "tutte" ? real : real.filter((item) => item.category === filter);

  useEffect(() => {
    if (filter !== "tutte") return;
    const nodes = menuCategories
      .map((category) => document.getElementById(`cat-${category.id}`))
      .filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visible?.target.id.replace("cat-", "");
        if (id) setSpy(id as MenuCategoryId);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0.25, 0.6] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [filter]);

  function choose(id: MenuCategoryId | "tutte") {
    setFilter(id);
    const target = document.getElementById(id === "tutte" ? "carta" : `cat-${id}`);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <article className="page">
      <Seo
        title="Menù | Bento Sushi Lab"
        description={description}
        path="/menu"
        jsonLd={webPageJsonLd("Menù | Bento Sushi Lab", description, "/menu")}
      />
      <PageHero
        kicker="La carta"
        title="Una selezione di sapori."
        lede="Il menu ufficiale non è ancora pubblicato online. Sotto trovi ciò che gli ospiti nominano e, a parte, le schede vuote pronte per i dati del ristorante."
      />

      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="section-wide">
          <h2>Preparazioni citate</h2>
          <p className="lede">
            Nessun prezzo, perché non è stato verificato. Per ordinare, la fonte resta la sala o il telefono.
          </p>
          <div className="cited-grid">
            {citedPreparations.map((item) => (
              <article key={item.id} className="cited-card">
                <h3>{item.name}</h3>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <nav className="chips" aria-label="Categorie del menu">
        <button
          type="button"
          className="chip"
          aria-pressed={filter === "tutte"}
          onClick={() => choose("tutte")}
        >
          Tutte
        </button>
        {menuCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`chip${filter === "tutte" && spy === category.id ? " is-spy" : ""}`}
            aria-current={filter === category.id ? "true" : undefined}
            onClick={() => choose(category.id)}
          >
            {category.label}
          </button>
        ))}
      </nav>

      <div id="carta" className="anchor" />

      {visibleReal.length > 0 && (
        <section className="section menu-block">
          <h2>In carta</h2>
          <Stagger className="menu-grid">
            {visibleReal.map((item) => (
              <StaggerItem key={item.id}>
                <MenuCard item={item} />
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      )}

      {visibleDrafts.length > 0 && (
        <section className="section menu-block" data-nosnippet="true">
          <h2>Struttura pronta per il menu ufficiale</h2>
          <p className="lede">
            Categorie di lavoro, non una carta confermata. Ogni scheda è una bozza: va compilata e solo allora
            perde il timbro.
          </p>
          {menuCategories
            .filter((category) => visibleDrafts.some((item) => item.category === category.id))
            .map((category) => (
              <div key={category.id} id={`cat-${category.id}`} className="anchor" style={{ marginTop: "2rem" }}>
                <h3>{category.label}</h3>
                <Stagger className="menu-grid">
                  {visibleDrafts
                    .filter((item) => item.category === category.id)
                    .map((item) => (
                      <StaggerItem key={item.id}>
                        <MenuCard item={item} />
                      </StaggerItem>
                    ))}
                </Stagger>
              </div>
            ))}
        </section>
      )}

      <section className="section">
        <div className="section-narrow">
          <h2>Allergeni</h2>
          <p>
            Per glutine, intolleranze e contaminazioni il riferimento è il ristorante. Questa pagina non sostituisce
            la comunicazione in sala.
          </p>
          <div className="visit-actions">
            <Button variant="vermilion" href={restaurant.phoneHref}>
              Chiedi la carta al telefono
            </Button>
            <Button onClick={openReservation}>Prenota un tavolo</Button>
          </div>
        </div>
      </section>
    </article>
  );
}
