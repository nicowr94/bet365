import React, {useEffect, createContext, useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user, setUser] = useState(undefined);
  const [deport, setDeport] = useState(undefined);

  useEffect(() => {
    const validStorage = async () => {
      try {
        JSON.parse(localStorage.getItem("user"))
        const mySesion = (localStorage.getItem("user")) // JSON.parse(localStorage.getItem("user"))
        const myDeport = localStorage.getItem("deport") 
        setUser(JSON.parse(mySesion));
        setDeport(JSON.parse(myDeport));
      } catch (error) {
        console.log(`ERROR: ${error.message}`)
      }
    }

    validStorage();
  }, []);
  
  return (
    <UserContext.Provider value={{user, setUser, deport, setDeport}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;