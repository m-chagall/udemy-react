import { useState } from "react";
import "./App.css";

import DUMMY_EXPENSES from "./components/ExpenseTracker/Data/DummyExpenses";
import Expenses from "./components/ExpenseTracker/Expenses/Expenses";
import NewExpense from "./components/ExpenseTracker/NewExpense/NewExpense";

import DUMMY_GOALS from "./components/GoalTracker/Data/DummyGoals";
import Goals from "./components/GoalTracker/Goals/Goals";
import NewGoal from "./components/GoalTracker/NewGoal/NewGoal";

const App = () => {
  /* ---------- Expense Tracker ---------- */
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  /* ----------  Goals ---------- */
  const [goals, setGoals] = useState(DUMMY_GOALS);

  const addGoalHandler = (enteredText) => {
    setGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  return (
    <div className="App">
      <NewGoal onAddGoal={addGoalHandler} />
      <Goals items={goals} onDeleteItem={deleteItemHandler} />

      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};
export default App;
