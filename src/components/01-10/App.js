/* 01 - 10 */
import { useContext } from "react";

import ExpenseTracker from "./components/01-10/ExpenseTracker/ExpenseTracker";
import GoalTracker from "./components/GoalTracker/GoalTracker";
import UserGenerator from "./components/01-10/UserGenerator/UserGenerator";

import Login from "./components/01-10/Login/Login";
import Home from "./components/01-10/Home/Home";
import MainHeader from "./components/01-10/MainHeader/MainHeader";

import AuthContext from "./components/01-10/store/auth-context";

import "./App.css";

const App = () => {
  const context = useContext(AuthContext);
  return (
    <div className="App">
      <MainHeader />
      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Home />}
      </main>

      <UserGenerator />
      <hr />
      <GoalTracker />
      <hr />
      <ExpenseTracker />
    </div>
  );
};
export default App;
