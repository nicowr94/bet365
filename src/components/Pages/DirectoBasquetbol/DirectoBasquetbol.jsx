import React from 'react'
import NavDeport from '../../molecules/NavDeport/NavDeport'
import Banner from '../../atoms/Banner/Banner'
import Footer from '../../molecules/Footer/Footer'
import PartidosOfrecidos from "../../molecules/PartidosOfrecidos/PartidosOfrecidos";
import PopularModule from "../../molecules/PopularModule/PopularModule";
import Card from "../../atoms/Card/Card";
import Title from "../../atoms/Title/Title";
import TableSportsDirecto from '../../molecules/TableSportsDirecto/TableSportsDirecto';
import TitleDirecto from '../../molecules/TitleDirecto/TitleDirecto';

export default function DirectoBasquetbol({getImages, dataDeport}) {
  const navDeportOptions = [{label:'Cupones'},{label:'Especiales'},{label:'Ofertas'},{label:'Jackpots'},{label:'Juegos gratis'}]
  const imageUrl = 'https://www.bet365.com/sports-assets/sports/SplashModule/assets/splash-headers/1-Soccer-desktop.jpg'

  const partidosProximo = [
    {label:'Ligas principales'},
    {label:'Próximas 12 horas'},
    {label:'Fútbol virtual'}
  ]

  const infoTable = {
      titles:[{name:'Hándicap'},{name:'Total'},{name:'Ganador'}],
      element:[
        {
          title:'NBA',
          task:[
            {
              info:{
                team1_url:'https://www.imagecache365.com/SoccerSilks/Mallorca_Home_23.svg',
                team2_url:'https://www.imagecache365.com/SoccerSilks/Barcelona_Home_23.svg',
                text1:'Celta de Vigo',
                text2:'Barcelona',
                count:'34:02',
                count2:'115 >',
        
                numb1:'1',
                numb2:'0',
                // numb1_data:'(1)',
                // numb2_data:'(0)',
              },
              data:{
                numb1:'1.871',
                numb1_aux:'2.5',
                numb2:'2.040',
                numb2_aux:'2.5',
                numb3:'151.00',
              },
            },
            
          ],
        },
        {
          title:'WNBA',
          task:[
            {
              info:{
                team1_url:'https://www.imagecache365.com/SoccerSilks/Bayern_Munich_Home_23.svg',
                team2_url:'https://www.imagecache365.com/SoccerSilks/Borussia_Dortmund_Home_23.svg',
                text1:'Bayern (Cantona) Esports',
                text2:'Dortmund (Nazario) Esports',
                count:'34:02',
                count2:'115 >',
        
                numb1:'0',
                numb2:'1',
                // numb1_data:'(1)',
                // numb2_data:'(0)',
              },
              data:{
                numb1:'1.871',
                numb1_aux:'2.5',
                numb2:'2.040',
                numb2_aux:'2.5',
                numb3:'151.00',
              },
            },
          ],
        },
        {
          title:'Colombia - Liga',
          task:[
            
            {
              info:{
                team1_url:'https://www.imagecache365.com/SoccerSilks/Elche_Home_23.svg',
                team2_url:'https://www.imagecache365.com/SoccerSilks/Cadiz_Home.svg',
                text1:'Elche',
                text2:'Cádiz',
                count:'34:02',
                count2:'115 >',
        
                numb1:'0',
                numb2:'1',
                // numb1_data:'(1)',
                // numb2_data:'(0)',
              },
              data:{
                numb1:'2.040',
                numb1_aux:'2.5',
                numb2:'1.860',
                numb2_aux:'2.5',
                numb3:'151.00',
              },
            }
           
          ],
        },
        {
          title:'Chile - Liga DirecTV',
          task:[
            {
              info:{
                team1_url:'https://www.imagecache365.com/SoccerSilks/Bayern_Munich_Home_23.svg',
                team2_url:'https://www.imagecache365.com/SoccerSilks/Borussia_Dortmund_Home_23.svg',
                text1:'Bayern (Cantona) Esports',
                text2:'Dortmund (Nazario) Esports',
                count:'34:02',
                count2:'115 >',
        
                numb1:'0',
                numb2:'1',
                // numb1_data:'(1)',
                // numb2_data:'(0)',
              },
              data:{
                numb1:'1.871',
                numb1_aux:'2.5',
                numb2:'2.040',
                numb2_aux:'2.5',
                numb3:'151.00',
              },
            },
          ],
        },
        {
          title:'Puerto Rico - Superior Nacional',
          task:[
            
            {
              info:{
                team1_url:'https://www.imagecache365.com/SoccerSilks/Elche_Home_23.svg',
                team2_url:'https://www.imagecache365.com/SoccerSilks/Cadiz_Home.svg',
                text1:'Elche',
                text2:'Cádiz',
                count:'34:02',
                count2:'115 >',
        
                numb1:'0',
                numb2:'1',
                // numb1_data:'(1)',
                // numb2_data:'(0)',
              },
              data:{
                numb1:'2.040',
                numb1_aux:'2.5',
                numb2:'1.860',
                numb2_aux:'2.5',
                numb3:'151.00',
              },
            }
           
          ],
        },
      ]
    }

  const title_options = [{label:'Apuestas al encuentro'},{label:'Empate al final del tiempo reglamentario'}]

  const lista_imagenes = [
    "team1.svg",
    "team2.svg",
    "team3.svg",
    "team4.svg",
    "team5.svg",
    "team6.svg",
    "team7.svg",
    "team8.svg",
    "team9.svg",
    "team10.svg",
    "team11.svg",
    "team12.svg",
]

let itemDB = []

  if (dataDeport?.titulos.length > 0) {
    itemDB = dataDeport.titulos.map( (titulos, index) => {
        const newTitulo = titulos.items.map( (item, index) => {
          const images = getImages(lista_imagenes)
          const element = {...item, 
            info:{...item.info,
              team1_url:images[0],
              team2_url:images[1],
              imageSVG: true
            },
          }
          return element
        })
        const res = {...titulos, items:newTitulo}
        return res
    })
  }

  // <img src={require(`../../../icons/team/${option.team2_url}`)} alt={option.team2_name} />

  return (
    <div className='home_layout'>
        <div style={{ backgroundImage: 'linear-gradient(160deg, #4D4432  0%, #383838 400px)'}}>
            <TitleDirecto title='Básquetbol' options={title_options}/>
            {itemDB.map((i,index) => {
               return <TableSportsDirecto key={"NavDeport-options-"+index}  title={i.titulo} info={i.items} title_data={infoTable.titles} />
            })}
        </div>
        <Footer />
    </div>
  )
}
