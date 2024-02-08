import React, { FC } from "react";
import Image from "next/image";

import { Product } from "@/src/types";

const CartProductCard: FC<{ cartProduct: Product }> = ({ cartProduct }) => (
  <li className="flex p-6">
    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      <Image
        src={cartProduct?.images?.[0]}
        alt={cartProduct?.name}
        className="h-full w-full object-cover object-center"
        width={200}
        height={200}
      />
    </div>

    <div className="ml-4 flex flex-1 flex-col">
      <div>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>
            <a href="/product/">{cartProduct?.name}</a>
          </h3>
          <p className="ml-4">{cartProduct?.price}</p>
        </div>
      </div>
      <div className="flex flex-1 items-end justify-between text-sm">
        <p className="text-gray-500 font-sans">Quantity: x{cartProduct?.qty}</p>

        <div className="flex">
          <button
            type="button"
            className="font-medium text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </li>
);

export default CartProductCard;
