import { googleMapsUrl, restaurant } from "./restaurant";

export type Review = {
  id: string;
  author: string;
  platform: string;
  date: string;
  context?: string;
  original: string;
  translation?: string;
  href: string;
};

export const reviews: Review[] = [
  {
    id: "simone",
    author: "Simone Iaia",
    platform: "Google",
    date: "Recensione pubblica",
    original:
      "Il miglior sushi di Brindisi. Bento Lab è un locale piccolino e si consiglia la prenotazione ma è proprio questo il suo punto forte. Qualità al posto della quantità, dimenticate le vostre esperienze “all you can eat” una volta dentro.",
    href: googleMapsUrl,
  },
  {
    id: "mija",
    author: "Mija L.",
    platform: "Tripadvisor",
    date: "Ottobre 2024",
    context: "In coppia",
    original:
      "The place looks rather modest from the outside, but the sushi quality quite the opposite. It is very authentic and lovingly made. We enjoyed the food fully with great enthusiasm. What a win for the city of Brindisi!",
    translation:
      "Da fuori il locale appare piuttosto modesto, ma la qualità del sushi è l’opposto. È molto autentico e preparato con cura. Abbiamo mangiato con grande entusiasmo. Che conquista per la città di Brindisi.",
    href: restaurant.socials.tripadvisor,
  },
  {
    id: "dario",
    author: "Dario R.",
    platform: "Tripadvisor",
    date: "Marzo 2025",
    context: "In famiglia",
    original:
      "Great food, small but cozy place, polite, helpful and kind staff. I've been there with the family a couple of times already.",
    translation:
      "Ottimo cibo, un posto piccolo ma accogliente, personale educato, disponibile e gentile. Ci sono già stato con la famiglia più di una volta.",
    href: restaurant.socials.tripadvisor,
  },
  {
    id: "alessandra",
    author: "Alessandra P.",
    platform: "Tripadvisor",
    date: "Novembre 2023",
    context: "In coppia",
    original:
      "Absolutely the best Sushi in Brindisi and beyond. The meticulous attention, research and preparation make each piece a poem.",
    translation:
      "Assolutamente il miglior sushi di Brindisi, e non solo. L’attenzione meticolosa, la ricerca e la preparazione fanno di ogni pezzo una poesia.",
    href: restaurant.socials.tripadvisor,
  },
];
