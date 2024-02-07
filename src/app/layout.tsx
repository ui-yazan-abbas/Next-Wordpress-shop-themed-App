"use client";
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

// export const metadata: Metadata = {
//   title: "Webook App",
//   description: "eCommerce Application Test App",
// }; // gives error because I'm using contextProvider

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
        <Header lang={lang} />
        <ProductsProvider>{children}</ProductsProvider>
        <Footer />
      </body>
    </html>
  );
}
