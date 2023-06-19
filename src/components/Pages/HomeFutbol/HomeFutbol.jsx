import { useContext } from 'react'
import NavDeport from '../../molecules/NavDeport/NavDeport'
import Banner from '../../atoms/Banner/Banner'
import Footer from '../../molecules/Footer/Footer'
import PartidosOfrecidos from "../../molecules/PartidosOfrecidos/PartidosOfrecidos";
import PopularModule from "../../molecules/PopularModule/PopularModule";
import Card from "../../atoms/Card/Card";
import Title from "../../atoms/Title/Title";

export default function HomeFutbol({dataDeport}) {
  const navDeportOptions = [{label:'Cupones'},{label:'Especiales'},{label:'Ofertas'},{label:'Jackpots'},{label:'Juegos gratis'}]
  const imageUrl = 'https://www.bet365.com/sports-assets/sports/SplashModule/assets/splash-headers/1-Soccer-desktop.jpg'
  const partidosProximo = [
    {label:'Ligas principales'},
    {label:'Próximas 12 horas'},
    {label:'Fútbol virtual'}
  ]

  const competiciones = [
    {label:'Populares'},
    {label:'América'},
    {label:'Euro 2024'},
    {label:'Competiciones UEFA'},
    {label:'España'},
    {label:'Reino Unido'},
    {label:'Italia'},
    {label:'Alemania'},
    {label:'Francia'},
    {label:'Internacionales'},
    {label:'Europa'},
    {label:'El Resto del Mundo'},
    {label:'eSports - Fútbol'},
    {label:'Fútbol virtual'}
  ]

  const mercados = [
    {label:'Populares'},
    {label:'Asiáticos'},
    {label:'Tarjetas'},
    {label:'Córners'},
    {label:'Goles'},
    {label:'1ª/2ª mitad'},
    {label:'Jugadores'},
    {label:'Especiales'},
    {label:'Minutоs'},
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
      <NavDeport title='Futbol' url_image={imageUrl} options={navDeportOptions} en_vivo="En vivo   7 >"/>
      <PartidosOfrecidos data={itemDB} title={dataDeport.titulo} />
      <PopularModule />
      <Banner />

      <Title text="Próximos partidos"/>
      {partidosProximo.map((c,index) => (
          <Card text={c.label} key={"partidosProximo-"+index}/>
      ))}
      <Title text="Competiciones"/>
      {competiciones.map((c,index) => (
          <Card text={c.label} key={"partidosProximo2-"+index}/>
      ))}
      <Title text="Mercados"/>
      {mercados.map((c,index) => (
          <Card text={c.label} key={"partidosProximo3-"+index}/>
      ))}
      <Footer />
    </div>
  )
}
