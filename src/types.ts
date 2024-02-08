export enum ProductCategory {
  FOOTWEAR = "Footwear",
  WOMENS = "Womens",
  MENS = "Mens",
  SPORTSWEAR = "Sportswear",
}

export enum LocalesLanguage {
  EN = "en",
  AR = "ar",
}

export type Review = {
  stars: number;
  review: string;
  user: string;
  formatted_date: string;
};

export interface ComponentWithBrandProductsProps {
  footwearProducts: Product[];
  mensProducts: Product[];
  womensProducts: Product[];
  sportswearProducts: Product[];
}

export type sportsWearProducts = Pick<
  ComponentWithBrandProductsProps,
  "sportswearProducts"
>;

export interface Product {
  name: string;
  price: string;
  id: string;
  material: string;
  description: string;
  category: ProductCategory;
  images: string[];
  reviews?: Review[];
  qty: number;
}

export type ProductsContextType = {
  productCategory?: ProductCategory;
  setProductCategory?:
    | React.Dispatch<React.SetStateAction<ProductCategory>>
    | undefined;
  isShowCart?: boolean;
  setIsShowCart?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  cartProducts?: Product[];
  setCartProducts?: React.Dispatch<React.SetStateAction<Product[]>> | undefined;
  isLangDropdownOpen?: boolean;
  setIsLangDropdownOpen?:
    | React.Dispatch<React.SetStateAction<boolean>>
    | undefined;
  productCount?: number;
  setProductCount?: React.Dispatch<React.SetStateAction<number>> | undefined;
  pathname?: string;
};
