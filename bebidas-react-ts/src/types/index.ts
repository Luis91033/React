/** @format */

import { z } from "zod";
import {
  CategoriesAPIResponseSchema,
  DrinkAPIReponse,
  DrinksAPIReponse,
  RecipeAPIResponseSchema,
  SearchFilterSchema,
} from "../utils/recipies-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilter = z.infer<typeof SearchFilterSchema>;
export type Drinks = z.infer<typeof DrinksAPIReponse>;
export type Drink = z.infer<typeof DrinkAPIReponse>;
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>;
