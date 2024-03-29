import React from "react";
import { login } from "../../Helpers/Auth";
import { useNavigate } from "react-router-dom";

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
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>Login to Your Account</h1>
      <input
        type="text"
        placeholder="Username"
        className="border border-gray-400 p-2 mt-4"
      />
      <input
        type="password"
        placeholder="Password"
        className="border border-gray-400 p-2 mt-4"
      />
      <br />
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{loadingMessage}</button>
      <p id="error-message" className="mt-4 text-red-500"></p>
    </div>
  );
}

export default Login;
