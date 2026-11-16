/**
 * Dati istituzionali di Bento Sushi Lab, Brindisi.
 * Aggiornare qui contatti, link e testi. Non inserire orari, prezzi o biografie
 * se non arrivano dal ristorante: le schede pubbliche non sono allineate.
 *
 * Verificati il 16 novembre 2026
 * - Indirizzo Tripadvisor: Vico De' Palmieri 6/8, 72100 Brindisi
 * - Nodo OpenStreetMap "Bento": 40.6352058, 17.943744 (civico 6, centro)
 * - Telefono +39 338 135 4874
 * - bentosushilab.it risulta ancora "sito in costruzione"
 * - Cena, asporto, prenotazione telefonica
 * - Tripadvisor 4,6/5 · 215 recensioni
 *
 * Da non pubblicare come fatti
 * - Orari esatti (le fonti riportano 18:30 oppure 19:30)
 * - Menu, allergeni, prezzi, email, WhatsApp
 * - Storia, anno di apertura, biografie
 */

export const siteUrl = "https://www.bentosushilab.it";

export const restaurant = {
  name: "Bento",
  fullName: "Bento Sushi Lab",
  claim: "L'arte del sushi, nel cuore di Brindisi.",
  tagline: "Japanese Sushi Lab",
  logoSrc: null as string | null,
  phoneDisplay: "+39 338 135 4874",
  phoneHref: "tel:+393381354874",
  email: null as string | null,
  whatsapp: null as string | null,
  street: "Vico De' Palmieri 6/8",
  postalCode: "72100",
  city: "Brindisi",
  province: "BR",
  country: "Italia",
  lat: 40.6352058,
  lon: 17.943744,
  rating: {
    value: 4.6,
    count: 215,
    platform: "Tripadvisor",
  },
  socials: {
    instagram: "https://www.instagram.com/bentosushilabofficial/",
    instagramHandle: "@bentosushilabofficial",
    facebook: "https://www.facebook.com/BentoBrindisi/?locale=it_IT",
    tripadvisor:
      "https://www.tripadvisor.it/Restaurant_Review-g187875-d6957285-Reviews-Bento-Brindisi_Province_of_Brindisi_Puglia.html",
  },
} as const;

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  "Bento Sushi Lab, Vico De' Palmieri 6, 72100 Brindisi",
)}`;

export const osmUrl = `https://www.openstreetmap.org/?mlat=${restaurant.lat}&mlon=${restaurant.lon}#map=18/${restaurant.lat}/${restaurant.lon}`;

export const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=17.9397%2C40.6332%2C17.9477%2C40.6372&layer=mapnik&marker=${restaurant.lat}%2C${restaurant.lon}`;

export const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Bento Sushi Lab Vico De' Palmieri Brindisi",
)}`;

export const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/menu", label: "Menù", end: false },
  { to: "/chi-siamo", label: "Chi siamo", end: false },
  { to: "/dove-siamo", label: "Dove siamo", end: false },
  { to: "/faq", label: "FAQ", end: false },
] as const;

export const legalLinks = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/cookie", label: "Cookie Policy" },
  { to: "/termini", label: "Termini e condizioni" },
] as const;

export const philosophy = {
  kanji: "非日常",
  title: "Oltre il quotidiano",
  text: "Un viaggio tra sapori, ricerca e tradizione giapponese. Ogni preparazione diventa un incontro tra equilibrio, tecnica e creatività.",
  note: "Proposta editoriale, da confermare con il ristorante.",
};

export const identityBlocks = [
  {
    title: "Un sushi lab nel centro",
    text: "Bento è un ristorante giapponese in Vico De' Palmieri, a Brindisi. Si cena in sala, con servizio al tavolo, e si può ordinare da asporto.",
  },
  {
    title: "Pochi coperti, prenotazione consigliata",
    text: "Chi ci è stato lo racconta come un locale piccolo e accogliente. Nelle recensioni il consiglio torna spesso: prenotare prima di passare, perché i posti sono pochi.",
  },
  {
    title: "La carta si legge in sala",
    text: "Nigiri, hosomaki, futomaki, temaki, onigiri, roll ed edamame compaiono nei racconti degli ospiti. Prezzi, ingredienti e allergeni restano quelli detti dal ristorante, non quelli inventati da una pagina.",
  },
];

export const hoursCopy = {
  title: "Orari",
  text: "Per l'orario di oggi la fonte è il telefono del ristorante. Le schede pubbliche non coincidono: alcune aprono alle 18:30, altre alle 19:30, e non tutte indicano gli stessi giorni.",
  hint: "Su più schede compaiono il servizio serale e la chiusura di martedì e mercoledì. È un indizio, non un orario ufficiale.",
};

export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.fullName,
    alternateName: restaurant.name,
    servesCuisine: ["Giapponese", "Sushi"],
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurant.street,
      addressLocality: restaurant.city,
      addressRegion: restaurant.province,
      postalCode: restaurant.postalCode,
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: restaurant.lat,
      longitude: restaurant.lon,
    },
    telephone: "+393381354874",
    url: siteUrl,
    image: `${siteUrl}/og.jpg`,
    hasMenu: `${siteUrl}/menu`,
    acceptsReservations: "True",
    sameAs: [
      restaurant.socials.instagram,
      restaurant.socials.facebook,
      restaurant.socials.tripadvisor,
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(restaurant.rating.value),
      reviewCount: String(restaurant.rating.count),
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function webPageJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`,
    inLanguage: "it-IT",
    isPartOf: {
      "@type": "WebSite",
      name: restaurant.fullName,
      url: siteUrl,
    },
  };
}
