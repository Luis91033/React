/** @format */

import { StateCreator } from "zustand";
import {
  getCategories,
  getRecipies,
  getRecipieById,
} from "../services/RecipeService";
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types";

/** @format */

export type RecipieSliceType = {
  categories: Categories;
  drinks: Drinks;
  selectedRecipe: Recipe;
  modal: boolean;
  fetchCategories: () => Promise<void>;
  searchRecipies: (searchFilters: SearchFilter) => Promise<void>;
  selectRecipie: (id: Drink["idDrink"]) => Promise<void>;
  closeModal: () => void;
};

export const createRecipieSlice: StateCreator<RecipieSliceType> = (set) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: [],
  },
  modal: false,
  selectedRecipe: {} as Recipe,
  fetchCategories: async () => {
    const categories = await getCategories();
    set({
      categories,
    });
  },
  searchRecipies: async (searchFilters) => {
    const drinks = await getRecipies(searchFilters);
    set({
      drinks,
    });
  },
  selectRecipie: async (id) => {
    const selectedRecipe = await getRecipieById(id);
    set({
      selectedRecipe,
      modal: true,
    });
  },
  closeModal: () => {
    set({
      modal: false,
      selectedRecipe: {} as Recipe,
    });
  },
});
