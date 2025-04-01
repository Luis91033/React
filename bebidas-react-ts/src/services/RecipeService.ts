/** @format */
import axios from "axios";
import {
  CategoriesAPIResponseSchema,
  DrinksAPIReponse,
  RecipeAPIResponseSchema,
} from "../utils/recipies-schema";
import { Drink, SearchFilter } from "../types";

export async function getCategories() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
  const { data } = await axios(url);
  const result = CategoriesAPIResponseSchema.safeParse(data);
  if (result.success) {
    return result.data;
  }
}

export async function getRecipies(filters: SearchFilter) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`;
  const { data } = await axios(url);
  const result = DrinksAPIReponse.safeParse(data);
  if (result.success) {
    return result.data;
  }
}

export async function getRecipieById(id: Drink["idDrink"]) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data } = await axios(url);
  const result = RecipeAPIResponseSchema.safeParse(data.drinks[0]);
  if (result.success) {
    return result.data;
  }
}
