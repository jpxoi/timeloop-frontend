import React from "react";
import { login } from "../../Helpers/Auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import LandingHeader from "../Organisms/LandingHeader";

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);

  function handleClick() {
    setIsLoading(true);

    let button = document.querySelector("button");
    let errorbox = document.getElementById("error-message");
    
    // Disable the button
    button.disabled = true;

    login(document.querySelector("input[type='text']").value, document.querySelector("input[type='password']").value)
      .then((data) => {
        console.log(data);
        navigate("/app", { replace: true });
      })
      .catch((error) => {
        console.error(error);
        errorbox.innerText = error.message;

        // Enable the button
        button.disabled = false;
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const loadingMessage = isLoading ? "Loading..." : "Login";

  return (
    <div className="flex flex-col h-screen min-w-max relative">
      <LandingHeader/>

      <div className="bg-[#F1FBFF] rounded-xl shadow-xl p-8 grid grid-cols-2 gap-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="col-span-2 self-start py-0">
          <h1 className="font-semibold text-3xl text-center p-2">Log in</h1>
          <h1 className="text-center">
            Or{" "}
            <Link
              to="/Signup"
              className="text-sky-600 hover:text-sky-400 underline"
            >
              create an account
            </Link>{" "}
            if you don't have one.
          </h1>
        </div>

        <form className="flex flex-col col-span-2">
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 mt-4 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 mt-4 rounded-md"
          />
          <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4">{loadingMessage}</button>
        </form>
      </div>
      
      <p id="error-message" className="mt-4 text-red-500"></p>
    </div>
  );
}

export default Login;
