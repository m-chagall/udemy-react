import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  // if default 'state' is not assigned, the value might not be rendered properly.
  const [selectedYear, setSelectedYear] = useState("2022");
  const changeFilterHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
    console.log(selectedYear);
  };
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onChangeFilter={changeFilterHandler}
        />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
        <ExpenseItem
          title={props.items[4].title}
          amount={props.items[4].amount}
          date={props.items[4].date}
        />
      </Card>
    </>
  );
};

export default Expenses;
