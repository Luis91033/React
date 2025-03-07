/** @format */

export type MenuItems = {
  id: number;
  name: string;
  price: number;
};

export type OrderItem = MenuItems & {
  quantity: number;
};
