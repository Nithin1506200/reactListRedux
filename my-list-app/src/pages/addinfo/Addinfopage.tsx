import { useRef, useState } from "react";
import { userActions } from "../../store/Redux/Users";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { UserInterface } from "../../util/userinfo";
import { Gender } from "../../util/userinfo";
import { useNavigate } from "react-router-dom";

export default function Addinfopage() {
  const name: any = useRef();
  const email: any = useRef();
  const age: any = useRef();
  const address: any = useRef();
  const description: any = useRef();
  const designation: any = useRef();
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
  });
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
  function validateAge() {
    if (age.current.value < 18 || age.current.value > 65) {
      return false;
    } else {
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
      dispatch(userActions.Add(newUser));
      navigate("/");
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
    dispatch(userActions.Add(newUser));
    navigate("/");
  }
  function navigateHome() {
    navigate("/");
  }
  return (
    <div>
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
        checked
        type="radio"
        name="gender"
        id="Male"
        value="Male"
      ></input>
      <br />
      <label htmlFor="Female">Female</label>
      <input
        onClick={updateGender}
        type="radio"
        name="gender"
        id="Female"
        value="Female"
      ></input>
      <br />

      <label htmlFor="Nonbinary">Nonbinary</label>
      <input
        onClick={updateGender}
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
        value="18"
        id="age"
        min="18"
        max="65"
      />
      <br />
      {err.age && <span> Please select age between 18 and 65</span>}
      <label htmlFor="address">Address</label>
      <input ref={address} type="text" name="address" />
      {err.address && <span>address field cannot be empty and short</span>}
      <br />
      <label htmlFor="description">description</label>

      <input
        ref={description}
        id="description"
        type="text"
        name="description"
      ></input>
      {err.description && <span>description cannot be empty and short </span>}
      <br />
      <button onClick={navigateHome}>Cancle</button>
      <button onClick={draft}>Draft</button>
      <button onClick={validateAll}>save</button>
    </div>
  );
}
