import React from "react";

import RegisterForm from "../components/RegisterForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/firebase";

const RegisterPage = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Register Page";
    if (user) {
      navigate("/");
    }
    if (!user) {
      navigate("/register");
    }
  }, [user, navigate]);
  return (
    <div className="font-sans">
      <div className="relative flex flex-col items-center min-h-screen bg-gray-100 sm:justify-center ">
        <div className="relative w-full sm:max-w-sm">
          <div className="absolute w-full h-full bg-blue-400 shadow-lg card rounded-3xl transform -rotate-6" />
          <div className="absolute w-full h-full bg-red-400 shadow-lg card rounded-3xl transform rotate-6" />
          <div className="relative w-full px-6 py-4 bg-gray-100 shadow-md rounded-3xl">
            <label
              htmlFor
              className="block mt-3 text-lg font-semibold text-center text-gray-700"
            >
              Register Form
            </label>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
