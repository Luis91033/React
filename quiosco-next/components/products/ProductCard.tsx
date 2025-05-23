/** @format */

import { formatCurrency, getImagePath } from "@/src/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import AddProductButton from "./AddProductButton";

/** @format */
type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const imagePath = getImagePath(product.image);
  return (
    <div className="shadow  bg-white">
      <Image
        width={400}
        height={500}
        src={imagePath}
        alt={`Imagen platillo ${product.name}`}
      />
      <div className="p-5 ">
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatCurrency(product.price)}
        </p>
        <AddProductButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
