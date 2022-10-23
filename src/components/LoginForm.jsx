import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUserStore, {
  selectStoreUser,
} from "../apis/user";
import { signInWithEmail, signInWithGoogle } from "../authentication/firebase";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const userStoreUser = useUserStore(selectStoreUser);

  const inputEmailOnChangeHandler = (evt) => {
    setEmail(evt.target.value);
  };

  const inputPasswordOnChangeHandler = (evt) => {
    setPassword(evt.target.value);
  };

  const formOnSubmitHandler = (evt) => {
    evt.preventDefault();
    signInWithEmail(email, password)
      .then((res) => {
          nav("/");
          userStoreUser(email, res);
      })
      .catch((err) => {
          console.log(err)
      });
  };

  // const githubOnClickHandler = (evt) => {};

  const googleOnClickHandler = (evt) => {
    signInWithGoogle()
      .then((res) => {
          nav("/");
          userStoreUser(res?.user?.email, res?.user);
      })
      .catch((err) => {
       console.log(err)
      });
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
          autoComplete="new-password"
          value={email}
          onChange={inputEmailOnChangeHandler}
          type="email"
          placeholder="Email"
          className="mt-1 block w-full border-none bg-gray-100 h-11 px-3 rounded-md shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
        />
      </div>
      <div className="mt-7">
        <input
          autoComplete="new-password"
          value={password}
          onChange={inputPasswordOnChangeHandler}
          type="password"
          placeholder="Password"
          className="mt-1 block w-full border-none bg-gray-100 h-11 px-3 rounded-md shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
        />
      </div>

      <div className="mt-7">
        <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
          Login
        </button>
      </div>
      <div className="flex mt-7 items-center text-center">
        <hr className="border-gray-300 border-1 w-full rounded-md" />
        <label className="block font-medium text-sm text-gray-600 w-full">
          Atau
        </label>
        <hr className="border-gray-300 border-1 w-full rounded-md" />
      </div>
      <div className="flex mt-7 justify-center w-full">
        <button
          onClick={googleOnClickHandler}
          className="bg-red-500 w-full border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
        >
          Google
        </button>
      </div>
      <div className="mt-7">
        <div className="flex justify-center items-center">
          <label className="mr-2">Daftar </label>
          <Link
            to="/register"
            className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
          >
            disini
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
