/** @format */

import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

const useBudget = () => {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error("useBudget must be used within a BudetProvider");
  }
  return context;
};

export default useBudget;
