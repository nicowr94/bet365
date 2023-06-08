import React, { useState, useContext } from "react";
import { AuthContext } from "../../../auth/AuthContext";
import {UserContext} from '../../../../src/context/UserProvider';

import Banner from "../../atoms/Banner/Banner";
import BannerInfo from "../../atoms/BannerInfo/BannerInfo";
import Title from "../../atoms/Title/Title";
import PartidosOfrecidos from "../../molecules/PartidosOfrecidos/PartidosOfrecidos";
import PopularModule from "../../molecules/PopularModule/PopularModule";
import TableSports from "../../molecules/TableSports/TableSports";
import Tabs from "../../molecules/Tabs/Tabs";
import "./MisPublicaciones.css";
import futbol_en_vivo from "./futbol_en_vivo.js";
import tenis_en_vivo from "./tenis_en_vivo.js";
import beisbol_en_vivo from "./beisbol_en_vivo.js";
import Footer from "../../molecules/Footer/Footer";
import Card from "../../atoms/Card/Card";
import ListCardsHorizontal from "../../molecules/ListCardsHorizontal/ListCardsHorizontal";
import ListaJuegos from "../../molecules/ListaJuegos/ListaJuegos";

export default function MisPublicaciones() {

  const partidosProximo = [
    {label:'Latinoamérica'},
    {label:'Próximos partidos'}
  ]

  const abiertoFrancia = [
    {label:'Ganador final - Masculino'},
    {label:'Ganador final - Femenino'}
  ]

  const NBA_finales = [
    {label:'MIA Heat @ DEN Nuggets'},
    {label:'Ganará el Campeonato'},
    {label:'Series - Marcador correcto'},
    {label:'MVP - Final'},
  ]

  const infoOptions =[{
    title:'Hoy 19:00',
    title_number:'5',
    team1_url:'melgar.svg',
    team1_name:'FBC Melgar',
    team2_url:'cesarVallejo.svg', 
    team2_name:'César Vallejo',
    val1:'1.40',
    val2:'5.00',
    val3:'7.00',
    img_svg: true
},
{
    title:'Hoy 17:00',
    title_number:'5',
    team1_url:'https://www.imagecache365.com/SoccerSilks/Fortaleza_Home_23.svg',
    team1_name:'Fortaleza',
    team2_url:'https://www.imagecache365.com/SoccerSilks/Palmeiras_Home_23.svg', 
    team2_name:'Palmeiras',
    val1:'2.45',
    val2:'3.40',
    val3:'2.87',
    img_svg: false
},
{
    title:'Hoy 17:00',
    title_number:'6',
    team1_url:'https://www.imagecache365.com/SoccerSilks/Bahia_Home.svg',
    team1_name:'Bahia',
    team2_url:'https://www.imagecache365.com/SoccerSilks/Santos_Away_23.svg', 
    team2_name:'Santos',
    val1:'2.20',
    val2:'3.00',
    val3:'3.75',
    img_svg: false
},
{
    title:'Hoy 18:00',
    title_number:'6',
    team1_url:'cruzeiro.svg',
    team1_name:'Cruzeiro',
    team2_url:'melgar.svg', 
    team2_name:'FBC Melgar',
    val1:'1.95',
    val2:'3.40',
    val3:'4.20',
    img_svg: true
},
]

  return (
    <div className="home_layout">
        <Banner />
        <BannerInfo />
        <Tabs>
          <PopularModule />
          <PartidosOfrecidos data={infoOptions}/>
          <Title text="En vivo"/>
          <TableSports title='Fútbol' info={futbol_en_vivo} title_data={[{name:'1'},{name:'X'},{name:'2'}]} bg_color={'#364D3C'}/>
          <TableSports title='Tenis' info={tenis_en_vivo} title_data={[{name:'1'},{name:'2'}]} bg_color={'#3F4D32'}/>
          <TableSports title='Béisbol' info={beisbol_en_vivo} title_data={[{name:'Hándicap'},{name:'Total'},{name:'Ganador'}]} bg_color={'#4D3E36 '}/>


          <Title text="Próximos partidos" img="futbol.svg"/>
          {partidosProximo.map((c,index) => (
              <Card text={c.label} key={"partidosProximo-"+index}/>
          ))}
          <Title text="Abierto de Francia" img="tenis.svg"/>
          {abiertoFrancia.map((c,index) => (
              <Card text={c.label} key={"abiertoFrancia-"+index}/>
          ))}
          <Title text="NBA - Finales" img="basquetbol.svg"/>
          {NBA_finales.map((c,index) => (
              <Card text={c.label} key={"NBA_finales-"+index}/>
          ))}

          <Footer />
        </Tabs>
    </div>
  );
}
