import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import useLocalStorage from "../hooks/UseLocalstorage";

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("authorization", {});

  function handleLogIn() {
    axios
      .post(
        "https://dummyjson.com/auth/login",
        {
          username: "atuny0",
          password: "9uQFF1Lh",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setAuth(res.data.token);
      })
      .catch((error) => console.error("Error:", error));
  }

  return (
    <AuthContext.Provider value={{ handleLogIn, auth }}>
      {children}
    </AuthContext.Provider>
  );
};
