import { useState } from "react";

import DUMMY_EXPENSES from "./Data/DummyExpenses";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <h1>Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
};
export default ExpenseTracker;
