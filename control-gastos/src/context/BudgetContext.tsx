/** @format */

import { createContext, ReactNode, useReducer } from "react";
import {
  budgetReducer,
  BudgetState,
  initialState,
  BudgetActions,
} from "../reducers/budgetReducer";
import { useMemo } from "react";

type BudgetContextProps = {
  state: BudgetState;
  dispatch: React.Dispatch<BudgetActions>;
  totalExpense: number;
  remainingBudget: number;
};
type BudgetProviderProps = {
  children: ReactNode;
};

export const BudgetContext = createContext<BudgetContextProps>(null!);

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);
  const totalExpense = useMemo(
    () => state.expenses.reduce((total, expense) => expense.amount + total, 0),
    [state.expenses]
  );

  const remainingBudget = state.budget - totalExpense;
  return (
    <BudgetContext.Provider
      value={{ state, dispatch, totalExpense, remainingBudget }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
