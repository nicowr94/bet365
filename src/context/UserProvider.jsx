import React, {useEffect, createContext, useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import dataDefault from "./dataDefault";

export const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user, setUser] = useState(undefined);
  const [deport, setDeport] = useState(undefined);
  const [data, setData] = useState({});
  const [apuesta, setApuesta] = useState({});
  const [titleDeport, setTitleDeport] = useState(undefined);

  useEffect(() => {
    const validStorage = async () => {
      try {
        const mySesion = await localStorage.getItem("user") // JSON.parse(localStorage.getItem("user"))
        const myDeport = await localStorage.getItem("deport") 
        const myTitleDeport = await localStorage.getItem("titleDeport") 
        const myData = await localStorage.getItem("data") 

        const dataSave = !myData ? dataDefault : JSON.parse(myData);
        if (!myData) localStorage.setItem("data", JSON.stringify(dataSave))
        // const dataSave = JSON.parse(myData) === {} ? dataDefault : JSON.parse(myData)
        setData(dataSave);
        setDeport(JSON.parse(myDeport));
        setTitleDeport(myTitleDeport);
        setUser(JSON.parse(mySesion));
      } catch (error) {
        console.log(`ERROR: ${error.message}`)
      }
    }

    validStorage();
  }, []);
  
  return (
    <UserContext.Provider value={{user, setUser, deport, setDeport, data, setData, apuesta, setApuesta, titleDeport, setTitleDeport}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;