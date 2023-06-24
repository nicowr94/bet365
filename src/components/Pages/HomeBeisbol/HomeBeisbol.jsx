import React from 'react'
import NavDeport from '../../molecules/NavDeport/NavDeport'
import Banner from '../../atoms/Banner/Banner'
import Footer from '../../molecules/Footer/Footer'
import PartidosOfrecidos from "../../molecules/PartidosOfrecidos/PartidosOfrecidos";
import PopularModule from "../../molecules/PopularModule/PopularModule";
import Card from "../../atoms/Card/Card";
import Title from "../../atoms/Title/Title";
export default function HomeBeisbol({dataDeport}) {
  const navDeportOptions = [{label:'Cupones'},{label:'Futuras'},{label:'Ofertas'}]
  const imageUrl = 'https://www.bet365.com/sports-assets/sports/SplashModule/assets/splash-headers/16-Baseball-desktop.jpg'

  const partidosProximo = [
    {label:'Apuestas destacadas'},
    {label:'Apuestas al partido'},
    {label:'Apuestas principales'},
    {label:'Apuestas a las entradas'},
    {label:'Apuestas al equipo'},
    {label:'Apuestas al juego'}
  ]

  const competiciones = [
    {label:'Apuestas al equipo'},
    {label:'Apuestas al juego'},
  ]

  const mercados = [
    {label:'Apuestas destacadas'},
    {label:'Apuestas principales'},
    {label:'Apuestas a las entradas'},
    {label:'Apuestas al equipo'},
    {label:'Apuestas al juego'}
  ]

  const infoOptions =[{
    title:'Hoy 19:00',
    title_number:'5',
    team1_url:'stl_cardinals.svg',
    team1_name:'STL Cardinals',
    team2_url:'pirates.svg', 
    team2_name:'PIT Pirates',
    val1:'1.40',
    val2:'5.00',
    img_svg: true
},
{
    title:'Hoy 17:00',
    title_number:'5',
    team1_url:'tb_rays.svg',
    team1_name:'BOS Red Sox',
    team2_url:'bos_reys.svg', 
    team2_name:'Palmeiras',
    val1:'2.45',
    val2:'3.40',
    img_svg: true
},
{
    title:'Hoy 17:00',
    title_number:'5',
    team1_url:'philies.svg',
    team1_name:'WAS Nationals',
    team2_url:'was_nationals.svg', 
    team2_name:'Palmeiras',
    val1:'2.45',
    val2:'3.40',
    img_svg: true
},
{
    title:'Hoy 18:00',
    title_number:'6',
    team1_url:'mil_rewers.svg',
    team1_name:'MIL Rewers',
    team2_url:'cin_reds.svg', 
    team2_name:'CIN Reds',
    val1:'1.95',
    val2:'3.40',
    img_svg: true
},
]

let itemDB = infoOptions

  if (dataDeport.items.length > 0) {
    itemDB = dataDeport.items.map( (item, index) => {
        const element = {...item, 
          team1_url:infoOptions[index].team1_url,
          team2_url:infoOptions[index].team2_url,
          img_svg:infoOptions[index].img_svg,
        }
        return element
    })
  }

  return (
    <div className='home_layout'>
      <NavDeport title='Béisbol' url_image={imageUrl} options={navDeportOptions} en_vivo="En vivo  9 >"/>
      <PartidosOfrecidos title={dataDeport.titulo} data={itemDB}/>
      <PopularModule />
      <Banner />

      <Title text="MLB"/>
      {partidosProximo.map((c,index) => (
          <Card text={c.label} key={"partidosProximo-"+index} title={"MLB"}/>
      ))}
      <Title text="Triple A - Minor League"/>
      {competiciones.map((c,index) => (
          <Card text={c.label} key={"partidosProximo2-"+index}/>
      ))}
      <Title text="Japón - NPB"/>
      {mercados.map((c,index) => (
          <Card text={c.label} key={"partidosProximo3-"+index}/>
      ))}
      <Title text="College Baseball"/>
      <Title text="Corea del Sur - KBO"/>
      <Title text="LPBC"/>
      <Title text="México - LMB"/>
      <Title text="Japón - NPB - Liga B"/>
      
      <Footer />
    </div>
  )
}
