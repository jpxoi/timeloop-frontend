export function checkAuth() {
  const token = localStorage.getItem("AuthToken");
  return !!token;
}

// Path: src/Helpers/Auth.js

export function logout() {
  removeAuthToken();
  localStorage.removeItem("username");
}

// Path: src/Helpers/Auth.js

export function login(username, password) {
  return new Promise((resolve, reject) => {
    fetch("https://timeloop-backend.onrender.com/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          setAuthToken(data.token);
          setUserData(username);
          resolve(data);
        } else {
          reject(data);
        }
      })
      .catch((error) => reject(error));
  });
}

// Path: src/Helpers/Auth.js

export function setAuthToken(token) {
  // Store the token in cookie of the browser
  localStorage.setItem("AuthToken", token);
}

// Path: src/Helpers/Auth.js

export function removeAuthToken() {
  // Remove the token from the cookie of the browser
  localStorage.removeItem("AuthToken");
}

// Path: src/Helpers/Auth.js

export function setUserData(username) {
  localStorage.setItem("username", username);
}