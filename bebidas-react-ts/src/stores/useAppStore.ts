/** @format */
import { create } from "zustand";
import { createRecipieSlice, RecipieSliceType } from "./recipieSlice";
import { createFavoriteSlice, FavoritesSliceType } from "./favoritesSlice";
import {
  createNotificationSlice,
  NotificationSliceType,
} from "./notificationSlice";

export const useAppStore = create<
  RecipieSliceType & FavoritesSliceType & NotificationSliceType
>((...a) => ({
  ...createRecipieSlice(...a),
  ...createFavoriteSlice(...a),
  ...createNotificationSlice(...a),
}));
