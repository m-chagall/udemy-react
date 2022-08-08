import UsersList from "./UsersList";

const Users = (props) => {
  let list = <p>No users are found. Create a user.</p>;
  if (props.usersList.length > 0) {
    list = <UsersList users={props.usersList} />;
  }
  return <>{list}</>;
};

export default Users;
