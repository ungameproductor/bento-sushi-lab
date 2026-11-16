export type LegalSection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export const legalDraftBanner =
  "Bozza da completare con i dati del titolare e con un testo legale approvato. Questa pagina non è un documento valido.";

export const privacySections: LegalSection[] = [
  {
    id: "stato",
    heading: "Stato del documento",
    paragraphs: [
      "Questa pagina descrive solo il funzionamento reale del sito, in attesa della privacy policy approvata. Mancano ragione sociale, codice fiscale o partita IVA, email del titolare e l’eventuale responsabile della protezione dei dati.",
    ],
  },
  {
    id: "titolare",
    heading: "Titolare del trattamento",
    paragraphs: [
      "Da inserire: denominazione, sede, partita IVA e un recapito email dedicato alla privacy. Fino a quel momento il contatto pubblico del ristorante è il telefono +39 338 135 4874, in Vico De' Palmieri 6/8, 72100 Brindisi.",
    ],
  },
  {
    id: "dati",
    heading: "Cosa fa questo sito con i dati",
    paragraphs: [
      "Il sito non ha un’area riservata e non invia moduli a un server. Il promemoria per la prenotazione resta nel browser: si può copiare e poi dettare al telefono. Non viene salvato da noi.",
      "La scelta sui contenuti di terzi è memorizzata in questo browser, nella chiave locale bento-consent-v1. Contiene solo la preferenza sulle mappe e la versione dell’informativa tecnica.",
      "Non sono installati strumenti di statistica, pubblicità o pixel social.",
    ],
  },
  {
    id: "mappa",
    heading: "Mappa",
    paragraphs: [
      "La mappa è un riquadro di OpenStreetMap. Parte solo dopo un consenso esplicito. Aprirla mette in contatto il browser con i server di OpenStreetMap, alle loro condizioni.",
    ],
  },
  {
    id: "diritti",
    heading: "Diritti",
    paragraphs: [
      "La descrizione dei diritti di accesso, rettifica, cancellazione, limitazione, opposizione e reclamo va redatta dal legale del titolare e collegata a un recapito reale. Qui non viene simulata.",
    ],
  },
];

export const cookieSections: LegalSection[] = [
  {
    id: "stato",
    heading: "Stato del documento",
    paragraphs: [
      "Questa pagina spiega i consensi così come sono costruiti nel sito. Il testo legale dei cookie va approvato insieme alla privacy policy.",
    ],
  },
  {
    id: "tecnici",
    heading: "Memoria tecnica",
    paragraphs: [
      "Nome: bento-consent-v1. Luogo: memoria locale del browser. Contenuto: scelta sulle mappe e versione dell’informativa. Durata: fino a cancellazione dei dati del sito da parte tua, o finché il sito non chiederà di nuovo il consenso perché la versione è cambiata.",
      "Serve a non riproporre la domanda a ogni visita e a non caricare la mappa se hai rifiutato.",
    ],
  },
  {
    id: "mappe",
    heading: "Mappe",
    paragraphs: [
      "Categoria facoltativa. Se accetti, la pagina Dove siamo e la homepage possono caricare OpenStreetMap. Se rifiuti, restano l’indirizzo e i link per aprire le indicazioni in un’altra scheda.",
    ],
  },
  {
    id: "scelta",
    heading: "Come cambiare idea",
    paragraphs: [
      "Dal piè di pagina, la voce «Preferenze cookie» riapre la scelta. Accetta tutti abilita la mappa. Rifiuta tutti la lascia spenta. Personalizza agisce solo su quella categoria.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    id: "stato",
    heading: "Stato del documento",
    paragraphs: [
      "Condizioni da far scrivere o approvare al legale del ristorante. I paragrafi sotto fissano solo ciò che il sito fa davvero, così il testo definitivo ha una base onesta.",
    ],
  },
  {
    id: "prenotazioni",
    heading: "Prenotazioni",
    paragraphs: [
      "Un tavolo si conferma telefonicamente al +39 338 135 4874. Il modulo del sito prepara un promemoria e non trasmette la richiesta.",
    ],
  },
  {
    id: "menu",
    heading: "Menu, prezzi e allergeni",
    paragraphs: [
      "Prezzi, ingredienti, allergeni e disponibilità si verificano in sala o al telefono. Le schede segnate come bozza non sono un’offerta al pubblico. Per intolleranze e contaminazioni il riferimento è il ristorante, non questa pagina.",
    ],
  },
  {
    id: "contenuti",
    heading: "Contenuti",
    paragraphs: [
      "Testi editoriali, illustrazioni e impaginazione di questo sito sono materiale del progetto. Le recensioni restano delle persone che le hanno scritte e delle piattaforme che le ospitano: qui sono citate con l’autore e il link alla fonte.",
    ],
  },
  {
    id: "responsabilita",
    heading: "Responsabilità e legge applicabile",
    paragraphs: [
      "Da completare con le clausole approvate: limitazioni, foro, legge applicabile, modifiche del servizio. Non vengono inventate in questa bozza.",
    ],
  },
];
