import List from "../../components/list/List";
import { useSelector } from "react-redux";
import { UserInterface } from "../../util/userinfo";
import { Link } from "react-router-dom";

export default function Userpage() {
  const users: UserInterface[] = useSelector(
    (state: { users: UserInterface[] }) => {
      return state.users;
    }
  );
  return (
    <>
      <h1>Users</h1>
      <Link to="/edit">Add users</Link>
      {users.map((i) => {
        return <List key={i.id} user={i}></List>;
      })}
    </>
  );
}
