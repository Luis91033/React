/** @format */
"use client";
import Image from "next/image";
import Link from "next/link";
import { Category } from "@prisma/client";
import { useParams } from "next/navigation";

type CategoryIconProps = {
  category: Category;
};

const CategoryIcon = ({ category }: CategoryIconProps) => {
  const params = useParams<{ category: string }>();
  return (
    <div
      className={`${
        category.slug === params.category ? "bg-amber-400" : ""
      } flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}
    >
      <div className="w-16 h-16 relative">
        <Image src={`/icon_${category.slug}.svg`} alt="Imagen Categora" fill />
      </div>
      <Link href={`/order/${category.slug}`} className="text-xl font-bold">
        {category.name}
      </Link>
    </div>
  );
};

export default CategoryIcon;
