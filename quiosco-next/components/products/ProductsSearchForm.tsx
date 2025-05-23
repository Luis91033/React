/** @format */
"use client";

import { SearchSchema } from "@/src/schema";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const ProductsSearchForm = () => {
  const router = useRouter();
  const handleSearchForm = (formData: FormData) => {
    const data = {
      search: formData.get("search"),
    };
    const result = SearchSchema.safeParse(data);
    if (!result.success) {
      result.error.issues.forEach((error) => {
        toast.error(error.message);
      });
      return;
    }
    router.push(
      redirect(`/admin/products/search?search=${result.data.search}`)
    );
  };
  return (
    <form className="flex items-center" action={handleSearchForm}>
      <input
        type="text"
        placeholder="Buscar Producto"
        className="p-2 placeholder-gray-400 w-full"
        name="search"
      />

      <input
        type="submit"
        value={"Buscar"}
        className="bg-indigo-600 p-2 uppercase text-white cursor-pointer"
      />
    </form>
  );
};

export default ProductsSearchForm;
