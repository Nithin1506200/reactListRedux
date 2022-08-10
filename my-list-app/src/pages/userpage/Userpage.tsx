import List from "../../components/list/List";
import { useSelector } from "react-redux";
import { UserInterface } from "../../util/userinfo";
import { Link } from "react-router-dom";
import addicon from "../../assets/icons/add-user.png";
import styles from "./userpage.module.scss";
export default function Userpage() {
  const users: UserInterface[] = useSelector(
    (state: { users: UserInterface[] }) => {
      return state.users;
    }
  );
  return (
    <div className={styles.userpage}>
      <h1>Users</h1>
      <Link to="/edit">
        <img src={addicon} alt="" />
      </Link>
      {users.map((i) => {
        return <List key={i.id} user={i}></List>;
      })}
    </div>
  );
}
