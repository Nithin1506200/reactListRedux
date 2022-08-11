import { UserInterface } from "../../util/userinfo";
import styles from "./list.module.scss";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/Redux/Users";
import emaillogo from "../../assets/icons/email.png";
import agelogo from "../../assets/icons/age.png";
import pinlogo from "../../assets/icons/pin.png";
import Greywrapper from "../ui/Greywrapper";
export default function List(props: { user: UserInterface }) {
  const email = `mailto:${props.user.email}`;
  const dispatch = useDispatch();
  function deletecurrent() {
    dispatch(userActions.Delete(props.user.id));
  }
  return (
    <>
      <div className={styles.list}>
        <h2>{props.user.name}</h2>
        <div className={styles.row}>
          <Greywrapper>
            <h4>
              <img src={agelogo} alt="" /> {props.user.age}
            </h4>
          </Greywrapper>
          <Greywrapper>
            <a href={email}>
              <img src={emaillogo} alt="" /> {props.user.email}
            </a>
          </Greywrapper>
          <Greywrapper>
            {" "}
            <h4>Gender: {props.user.gender}</h4>
          </Greywrapper>
          <Greywrapper>
            <h4>Designation: {props.user.designation}</h4>
          </Greywrapper>
          <Greywrapper>
            <h4>
              <img src={pinlogo} alt="" />
              {props.user.address}
            </h4>
          </Greywrapper>
          <Greywrapper>
            {props.user.saveType === "Draft" ? (
              <p className={styles.description}>draft</p>
            ) : (
              <p className={styles.description}>saved</p>
            )}
          </Greywrapper>
          <button onClick={deletecurrent}>Delete</button>
        </div>
        <p className={styles.description}>{props.user.description}</p>
      </div>
    </>
  );
}
