import "./App.css";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
import GoalTracker from "./components/GoalTracker/GoalTracker";

const App = () => {
  return (
    <div className="App">
      <GoalTracker />
      <hr />
      <ExpenseTracker />
    </div>
  );
};
export default App;
