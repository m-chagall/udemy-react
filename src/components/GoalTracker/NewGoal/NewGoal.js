import { useState } from "react";
import Button from "../UI/Button/Button";
import styles from "./NewGoal.module.css";

// import "./NewGoal.css";

// import styled from "styled-components";
// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background: ${(props) => (props.invalid ? "salmon" : "#ccc")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const NewGoal = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const NewGoalChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <section id={`${styles["goal-form"]}`}>
      <form onSubmit={formSubmitHandler}>
        {/* <FormControl className={!isValid ? `invalid` : ""}> */}
        {/* <FormControl invalid={!isValid}> */}
        <div
          className={`${styles["form-control"]} ${!isValid && styles.invalid}`}>
          <label>Daily Goal</label>
          <input type="text" onChange={NewGoalChangeHandler} />
        </div>
        {/* </FormControl> */}
        <Button type="submit">Add Goal</Button>
      </form>
    </section>
  );
};

export default NewGoal;
