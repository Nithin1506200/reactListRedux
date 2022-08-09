import "./App.css";
import { Routes, Route } from "react-router-dom";
import Userpage from "./pages/userpage/Userpage";
import Addinfopage from "./pages/addinfo/Addinfopage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Userpage />} />
        <Route path="/edit" element={<Addinfopage />} />
      </Routes>
    </>
  );
}

export default App;
