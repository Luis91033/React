/** @format */

import { OrderWithProducts } from "@/src/types";

/** @format */
type LatestOrderItemProps = {
  order: OrderWithProducts;
};
const LatestOrderItem = ({ order }: LatestOrderItemProps) => {
  return (
    <div className="bg-white shadow p-5 space-y-5 rounded-lg">
      <p className="text-2xl font-bold text-slate-600">Cliente: {order.name}</p>

      <ul
        className="divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500"
        role="list"
      >
        {order.orderProducts.map((order) => (
          <li key={order.id} className="flex py-6 text-lg">
            <span className="font-bold">
              ({order.quantity}){""}
            </span>
            <p>{order.product.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestOrderItem;
