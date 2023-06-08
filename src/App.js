import React, { useReducer, useEffect, useContext } from "react";

import { AuthContext } from "./auth/AuthContext";

import { authReducer } from "./auth/authReducer";
import AppRouter from "./routers/AppRouter";
import UserProvider from './context/UserProvider';
import {UserContext} from './context/UserProvider';

import "./App.css";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

export const App =() => {
  // const { user } = useContext(UserContext)

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(user));
  // }, [user]);

  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
    // <AuthContext.Provider value={{ user, dispatch }}>
    //   <AppRouter />
    // </AuthContext.Provider>
  );
}

export default App;
