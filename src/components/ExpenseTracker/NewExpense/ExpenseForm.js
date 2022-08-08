import { useState } from "react";

import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import classes from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredTitle.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a title. (non-empty)",
      });
      return;
    }
    if (enteredAmount.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter an amount. (non-empty)",
      });
      return;
    }
    if (+enteredAmount <= 0) {
      setError({
        title: "Invalid input",
        message: "Please enter an amount greater than 0.",
      });
      return;
    }
    if (enteredDate === null) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid date. (non-empty)",
      });
      return;
    }
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(parseInt(event.target.value));
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className={classes.newExpenseControls}>
          <div className={classes.newExpenseControl}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className={classes.newExpenseControl}>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              value={enteredAmount}
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className={classes.newExpenseControl}>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2022-01-01"
              max="2025-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className={classes.newExpenseActions}>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};
export default ExpenseForm;
