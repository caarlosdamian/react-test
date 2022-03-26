import { createContext, useReducer } from "react";
import UserReducer from "./userReducer";

const INITIAL_STATE = {
  isLogin: false,
};

export const userContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);


  return (
    <userContext.Provider value={{ isLogin: state, dispatch }}>
      {children}
    </userContext.Provider>
  );
};
