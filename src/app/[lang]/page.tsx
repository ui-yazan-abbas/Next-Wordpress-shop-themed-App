import { FC } from "react";
import { DEFAULT_LOCALE } from "@/src/middleware";

import HomeTopSection from "./components/HomeTopSection";
import HomeMidSection from "./components/HomeMidSection";
import HomeBottomSection from "./components/HomeBottomSection";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Home: FC<{ params: { lang: string } }> = ({
  params: { lang = DEFAULT_LOCALE },
}) => {
  return (
    <main className="flex flex-col items-center justify-between w-full h-screen">
      <Header lang={lang} />

      <HomeTopSection lang={lang} />

      <HomeMidSection lang={lang} />

      <HomeBottomSection lang={lang} />
      <Footer />
    </main>
  );
};

export default Home;
