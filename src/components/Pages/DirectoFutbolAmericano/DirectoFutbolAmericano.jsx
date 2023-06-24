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

export default function DirectoFutbolAmericano({getImages, dataDeport}) {
  const navDeportOptions = [{label:'Cupones'},{label:'Especiales'},{label:'Ofertas'},{label:'Jackpots'},{label:'Juegos gratis'}]
  const imageUrl = 'https://www.bet365.com/sports-assets/sports/SplashModule/assets/splash-headers/1-Soccer-desktop.jpg'

  const partidosProximo = [
    {label:'Ligas principales'},
    {label:'Próximas 12 horas'},
    {label:'Fútbol virtual'}
  ]

  const infoTable = {
      titles:[{name:'Más De'},{name:'Menos De'}],
      element:[
        {
          title:'España - 1ª División',
          task:[
            {
                info:{
                  team1_url:'https://www.imagecache365.com/SoccerSilks/Real_Valladolid_Home.svg',
                  team2_url:'https://www.imagecache365.com/SoccerSilks/Getafe_Away_23.svg',
                  text1:'Valladolid',
                  text2:'Getafe',
                  count:'34:02',
                  count2:'115 >',
          
                  numb1:'0',
                  numb2:'0',
                  // numb1_data:'(1)',
                  // numb2_data:'(0)',
                },
                data:{
                  numb1:'2.040',
                  numb1_aux:'2.5',
                  numb2:'1.860',
                  numb2_aux:'2.5',
                  // numb3:'151.00',
                },
              },
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
                  // numb3:'151.00',
                },
              }
              ,            
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
                // numb3:'151.00',
              },
            },
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
                // numb3:'151.00',
              },
            }
            ,
            {
              info:{
                team1_url:'https://www.imagecache365.com/SoccerSilks/Espanyol_Home_23.svg',
                team2_url:'https://www.imagecache365.com/SoccerSilks/UD-Almeria-Away-23.svg',
                text1:'Espanyol',
                text2:'Almeria',
                count:'34:02',
                count2:'115 >',
        
                numb1:'1',
                numb2:'1',
                // numb1_data:'(1)',
                // numb2_data:'(0)',
              },
              data:{
                numb1:'1.040',
                numb1_aux:' 3.0,3.5',
                numb2:'2.100',
                numb2_aux:' 3.0,3.5',
                // numb3:'151.00',
              },
            }
            ,
            {
              info:{
                team1_url:'https://www.imagecache365.com/SoccerSilks/Real_Valladolid_Home.svg',
                team2_url:'https://www.imagecache365.com/SoccerSilks/Getafe_Away_23.svg',
                text1:'Valladolid',
                text2:'Getafe',
                count:'34:02',
                count2:'115 >',
        
                numb1:'0',
                numb2:'0',
                // numb1_data:'(1)',
                // numb2_data:'(0)',
              },
              data:{
                numb1:'2.040',
                numb1_aux:'2.5',
                numb2:'1.860',
                numb2_aux:'2.5',
                // numb3:'151.00',
              },
            }
          ],
        },
        {
          title:'Copa del Mundo FIFA Sub-20',
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
                // numb3:'151.00',
              },
            },
          ],
        },
        {
          title:'Italia - Serie A',
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
                // numb3:'151.00',
              },
            }
            ,
            {
              info:{
                team1_url:'https://www.imagecache365.com/SoccerSilks/Espanyol_Home_23.svg',
                team2_url:'https://www.imagecache365.com/SoccerSilks/UD-Almeria-Away-23.svg',
                text1:'Espanyol',
                text2:'Almeria',
                count:'34:02',
                count2:'115 >',
        
                numb1:'1',
                numb2:'1',
                // numb1_data:'(1)',
                // numb2_data:'(0)',
              },
              data:{
                numb1:'1.040',
                numb1_aux:' 3.0,3.5',
                numb2:'2.100',
                numb2_aux:' 3.0,3.5',
                // numb3:'151.00',
              },
            }
            ,
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
                // numb3:'151.00',
              },
            },
            {
              info:{
                team1_url:'https://www.imagecache365.com/SoccerSilks/Real_Valladolid_Home.svg',
                team2_url:'https://www.imagecache365.com/SoccerSilks/Getafe_Away_23.svg',
                text1:'Valladolid',
                text2:'Getafe',
                count:'34:02',
                count2:'115 >',
        
                numb1:'0',
                numb2:'0',
                // numb1_data:'(1)',
                // numb2_data:'(0)',
              },
              data:{
                numb1:'2.040',
                numb1_aux:'2.5',
                numb2:'1.860',
                numb2_aux:'2.5',
                // numb3:'151.00',
              },
            },
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
                // numb3:'151.00',
              },
            }
            ,
          ],
        },
        {
          title:'Argentina Liga Profesional',
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
                // numb3:'151.00',
              },
            },
          ],
        },
        {
          title:'Argentina - Primera B Metropolitana',
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
                // numb3:'151.00',
              },
            }
            ,
            {
              info:{
                team1_url:'https://www.imagecache365.com/SoccerSilks/Espanyol_Home_23.svg',
                team2_url:'https://www.imagecache365.com/SoccerSilks/UD-Almeria-Away-23.svg',
                text1:'Espanyol',
                text2:'Almeria',
                count:'34:02',
                count2:'115 >',
        
                numb1:'1',
                numb2:'1',
                // numb1_data:'(1)',
                // numb2_data:'(0)',
              },
              data:{
                numb1:'1.040',
                numb1_aux:' 3.0,3.5',
                numb2:'2.100',
                numb2_aux:' 3.0,3.5',
                // numb3:'151.00',
              },
            }
            ,
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
                // numb3:'151.00',
              },
            },
            {
              info:{
                team1_url:'https://www.imagecache365.com/SoccerSilks/Real_Valladolid_Home.svg',
                team2_url:'https://www.imagecache365.com/SoccerSilks/Getafe_Away_23.svg',
                text1:'Valladolid',
                text2:'Getafe',
                count:'34:02',
                count2:'115 >',
        
                numb1:'0',
                numb2:'0',
                // numb1_data:'(1)',
                // numb2_data:'(0)',
              },
              data:{
                numb1:'2.040',
                numb1_aux:'2.5',
                numb2:'1.860',
                numb2_aux:'2.5',
                // numb3:'151.00',
              },
            },
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
                // numb3:'151.00',
              },
            }
            ,
          ],
        },
      ]
    }

  const title_options = [{label:'Línea de gol - En directo'},{label:'Hándicap asiático - En directo'},{label:'Encuentro - Goles'},{label:'Resultado final'}]

  const lista_imagenes = [
    "https://www.imagecache365.com/SoccerSilks/Mallorca_Home_23.svg",
    "https://www.imagecache365.com/SoccerSilks/Barcelona_Home_23.svg",
    "https://www.imagecache365.com/SoccerSilks/Elche_Home_23.svg",
    "https://www.imagecache365.com/SoccerSilks/Cadiz_Home.svg",
    "https://www.imagecache365.com/SoccerSilks/Espanyol_Home_23.svg",
    "https://www.imagecache365.com/SoccerSilks/UD-Almeria-Away-23.svg",
    "https://www.imagecache365.com/SoccerSilks/Real_Valladolid_Home.svg",
    "https://www.imagecache365.com/SoccerSilks/Getafe_Away_23.svg",
    "https://www.imagecache365.com/SoccerSilks/Bayern_Munich_Home_23.svg",
    "https://www.imagecache365.com/SoccerSilks/Borussia_Dortmund_Home_23.svg"
  ]

  let itemDB = []

  if (dataDeport?.titulos.length > 0) {
    itemDB = dataDeport.titulos.map( (titulos, index) => {
        const newTitulo = titulos.items.map( (item, index) => {
          const images = getImages(lista_imagenes)
          const element = {...item, 
            info:{...item.info,
              team1_url:images[0],
              team2_url:images[1],}
          }
          return element
        })
        const res = {...titulos, items:newTitulo}
        return res
    })
  }

  return (
    <div className='home_layout'>
        <div style={{ backgroundImage: 'linear-gradient(160deg, #4D422E 0%, #383838 400px)'}}>
            <TitleDirecto title='Fútbol Americano' options={title_options}/>
            {itemDB.map((i,index) => {
               return <TableSportsDirecto key={"NavDeport-options-"+index}  title={i.titulo} info={i.items} title_data={infoTable.titles} />
            })}
        </div>
        <Footer />
    </div>
  )
}