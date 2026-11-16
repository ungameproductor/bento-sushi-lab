import { privacySections } from "../data/legal";
import LegalDocument from "./LegalDocument";

export default function PrivacyPage() {
  return (
    <LegalDocument
      path="/privacy"
      kicker="Informativa"
      title="Privacy Policy"
      lede="Struttura in attesa dei dati del titolare. Sotto è descritto solo ciò che questo sito fa davvero con le informazioni."
      sections={privacySections}
    />
  );
}
