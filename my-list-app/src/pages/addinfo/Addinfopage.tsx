import { useEffect, useRef, useState } from "react";
import { userActions } from "../../store/Redux/Users";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { UserInterface } from "../../util/userinfo";
import { Gender } from "../../util/userinfo";
import { Params, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Themechanger from "../../components/Theme/Themechanger";
import styles from "./addinfo.module.scss";
import { motion } from "framer-motion";
export default function Addinfopage() {
  const users: UserInterface[] = useSelector(
    (state: { users: UserInterface[] }) => {
      return state.users;
    }
  );
  const [ageValue, setAgevalue] = useState(18);

  const name: any = useRef();
  const email: any = useRef();
  const age: any = useRef();
  const address: any = useRef();
  const description: any = useRef();
  const designation: any = useRef();
  const male: any = useRef();
  const female: any = useRef();
  const nonbinary: any = useRef();
  const [gender, setGender] = useState<Gender>("Male");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [err, setErr] = useState({
    name: false,
    email: false,
    gender: false,
    age: false,
    address: false,
    description: false,
    designation: false,
    usernotfound: false,
  });
  const params: Readonly<Params<string>> = useParams<string>();
  // setting the current data
  useEffect(() => {
    if (params.userId !== "addUser") {
      const id = params.userId;
      const currentUser = users.find((element) => element.id === id);
      if (currentUser !== undefined) {
        name.current.value = currentUser?.name;
        email.current.value = currentUser?.email;
        setGender(() => currentUser.gender);
        if (currentUser.gender === "Male") {
          male.current.checked = true;
          female.current.checked = false;
          nonbinary.current.checked = false;
        }
        if (currentUser.gender === "Female") {
          male.current.checked = false;
          female.current.checked = true;
          nonbinary.current.checked = false;
        }
        if (currentUser.gender === "Nonbinary") {
          male.current.checked = false;
          female.current.checked = false;
          nonbinary.current.checked = true;
        }
        setAgevalue(currentUser.age);
        age.current.value = currentUser.age;
        description.current.value = currentUser.description;
        address.current.value = currentUser.address;
        designation.current.value = currentUser.designation;
      } else {
        setErr((prev) => {
          return { ...prev, usernotfound: true };
        });
      }
    } else {
      male.current.checked = true;
    }
  }, [params, users]);
  function updateGender(e: any) {
    setGender(e.target.value);
  }
  function validateName() {
    if (name.current.value === "") {
      return false;
    } else {
      return true;
    }
  }
  function validateMail() {
    if (email.current.value === "") {
      return false;
    } else {
      return true;
    }
  }
  function validateAge(e: any = null) {
    if (age.current.value < 18 || age.current.value > 65) {
      return false;
    } else {
      if (e) {
        setAgevalue(e.target.value);
      }
      return true;
    }
  }
  function validateAddress() {
    if (address.current.value.length < 5) {
      return false;
    } else {
      return true;
    }
  }
  function validateDescription() {
    if (description.current.value.length < 20) {
      return false;
    } else {
      return true;
    }
  }

  function validateDesignation() {
    if (designation.current.value.length < 3) {
      return false;
    } else {
      return true;
    }
  }

  function validateAll() {
    const currentErr = {
      age: !validateAge(),
      name: !validateName(),
      address: !validateAddress(),
      gender: false,
      description: !validateDescription(),
      email: !validateMail(),
      designation: !validateDesignation(),
      usernotfound: false,
    };
    console.log(gender);
    if (
      Object.values(currentErr).every((value) => {
        return value === false;
      })
    ) {
      const newUser: UserInterface = {
        id: uuidv4(),
        saveType: "Saved",
        name: name.current.value,
        email: email.current.value,
        gender,
        age: age.current.value,
        designation: designation.current.value,
        address: address.current.value,
        description: description.current.value,
      };
      if (params.userId === "addUser") {
        dispatch(userActions.Add(newUser));
        navigate("/");
      } else {
        if (params.userId !== undefined) {
          newUser.id = params.userId;
          dispatch(userActions.Edit(newUser));
          navigate("/");
        }
      }
    } else {
      setErr(currentErr);
    }
  }

  function draft() {
    const newUser: UserInterface = {
      id: uuidv4(),
      saveType: "Draft",
      name: name.current.value,
      email: email.current.value,
      gender,
      age: age.current.value,
      designation: designation.current.value,
      address: address.current.value,
      description: description.current.value,
    };
    if (params.userId === "addUser") {
      dispatch(userActions.Add(newUser));
      navigate("/");
    } else {
      if (typeof params.userId === "string") {
        newUser.id = params.userId;
        dispatch(userActions.Edit(newUser));
        navigate("/");
      }
    }
  }
  function navigateHome() {
    navigate("/");
  }
  return (
    <motion.div
      className={styles.addinfo}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.wrapper}>
        <Themechanger></Themechanger>
        {err.usernotfound && <span>user not found</span>}
        <h1> Add info</h1>
        <label htmlFor="Name">Name</label>
        <input ref={name} type="text" name="Name" />
        {err.name && <span> Name field cannot be empty</span>}

        <br />
        <label htmlFor="Name">email</label>
        <input
          ref={email}
          type="email"
          name="email"
          placeholder="johndoe@gmail.com"
        />
        {err.email && <span>enter valid email</span>}
        <br />
        <label htmlFor="Male">Male</label>
        <input
          onClick={updateGender}
          ref={male}
          type="radio"
          name="gender"
          id="Male"
          value="Male"
        ></input>
        <br />
        <label htmlFor="Female">Female</label>
        <input
          onClick={updateGender}
          ref={female}
          type="radio"
          name="gender"
          id="Female"
          value="Female"
        ></input>
        <br />

        <label htmlFor="Nonbinary">Nonbinary</label>
        <input
          onClick={updateGender}
          ref={nonbinary}
          type="radio"
          name="gender"
          id="Nonbinary"
          value="Nonbinary"
        ></input>
        {err.gender && <span> please select a valid option</span>}
        <br />
        <label htmlFor="designation">designation</label>
        <input ref={designation} type="text" name="Name" />
        {err.designation && <span> designation field cannot be empty</span>}

        <br />
        <label htmlFor="age">Age</label>
        <input
          onChange={validateAge}
          ref={age}
          type="number"
          value={ageValue}
          id="age"
        />
        <br />
        {err.age && <span> Please select age between 18 and 65</span>}
        <label htmlFor="address">Address</label>
        <input
          className={styles.address}
          ref={address}
          type="text"
          id="address"
        />
        {err.address && <span>address field cannot be empty and short</span>}
        <br />
        <label htmlFor="description">description</label>

        <textarea
          ref={description}
          id="description"
          className={styles.description}
          name="description"
        ></textarea>
        {err.description && <span>description cannot be empty and short </span>}
        <br />
        <button onClick={navigateHome}>Cancle</button>
        <button onClick={draft}>Draft</button>
        <button onClick={validateAll}>save</button>
      </div>
    </motion.div>
  );
}
