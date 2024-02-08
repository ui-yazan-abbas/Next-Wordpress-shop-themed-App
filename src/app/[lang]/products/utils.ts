import { Product } from "../types";

export const getPriceValue = (price: string) =>
  parseFloat(price.replace("$", ""));

export const calculateTotalAmount = (cartProducts: Product[]) =>
  cartProducts.reduce((total, item) => {
    const price = getPriceValue(item.price);
    const subtotal = price * item.qty;
    return total + subtotal;
  }, 0);
