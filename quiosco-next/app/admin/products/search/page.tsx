/** @format */

import ProductsSearchForm from "@/components/products/ProductsSearchForm";
import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function searchProducts(searchTerm: string) {
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: searchTerm,
        mode: "insensitive",
      },
    },
    include: {
      category: true,
    },
  });
  return products;
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) {
  const products = await searchProducts((await searchParams).search);
  return (
    <>
      <Heading>Resultados de búsqueda: {(await searchParams).search}</Heading>
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-end">
        <ProductsSearchForm />
      </div>

      {products.length ? (
        <ProductsTable products={products} />
      ) : (
        <p className="text-center text-lg">No hay resultados</p>
      )}
    </>
  );
}
