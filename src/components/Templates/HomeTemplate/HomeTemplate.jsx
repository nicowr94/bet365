import React from 'react'
import Menu from "../../Organisms/Menu/Menu";
import Nav from "../../molecules/Nav/Nav";
// import Inicio from "../../Organisms/MisPublicaciones/MisPublicaciones";

import "./HomeTemplate.css";

export default function HomeTemplate({children}) {

  return (
    <div className="template">
          <Nav />
        <div className="container">
          <section className="grid-container">
          <div className="menu container-scroll">
              <Menu/>
          </div>
          <div id="layout_scroll" className="layout container-scroll">
              {children}
          </div>
          <div className="options">
              {/* <Recomendaciones /> */}
          </div>
          </section>
      </div>
    </div>
  )
}
