import { termsSections } from "../data/legal";
import LegalDocument from "./LegalDocument";

export default function TermsPage() {
  return (
    <LegalDocument
      path="/termini"
      kicker="Condizioni"
      title="Termini e condizioni"
      lede="Bozza operativa: prenotazioni, menu e limiti di questa pagina. Le clausole giuridiche vanno inserite dal legale del ristorante."
      sections={termsSections}
    />
  );
}
