/** @format */

import { Order, OrderProducts, Prisma, Product } from "@prisma/client";

export type OrderItem = Pick<Product, "id" | "name" | "price"> & {
  quantity: number;
  subtotal: number;
};

export type OrderWithProducts = Prisma.OrderGetPayload<{
  include: { orderProducts: { include: { product: true } } };
}>;
