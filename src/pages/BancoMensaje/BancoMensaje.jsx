import {useContext, useState} from "react";
import OptionsUserTemplate from "../../components/Templates/OptionsUserTemplate/OptionsUserTemplate";


import UsuarioMensajeNuevo from "../../components/Organisms/UsuarioMensajeNuevo/UsuarioMensajeNuevo";
import UsuarioMensajeBandeja from "../../components/Organisms/UsuarioMensajeBandeja/UsuarioMensajeBandeja";
import UsuarioMensajeEnviados from "../../components/Organisms/UsuarioMensajeEnviados/UsuarioMensajeEnviados";

import UsuarioBancoDepositar from "../../components/Organisms/UsuarioBancoDepositar/UsuarioBancoDepositar";

import {UserContext} from '../../../src/context/UserProvider';
import "./BancoMensaje.css";
import MenuUsuario from "../../components/Organisms/MenuUsuario/MenuUsuario";
import TitleSimple from "../../components/atoms/TitleSimple/TitleSimple";

export const BancoMensaje = () => {
    const { user, deport, setDeport } = useContext(UserContext);
    const [option, setOption] = useState(0);

    const icon_closed = <svg width='12' height='12' viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg'><title>Close</title><path d='M11.887.734L11.144 0 6 5.085.856 0 .113.734 5.257 5.82 0 11.016l.743.734L6 6.554l5.257 5.196.743-.734-5.257-5.197z' fill='black' fillRule='evenodd'/></svg>

    let contentOption = null
    
    let dataInfo ={}

    switch (option) {
        case 0:
            contentOption = <UsuarioMensajeNuevo />
            break;
        case 1:
            contentOption = <UsuarioMensajeBandeja />
            break;
        case 2:
            contentOption = <UsuarioMensajeEnviados />
            break;
        default:
            contentOption = <UsuarioMensajeNuevo />
            break;
    }

    const optionMenu = [
        {label:'Nuevo mensaje'},
        {label:'Bandeja de entrada'},
        {label:'Mensajes enviados'}
    ]

    const body = <div className="p-BancoUser-content-elements">
                <div>
                    <MenuUsuario title="Mensajes" listOptions={optionMenu} setOptionActive={setOption} optionActive={option}/>
                </div>
                <div className="p-BancoUser-content-layout">
                    <div style={{marginBottom:'25px'}}>
                        <TitleSimple text={optionMenu[option].label}/>
                    </div>
                    {contentOption}
                </div>
            </div>

    return (
        <OptionsUserTemplate dataInfo={dataInfo} >
            {/* <div style={{paddingBottom:'100px'}}> */}
            <div className="p-BancoUser-content">
                    {body}
                    {/* <div>daasd</div> */}
            </div>
        </OptionsUserTemplate>
    );
};

export default BancoMensaje;
