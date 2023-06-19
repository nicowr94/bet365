import {useContext} from "react";
import DirectoTemplate from "../../components/Templates/DirectoTemplate/DirectoTemplate";
import Inicio from "../../components/Organisms/MisPublicaciones/MisPublicaciones";
import HomeBasquet from "../../components/Pages/HomeBasquet/HomeBasquet";
import DirectoFutbol from "../../components/Pages/DirectoFutbol/DirectoFutbol";
import DirectoBasquetbol from "../../components/Pages/DirectoBasquetbol/DirectoBasquetbol";
import DirectoTenis from "../../components/Pages/DirectoTenis/DirectoTenis";
import DirectoBeisbol from "../../components/Pages/DirectoBeisbol/DirectoBeisbol";
import DirectoFutbolAmericano from "../../components/Pages/DirectoFutbolAmericano/DirectoFutbolAmericano";
import ModalApuesta from "../../components/molecules/ModalApuesta/ModalApuesta";



// import Recomendaciones from "../components/Recomendaciones";
import {UserContext} from '../../../src/context/UserProvider';
import MenuHorizontal from "../../components/Organisms/MenuHorizontal/MenuHorizontal";

export const Home = () => {
    const { user, deport, setDeport, data } = useContext(UserContext);

    let contentDeport = null

    function obtenerElementosNoRepetidos(lista) {
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

    function convertirJSON1(jsonData) {
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
            equipo2,
            valor1_amarillo,
            valor2_amarillo,
            valor3_amarillo,
            valor1_blanco,
            valor2_blanco,
            valor3_blanco,
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
              text2: equipo2,
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
            },
          };
      
          tituloEncontrado.items.push(newItem);
        }
      
        return resultado;
      }
      
    
    let dataInfo ={
        team1_name:'Independiente Avellaneda',
        team1_val:'0',
        color1: '#f0f0f0',
        team2_name:'Sportivo Suardi',
        team2_val:'0',
        color2: 'red',
    }

    let itemDB = {}

    if (data.length > 0) {
        
      const dataSinFormato = data.find((item) => item.tabla === "En directo").items
      itemDB = convertirJSON(dataSinFormato)
    }
  

    switch (deport) {
        case 'basquetbol':
            contentDeport = <DirectoBasquetbol getImages={obtenerElementosNoRepetidos} dataDeport={itemDB.find((item) => item?.deporte === "basquetbol")}/>
            dataInfo ={
                team1_name:'Independiente Avellaneda',
                team1_val:'0',
                color1: '#f0f0f0',
                team2_name:'Sportivo Suardi',
                team2_val:'0',
                color2: 'red',
        
            }
            break;
        case 'futbol':
            contentDeport = <DirectoFutbol  getImages={obtenerElementosNoRepetidos}  dataDeport={itemDB.find((item) => item?.deporte === "futbol")}/>
            dataInfo ={
                team1_name:'EE.UU. sub-20',
                team1_val:'2',
                color1: '#f0f0f0',
                team2_name:'Uruguay sub-20',
                team2_val:'1',
                color2: '#679fea',
        
            }
            break;
        case 'tenis':
            contentDeport = <DirectoTenis dataDeport={itemDB.find((item) => item?.deporte === "tenis")} />
            dataInfo ={
                team1_name:'Adam Walton',
                team1_val:'40',
                color1: '#679fea',
                team2_name:'Harrison Adams',
                team2_val:'15',
                color2: '#f0f0f0',
        
            }
            break;
        case 'beisbol':
            contentDeport = <DirectoBeisbol getImages={obtenerElementosNoRepetidos}  dataDeport={itemDB.find((item) => item?.deporte === "beisbol")} />
            dataInfo ={
                team1_name:'Laguna',
                team1_val:'0',
                color1: '#1e8853',
                team2_name:'Quintana Roo',
                team2_val:'0',
                color2: '#704cb2',
            }
            break;
        case 'futbolAmericano':
            contentDeport = <DirectoFutbolAmericano getImages={obtenerElementosNoRepetidos}  dataDeport={itemDB.find((item) => item?.deporte === "Futbol Americano")} />
            dataInfo ={
                team1_name:'EE.UU. sub-20',
                team1_val:'2',
                color1: '#f0f0f0',
                team2_name:'Uruguay sub-20',
                team2_val:'1',
                color2: '#679fea',
            }
            break;
        case '/':
            setDeport('futbol'); 
            localStorage.setItem("deport", JSON.stringify('futbol'))
        default:
            contentDeport = <DirectoFutbol />
            break;
    }


    return (
        <>
          <DirectoTemplate dataInfo={dataInfo}>
              {/* <div style={{paddingBottom:'100px'}}> */}
              <div>
                  <MenuHorizontal />
                  {contentDeport}
              </div>
          </DirectoTemplate>
          <ModalApuesta />
        
        </>

    );
};

export default Home;
