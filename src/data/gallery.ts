export type PhotoSlot = {
  id: string;
  src: string | null;
  alt: string;
  caption: string;
};

/**
 * Per pubblicare una fotografia:
 * 1. Salvare il file in public/photos/ (WebP o AVIF, lato lungo circa 1600px)
 * 2. Impostare src: "/photos/nome.webp" e un alt che descrive l’immagine
 * Usare solo scatti di cui il ristorante autorizza la pubblicazione.
 */

export const experienceShots: PhotoSlot[] = [
  {
    id: "exp-prep",
    src: null,
    alt: "Fotografia della preparazione, da inserire",
    caption: "Preparazione",
  },
  {
    id: "exp-piatto",
    src: null,
    alt: "Fotografia di un piatto, da inserire",
    caption: "Dettaglio",
  },
  {
    id: "exp-sala",
    src: null,
    alt: "Fotografia della sala, da inserire",
    caption: "In sala",
  },
];

export const aboutShots: PhotoSlot[] = [
  {
    id: "about-sala",
    src: null,
    alt: "Fotografia della sala di Bento, da inserire",
    caption: "La sala",
  },
  {
    id: "about-banco",
    src: null,
    alt: "Fotografia del banco, da inserire",
    caption: "Il banco",
  },
  {
    id: "about-dettaglio",
    src: null,
    alt: "Fotografia di un dettaglio della preparazione, da inserire",
    caption: "Dettaglio",
  },
];

export const instagramSlots: PhotoSlot[] = [
  "Un momento in sala",
  "Una preparazione",
  "Un dettaglio",
  "Il banco",
  "Un piatto",
  "La sera",
].map((caption, index) => ({
  id: `ig-${index + 1}`,
  src: null,
  alt: `Fotografia Instagram da inserire: ${caption.toLowerCase()}`,
  caption,
}));
