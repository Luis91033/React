/** @format */
import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

const Header = () => {
  const showNotification = useAppStore((state) => state.showNotification);
  const [searchFilters, setSearchFilters] = useState({
    ingredient: "",
    category: "",
  });

  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === "/", [pathname]);

  const fetchCategories = useAppStore((state) => state.fetchCategories);
  const categories = useAppStore((state) => state.categories);
  const searchRecipies = useAppStore((state) => state.searchRecipies);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(searchFilters).includes("")) {
      showNotification({
        text: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    searchRecipies(searchFilters);
  };

  return (
    <header
      className={
        isHome ? "bg-[url(/bg.jpg)] bg-center bg-cover" : "bg-slate-800"
      }
    >
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="/logo.svg" alt="logotipo" />
          </div>
          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/favoritos"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Favoritos
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form
            action=""
            className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg "
              >
                Nombre o Ingredientes
              </label>
              <input
                type="text"
                id="ingredient"
                name="ingredient"
                className="p-3 w-full rounded-lg outline-none bg-white focus:outline-none"
                placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila, Café"
                onChange={handleChange}
                value={searchFilters.ingredient}
              />
            </div>

            <div className="space-y-4">
              <label
                htmlFor="category"
                className="block text-white uppercase font-extrabold text-lg "
              >
                Categoría
              </label>
              <select
                id="category"
                name="category"
                className="p-3 w-full rounded-lg outline-none bg-white focus:outline-none"
                onChange={handleChange}
                value={searchFilters.category}
              >
                <option>--Seleccione--</option>
                {categories.drinks.map((category) => (
                  <option
                    value={category.strCategory}
                    key={category.strCategory}
                  >
                    {category.strCategory}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="submit"
              value="Buscar Recetas"
              className="cursor-pointer bg-amber-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"
            />
          </form>
        )}
      </div>
    </header>
  );
};

export default Header;
