import React from 'react'
import "./ListaJuegos.css";

export default function ListaJuegos({title,items}) {

    const list_juegos = [
    {
        url:'https://www.bet365.com/sports-assets/sports/InstantGamesModule/assets/thumbnails/Blackjack_v2.jpg'
    },
    {
        url:'https://www.bet365.com/sports-assets/sports/InstantGamesModule/assets/thumbnails/SuperMegaUltraWheel.jpg'
    },
    {
        url:'https://www.bet365.com/sports-assets/sports/InstantGamesModule/assets/thumbnails/TwisterPoker.jpg'
    },
    {
        url:'https://www.bet365.com/sports-assets/sports/InstantGamesModule/assets/thumbnails/8TigersGoldMegaways.jpg'
    },
    {
        url:'https://www.bet365.com/sports-assets/sports/InstantGamesModule/assets/thumbnails/BookOfHorus.jpg'
    },
    {
        url:'https://www.bet365.com/sports-assets/sports/InstantGamesModule/assets/thumbnails/8Immortals.jpg'
    }
    ]  
  return (
    <div className='m-ListaJuegos-content'>
        {/* <div className='m-ListaJuegos-title'>{title}</div> */}
        <div className='m-ListaJuegos-container m-ListaJuegos-container'>
            {list_juegos.map((i,index) => (
                <div className='m-ListaJuegos-item' key={"ListaJuegos-"+index}>
                    <div className='m-ListaJuegos-item__img' style={{backgroundImage:'url("'+i.url+'")'}}>
                        <div className='m-ListaJuegos-item-text__title'>{i.title}</div>
                    </div>
                </div> 
            ))}
                    <div className="ig-Game_Gradient "></div>

        </div>
    </div>
  )
}
