/** @format */
import { db } from "../data/db";
const initalCart = () => {
  const localStorageCart = localStorage.getItem("cart");
  return localStorageCart ? JSON.parse(localStorageCart) : [];
};
export const initialState = {
  data: db,
  cart: initalCart(),
};

export const cartReducer = (state = initialState, actions) => {
  if (actions.type === "add-to-cart") {
    const itemExits = state.cart.find(
      (guitar) => guitar.id === actions.payload.item.id
    );
    let updateCart = [];
    if (itemExits) {
      updateCart = state.cart.map((item) => {
        if (item.id === actions.payload.item.id) {
          if (item.quantity < 5) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return;
          }
        } else {
          return item;
        }
      });
    } else {
      const newItem = { ...actions.payload.item, quantity: 1 };
      updateCart = [...state.cart, newItem];
    }
    return {
      ...state,
      cart: updateCart,
    };
  }
  if (actions.type === "remove-from-cart") {
    const updateCart = state.cart.filter(
      (item) => item.id !== actions.payload.id
    );
    return {
      ...state,
      cart: updateCart,
    };
  }
  if (actions.type === "decrease-quantity") {
    const updatedCart = state.cart.map((item) => {
      if (item.id == actions.payload.id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });

    return {
      ...state,
      cart: updatedCart,
    };
  }
  if (actions.type === "increase-quantity") {
    const updatedCart = state.cart.map((item) => {
      if (item.id == actions.payload.id && item.quantity < 5) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    return {
      ...state,
      cart: updatedCart,
    };
  }
  if (actions.type === "clear-cart") {
    return {
      ...state,
      cart: [],
    };
  }
  return state;
};
