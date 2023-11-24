import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import useLocalStorage from "../hooks/UseLocalstorage";

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("authorization", {});

  function handleLogIn(data) {
    axios
      .post(
        "https://dummyjson.com/auth/login",

        data,

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setAuth({ ...auth, ...res.data });
      })

      .catch((error) => console.error("Error:", error));
  }

  function logOut() {
    return setAuth({ ...auth, username: "", password: "" });
  }

  return (
    <AuthContext.Provider value={{ handleLogIn, auth, setAuth, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
