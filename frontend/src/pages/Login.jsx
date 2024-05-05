import { FiKey } from "react-icons/fi";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { server } from "../server";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `${server}/user/login`,
        {
          email,
          password,
        }
      )
      .then((res) => {
        toast.success("Login Success!");
        navigate("/");
        window.location.reload(true);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-12 sm:px-6 lg:px-8">
      <div className="sm:w-full max-w-xl bg-white rounded-lg shadow-md p-6 ">
        <div className="flex items-center mb-4">
          <FiKey className="text-4xl text-slate-950" />
          <h2 className="ml-4 text-3xl font-extrabold text-gray-900">vIN.c</h2>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Welcome back!
        </h2>
        <p className="text-lg text-gray-900 mb-6">Log in to your account</p>

        {/* Login Form */}
        <form className="space-y-6 px-2 " onSubmit={handleSubmit}>
          <div className="mt-1">
            <label
              htmlFor="email"
              className="block text-left text-lg font-medium mb-1 text-gray-900"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg text-black bg-white"
              placeholder="john@example.com"
              autoComplete=""
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-left text-lg font-medium mb-1 text-gray-900 "
            >
              Password
            </label>

            <div className="relative mt-1 ">
              <input
                type={visible ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg text-black bg-white"
                placeholder="password"
                autoComplete="off"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                {visible ? (
                  <AiOutlineEye
                    className="h-6 w-6"
                    onClick={() => setVisible(false)} // Toggle visibility to the opposite of the current state
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="h-6 w-6"
                    onClick={() => setVisible(true)} // Toggle visibility to the opposite of the current state
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                className="hover:cursor-pointer"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-lg font-medium mb-1 text-gray-900"
              >
                Remember me
              </label>
            </div>

            <a href="#" className="text-lg font-medium mb-1 text-gray-900">
              Forgot Password ?
            </a>
          </div>

          <div className="mt-1">
            <button
              type="submit"
              className="w-full px-4 py-2 text-lg font-medium text-white bg-black border border-transparent rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Sign in
            </button>
          </div>
          <div className="flex">
            <h4>Not have any account?</h4>
            <Link to="/sign-up" className="text-blue-600 pl-2">
              Create an Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
