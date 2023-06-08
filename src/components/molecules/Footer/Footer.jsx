import React from 'react'
import "./Footer.css";
import ListCardsHorizontal from "../../molecules/ListCardsHorizontal/ListCardsHorizontal";
import Title from "../../atoms/Title/Title";
import ListaJuegos from "../../molecules/ListaJuegos/ListaJuegos";

export default function Footer() {

  const items_ofertas =[
    {
      title:'Oferta de pago anticipado',
      desc:'Consiga que sus apuestas se paguen anticipadamente. Solo clientes nuevos y elegibles. Se aplican condiciones .',
      icon:'',
    },
    {
      title:'Bono de combinadas de fútbol',
      desc:'Hasta un 70% más. Clientes nuevos y elegibles. Se aplican condiciones.',
      icon:'',
    },
    {
      title:'Bono de combinadas de tenis',
      desc:'Reciba hasta un 70% más. Solo para clientes nuevos y elegibles. Se aplican condiciones.',
      icon:'',
    },
    {
      title:'Bono de combinadas multideporte',
      desc:'Reciba hasta un 70% más. Solo para clientes nuevos y elegibles. Se aplican condiciones.',
      icon:'',
    },
  ]

  const items_funciones =[
    {
      title:'Crear apuesta - Fútbol',
      desc:'Disponible en hasta 12 selecciones. Cree su propia apuesta de fútbol.  Se aplican condiciones.',
      icon:'https://www.bet365.com/home/images/RHS/extras/imgs/exv8_Features_BetBuilderV2.png?pt=7',
    },
    {
      title:'En vivo - Destacados',
      desc:'Una selección de los mejores partidos de fútbol que puede ver en bet365 durante los próximos días. Clientes elegibles.',
      icon:'https://www.bet365.com/home/images/RHS/extras/imgs/exv8_Feature_StreamingV2.png?pt=7',
    },
    {
      title:'Editar apuesta',
      desc:'Le permite agregar, intercambiar o eliminar selecciones de su apuesta. Se aplican condiciones.',
      icon:'https://www.bet365.com/home/images/RHS/extras/imgs/exv8_Feature_EditBetV2.png?pt=7',
    },
    {
      title:'Cerrar apuesta',
      desc:'Le da la oportunidad de obtener una ganancia antes de que termine el evento. Aplican condiciones.',
      icon:'',
    },
  ]

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
  const footer_list ={
    column1:[
      {label:'Ayuda', title:true},
      {label:'Depósitos'},
      {label:'Retiros'},
      {label:'Preguntas frecuentes'},
      {label:'Contáctenos'},
      {label:'Términos y condiciones'},
      {label:'Contáctenos'},
      {label:'Términos y condiciones'},
      {label:'Juego responsable '},
      {label:'Problemas técnicos'},
      {label:'Política de Privacidad'},
      {label:'Política de Cookies'},
      {label:'Ganancias justas'},
      {label:'Reclamos'},
      {label:'Reglas'}
    ],
    column2:[
      {label:'Estadísticas', title:true},
      {label:'Fútbol'},
      {label:'Deportes'},
      {label:'Marcador/Resultado', title:true},
      {label:'Marcadores en vivo'},
      {label:'Resultados'},
    ],
    column3:[
      {label:'Ajustes', title:true},
      {label:'Idioma'},
      {label:'Visualización de cuotas'},
      {label:'Promociones', title:true},
      {label:'Ofertas actuales'},
      {label:'Oferta de nuevo cliente'},
      {label:'Audio', title:true},
      {label:'Fútbol'},
    ]
  }

  const info={
    images:[
      {url:'https://www.bet365.com/sports-assets/sports/FooterLegacyModule/assets/GT_v2.svg'},
      {url:'https://www.bet365.com/sports-assets/sports/FooterLegacyModule/assets/InternationalBettingIntegrity.svg'},
      {url:'https://www.bet365.com/sports-assets/sports/FooterLegacyModule/assets/Gibraltar.svg'},
      {url:'https://www.bet365.com/sports-assets/sports/FooterLegacyModule/assets/eCogra.svg'},
      {url:'https://www.bet365.com/sports-assets/sports/FooterLegacyModule/assets/18.svg'}
    ]
  }
  return (
    <>
      <ListCardsHorizontal title={"OFERTAS"} items={items_ofertas} icon='oferta'/>
      <ListCardsHorizontal title={"FUNCIONES"} items={items_funciones} icon='rayo'/>

      <Title text="Juegos instantáneos"/>
      <ListaJuegos title='ListaJuegos' items={list_juegos}/>

      <div className="m-footer">
      {/* Primer section */}
      <div className="m-footer-list">
        <div className="m-footer-list_content">
          <div className="m-footer-list__column">
            {footer_list.column1.map((c,index) => (
              <div className={"m-footer-list__column_text " + ( c.title ? 'm-footer-list__column_text__title' : '')} key={"footer1-"+index}>{c.label}</div>
            ))}
          </div>
          <div className="m-footer-list__column">
            {footer_list.column2.map((c,index) => (
              <div className={"m-footer-list__column_text " + ( c.title ? 'm-footer-list__column_text__title' : '')} key={"footer2-"+index}>{c.label}</div>
            ))}
          </div>
          <div className="m-footer-list__column">
            {footer_list.column3.map((c,index) => (
              <div className={"m-footer-list__column_text " + ( c.title ? 'm-footer-list__column_text__title' : '')} key={"footer3-"+index}>{c.label}</div>
            ))}
          </div>
        </div>
      </div>
      {/* Segundo section */}
      <div className="m-footer-info">
        <div className="m-footer-info_content ">
          <div className="m-footer-info__images">
            {info.images.map((i,index) => (
              <img src={i.url}  key={"footer-"+index}/>
            ))}
          </div>

          <div className="m-footer-info__data">
            <div className="m-footer-info__data_column">
                <div className="m-footer-info__data_column_item">
                  <img src={'https://www.bet365.com/sports-assets/sports/FooterLegacyModule/assets/bet365-logo.svg'} />
                  <div>
                    Oficina registrada: Hillside (Gibraltar) LP (nº de registro 119), Unit 1.1, First Floor, Waterport Place, 2 Europort Avenue, Gibraltar. Hillside (International Sports) LP posee una licencia otorgada por el Gobierno de Gibraltar y está regulada por el Comisionado de Apuestas de Gibraltar (Gibraltar Gambling Comissioner) (nº de Remote Gaming License (RGL) 076).
                  </div>

                  <div>
                    © 2001-2023 bet365. Todos los derechos reservados.
                  </div>

                  <div>
                    Hora del Servidor 23:12:53 GMT-5
                  </div>
                </div>

                <div className="m-footer-info__data_column_item list_link">
                  <div>Casino</div>
                  <div>Casino en vivo</div>
                  <div>Juegos</div>
                  <div>Póker</div>
                </div>
            </div>

            <div>
            Al acceder, seguir utilizando o navegar en este sitio Web, el cliente acepta que utilicemos ciertas cookies de navegación para mejorar su experiencia con nosotros. bet365 solo utilizará cookies que mejoren su experiencia y no aquellas que interfieran con su privacidad. Encontrará más información sobre el uso de cookies y cómo deshabilitarlas o gestionar su uso si asi lo desea en nuestra Política de Cookies.
            </div>

            <div>
            Esta página web se encuentra protegida por reCAPTCHA y se aplican la Política de Privacidad y los Términos del Servicio de Google.
            </div>
          </div>
        </div>
      </div>

      <div className="m-footer-info">
        <div className="m-footer-info_content">
          <div className="m-footer-info_content_list">
            <div>Empleos</div>
            <div>Socios</div>
          </div>
        </div>
      </div>


    </div>

    </>
  )
}
