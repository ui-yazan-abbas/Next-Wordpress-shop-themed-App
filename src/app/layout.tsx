import type { Metadata } from "next";
import { DEFAULT_LOCALE } from "@/src/middleware";
import "./globals.css";
import { Bebas_Neue } from "next/font/google";
import { ProductsProvider } from "./[lang]/ProductsContext";
import Header from "./[lang]/components/Header";
import Footer from "./[lang]/components/Footer";

const roboto = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const { NEXT_PUBLIC_VERCEL_URL, SITE_NAME } = process.env;
const baseUrl = NEXT_PUBLIC_VERCEL_URL
  ? NEXT_PUBLIC_VERCEL_URL
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
