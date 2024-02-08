import { Product } from "./types";

export const fetchProducts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_PREFIX}/api/products`,
    {
      cache: "no-store",
    }
  );

  return res.json();
};

export const fetchProductById = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_PREFIX}/api/products/${id}`,
    { cache: "no-store" }
  );
  return res.json();
};

const getPriceValue = (price: string) => parseFloat(price.replace("$", ""));

export const calculateTotalAmount = (cartProducts: Product[]) =>
  cartProducts.reduce((total, item) => {
    const price = getPriceValue(item.price);
    const subtotal = price * item.qty;
    return total + subtotal;
  }, 0);
