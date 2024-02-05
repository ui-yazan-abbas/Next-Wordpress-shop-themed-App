import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DEFAULT_LOCALE } from "@/src/middleware";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webook App",
  description: "eCommerce Application Test App",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
