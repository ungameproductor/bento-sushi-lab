import { Button } from "../components/Buttons";
import { Seo } from "../components/Seo";

export default function NotFound() {
  return (
    <article className="page-hero">
      <Seo
        noindex
        title="Pagina non trovata | Bento Sushi Lab"
        description="La pagina richiesta non esiste sul sito di Bento Sushi Lab."
        path="/404"
      />
      <p className="kicker">404</p>
      <h1>Questa pagina non è sul rotolo.</h1>
      <p className="lede">Il collegamento non corrisponde a una pagina di Bento Sushi Lab.</p>
      <div className="visit-actions">
        <Button variant="vermilion" to="/">
          Torna all’inizio
        </Button>
        <Button to="/dove-siamo">Dove siamo</Button>
      </div>
    </article>
  );
}
