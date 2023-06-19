import {useContext, useState} from "react";
import HomeTemplate from "../../components/Templates/HomeTemplate/HomeTemplate";
import Inicio from "../../components/Organisms/MisPublicaciones/MisPublicaciones";
import HomeBasquet from "../../components/Pages/HomeBasquet/HomeBasquet";
import HomeFutbol from "../../components/Pages/HomeFutbol/HomeFutbol";
import HomeFutbolAmericano from "../../components/Pages/HomeFutbolAmericano/HomeFutbolAmericano";
import HomeBeisbol from "../../components/Pages/HomeBeisbol/HomeBeisbol";
import HomeTenis from "../../components/Pages/HomeTenis/HomeTenis";
// import Recomendaciones from "../components/Recomendaciones";
import {UserContext} from '../../../src/context/UserProvider';
import ModalApuesta from "../../components/molecules/ModalApuesta/ModalApuesta";

export const Home = () => {
    const { user, deport, data, apuesta, setApuesta } = useContext(UserContext);

    let contentDeport = null

    function convertirJSON(jsonData) {
        // Crear un objeto para almacenar los resultados
        const resultados = {};
      
        // Recorrer cada objeto del JSON
        jsonData.forEach((objeto) => {
          const { deporte, titulo, equipo1, equipo2, fecha, hora, flecha, valor1_blanco, valor1_amarillo, valor2_blanco, valor2_amarillo, valor3_blanco, valor3_amarillo } = objeto;
      
          // Verificar si ya existe una entrada para el deporte en los resultados
          if (!resultados[deporte]) {
            resultados[deporte] = {
              deporte: deporte,
              titulo: titulo,
              items: []
            };
          }
      
          // Crear el objeto item
          const item = {
            title: `${fecha} ${hora}`,
            hora: hora,
            fecha: fecha,
            flecha:flecha, 
            title_number: flecha,
            equipo1: equipo1,
            equipo2: equipo2,
            team1_name: equipo1,
            team2_name: equipo2,
            valor1: valor1_amarillo,
            valor2: valor2_amarillo,
            valorx: valor3_amarillo,
            valor1_blanco: valor1_blanco,
            valor2_blanco: valor2_blanco,
            valorx_blanco: valor3_blanco,
          };
      
          // Agregar el objeto item al arreglo de items del deporte correspondiente
          resultados[deporte].items.push(item);
        });
      
        // Devolver los resultados convertidos
        return Object.values(resultados);
    }

    let itemDB = {}

    if (data.length > 0) {
        
      const dataSinFormato = data.find((item) => item.tabla === "DEPORTES").items
      itemDB = convertirJSON(dataSinFormato)
    }
    

    const openModal = () =>{

    }
    switch (deport) {
        case 'basquetbol':
            contentDeport = <HomeBasquet dataDeport={itemDB.find((item) => item?.deporte === "basquetbol")}/>
            break;
        case 'futbol':
            contentDeport = <HomeFutbol dataDeport={itemDB.find((item) => item?.deporte === "futbol")} />
            break;
        case 'beisbol':
            contentDeport = <HomeBeisbol dataDeport={itemDB.find((item) => item?.deporte === "beisbol")}/>
            break;
        case 'futbolAmericano':
            contentDeport = <HomeFutbolAmericano />
            break;
        case 'tenis':
            contentDeport = <HomeTenis dataDeport={itemDB.find((item) => item?.deporte === "tenis")} />
            break;
        default:
            contentDeport = <HomeBasquet  />
            break;
    }

    return (
        <>
          <HomeTemplate >
              {contentDeport}
          </HomeTemplate>
          <ModalApuesta />
        </>
    );
};

export default Home;
