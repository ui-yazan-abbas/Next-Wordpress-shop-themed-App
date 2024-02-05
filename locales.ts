interface LocaleEntry {
  homeHeader: string;
  aboutHeader: string;
}

export const locale: Record<string, LocaleEntry> = {
  en: {
    homeHeader: "Home",
    aboutHeader: "About App",
  },
  ar: {
    homeHeader: "الصفحة الرئيسية",
    aboutHeader: "حول التطبيق",
  },
};
