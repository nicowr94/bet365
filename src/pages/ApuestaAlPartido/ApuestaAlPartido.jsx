import React from "react";
import {useContext, useState} from "react";
import "./ApuestaAlPartido.css";

import HomeTemplate from "../../components/Templates/HomeTemplate/HomeTemplate";
import Inicio from "../../components/Organisms/MisPublicaciones/MisPublicaciones";
// import Recomendaciones from "../components/Recomendaciones";
import ModalApuesta from "../../components/molecules/ModalApuesta/ModalApuesta";
import {UserContext} from '../../../src/context/UserProvider';
import NavApuesta from "../../components/molecules/NavApuesta/NavApuesta";
import Title from "../../components/atoms/Title/Title";
import TablaApuesta from "../../components/molecules/TablaApuesta/TablaApuesta";
import Footer from "../../components/molecules/Footer/Footer";

export default function ApuestaAlPartido () {

  const { apuesta, setApuesta, titleDeport, data } = useContext(UserContext);
  const [modal, setModal] = useState(true);

  let itemDB = {}

    if (data.length > 0) {
        
      const dataSinFormato = data.find((item) => item.tabla === "Apuesta al partido").items
      itemDB = convertirJSON(dataSinFormato)
    }

    function convertirJSON(jsonData) {
        const resultado = [];
        for (const item of jsonData) {
          const deporte = item.deporte;
          const titulo = item.titulo;


          let deporteEncontrado = null;
          for (const deporteItem of resultado) {
            if (deporteItem.deporte === deporte) {
              deporteEncontrado = deporteItem;
              break;
            }
          }
      
          if (!deporteEncontrado) {
            deporteEncontrado = {
              deporte: deporte,
              titulos: [],
            };
            resultado.push(deporteEncontrado);
          }
      
          let tituloEncontrado = null;
          for (const tituloItem of deporteEncontrado.titulos) {
            if (tituloItem.titulo === titulo) {
              tituloEncontrado = tituloItem;
              break;
            }
          }
      
          if (!tituloEncontrado) {
            tituloEncontrado = {
              titulo: titulo,
              items: [],
            };
            deporteEncontrado.titulos.push(tituloEncontrado);
          }
          const {
            flecha,
            hora,
            equipo1,
            equipo1_info,
            equipo2,
            equipo2_info,
            valor1_amarillo,
            valor2_amarillo,
            valor3_amarillo,
            valor4_amarillo,
            valor5_amarillo,
            valor6_amarillo,
            valor1_blanco,
            valor2_blanco,
            valor3_blanco,
            valor4_blanco,
            valor5_blanco,
            valor6_blanco,
            
            columna1_valor1,
            columna1_valor2,
            columna2_valor1,
            columna2_valor2,
            columna3_valor1,
            columna3_valor2
          } = item;
      
        //   const newItem = {
        //     fecha: item.hora,
        //     flecha: flecha,
        //     title_number: flecha,
        //     equipo1: equipo1,
        //     equipo2: equipo2,
        //     team1_name: equipo1,
        //     team2_name: equipo2,
        //     valor1: valor1_amarillo,
        //     valor2: valor2_amarillo,
        //     valorx: valor3_amarillo,
        //     valor1_blanco: valor1_blanco,
        //     valor2_blanco: valor2_blanco,
        //     valorx_blanco: valor3_blanco,
        //   };

          const newItem = {
            info: {
              team1_url: '', // Agrega aquí la URL del equipo 1 si es necesario
              team2_url: '', // Agrega aquí la URL del equipo 2 si es necesario
              text1: equipo1,
              equipo1_info:equipo1_info,
              text2: equipo2,
              equipo2_info:equipo2_info,
              count: hora,
              count2: `${flecha} >`,
              numb1: columna1_valor1,
              numb2: columna1_valor2,

              numb1_data:columna2_valor1,
              numb2_data:columna2_valor2,
              numb1_data2:columna3_valor1,
              numb2_data2:columna3_valor2,
              team1_principal:true
            },
            data: {
              numb1: valor1_amarillo,
              numb1_aux: valor1_blanco,
              numb2: valor2_amarillo,
              numb2_aux: valor2_blanco,
              numb3:valor3_amarillo,
              numb3_aux: valor3_blanco,

              numb4: valor4_amarillo,
              numb4_aux: valor4_blanco,
              numb5: valor5_amarillo,
              numb5_aux: valor5_blanco,
              numb6:valor6_amarillo,
              numb6_aux: valor6_blanco
            },
          };
      
          tituloEncontrado.items.push(newItem);
        }
      
        return resultado;
      }

    let dataDeport = {}
    dataDeport = itemDB.length > 0 ? itemDB.find((item) => item?.deporte === "beisbol") : {}

  const lista_imagenes = [
    "beisbol/team1.svg",
    "beisbol/team2.svg",
    "beisbol/team3.svg",
    "beisbol/team4.svg",
    "beisbol/team5.svg",
    "beisbol/team6.svg",
    "beisbol/team7.svg",
    "beisbol/team8.svg",
    "beisbol/team9.svg",
    "beisbol/team10.svg",
]

function getImages(lista) {
    if (lista.length <= 2) {
      return lista;
    }
  
    const elementosSeleccionados = new Set();
    const elementosNoRepetidos = [];
  
    while (elementosSeleccionados.size < 2) {
      const indiceAleatorio = Math.floor(Math.random() * lista.length);
      const elementoSeleccionado = lista[indiceAleatorio];
  
      if (!elementosSeleccionados.has(elementoSeleccionado)) {
        elementosSeleccionados.add(elementoSeleccionado);
        elementosNoRepetidos.push(elementoSeleccionado);
      }
    }
  
    return elementosNoRepetidos;
}

let infoData = []

  if (dataDeport?.titulos && dataDeport?.titulos.length > 0) {
    infoData = dataDeport.titulos.map( (titulos, index) => {
        const newTitulo = titulos.items.map( (item, index) => {
          const images = getImages(lista_imagenes)
          const element = {...item, 
            info:{...item.info,
              team1_url:images[0],
              team2_url:images[1],
              imageSVG: true
            }
          }
          return element
        })
        const res = {...titulos, items:newTitulo}
        return res
    })
  }

  return (
    <>
      <HomeTemplate>
        {/* <Inicio /> */}
        <div style={{background:'#383838'}}>
            <NavApuesta title={titleDeport}/>


            <div className="p-ApuestaAlPartido-menu">
                <div className="p-ApuestaAlPartido-list">
                    <Title text="Apuestas al partido"/>
                    <div className="p-ApuestaAlPartido-list-subtitle">Cambiar</div>
                </div>
                <div className="p-ApuestaAlPartido-list">
                    <div className="p-ApuestaAlPartido-list-option">Ofertas Disponibles - excluye encuentros en vivo</div>
                    <div className="p-ApuestaAlPartido-list-option--border">Pago anticipado</div>
                    <div className="p-ApuestaAlPartido-list-option--border">Bono parlay</div>

                </div>
            </div>

            {/* {dataDeport.map((i,index) => {
               return <TableSportsDirecto key={"ApuestaAlPartido-options-"+index}  title={i.titulo} info={i.items} title_data={[{name:'Hándicap'},{name:'Total'},{name:'Ganador'}]} />
            })
            } */}
            {/* {
                dataDeport.deporte
                ? <TableSportsDirecto title={dataDeport.titulo} info={dataDeport.items} title_data={[{name:'Hándicap'},{name:'Total'},{name:'Ganador'}]} />
                : null
            } */}

            {infoData.map((i,index) => {
               return <TablaApuesta key={"NavDeport-options-"+index}  title={i.titulo} info={i.items} title_data={[{name:'Ganador'},{name:'Total'},{name:'Hándicap'}]} />
            })}
        </div>
        <Footer />
      </HomeTemplate>
      <ModalApuesta />
    </>
  );
};

