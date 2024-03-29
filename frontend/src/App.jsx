import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, Signup } from "./path/routes";

function App() {
  // Make a Card Component for ecccomerce website
  return (
    <Routes>
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />
    </Routes>
  );
}

export default App;

