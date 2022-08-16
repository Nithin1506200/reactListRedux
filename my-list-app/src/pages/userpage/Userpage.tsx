import List from "../../components/list/List";
import { useSelector } from "react-redux";
import { UserInterface } from "../../util/userinfo";
import { Link } from "react-router-dom";
import addicon from "../../assets/icons/add-user.png";
import Themechanger from "../../components/Theme/Themechanger";
import styles from "./userpage.module.scss";
import { motion } from "framer-motion";
export default function Userpage() {
  const users: UserInterface[] = useSelector(
    (state: { users: UserInterface[] }) => {
      return state.users;
    }
  );
  return (
    <motion.div
      className={styles.userpage}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 1 }}
    >
      <Themechanger></Themechanger>
      <h1 data-testid="header">Users</h1>

      <Link to="/edit/addUser">
        <img src={addicon} alt="" />
      </Link>
      {users.map((i) => {
        return <List key={i.id} user={i}></List>;
      })}
    </motion.div>
  );
}
