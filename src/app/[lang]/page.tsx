import { FC } from "react";
import { locale } from "@/locales";
import Image from "next/image";
import { DEFAULT_LOCALE } from "@/src/middleware";

const Home: FC<{ params: { lang: string } }> = ({
  params: { lang = DEFAULT_LOCALE },
}) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {locale[lang]?.homeHeader}
    </main>
  );
};

export default Home;
