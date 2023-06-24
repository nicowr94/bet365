import React, { useContext } from "react";
import {UserContext} from '../../../../src/context/UserProvider';
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({text, title = ""}) {

  const { deport, setTitleDeport } = useContext(UserContext);

  return (
    <>
    {
      deport === "beisbol" && text === "Apuestas al partido"
    ?    
        <Link to={"/deport/ApuestaAlPartido"} onClick={()=>{setTitleDeport(title)}, localStorage.setItem("titleDeport", title)}>
          <div className="a-card-container">
              <div className='a-card-containe-text'>{text}</div>
              <div className='a-card-containe-icon'></div>
          </div>
        </Link>

    :   <div className="a-card-container">
          <div className='a-card-containe-text'>{text}</div>
          <div className='a-card-containe-icon'></div>
        </div>
    }

    </>
  )
}
