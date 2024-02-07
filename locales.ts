interface LocaleEntry {
  home: string;
  shop: string;
  home_title_case: string;
  shop_title_case: string;
  aboutHeader: string;
  language: string;
  en: string;
  ar: string;
  twenty_four: string;
  our_stores: string;
  base_layer: string;
  shop_now: string;
  pro_combat: string;
  high_performance: string;
  stores_desc: string;
}

export const locale: Record<string, LocaleEntry> = {
  en: {
    home: "HOME",
    shop: "SHOP",
    aboutHeader: "About App",
    language: "Language",
    en: "English",
    ar: "العربية",
    twenty_four: "2 0 2 4",
    our_stores: "OUR STORES",
    base_layer: "BASELAYER COLLECTION",
    shop_now: "SHOP NOW",
    pro_combat: "PRO COMBAT",
    high_performance: "High Performance Skateboarding Shoes",
    stores_desc:
      "One of the best in the buisness of online stores we sell high quality products. our Customers Satisfaction",
    home_title_case: "Home",
    shop_title_case: "Shop",
  },
  ar: {
    home: "الصفحة الرئيسية",
    shop: "المتجر",
    aboutHeader: "حول التطبيق",
    language: "اللغة",
    en: "الانجليزية",
    ar: "العربية",
    twenty_four: "٢ ٠ ٢ ٤",
    our_stores: "متاجرنا",
    base_layer: "مجموعة الأساس",
    shop_now: "تبضع",
    pro_combat: "قتال محترف",
    high_performance:
      "أحد أفضل المتاجر عبر الإنترنت، حيث نبيع منتجات عالية الجودة. رضا عملائنا",
    stores_desc:
      "أحد أفضل المتاجر عبر الإنترنت، حيث نبيع منتجات عالية الجودة. رضا عملائنا",
    home_title_case: "الصفحة الرئيسية",
    shop_title_case: "المتجر",
  },
};
