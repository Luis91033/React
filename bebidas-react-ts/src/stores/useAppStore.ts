/** @format */
import { create } from "zustand";
import { createRecipieSlice, RecipieSliceType } from "./recipieSlice";
import { createFavoriteSlice, FavoritesSliceType } from "./favoritesSlice";
import {
  createNotificationSlice,
  NotificationSliceType,
} from "./notificationSlice";
import { AISlice, createAISlice } from "./aiSlice";

export const useAppStore = create<
  RecipieSliceType & FavoritesSliceType & NotificationSliceType & AISlice
>((...a) => ({
  ...createRecipieSlice(...a),
  ...createFavoriteSlice(...a),
  ...createNotificationSlice(...a),
  ...createAISlice(...a),
}));
