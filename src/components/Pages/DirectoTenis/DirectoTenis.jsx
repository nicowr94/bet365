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

export default function DirectoTenis({getImages, dataDeport}) {
  const navDeportOptions = [{label:'Cupones'},{label:'Especiales'},{label:'Ofertas'},{label:'Jackpots'},{label:'Juegos gratis'}]
  const imageUrl = 'https://www.bet365.com/sports-assets/sports/SplashModule/assets/splash-headers/1-Soccer-desktop.jpg'

  const partidosProximo = [
    {label:'Ligas principales'},
    {label:'Próximas 12 horas'},
    {label:'Fútbol virtual'}
  ]

  const infoTable = {
      titles:[{name:'1'},{name:'2'}],
      element:[
        {
          title:'Challenger Tyler',
          items:[
            {
              info:{
                text1:'Dane Sweeny',
                text2:'Nathan Ponwith',
                // count:'34:02',
                // count2:'115 >',
        
                numb1:'1',
                numb2:'1',
                numb1_data:'0',
                numb2_data:'0',
                numb1_data2:'0',
                numb2_data2:'0',
                team1_principal:true
              },
              data:{
                numb1:'1.36',
                // numb1_aux:'2.5',
                numb2:'3.00',
                // numb2_aux:'2.5',
                // numb3:'151.00',
              },
            },
            {
                info:{
                  text1:'Maks Kasnikowski',
                  text2:'Gustavo Heide',
                  // count:'34:02',
                  // count2:'115 >',
          
                  numb1:'0',
                  numb2:'1',
                  numb1_data:'0',
                  numb2_data:'0',
                  numb1_data2:'0',
                  numb2_data2:'5',
                  team2_principal:true
                },
                data:{
                  numb1:'2.62',
                //   numb1_aux:'2.5',
                  numb2:'1.44',
                //   numb2_aux:'2.5',
                  // numb3:'151.00',
                },
              },

          ],
        },
      ]
    }

  const title_options = [{label:'Ganador'},{label:'Proximo juego'},{label:'Set actual'}]

  let itemDB = infoTable.element

  if (dataDeport?.titulos.length > 0) {
    itemDB = dataDeport
  }

  return (
    <div className='home_layout'>
        <div style={{ backgroundImage: 'linear-gradient(160deg, #3F4D32  0%, #383838 400px)', minHeight: '650px'}}>
            <TitleDirecto title='Tenis' options={title_options}/>
            {itemDB.titulos.map((i,index) => {
               return <TableSportsDirecto key={"NavDeport-options-"+index}  title={i.titulo} info={i.items} title_data={infoTable.titles} />
            })}
        </div>
        <Footer />
    </div>
  )
}
