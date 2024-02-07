import { CartProduct } from "../types";

export const calculateTotalAmount = (cartProducts: CartProduct[]) =>
  cartProducts.reduce((total, item) => total + parseInt(item.price), 0);
