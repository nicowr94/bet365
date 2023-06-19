import React from "react";
import {useContext, useState} from "react";

import HomeTemplate from "../../components/Templates/HomeTemplate/HomeTemplate";
import Inicio from "../../components/Organisms/MisPublicaciones/MisPublicaciones";
// import Recomendaciones from "../components/Recomendaciones";
import ModalApuesta from "../../components/molecules/ModalApuesta/ModalApuesta";
import {UserContext} from '../../../src/context/UserProvider';

export const Home = () => {

  const { apuesta, setApuesta } = useContext(UserContext);
  const [modal, setModal] = useState(true);

  return (
    <>
      <HomeTemplate>
        <Inicio />
      </HomeTemplate>
      <ModalApuesta />
    </>
  );
};

export default Home;
