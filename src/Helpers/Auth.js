export function checkAuth() {
  const token = localStorage.getItem("AuthToken");
  return !!token;
}

// Path: src/Helpers/Auth.js

export function logout() {
  localStorage.removeItem("AuthToken");
}

// Path: src/Helpers/Auth.js

export function login(token) {
  localStorage.setItem("AuthToken", token);
}

// Path: src/Helpers/Auth.js