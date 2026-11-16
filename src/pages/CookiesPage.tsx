import { cookieSections } from "../data/legal";
import LegalDocument from "./LegalDocument";

export default function CookiesPage() {
  return (
    <LegalDocument
      path="/cookie"
      kicker="Consenso"
      title="Cookie Policy"
      lede="Come è costruita la scelta che vedi sul sito. Il testo legale definitivo va approvato insieme alla privacy."
      sections={cookieSections}
    />
  );
}
