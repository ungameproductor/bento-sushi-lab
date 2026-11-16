/**
 * Menu.
 * Le voci con placeholder: true NON sono piatti del ristorante.
 * Per pubblicarne uno vero: compilare i campi e impostare placeholder: false.
 * Non inventare prezzi, ingredienti o allergeni.
 */

export const menuCategories = [
  { id: "antipasti", label: "Antipasti" },
  { id: "nigiri", label: "Nigiri" },
  { id: "sashimi", label: "Sashimi" },
  { id: "hosomaki", label: "Hosomaki" },
  { id: "uramaki", label: "Uramaki" },
  { id: "futomaki", label: "Futomaki" },
  { id: "temaki", label: "Temaki" },
  { id: "specialita", label: "Specialità" },
  { id: "dessert", label: "Dessert" },
  { id: "bevande", label: "Bevande" },
] as const;

export type MenuCategoryId = (typeof menuCategories)[number]["id"];

export type MenuItem = {
  id: string;
  category: MenuCategoryId;
  name: string;
  description: string;
  price: string | null;
  ingredients: string | null;
  allergens: string | null;
  image: string | null;
  imageAlt: string | null;
  placeholder: boolean;
};

function draft(category: MenuCategoryId, label: string): MenuItem {
  return {
    id: `bozza-${category}`,
    category,
    name: `${label} — scheda da compilare`,
    description:
      "Spazio riservato a una voce del menu ufficiale. Sostituire nome, testo, prezzo, ingredienti, allergeni e fotografia solo con quanto fornito dal ristorante.",
    price: null,
    ingredients: null,
    allergens: null,
    image: null,
    imageAlt: null,
    placeholder: true,
  };
}

export const menuItems: MenuItem[] = menuCategories.map((category) =>
  draft(category.id, category.label),
);

export type CitedPreparation = {
  id: string;
  name: string;
  note: string;
};

/** Preparazioni nominate in recensioni pubbliche. Non sono un listino. */
export const citedPreparations: CitedPreparation[] = [
  {
    id: "nigiri",
    name: "Nigiri",
    note: "Tra le preparazioni nominate nelle recensioni.",
  },
  {
    id: "hosomaki",
    name: "Hosomaki",
    note: "Tra le preparazioni nominate nelle recensioni.",
  },
  {
    id: "futomaki",
    name: "Futomaki",
    note: "Tra le preparazioni nominate nelle recensioni.",
  },
  {
    id: "temaki",
    name: "Temaki",
    note: "Tra le preparazioni nominate nelle recensioni.",
  },
  {
    id: "onigiri",
    name: "Onigiri",
    note: "Tra le preparazioni nominate nelle recensioni.",
  },
  {
    id: "roll",
    name: "Roll",
    note: "Gli ospiti ne parlano insieme ai nigiri.",
  },
  {
    id: "edamame",
    name: "Edamame",
    note: "Indicato tra i piatti consigliati in una recensione Google.",
  },
];
