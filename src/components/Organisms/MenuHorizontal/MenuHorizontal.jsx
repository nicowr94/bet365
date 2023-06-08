import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./MenuHorizontal.css";
import {UserContext} from '../../../../src/context/UserProvider';
import menuOptions from "./MenuOptions.js";

export default function MenuHorizontal() {
  const { user, deport, setDeport } = useContext(UserContext);

  return (
    <div>
    <div className="menu-horizontal-container">

      <div className="menu-horizontal-items">
        <ul>

          {menuOptions.map((option, index) => 
            (
              <Link to={`/directo`} 
                key={"item_menu2-"+index} 
                className={(deport?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")===option.link?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") ? 'menu-horizontal-items-item_menu--selected' : '')}
                onClick={()=>{setDeport(option.link); localStorage.setItem("deport", JSON.stringify(option.link));}}
                >
                <div className={'menu-horizontal-items-item_menu '}>
                  <img src={require(`../../../icons/${option.imageUrl}`)} alt={option.name} />
                  
                  <div>{option.name}</div>
                </div>
              </Link>
          ))}

        </ul>
      </div>
    </div>
  </div>
  )
}
