/** @format */

import Link from "next/link";
type ProductsPaginationProps = {
  page: number;
  totalPages: number;
};
const ProductsPagination = ({ page, totalPages }: ProductsPaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <nav className="flex justify-center py-10">
      {page > 1 && (
        <Link
          className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 "
          href={`/admin/products?page=${page - 1}`}
        >
          &laquo;
        </Link>
      )}

      {pages.map((currentPage) => (
        <Link
          key={currentPage}
          href={`/admin/products?page=${currentPage}`}
          className={`${
            page === currentPage && "font-bold"
          } bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
        >
          {currentPage}
        </Link>
      ))}

      {page < totalPages && (
        <Link
          className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
          href={`/admin/products?page=${page + 1}`}
        >
          &raquo;
        </Link>
      )}
    </nav>
  );
};

export default ProductsPagination;
