import { useContext } from "react";

import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
import GoalTracker from "./components/GoalTracker/GoalTracker";
import UserGenerator from "./components/UserGenerator/UserGenerator";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

import AuthContext from "./components/store/auth-context";

import "./App.css";

const App = () => {
  const context = useContext(AuthContext);
  return (
    <>
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
    </>
  );
};
export default App;
