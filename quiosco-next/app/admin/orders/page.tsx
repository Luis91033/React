/** @format */

import OrderCard from "@/components/order/OrderCard";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function getPendingOrder() {
  const orders = await prisma.order.findMany({
    where: {
      status: false,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });
  return orders;
}

const OrdersPage = async () => {
  const orders = await getPendingOrder();

  return (
    <>
      <Heading>Administrar Ordenes</Heading>

      {orders.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <p className="text-center">No hay ordenes Pendientes</p>
      )}
    </>
  );
};

export default OrdersPage;
