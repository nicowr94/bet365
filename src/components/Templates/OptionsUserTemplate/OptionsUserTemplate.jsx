import React from 'react'
import Menu from "../../Organisms/Menu/Menu";
import Nav from "../../molecules/Nav/Nav";
// import Inicio from "../../Organisms/MisPublicaciones/MisPublicaciones";
import Footer from "../../molecules/Footer/Footer";

import "./OptionsUserTemplate.css";
import InfoDeport from '../../molecules/InfoDeport/InfoDeport';

export default function OptionsUserTemplate({children}) {

    return (
        <div className="OptionsUser-template">
            <Nav option={0}/>
            <div className="OptionsUser-template-container container-scroll">
              <div className="OptionsUser-container">
                <div className="OptionsUser-layout">
                      {children}
                </div>
                <div className="OptionsUser-footer">
                  <div>
                    <Footer />
                  </div>
                </div>
              </div>
            </div>
        </div>
      )
}
