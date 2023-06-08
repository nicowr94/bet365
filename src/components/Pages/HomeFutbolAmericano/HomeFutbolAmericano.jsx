import React from 'react'
import NavDeport from '../../molecules/NavDeport/NavDeport'
import Footer from '../../molecules/Footer/Footer'
import PopularModule from "../../molecules/PopularModule/PopularModule";
import Card from "../../atoms/Card/Card";
import Title from "../../atoms/Title/Title";
export default function HomeFutbolAmericano() {

  const navDeportOptions = [{label:'Cupones'},{label:'Futuras'},{label:'Ofertas'}]
  const imageUrl = 'https://www.bet365.com/sports-assets/sports/SplashModule/assets/splash-headers/12-AmericanFootball-desktop.jpg'

  const list1 = [
    {label:'Apuestas destacadas'},
    {label:'Otras apuestas'},
    {label:'Resultado'},
    {label:'Apuestas al encuentro'},
  ]

  const list2 = [
    {label:'Apuestas destacadas'},
    {label:'Apuestas al encuentro'},
  ]

  const list3 = [
    {label:'Apuestas destacadas'},
    {label:'Resultado'},
    {label:'Equipo'},
    {label:'Otras apuestas'},
    {label:'Apuestas al encuentro'},
  ]

  const list4 = [
    {label:'Bradwell Field (NFL - Alumni)'},
    {label:'Fenton Field (Comparaciones)'},
    {label:'Queensway Park (1º down)'},
  ]

  return (
    <div className='home_layout'>
      <NavDeport title='Futbol Americano' url_image={imageUrl} options={navDeportOptions} en_vivo="En vivo   7 >"/>
      <PopularModule />

      <Title text="NFL"/>
      {list1.map((c,index) => (
          <Card text={c.label} key={"partidosProximo-"+index}/>
      ))}
      <Title text="NCAAF"/>
      {list2.map((c,index) => (
          <Card text={c.label} key={"partidosProximo2-"+index}/>
      ))}
      <Title text="CFL"/>
      {list3.map((c,index) => (
          <Card text={c.label} key={"partidosProximo3-"+index}/>
      ))}
      <Title text="USFL"/>
      {list1.map((c,index) => (
          <Card text={c.label} key={"partidosProximo3-"+index}/>
      ))}

    <Title text="Fútbol americano virtual"/>
      {list4.map((c,index) => (
          <Card text={c.label} key={"partidosProximo3-"+index}/>
      ))}


      <Footer />
    </div>
  )
}
