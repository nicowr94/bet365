import React from 'react'
import NavDeport from '../../molecules/NavDeport/NavDeport'
import Banner from '../../atoms/Banner/Banner'
import Footer from '../../molecules/Footer/Footer'
import PartidosOfrecidos from "../../molecules/PartidosOfrecidos/PartidosOfrecidos";
import PopularModule from "../../molecules/PopularModule/PopularModule";
import Card from "../../atoms/Card/Card";
import Title from "../../atoms/Title/Title";
import "./HomeTenis.css";

export default function HomeTenis() {
  const navDeportOptions = [{label:'Partidos'},{label:'Especiales'},{label:'Ofertas'}]
  const imageUrl = 'https://www.bet365.com/sports-assets/sports/SplashModule/assets/splash-headers/13-Tennis-desktop.jpg'

  const list1 = [
    {label:'Principales'},
    {label:'Set'},
    {label:'Juegos'},
    {label:'Jugador'},
  ]


  const infoOptions =[{
    title:'Hoy 19:00',
    title_number:'5',
    team1_name:'Carlos Alcaraz',
    team2_name:'Novak Djokovic',
    val1:'1.40',
    val2:'5.00',
    img_svg: true
},
{
    title:'Hoy 17:00',
    title_number:'5',
    team1_name:'Karolina Muchova',
    team2_name:'Aryna Sabalenka',
    val1:'2.45',
    val2:'3.40',
    img_svg: true
},
{
    title:'Hoy 17:00',
    title_number:'5',
    team1_name:'Iga Swiatek',
    team2_name:'Beatriz Haddad Maia',
    val1:'2.45',
    val2:'3.40',
    img_svg: true
},
{
    title:'Hoy 18:00',
    title_number:'6',
    team1_name:'Casper Ruud',
    team2_name:'Alexander Zverev',
    val1:'1.95',
    val2:'3.40',
    img_svg: true
},
]

  return (
    <div className='home_layout'>
      <NavDeport title='Tenis' url_image={imageUrl} options={navDeportOptions} en_vivo="En vivo  7 >"/>
      <PartidosOfrecidos title="MLB" data={infoOptions}/>
      <PopularModule />
      <Banner />

      <Title text="Cupón de partidos"/>
      <Title text="Abierto de Francia"/>
      {list1.map((c,index) => (
          <Card text={c.label} key={"partidosProximo-"+index}/>
      ))}
      <Title text="Abierto de Francia - Femenino"/>
      {list1.map((c,index) => (
          <Card text={c.label} key={"partidosProximo2-"+index}/>
      ))}
      <Title text="Abierto de Francia - Dobles masculino"/>
      {list1.map((c,index) => (
          <Card text={c.label} key={"partidosProximo3-"+index}/>
      ))}
      <Title text="Abierto de Francia - Dobles femenino"/>
      <Title text="Abierto de Francia - Dobles mixto"/>
      <Title text="WTA La Bisbal D'Emporda"/>
      <Title text="Challenger de Heilbronn"/>
      <Title text="Challenger de Prostejov"/>
      
      <Footer />
    </div>
  )
}
