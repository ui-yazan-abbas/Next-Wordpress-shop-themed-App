import { cache } from "react";

export const fetchProducts = cache(async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_PREFIX}/api/products`,
    {
      cache: "no-store",
    }
  );

  return res.json();
});

export const fetchProductById = cache(async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_PREFIX}/api/products/${id}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
});
