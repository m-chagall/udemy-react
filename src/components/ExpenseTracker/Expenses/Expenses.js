import { useState } from "react";

import Card from "../UI/Card/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";

const Expenses = (props) => {
  // if default 'state' is not assigned, the value might not be rendered properly.
  const [selectedYear, setSelectedYear] = useState("2022");
  const changeFilterHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    console.log(expense.date.getFullYear().toString());
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onChangeFilter={changeFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
