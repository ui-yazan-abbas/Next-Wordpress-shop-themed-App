import { FC } from "react";
import { DEFAULT_LOCALE } from "@/src/middleware";

import HomeTopSection from "./components/HomeTopSection";
import HomeMidSection from "./components/HomeMidSection";
import HomeBottomSection from "./components/HomeBottomSection";

const Home: FC<{ params: { lang: string } }> = ({
  params: { lang = DEFAULT_LOCALE },
}) => {
  return (
    <main className="flex flex-col items-center justify-between w-full">
      <HomeTopSection lang={lang} />

      <HomeMidSection lang={lang} />

      <HomeBottomSection lang={lang} />
    </main>
  );
};

export default Home;
