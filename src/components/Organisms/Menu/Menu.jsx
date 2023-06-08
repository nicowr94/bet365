import React, { useContext } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import {UserContext} from '../../../../src/context/UserProvider';

import { types } from "../../../types/types";
import menuOptions from "./MenuOptions.js";
import menuOptionsFrecuente from "./menuOptionsFrecuente.js";

export default function Menu() {
  const { user, setDeport } = useContext(UserContext);
  // const logoutUser = () => {
  //   dispatch({
  //     types: types.logout,
  //     payload: {
  //       name: "Nicolas Wong",
  //     },
  //   });
  //   // history.replace("/login");
  // };
  
  function scrollToTop() {
    const div = document.getElementById("layout_scroll");
    div.scrollTo({
      top: 0,
      behavior: 'smooth' // Opcional: agrega un desplazamiento suave
    });
  }

  return (
    <div>
      <div className="menu-container">

        <div className="menu-items">
          <ul>
            {/* <Link to="/home">
              <li>
                <i className="fa fa-home fa-2x "></i>
                <a to="/">Home</a>
              </li>
            </Link> */}

            <Link>
              <div className='item_menu icon_moneda'>
                <img src={require(`../../../icons/icon_moneda.svg`).default} alt={"Ofertas"} style={{height: '15px', width: '15px'}} />
                <p>Ofertas</p>
              </div>
            </Link>

            <div className="menu-container_subtext">VISITADO CON FRECUENCIA</div>
            {menuOptionsFrecuente.map((option, index) => 
              (
                <Link to={`/deport`} 
                  onClick={()=>{setDeport(option.link); localStorage.setItem("deport", JSON.stringify(option.link));scrollToTop()}} 
                  key={"item_menu-"+option.name}>
                    <div className='item_menu' >
                      {/* <div style={{ backgroundImage: `url(${option.imageUrl})`  }}  className='item_menu_icon'></div> */}
                      <img src={require(`../../../icons/${option.imageUrl}`)} alt={option.name} />
                      
                      <p>{option.name}</p>
                    </div>
                </Link>
            ))}

            <div className="menu-container_subtext">LISTA COMPLETA</div>

            {menuOptions.map((option, index) => 
              (
                <Link to={`${option.link}`} key={"item_menu2-"+index}>
                  <div className='item_menu'>
                    {/* <div style={{ backgroundImage: `url(${option.imageUrl})`  }}  className='item_menu_icon'></div> */}
                    <img src={require(`../../../icons/${option.imageUrl}`)} alt={option.name} />
                    
                    <p>{option.name}</p>
                  </div>
                </Link>
            ))}

            {/* <li className="item-search">
              <i className="fa fa-search fa-2x"></i>
              <a to="/"></a>
            </li>
            <li className="item-no-mobil ">
              <i className="fa fa-hashtag fa-2x"></i>
              <a to="/">Explore</a>
            </li>
            <li>
              <i className="fa fa-bell-o fa-2x "></i>
              <a to="/">Notifications</a>
            </li>
            <li>
              <i className="fa fa-envelope-o fa-2x"></i>
              <a to="/">Messages</a>
            </li>
            <li className="item-no-mobil ">
              <i className="fa fa-user-o fa-2x"></i>
              <a to="/">Profile</a>
            </li>
            <li className=" item-no-mobil ">
              <i className="fa fa-ellipsis-h fa-2x"></i>
              <a to="/">More</a>
            </li>
            <div className="btn-tweet btn-tweet-menu item-no-mobil">
              <span className="span-btn">Tweet</span>
            </div> */}
          </ul>
        </div>

      </div>
    </div>
  );
}
