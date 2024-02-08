import { Bebas_Neue } from "next/font/google";
import { DEFAULT_LOCALE } from "@/src/middleware";

import { ProductsProvider } from "@/src/app/[lang]/ProductsContext";
import Header from "@/src/app/components/Header";
import Footer from "@/src/app/components/Footer";
import "./globals.css";

const roboto = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const { NEXT_PUBLIC_URL_PREFIX, SITE_NAME } = process.env;
const baseUrl = NEXT_PUBLIC_URL_PREFIX
  ? `${NEXT_PUBLIC_URL_PREFIX}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(baseUrl),
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
