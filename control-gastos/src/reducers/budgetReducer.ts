/** @format */

export type BudgetActions = { type: "add-budget"; payload: { budget: number } };

export type BudgetState = {
  budget: number;
};

export const initialState: BudgetState = {
  budget: 0,
};

export const budgetReducer = (
  state: BudgetState = initialState,
  actions: BudgetActions
) => {
  if (actions.type === "add-budget") {
    return {
      ...state,
      budget: actions.payload.budget,
    };
  }
  return state;
};
