// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Rent",
    amount: 1000,
    date: new Date(2022, 7, 1),
  },
  {
    id: "e2",
    title: "Bills",
    amount: 300,
    date: new Date(2022, 7, 1),
  },
  {
    id: "e3",
    title: "Food",
    amount: 800,
    date: new Date(2022, 7, 1),
  },
  {
    id: "e4",
    title: "Transportation",
    amount: 200,
    date: new Date(2022, 7, 1),
  },
  {
    id: "e5",
    title: "Setup for WFH",
    amount: 400,
    date: new Date(2022, 7, 1),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
