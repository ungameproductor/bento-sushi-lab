import { restaurant } from "./restaurant";

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    id: "prenotazione",
    question: "È necessario prenotare?",
    answer:
      "Per la cena è consigliato. Il locale è piccolo e, nelle recensioni, gli ospiti invitano a prenotare prima di passare. Non c’è un sistema di prenotazione online: la conferma avviene per telefono, al +39 338 135 4874.",
  },
  {
    id: "asporto",
    question: "È possibile ordinare da asporto?",
    answer:
      "Sì. L’asporto è indicato dalle schede pubbliche e da chi ha già ordinato per portarlo via. La consegna a domicilio non risulta tra i servizi attivi: per l’asporto si concorda al telefono.",
  },
  {
    id: "dove",
    question: "Dove si trova Bento?",
    answer: `In ${restaurant.street}, ${restaurant.postalCode} ${restaurant.city}, nel centro città. Dalla pagina Dove siamo si aprono le indicazioni stradali.`,
  },
  {
    id: "orari",
    question: "Quali sono gli orari di apertura?",
    answer:
      "Gli orari precisi vanno chiesti al ristorante: le schede online non riportano le stesse fasce. In molte compare un servizio solo serale, con martedì e mercoledì di chiusura, ma non è una comunicazione ufficiale del locale. Per sapere se è aperto oggi, una telefonata è la fonte giusta.",
  },
  {
    id: "vegetariane",
    question: "Sono disponibili opzioni vegetariane?",
    answer:
      "Sì, le schede del locale e alcuni ospiti segnalano proposte vegetariane. La disponibilità del giorno si conferma in sala o al telefono.",
  },
  {
    id: "vegane",
    question: "Sono disponibili opzioni vegane?",
    answer:
      "Alcuni ospiti raccontano di aver trovato sushi vegano preparato con cura. È un segnale utile, non un menu vegano pubblicato: meglio chiedere prima di venire.",
  },
  {
    id: "glutine",
    question: "Sono disponibili opzioni senza glutine?",
    answer:
      "Questo sito non pubblica indicazioni sugli allergeni. Per glutine, intolleranze e possibili contaminazioni va contattato direttamente il ristorante, prima di ordinare.",
  },
  {
    id: "contatto",
    question: "Come posso contattare il ristorante?",
    answer: `Al telefono ${restaurant.phoneDisplay}. I profili pubblici sono Instagram (${restaurant.socials.instagramHandle}) e Facebook.`,
  },
  {
    id: "menu",
    question: "Dove posso consultare il menu?",
    answer:
      "La carta con prezzi, ingredienti e allergeni si consulta in sala. Online sono raccolte le preparazioni nominate dagli ospiti e una struttura vuota, pronta per il menu ufficiale quando il ristorante lo fornirà.",
  },
];
