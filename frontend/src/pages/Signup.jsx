import { FiKey } from "react-icons/fi";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { server } from "../server";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(true);
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const config = { headers: { "Content-Type": "multipart/form-data" } };
    
    const newForm = new FormData();
    newForm.append("file", avatar);
    newForm.append("name", name);
    newForm.append("email", email);
    newForm.append("password", password);

    axios
      .post(`${server}/user/create-user`, newForm, config)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleFullNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-12 sm:px-6 lg:px-8">
      <div className="sm:w-full max-w-xl bg-white rounded-lg shadow-md p-6 ">
        <div className="flex items-center mb-4">
          <FiKey className="text-4xl text-slate-950" />
          <h2 className="ml-4 text-3xl font-extrabold text-gray-900">vIN.c</h2>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Welcome !</h2>
        <p className="text-lg text-gray-900 mb-6">Create your account</p>

        {/* Signup Form */}
        <form className="space-y-6 px-2" onSubmit={handleSubmit}>
          <div className="mt-1">
            <label
              htmlFor="fullName"
              className="block text-left text-lg font-medium mb-1 text-gray-900"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={name}
              onChange={handleFullNameChange}
              className="appearance-none block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg text-black bg-white"
              placeholder="Sajan Mainali"
              autoComplete="off"
              required
            />
          </div>

          <div className="mt-1">
            <label
              htmlFor="email"
              className="block text-left text-lg font-medium mb-1 text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="johndoe@gmail.com"
              autoComplete="off"
              className="appearance-none block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg text-black bg-white"
              required
            />
          </div>

          <div className="mt-1">
            <label
              htmlFor="password"
              className="block text-left text-lg font-medium mb-1 text-gray-900"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={visible ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                autoComplete="off"
                className="appearance-none block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg text-black bg-white"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                {visible ? (
                  <AiOutlineEye
                    className="h-6 w-6 text-gray-400"
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="h-6 w-6 text-gray-400"
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="avatar"
              className="block text-sm font-medium text-gray-900"
            >
              Avatar
            </label>
            <div className="mt-2 flex items-center">
              <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                {avatar ? (
                  <img
                    src={URL.createObjectURL(avatar)}
                    alt="avatar"
                    className="h-full w-full rounded-full"
                  />
                ) : (
                  <RxAvatar className="h-full w-full object-cover rounded-full" />
                )}
              </span>
              <label
                htmlFor="file-input"
                className="ml-5  px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer "
              >
                <span> Upload a File</span>
                <input
                  type="file"
                  name="avatar"
                  id="file-input"
                  accept=".jpeg,.jpg,.png"
                  onChange={handleFileInputChange}
                  className="sr-only"
                />
              </label>
            </div>
          </div>

          <div className="mt-1">
            <button
              type="submit"
              className="w-full px-4 py-2 text-lg font-medium text-white bg-black rounded-md hover:bg-gra-900 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Create an Account
            </button>
          </div>

          <div className="mt-1 flex ">
            Already have an account?
            <Link to="/sign-in" className=" text-blue-500 pl-2 ">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
