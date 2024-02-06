export enum ProductCategory {
  FOOTWEAR = "Footwear",
  WOMENS = "Womens",
  MENS = "Mens",
  SPORTSWEAR = "Sportswear",
}

export type Review = {
  stars: number;
  review: string;
};

export type CartProduct = {
  name: string;
  id: string;
  image: string;
  quantity: string;
};

export interface Product {
  name: string;
  price: string;
  id: string;
  material: string;
  description: string;
  category: ProductCategory;
  images: string[];
  reviews?: Review[];
}

export type ProductsContextType = {
  footwearProducts?: Product[];
  mensProducts?: Product[];
  womensProducts?: Product[];
  sportswearProducts?: Product[];
  isShopPage?: boolean;
  isDefaultLang?: boolean;
  cartProducts?: CartProduct[];
  productCategory?: ProductCategory;
  setProductCategory?:
    | React.Dispatch<React.SetStateAction<ProductCategory>>
    | undefined;
  setcartProducts?: React.Dispatch<React.SetStateAction<number>> | undefined;
};
