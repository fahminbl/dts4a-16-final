import { useState } from "react";
import { Link } from "react-router-dom";
import useUserStore, { selectStoreUser } from "../apis/user";
import { googleProvider, auth } from "../authentication/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //  const nav = useNavigate();
  const userStoreUser = useUserStore(selectStoreUser);
  const [err, setErr] = useState(null);
  const inputEmailOnChangeHandler = (evt) => {
    setEmail(evt.target.value);
  };

  const inputPasswordOnChangeHandler = (evt) => {
    setPassword(evt.target.value);
  };

  const formOnSubmitHandler = async (evt) => {
    evt.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      //    console.log(userCredential);

      userStoreUser(userCredential);
    } catch (error) {
      setErr(`Email/Password yang anda masukkan salah ${error.message}`);
    }
  };
  // const githubOnClickHandler = (evt) => {};

  const googleOnClickHandler = async (evt) => {
    evt.preventDefault();
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      userStoreUser(userCredential);
    } catch (error) {
      setErr(`Email/Password yang anda masukkan salah ${error.message}`);
    }
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
          className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-md hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
        />
      </div>
      <div className="mt-7">
        <input
          autoComplete="new-password"
          value={password}
          onChange={inputPasswordOnChangeHandler}
          type="password"
          placeholder="Password"
          className="block w-full px-3 mt-1 bg-gray-100 border-none shadow-lg h-11 rounded-md hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
        />
      </div>

      <div className="mt-7">
        <button className="w-full py-3 text-white bg-blue-500 shadow-xl rounded-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
          Login
        </button>
        <p className="text-red">{err}</p>
      </div>
      <div className="flex items-center text-center mt-7">
        <hr className="w-full border-gray-300 border-1 rounded-md" />
        <label className="block w-full text-sm font-medium text-gray-600">
          Atau
        </label>
        <hr className="w-full border-gray-300 border-1 rounded-md" />
      </div>
      <div className="flex justify-center w-full mt-7">
        <button
          onClick={googleOnClickHandler}
          className="w-full px-4 py-2 text-white bg-red-500 border-none shadow-xl cursor-pointer rounded-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
        >
          Google
        </button>
      </div>
      <div className="mt-7">
        <div className="flex items-center justify-center">
          <label className="mr-2">Daftar </label>
          <Link
            to="/register"
            className="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
          >
            disini
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
