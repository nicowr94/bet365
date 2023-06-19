import React, {useEffect, createContext, useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import dataDefault from "./dataDefault";

export const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user, setUser] = useState(undefined);
  const [deport, setDeport] = useState(undefined);
  const [data, setData] = useState({});
  const [apuesta, setApuesta] = useState({});

  useEffect(() => {
    const validStorage = async () => {
      try {
        const mySesion = (localStorage.getItem("user")) // JSON.parse(localStorage.getItem("user"))
        const myDeport = localStorage.getItem("deport") 
        const myData = localStorage.getItem("data") 

        const dataSave = !myData ? dataDefault : JSON.parse(myData);
        if (!myData) localStorage.setItem("data", JSON.stringify(dataSave))

        // const dataSave = JSON.parse(myData) === {} ? dataDefault : JSON.parse(myData)
        setUser(JSON.parse(mySesion));
        setDeport(JSON.parse(myDeport));
        setData(dataSave);
      } catch (error) {
        console.log(`ERROR: ${error.message}`)
      }
    }

    validStorage();
  }, []);
  
  return (
    <UserContext.Provider value={{user, setUser, deport, setDeport, data, setData, apuesta, setApuesta}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;