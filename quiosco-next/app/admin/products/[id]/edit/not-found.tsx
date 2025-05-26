/** @format */

import Heading from "@/components/ui/Heading";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <Heading>Producto no encontrado</Heading>
      <Link
        className="bg-amber-400 text-black px-10 py-3 text-xl text-center font-bold cursor-pointer w-full lg:w-auto"
        href="/admin/products"
      >
        Ir a Productos
      </Link>
    </div>
  );
};

export default NotFound;
