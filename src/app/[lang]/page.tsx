import { FC } from "react";
import { DEFAULT_LOCALE } from "@/src/middleware";
import { fetchProducts } from "@/utils";

import HomeTopSection from "./components/HomeTopSection";
import HomeMidSection from "./components/HomeMidSection";
import HomeBottomSection from "./components/HomeBottomSection";

const Home: FC<{ params: { lang: string } }> = async ({
  params: { lang = DEFAULT_LOCALE },
}) => {
  const { products } = await fetchProducts();
  const { sportswear } = products?.[0];

  return (
    <main className="flex flex-col items-center justify-between w-full">
      <HomeTopSection lang={lang} />

      <HomeMidSection lang={lang} />

      <HomeBottomSection sportswearProducts={sportswear} lang={lang} />
    </main>
  );
};

export default Home;
