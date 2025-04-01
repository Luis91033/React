/** @format */

import { useAppStore } from "../stores/useAppStore";
import type { Drink } from "../types";

/** @format */
type DrinkCardProps = {
  drink: Drink;
};

const DrinkCard = ({ drink }: DrinkCardProps) => {
  const selectRecipie = useAppStore((state) => state.selectRecipie);
  return (
    <div className="shadow-lg ">
      <div className="overflow-hidden">
        <img
          src={drink.strDrinkThumb}
          alt={`imagen de ${drink.strDrink}`}
          className="hover: scale-125 transition-transform hover:rotate-2"
        />
      </div>
      <div className="p-5">
        <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
        <button
          type="button"
          className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg cursor-pointer"
          onClick={() => selectRecipie(drink.idDrink)}
        >
          Ver Receta
        </button>
      </div>
    </div>
  );
};

export default DrinkCard;
