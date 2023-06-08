import React from 'react'
import "./HomeBasquet.css";
import NavDeport from '../../molecules/NavDeport/NavDeport'
import Banner from '../../atoms/Banner/Banner'
import Footer from '../../molecules/Footer/Footer'
import PartidoEncuentro from "../../molecules/PartidoEncuentro/PartidoEncuentro";
import PopularModule from "../../molecules/PopularModule/PopularModule";
import Card from "../../atoms/Card/Card";
import Title from "../../atoms/Title/Title";

export default function HomeBasquet() {

  const partidosProximo = [
    {label:'Apuestas destacadas'},
    {label:'Apuestas principales'},
    {label:'Apuestas al equipo'},
    {label:'Apuestas al jugador'},
    {label:'Apuestas a los tiempos'},
    {label:'Apuestas al cuarto'},
    {label:'Apuestas al partido'},
  ]

  const competiciones = [
    {label:'Apuestas destacadas'},
    {label:'Apuestas principales'},
    {label:'Apuestas al equipo'},
    {label:'Apuestas al jugador'},
    {label:'Apuestas a los tiempos'},
    {label:'Apuestas al cuarto'},
    {label:'Apuestas al partido'},
  ]

  const mercados = [
    {label:'Apuestas destacadas'},
    {label:'Apuestas principales'},
    {label:'Apuestas al equipo'},
    {label:'Apuestas al jugador'},
    {label:'Apuestas a los tiempos'},
    {label:'Apuestas al cuarto'},
    {label:'Apuestas al partido'},
  ]

  const navDeportOptions = [{label:'Cupones'},{label:'Futuras'},{label:'Ofertas'}]
  const imageUrl = 'https://www.bet365.com/sports-assets/sports/SplashModule/assets/splash-headers/18-Basketball-desktop.jpg'
  return (
    <div className='home_layout'>
      <NavDeport title='Básquetbol' url_image={imageUrl} options={navDeportOptions} en_vivo="En vivo   7 >"/>
      <PartidoEncuentro />
      <PopularModule />

      <Banner />

      <Title text="NBA"/>
      {partidosProximo.map((c,index) => (
          <Card text={c.label} key={"partidosProximo-"+index}/>
      ))}
      <Title text="WNBA"/>
      {competiciones.map((c,index) => (
          <Card text={c.label} key={"partidosProximo2-"+index}/>
      ))}
      <Title text="Internacional - Femenino "/>
      {mercados.map((c,index) => (
          <Card text={c.label} key={"partidosProximo3-"+index}/>
      ))}
      <Title text="España - Liga Endesa ACB"/>
      <Title text="Alemania - Pro A"/>
      <Title text="Argentina - La Liga"/>
      <Title text="Argentina - Liga Federal"/>
      <Title text="Australia - Big V - Femenino"/>
      <Title text="Australia - Big V"/>
      <Title text="Australia - NBL1 Sur"/>
      <Title text="Australia - NBL1 Sur - Femenino"/>

      <Footer />
    </div>
  )
}
