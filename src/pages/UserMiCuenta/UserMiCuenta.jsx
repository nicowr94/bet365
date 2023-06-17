import {useContext, useState} from "react";
import OptionsUserTemplate from "../../components/Templates/OptionsUserTemplate/OptionsUserTemplate";



import UsuarioMiCuentaDatos from "../../components/Organisms/UsuarioMiCuentaDatos/UsuarioMiCuentaDatos";
import UsuarioMiCuentaDomicilio from "../../components/Organisms/UsuarioMiCuentaDomicilio/UsuarioMiCuentaDomicilio";
import UsuarioMiCuentaPreferencia from "../../components/Organisms/UsuarioMiCuentaPreferencia/UsuarioMiCuentaPreferencia";
import UsuarioMiCuentaContraseña from "../../components/Organisms/UsuarioMiCuentaContraseña/UsuarioMiCuentaContraseña";
import UsuarioMiCuentaVerificacion from "../../components/Organisms/UsuarioMiCuentaVerificacion/UsuarioMiCuentaVerificacion";



import {UserContext} from '../../../src/context/UserProvider';
import "./UserMiCuenta.css";
import MenuUsuario from "../../components/Organisms/MenuUsuario/MenuUsuario";
import TitleSimple from "../../components/atoms/TitleSimple/TitleSimple";

export const UserMiCuenta = () => {
    const { user, deport, setDeport } = useContext(UserContext);
    const [option, setOption] = useState(0);

    let contentOption = null
    
    let dataInfo ={}

    switch (option) {
        case 0:
            contentOption = <UsuarioMiCuentaDatos />
            break;
        case 1:
            contentOption = <UsuarioMiCuentaDomicilio />
            break;
        case 2:
            contentOption = <UsuarioMiCuentaPreferencia />
            break;
        case 3:
            contentOption = <UsuarioMiCuentaContraseña />
            break;
        case 4:
            contentOption = <UsuarioMiCuentaVerificacion />
            break;
        default:
            contentOption = <UsuarioMiCuentaDatos />
            break;
    }

    const optionMenu = [
        {label:'Datos de contacto'},
        {label:'Domicilio residencial'},
        {label:'Preferencias'},
        {label:'Contraseña'},
        {label:'Verificación'},
    ]

    const body = <div className="p-BancoUser-content-elements">
                    <div>
                        <MenuUsuario title="Mi cuenta" listOptions={optionMenu} setOptionActive={setOption} optionActive={option}/>
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

export default UserMiCuenta;
