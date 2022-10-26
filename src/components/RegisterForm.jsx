import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../authentication/firebase";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formOnSubmitHandler = async (evt) => {
    evt.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);

      return userCredential;
    } catch (error) {
      return error;
      // console.log("ERROR CODE: " + error.code)
      // console.log("ERROR MSG: " + error.message);
    }
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
          className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-md hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
        />
      </div>
      <div className="mt-7">
        <input
          value={password}
          onChange={inputPasswordOnChangeHandler}
          type="password"
          placeholder="Password"
          className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-md hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
        />
      </div>

      <div className="mb-10 mt-7">
        <button className="w-full py-3 text-white bg-blue-500 shadow-xl rounded-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
          Register
        </button>
      </div>

      <div className="mt-7">
        <div className="flex items-center justify-center">
          <label className="mr-2">Login </label>
          <Link
            to="/login"
            className="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
          >
            disini
          </Link>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
