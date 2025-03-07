/** @format */

import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  palceOrder: () => void;
};

const OrderTotals = ({ order, tip, palceOrder }: OrderTotalsProps) => {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order]
  );
  const tipAmount = useMemo(() => tip * subTotalAmount, [tip, order]);
  const totalAmount = useMemo(
    () => tipAmount + subTotalAmount,
    [tipAmount, subTotalAmount]
  );

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl"> Totales y Propina:</h2>
        <p>
          Subtotal a pagar:{" "}
          <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
        </p>
        <p>
          Propina:{" "}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar:{" "}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10 cursor-pointer"
        disabled={totalAmount === 0}
        onClick={palceOrder}
      >
        {" "}
        Guardar Orden
      </button>
    </>
  );
};

export default OrderTotals;
