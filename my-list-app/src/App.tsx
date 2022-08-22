import "./App.css";
import { Routes, Route } from "react-router-dom";
import Userpage from "./pages/userpage/Userpage";
import Addinfopage from "./pages/addinfo/Addinfopage";
import { UserInterface } from "./util/userinfo";
import testUsers from "./test/users";
import { useEffect } from "react";
import { userActions } from "./store/Redux/Users";
import { useDispatch } from "react-redux";
import { themeActions } from "./store/Redux/Theme";
import { Theme } from "./store/Redux/Theme";
import { AnimatePresence } from "framer-motion";

/**
 * app is used for this things
 */
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let initialUsers: UserInterface[] = [];
    const localuser = localStorage.getItem("users");
    if (localuser === null || JSON.parse(localuser).length === 0) {
      localStorage.setItem("users", JSON.stringify(testUsers));

      initialUsers = testUsers;
    } else {
      const localUsers = localStorage.getItem("users");
      if (localUsers !== null) {
        initialUsers = JSON.parse(localUsers);
      }
    }

    dispatch(userActions.Insert(initialUsers));
    let localtheme = localStorage.getItem("theme");
    if (localtheme !== null) {
      const theme: Theme = JSON.parse(localtheme);

      dispatch(themeActions.ChangeTheme(theme));
    }
   // console.log("use effect running");
  }, [dispatch]);
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Userpage />} />
          <Route path="/edit/:userId" element={<Addinfopage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
