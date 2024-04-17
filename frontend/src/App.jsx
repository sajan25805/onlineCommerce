import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, Signup, HomePage,ActivationPage } from "./path/routes";

function App() {
  // Make a Card Component for ecccomerce website
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/activation/:activation_token" element={<ActivationPage />} />
    </Routes>
  );
}

export default App;
