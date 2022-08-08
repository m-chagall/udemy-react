import "./App.css";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
import GoalTracker from "./components/GoalTracker/GoalTracker";
import UserGenerator from "./components/UserGenerator/UserGenerator";

const App = () => {
  return (
    <div className="App">
      <UserGenerator />
      <hr />
      <GoalTracker />
      <hr />
      <ExpenseTracker />
    </div>
  );
};
export default App;
