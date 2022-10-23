import { useState } from "react";

import { Link } from "react-router-dom";
import { registerUserWithEmail } from "../authentication/firebase";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formOnSubmitHandler = (evt) => {
    evt.preventDefault();
    registerUserWithEmail(email, password);
  };

  const inputEmailOnChangeHandler = (evt) => {
    setEmail(evt.target.value);
  };

  const inputPasswordOnChangeHandler = (evt) => {
    setPassword(evt.target.value);
  };

  return (
    <form
      method="#"
      action="#"
      className="mt-10"
      onSubmit={formOnSubmitHandler}
    >
      <div>
        <input
          value={email}
          onChange={inputEmailOnChangeHandler}
          type="email"
          placeholder="Email"
          className="mt-1 block w-full border-none bg-gray-100 h-11 px-3 rounded-md shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
        />
      </div>
      <div className="mt-7">
        <input
          value={password}
          onChange={inputPasswordOnChangeHandler}
          type="password"
          placeholder="Password"
          className="mt-1 block w-full border-none bg-gray-100 h-11 px-3 rounded-md shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
        />
      </div>

      <div className="mt-7 mb-10">
        <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
          Register
        </button>
      </div>

      <div className="mt-7">
        <div className="flex justify-center items-center">
          <label className="mr-2">Login </label>
          <Link
            to="/login"
            className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
          >
            disini
          </Link>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
