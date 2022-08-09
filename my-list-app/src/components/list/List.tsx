import { UserInterface } from "../../util/userinfo";
import styles from "./list.module.scss";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/Redux/Users";
export default function List(props: { user: UserInterface }) {
  const email = `mailto:${props.user.email}`;
  const dispatch = useDispatch();
  function deletecurrent() {
    dispatch(userActions.Delete(props.user.id));
  }
  return (
    <>
      <div className={styles.list}>
        {props.user.saveType === "Draft" ? <p>this is draft</p> : <p>saved</p>}
        <h2>{props.user.name}</h2>
        <h3>{props.user.age}</h3>
        <a href={email}>{props.user.email}</a>
        <h4>{props.user.gender}</h4>
        <h4>{props.user.designation}</h4>
        <h4>{props.user.address}</h4>
        <p>{props.user.description}</p>
        <button onClick={deletecurrent}>Delete</button>
      </div>
    </>
  );
}
