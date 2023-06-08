import React from 'react'
import Menu from "../../Organisms/Menu/Menu";
import Nav from "../../molecules/Nav/Nav";
// import Inicio from "../../Organisms/MisPublicaciones/MisPublicaciones";

import "./DirectoTemplate.css";
import InfoDeport from '../../molecules/InfoDeport/InfoDeport';

export default function DirectoTemplate({children, dataInfo}) {



  return (
    <div className="directo-template">
          <Nav option={2}/>
        <div className="directo-container">
          <section className="directo-grid-container">
  
          <div className="directo-layout container-scroll">
              {children}
          </div>
          <div className="directo-options">
            {/* {children} */}
            {/* <Menu /> */}
            <InfoDeport data={dataInfo}/>
          </div>
          </section>
      </div>
    </div>
  )
}
