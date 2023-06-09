

import {useState} from "react";
import OptionsUserTemplate from "../../components/Templates/OptionsUserTemplate/OptionsUserTemplate";

import UsuarioControlesMiActividad from "../../components/Organisms/UsuarioControlesMiActividad/UsuarioControlesMiActividad";
import UsuarioControlesDeposito from "../../components/Organisms/UsuarioControlesDeposito/UsuarioControlesDeposito";
import UsuarioControlesDescanso from "../../components/Organisms/UsuarioControlesDescanso/UsuarioControlesDescanso";
import UsuarioControlesAutoexclusion from "../../components/Organisms/UsuarioControlesAutoexclusion/UsuarioControlesAutoexclusion";
import UsuarioControlesCerrarCuenta from "../../components/Organisms/UsuarioControlesCerrarCuenta/UsuarioControlesCerrarCuenta";
import UsuarioControlesPausas from "../../components/Organisms/UsuarioControlesPausas/UsuarioControlesPausas";


import "./UserMiActividad.css";
import MenuUsuario from "../../components/Organisms/MenuUsuario/MenuUsuario";
import TitleSimple from "../../components/atoms/TitleSimple/TitleSimple";

export const UserMiActividad = () => {
    const [option, setOption] = useState(0);

    let contentOption = null
    
    let dataInfo ={}

    switch (option) {
        case 0:
            contentOption = <UsuarioControlesMiActividad />
            break;
        case 1:
            contentOption = <UsuarioControlesDeposito />
            break;
        case 2:
            contentOption = <UsuarioControlesDescanso />
            break;
        case 3:
            contentOption = <UsuarioControlesAutoexclusion />
            break;
        case 4:
            contentOption = <UsuarioControlesCerrarCuenta />
            break;
        case 5:
            contentOption = <UsuarioControlesPausas />
            break;
        default:
            contentOption = <UsuarioControlesMiActividad />
            break;
    }

    const optionMenu = [
        {label:'Mi actividad'},
        {label:'Límites de depósito'},
        {label:'Período de descanso'},
        {label:'Autoexclusión'},
        {label:'Cierre de cuenta'},
        {label:'Pausas Obligatorias'},
    ]

    const body = <div className="p-BancoUser-content-elements">
                <div>
                    <MenuUsuario title="Controles de apuestas" listOptions={optionMenu} setOptionActive={setOption} optionActive={option}/>
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
            <div className="p-BancoUser-content">
                    {body}
            </div>
        </OptionsUserTemplate>
    );
};

export default UserMiActividad;
