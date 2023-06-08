import React from "react";
import HomeTemplate from "../../components/Templates/HomeTemplate/HomeTemplate";
import Inicio from "../../components/Organisms/MisPublicaciones/MisPublicaciones";
// import Recomendaciones from "../components/Recomendaciones";

export const Home = () => {
  return (
    <HomeTemplate>
      <Inicio />
    </HomeTemplate>
  );
};

export default Home;
