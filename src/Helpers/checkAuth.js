export const checkAuth = () => {
  const token = localStorage.getItem("AuthToken");
  return !!token;
};
