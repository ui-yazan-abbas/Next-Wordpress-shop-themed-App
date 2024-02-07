import { Product } from "../types";

export const calculateTotalAmount = (cartProducts: Product[]) =>
  cartProducts.reduce((total, item) => total + parseInt(item.price), 0);
