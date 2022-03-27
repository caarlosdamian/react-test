import { createContext, useEffect, useReducer } from "react";
import UserReducer from "./userReducer";

const INITIAL_STATE = {
  isLogin: false,
};

export const userContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE,()=>{
    const localData = localStorage.getItem('user')
    return localData ? JSON.parse(localData): {isLogin: false}
  });
  useEffect(() => {
    localStorage.setItem('user',JSON.stringify(state))
  }, [state])
  



  return (
    <userContext.Provider value={{ isLogin: state, dispatch }}>
      {children}
    </userContext.Provider>
  );
};
