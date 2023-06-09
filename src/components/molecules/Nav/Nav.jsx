import {useContext, useState} from "react";
import { Link } from "react-router-dom";
import {UserContext} from '../../../../src/context/UserProvider';
import ModalLogin from "../ModalLogin/ModalLogin";
import ModalUser from "../ModalUser/ModalUser";


import "./Nav.css";

export default function Nav({option = 1}) {
  const { user, setUser, setDeport } = useContext(UserContext);
  const [login, setLogin] = useState(false);
  const [posicionDerecha, setPosicionDerecha] = useState(0);
  const [modalUser, setModalUser] = useState(false);




  const openModalUser = () =>{
    const itemUser = document.getElementById('itemUser');
    const left = document.documentElement.offsetWidth - itemUser.getBoundingClientRect().right + 20;
    setPosicionDerecha(left)
    setModalUser(true)
  }

  const option_not_user = <>
            <div className="nav-container-user-container-search">
              <div className="nav-container-user-container-search_Icon"></div>
            </div>
            <div className="nav-container-user-container-signin" >
                <div className="nav-container-user-container-signin_button ">Regístrate</div>
            </div>
            <div className="nav-container-user-container-loggin" onClick={()=>{setLogin(true)}}>
                <div className="nav-container-user-container-loggin_buttton ">Acceder</div>
            </div>
          </>

  const option_user = <>
          <div className="nav-container-user-container-search">
            <div className="nav-container-user-container-search_Icon"></div>
          </div>
          <div className="nav-container-user-container-loggin" >
            <div className="nav-container-user-container-loggin_buttton ">$2,948,288.33</div>
            <div className="nav-container-user-container-loggin_buttton nav-container-user-container-loggin_buttton--info">Depositar</div>
          </div>

          <div id="itemUser" className="nav-container-user-container-user" onClick={()=>{openModalUser()}}>
            <div id="itemUser" className="nav-container-user-container-search_Icon--user"></div>
          </div>
          </>

  return (
    <div className='nav-content'>
      <div className=" nav-info-container">
          <div className=" nav-info-content">
            <div className="nav-info-content-column">
            <div className="nav-info-text active">Deportes</div>
            <div className="nav-info-text">Fantasy Sports</div>
            <div className="nav-info-text">Casino</div>
            <div className="nav-info-text">Casino en vivo</div>
            <div className="nav-info-text">Juegos</div>
            <div className="nav-info-text">Póker</div>
            <div className="nav-info-text">Bingo</div>
            <div className="nav-info-text">Extra</div>
          </div>

          <div className="nav-info-content-column" style={{marginRight: '20px'}}>
            <div className="nav-info-text">Juego responsable</div>
            <div className="nav-info-text">Ayuda</div>
          </div>
          </div>
      </div>
      <div className="nav-container">
        <div className="nav-container-image-container">
          <Link to={"/"}>
            <div className="nav-container-image"></div>
          </Link>

        </div>

        <div className="nav-container-options-container">
          <Link to={"/"} onClick={()=>{setDeport('futbol'); localStorage.setItem("deport", JSON.stringify('futbol'));}} >
            <div className={"nav-container-options-container-item " + ( option === 1 ? "nav-container-options-container-item_LinkSelected" : "")}>
              <div>Deportes</div>
            </div>
          </Link>

          <Link to={"/directo"} onClick={()=>{setDeport('futbol'); localStorage.setItem("deport", JSON.stringify('futbol'));}} >
            <div className={"nav-container-options-container-item " + ( option === 2 ? "nav-container-options-container-item_LinkSelected" : "")}>
              <div>En vivo</div>
            </div>
          </Link>

          {
            user
            ? <div className={"nav-container-options-container-item " + ( option === 3 ? "nav-container-options-container-item_LinkSelected" : "")}>
                <div>Mis apuestas</div>
              </div>
            : null
          }

        </div>

        <div className="nav-container-user-container">
          {
            !user
            ? option_not_user
            : option_user
          }
        </div>
      </div>
      {login ? <ModalLogin closeModal={setLogin}/> : null}
      {modalUser ? <ModalUser closeModal={setModalUser} position={posicionDerecha} closed={setModalUser}/> : null}
    </div>
  )
}
