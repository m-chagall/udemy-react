import { useState } from "react";
import AddUser from "./Users/AddUser";
import Users from "./Users/Users";

const UserGenerator = () => {
  const DUMMY_USERS = [
    {
      id: "u1",
      username: "Nate",
      age: 29,
    },
  ];

  const [usersList, setUsersList] = useState(DUMMY_USERS);

  const addUserHandler = (username, age) => {
    setUsersList((prevUsersList) => {
      // const updatedUsersList = [...prevUsersList];
      // updatedUsersList.unshift({ id: Math.random().toString(), username: username, age: age });
      // return updatedUsersList;
      console.log([
        ...prevUsersList,
        { id: Math.random().toString(), username: username, age: age },
      ]);
      return [
        ...prevUsersList,
        { id: Math.random().toString(), username: username, age: age },
      ];
    });
  };
  const deleteUserHandler = () => {};
  return (
    <>
      <h1>User Generator</h1>
      <AddUser onAddUser={addUserHandler} />
      <Users usersList={usersList} onDeleteUser={deleteUserHandler} />
    </>
  );
};
export default UserGenerator;
