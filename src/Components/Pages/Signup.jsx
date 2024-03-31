import React from "react";
import { Link } from "react-router-dom";
import { signup } from "../../Helpers/Auth";
import { useNavigate } from "react-router-dom";

import CloudDeco from "../../assets/illustrations/CloudDeco.svg";
import CloudDecoInvert from "../../assets/illustrations/CloudDecoInvert.svg";

import LandingHeader from "../Organisms/LandingHeader";

function Signup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);

  function handleClick() {
    setIsLoading(true);

    const button = document.querySelector("button");
    const errorbox = document.getElementById("error-message");

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Disable the button
    button.disabled = true;

    signup(firstName, lastName, email, username, password)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        errorbox.innerText = error.message;

        // Enable the button
        button.disabled = false;
      })
      .finally(() => {
        setIsLoading(false);
        navigate("/app", { replace: true });
      });
  }

  const loadingMessage = isLoading ? "Loading..." : "Sign Up";

  return (
    <div className="flex flex-col h-screen min-w-max relative">
      <LandingHeader />

      <div className="bg-[#F1FBFF] rounded-xl shadow-xl p-8 grid grid-cols-2 gap-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="col-span-2 self-start py-0">
          <h1 className="font-semibold text-3xl text-center p-2">Sign up</h1>
          <h1 className="text-center">
            Or{" "}
            <Link
              to="/Login"
              className="text-sky-600 hover:text-sky-400 underline"
            >
              log in
            </Link>{" "}
            if you already have an account.
          </h1>
        </div>

        <form className="flex flex-col col-span-2 self-start py-0" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-5 mt-4">
            <input
              id="first-name"
              type="text"
              placeholder="First Name"
              className="border-gray-300 rounded-md"
            />
            <input
              id="last-name"
              type="text"
              placeholder="Last Name"
              className="border-gray-300 rounded-md"
            />
          </div>

          <input
            id="email"
            type="email"
            placeholder="E-mail"
            className="col-span-2 border-gray-300 rounded-md mt-4"
          />
          <input
            id="username"
            type="text"
            placeholder="Username"
            className="col-span-2 border-gray-300 rounded-md mt-4"
          />
          <input
            id="password"
            type="password"
            placeholder="Create Password"
            className="col-span-2 border-gray-300 rounded-md mt-4"
          />

          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md col-start-2 mt-4"
          >
            {loadingMessage}
          </button>
        </form>
      </div>

      <div className="absolute bottom-8 w-full text-center">
        <p id="error-message" className="text-center text-red-500"></p>
      </div>

      <img src={CloudDeco} className="w-[150px] absolute bottom-36"></img>
      <img
        src={CloudDecoInvert}
        className="w-[150px] absolute right-0 top-36"
      ></img>
    </div>
  );
}

export default Signup;
