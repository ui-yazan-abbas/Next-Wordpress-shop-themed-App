import { Bebas_Neue } from "next/font/google";
import { DEFAULT_LOCALE } from "@/src/middleware";

import { ProductsProvider } from "./[lang]/ProductsContext";
import Header from "./[lang]/components/Header";
import Footer from "./[lang]/components/Footer";
import "./globals.css";

const roboto = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const { SITE_NAME } = process.env;

export const metadata = {
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
  params: { lang = DEFAULT_LOCALE },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={lang}>
      <body className={roboto.className}>
        <ProductsProvider>
          <Header lang={lang} />
          {children}
          <Footer />
        </ProductsProvider>
      </body>
    </html>
  );
}
