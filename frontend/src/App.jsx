import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Signup, HomePage, ActivationPage, Product } from "./path/routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
                <Route
          path="/product"
          element={<Product />}
        />
      </Routes>
      <ToastContainer
        className="z-50 text-sm py-2 px-3" // Adjust size as needed
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;
