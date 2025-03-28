import { LocalesLanguage, ProductCategory } from "./types";

export const LINKS = {
  brandIconDark:
    "https://azeno.wpbingosite.com/wp-content/webp-express/webp-images/uploads/2020/12/Logo-dark-1.png.webp",
  brandIconLight:
    "https://azeno.wpbingosite.com/wp-content/webp-express/webp-images/uploads/2020/12/Logo-white-1.png.webp",
  sportswearCategoryImage:
    "https://azeno.wpbingosite.com/wp-content/webp-express/webp-images/uploads/2020/12/3.jpg.webp",
  footwearCategoryImage:
    "https://azeno.wpbingosite.com/wp-content/webp-express/webp-images/uploads/2020/12/4.jpg.webp",
  mensCategoryImage:
    "https://azeno.wpbingosite.com/wp-content/webp-express/webp-images/uploads/2020/12/2.jpg.webp",
  womensCategoryImage:
    "https://azeno.wpbingosite.com/wp-content/webp-express/webp-images/uploads/2020/12/5.jpg.webp",
  mainPageProCombatImage:
    "https://azeno.wpbingosite.com/wp-content/uploads/2020/12/slider5-1.jpg",
  mainPageSportswearImage:
    "https://azeno.wpbingosite.com/wp-content/webp-express/webp-images/uploads/2020/11/img6-4.jpg.webp",
  mainPageMenWearImage:
    "https://azeno.wpbingosite.com/wp-content/webp-express/webp-images/uploads/2020/11/img6-2.jpg.webp",
  cart_empty_state: "https://i.ibb.co/BGZgDVw/empty-state.png",
  facebook: "https://facebook.com/",
  twitter: "https://twitter.com/",
  instagram: "https://instagram.com/",
};

export const DEFAULT_PRODUCT = {
  id: "",
  name: "",
  images: [],
  category: ProductCategory.FOOTWEAR,
  price: "",
  reviews: [],
  material: "",
  description: "",
  qty: 0,
};

export const DEFAULT_PRODUCT_COUNT = 1;
export const DEFAULT_LOCALE = LocalesLanguage.EN;
export const LOCALES = [LocalesLanguage.EN, LocalesLanguage.AR];
