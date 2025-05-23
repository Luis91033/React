/** @format */

import ProductsPagination from "@/components/products/ProductsPagination";
import ProductsSearchForm from "@/components/products/ProductsSearchForm";
import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

async function productCount() {
  return await prisma.product.count();
}

async function getProducts(page: number, pageSize: number) {
  const skip = (page - 1) * pageSize;
  const products = await prisma.product.findMany({
    take: pageSize,
    skip,
    include: {
      category: true,
    },
  });

  return products;
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>;

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const page = +(await searchParams).page || 1;
  const pageSize = 10;

  if (page < 0) redirect("/admin/products");

  const [products, totalProducts] = await Promise.all([
    getProducts(page, pageSize),
    productCount(),
  ]);

  const totalPages = Math.ceil(totalProducts / pageSize);

  if (page > totalPages) redirect("/admin/products");

  return (
    <div>
      <Heading>Administrar Productos</Heading>

      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
        <Link
          href={"/admin/products/new"}
          className="bg-amber-400 w-full  lg:w-auto text-lg px-10 py-3 text-center font-bold cursor-pointer"
        >
          Crear Producto
        </Link>
        <ProductsSearchForm />
      </div>

      <ProductsTable products={products} />

      <ProductsPagination page={page} totalPages={totalPages} />
    </div>
  );
};

export default ProductsPage;
