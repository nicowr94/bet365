import {useContext} from 'react'
import "./ModalUser.css";
import {UserContext} from '../../../../src/context/UserProvider';
import { ReactComponent as MiSVG }  from '../../../../src/icons/icon_mensaje.svg';
import ButtonSimple from '../../atoms/ButtonSimple/ButtonSimple';
import { Link } from "react-router-dom";

export default function ModalUser({closeModal,position, closed}) {

    const { user, setUser} = useContext(UserContext);
    const itemModalUser = document.getElementById('divModalUser');
    if (itemModalUser) itemModalUser.style.right = position + 'px';

    const dateUser = {
        name: 'Jean Paul'
    }

    const loggout_user = () =>{
        setUser(undefined)
        localStorage.setItem("user", JSON.stringify(undefined))
        closeModal(false)
    }

    const icon_banco = <svg className="ul-MembersLinkButton_Svg" xmlns="http://www.w3.org/2000/svg" width="34" height="31" viewBox="0 0 34 31"><g fill="none" fillRule="evenodd"><path className="mms-MemberMenuStylingModule_Bank-inside mms-MemberMenuStylingModule_FallbackStroke" d="M27.5.518V6.5H.5V4c.506-.53.9-.719 1.418-.904 1.145-.409 2.863-.774 5.153-1.101C11.639 1.342 18.449.851 27.5.518h0z" stroke="#9C9C9C" fill="#EEF0F0"></path><path className="mms-MemberMenuStylingModule_FallbackStroke" d="M.5 5.569c3.226.34 13.432.485 30.903.497h0l1.286.001h.811V30.5H3c-.69 0-1.315-.28-1.768-.732A2.492 2.492 0 01.5 28h0z" stroke="#9C9C9C" fill="#FDFFFF"></path><path className="mms-MemberMenuStylingModule_FallbackStroke" d="M33.471 16.25v6.314h-7.814a3.147 3.147 0 01-2.232-.924 3.147 3.147 0 01-.925-2.233c0-.872.353-1.661.925-2.232a3.147 3.147 0 012.232-.925h7.814z" stroke="#9C9C9C" fill="#FDFFFF"></path><path className="mms-MemberMenuStylingModule_FallbackFill" d="M25.329 19h8.642v1H25.33a.5.5 0 010-1z" fill="#9C9C9C"></path></g></svg>
    const icon_mensaje = MiSVG.toString()
    const icon_miCuenta = <svg className="ul-MembersLinkButton_Svg" width="38" height="36" viewBox="0 0 38 36" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path className="mms-MemberMenuStylingModule_FallbackStroke" d="M16.5 13.5c4.43 0 8.444 1.481 11.348 3.885 2.867 2.372 4.652 5.647 4.652 9.27 0 1.503-.306 2.723-.883 3.708-.614 1.05-1.533 1.828-2.685 2.41C25.96 34.277 21.49 34.5 16.5 34.5c-4.99 0-9.46-.223-12.432-1.727-1.152-.582-2.07-1.36-2.685-2.41C.806 29.378.5 28.158.5 26.655c0-3.623 1.785-6.898 4.652-9.27C8.056 14.98 12.07 13.5 16.5 13.5z" stroke="#9C9C9C" fill="#FDFFFF"></path><ellipse fill="#EEF0F0" cx="16.5" cy="10" rx="5.5" ry="7"></ellipse><circle className="mms-MemberMenuStylingModule_FallbackStroke" stroke="#9C9C9C" fill="#FDFFFF" cx="16.5" cy="7.5" r="7"></circle><g className="mms-MemberMenuStylingModule_MyAccount-wheel"><g transform="translate(18 16)"><path className="mms-MemberMenuStylingModule_FallbackStroke" d="M10.753-.555l.39 2.149c.599.165 1.168.4 1.7.696h0l1.196-1.196 3.032 2.358-1.244 1.796c.3.529.54 1.096.71 1.693h1.691l.477 3.812-2.149.39a7.714 7.714 0 01-.696 1.7h0l1.196 1.196-2.358 3.032-1.796-1.244c-.529.3-1.096.54-1.693.71h0v1.691l-3.812.477-.39-2.149a7.714 7.714 0 01-1.7-.696h0l-1.196 1.196-3.032-2.358 1.244-1.796a7.716 7.716 0 01-.71-1.693h0-1.691l-.477-3.812 2.149-.39c.165-.599.4-1.168.696-1.7h0L1.094 4.111 3.452 1.08l1.796 1.244c.529-.3 1.096-.54 1.693-.71h0V-.079l3.812-.477z" stroke="#979797" fill="#FDFFFF"></path><circle className="mms-MemberMenuStylingModule_FallbackStroke" stroke="#9C9C9C" fill="#EEF0F0" cx="9.075" cy="9.075" r="2.75"></circle></g></g></g></svg>
    const icon_controles = <svg className="ul-MembersLinkButton_Svg" xmlns="http://www.w3.org/2000/svg" width="33" height="38" viewBox="0 0 33 38"><g className="mms-MemberMenuStylingModule_FallbackStroke" stroke="#9C9C9C" fill="none" fillRule="evenodd"><path d="M16.5 1l-.161.092A106.33 106.33 0 018.78 5.007a94.713 94.713 0 01-7.554 3.159l-.198.072-.006.204C.636 23.17 5.078 32.511 16.286 36.825l.465.175.12-.053c10.815-4.72 15.784-14.137 15.06-28.09l-.035-.62-.19-.07A97.35 97.35 0 0124.168 5a106.83 106.83 0 01-6.666-3.433L16.5 1z" fill="#FDFFFF" fillRule="nonzero"></path><path d="M16.234 14.324c1.489 0 2.696 1.233 2.696 2.753a2.754 2.754 0 01-1.684 2.552l1.957 5.59a.397.397 0 01-.234.504.38.38 0 01-.13.023h-5.146a.39.39 0 01-.367-.518l1.814-5.635a2.756 2.756 0 01-1.601-2.516c0-1.52 1.207-2.753 2.695-2.753z" fill="#EEF0F0"></path><g strokeLinecap="square"><path className="mms-MemberMenuStylingModule_MyGamblingControls-dashright" d="M16.75 5s3.016 1.721 5.027 2.734c1.34.674 3.175 1.515 5.503 2.522"></path><path className="mms-MemberMenuStylingModule_MyGamblingControls-dashleft" d="M5.75 10.256s3.684-1.675 5.394-2.522C12.854 6.887 16.25 5 16.25 5"></path></g></g></svg>
    const icon_miActividad = <svg className="ul-MembersLinkButton_Svg" xmlns="http://www.w3.org/2000/svg" width="37" height="26" viewBox="0 0 37 26"><g fill="none" fillRule="evenodd"><rect width="36" height="25" x=".5" y=".5" fill="#FDFFFF" stroke="#9C9C9C" className="mms-MemberMenuStylingModule_FallbackStroke" rx="3"></rect><path fill="#EEF0F0" d="M3 1h31.01a2 2 0 012 2v1.58H1V3a2 2 0 012-2z" opacity=".75"></path><g fill="#9C9C9C" className="mms-MemberMenuStylingModule_FallbackFill"><path d="M8.003 17.733c0 .567-.448 1.027-1.001 1.027C6.448 18.76 6 18.3 6 17.733s.448-1.027 1.002-1.027c.553 0 1.001.46 1.001 1.027"></path><path d="M13.726 11.866c0 .567-.448 1.026-1.001 1.026-.553 0-1.002-.46-1.002-1.026 0-.568.449-1.027 1.002-1.027.553 0 1.001.46 1.001 1.027"></path><path d="M20.126 18.426c0 .567-.448 1.027-1.002 1.027-.553 0-1.001-.46-1.001-1.027s.448-1.027 1.001-1.027c.554 0 1.002.46 1.002 1.027"></path><path d="M29.556 8.79c0 .568-.448 1.027-1.001 1.027-.553 0-1.002-.46-1.002-1.027s.449-1.026 1.002-1.026c.553 0 1.001.46 1.001 1.026"></path></g><path className="mms-MemberMenuStylingModule_MyGamblingActivity-dashoffset mms-MemberMenuStylingModule_FallbackStroke" stroke="#9C9C9C" strokeWidth=".5" d="M7.002 17.733l5.723-5.867 6.4 6.56 9.43-9.636"></path></g></svg>
    const icon_miHistorial= <svg className="ul-MembersLinkButton_Svg" xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 32 32"><g fill="none" fillRule="evenodd"><rect width="33" height="33" fill="#FDFFFF" fillRule="nonzero" rx="16"></rect><circle cx="16" cy="16" r="14.5" stroke="#EEF0F0" strokeWidth="3"></circle><circle className="mms-MemberMenuStylingModule_FallbackStroke" cx="16" cy="16" r="15.5" stroke="#9C9C9C"></circle><g className="mms-MemberMenuStylingModule_History-minute"><line x1="16" x2="16" y1="16.5" y2="7" stroke="#C3C3C3"></line></g><line className="mms-MemberMenuStylingModule_FallbackStroke2" x1="24.007" x2="16" y1="16.469" y2="16.469" stroke="#C3C3C3"></line><g fill="#9C9C9C" fillRule="nonzero" transform="translate(2 2)"><circle cx="14" cy="26.5" r="1"></circle><circle cx="14" cy="1.5" r="1"></circle><circle cx="1.5" cy="14.5" r="1"></circle><circle cx="26.5" cy="14.5" r="1"></circle></g><circle cx="16" cy="16.5" r="1" fill="#9E9E9E" fillRule="nonzero" stroke="#9E9E9E"></circle></g></svg>
    
    
    const refreshPage = () => {
        window.location.reload(); // Recarga la página actual
      };
    return (
        <div className='m-ModalUser-content'>
            <div className='m-ModalUser-content-bg' onClick={()=>{closeModal(false)}}></div>
            <div id="divModalUser" className='m-ModalUser-content-form' style={{right:position+'px'}}>
                <div className='m-ModalUser-content-header'>
                   
                    <div className='m-ModalUser-content-header2-options'>
                        <div>{user.name}</div>
                        {/* <div style={{fontSize:'12px'}} >{user.name}</div> */}
                        <div className='options-bold'>${user.saldo}</div>
                    </div>
                    <div className='m-ModalUser-content-header-btn_depositar'>
                        <ButtonSimple text="Depositar"/>
                    </div>
                </div>

                <div className='m-ModalUser-content-header2'>
                    <div className='m-ModalUser-content-header2-options'>
                        <div>Saldo retirable</div>
                        <div className='options-bold'>${user.saldo_retirable}</div>
                    </div>
                    <div className='m-ModalUser-content-header2-options'>
                        <div>Bono</div>
                        <div className='options-bold'>${user.bono}</div>
                    </div>
                </div>
                <div className='m-ModalUser-content-body' onClick={()=>{closed(false)}}>

                    <Link to={"/usuario/banco"}>
                        <div className='m-ModalUser-content-body-item'>
                            {icon_banco}
                            Banco
                        </div>
                    </Link>
                    
                    <Link to={"/usuario/mensaje"}>
                        <div className='m-ModalUser-content-body-item'>
                            <img src={require(`../../../icons/icon_mensaje.svg`).default} alt={'option.team1_name'} />
                            Mensajes
                        </div>
                    </Link>

                    <Link to={"/usuario/miCuenta"}>
                        <div className='m-ModalUser-content-body-item'>
                            {icon_miCuenta}
                            Mi cuenta
                        </div>
                    </Link>
                    <Link to={"/usuario/Controles"}>
                        <div className='m-ModalUser-content-body-item'>
                            {icon_controles}
                            Controles de apuestas
                        </div>
                    </Link>

                    <Link to={"/usuario/Actividad"} >
                        <div className='m-ModalUser-content-body-item'>
                            {icon_miActividad}
                            Mi actividad
                        </div>
                    </Link>

                    <Link to={"/usuario/Historial"}>
                        <div className='m-ModalUser-content-body-item'>
                            {icon_miHistorial}
                            Historial
                        </div>
                    </Link>

                </div>

                <div className='m-ModalUser-content-buttons'>
                    <div>Juego responsable</div>
                    <div>Ayuda</div>
                    <Link to={"/usuario/admin"}>
                        <div>
                            Administrador
                        </div>
                    </Link>
                    {/* <div onClick={()=>{loggout_user()}}>Salir</div> */}
                    <Link to={"/"}  onClick={()=>{loggout_user()}}>
                        <div>Salir</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
