import { useState } from "react";

import DUMMY_GOALS from "./Data/DummyGoals";
import Goals from "./Goals/Goals";
import NewGoal from "./NewGoal/NewGoal";

const GoalTracker = () => {
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
    <>
      <h1>Goal Tracker</h1>
      <NewGoal onAddGoal={addGoalHandler} />
      <Goals items={goals} onDeleteItem={deleteItemHandler} />
    </>
  );
};
export default GoalTracker;
