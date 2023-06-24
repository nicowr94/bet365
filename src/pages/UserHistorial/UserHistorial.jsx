import {useState} from "react";
import OptionsUserTemplate from "../../components/Templates/OptionsUserTemplate/OptionsUserTemplate";



import UsuarioHistorialApuestaDeterminada from "../../components/Organisms/UsuarioHistorialApuestaDeterminada/UsuarioHistorialApuestaDeterminada";
import UsuarioHistorialDepositos from "../../components/Organisms/UsuarioHistorialDepositos/UsuarioHistorialDepositos";




import "./UserHistorial.css";
import MenuUsuario from "../../components/Organisms/MenuUsuario/MenuUsuario";
import TitleSimple from "../../components/atoms/TitleSimple/TitleSimple";

export const UserHistorial = () => {
    const [option, setOption] = useState(0);

    let contentOption = null
    
    let dataInfo ={}

    switch (option) {
        case 0:
            contentOption = <UsuarioHistorialApuestaDeterminada />
            break;
        case 1:
            contentOption = <UsuarioHistorialApuestaDeterminada contentApuesta={true}/>
            break;
        case 2:
            contentOption = <UsuarioHistorialApuestaDeterminada option={false} />
            break;
        case 3:
            contentOption = <UsuarioHistorialApuestaDeterminada option={false} />
            break;
        case 4:
            contentOption = <UsuarioHistorialApuestaDeterminada option={false} />
            break;
        case 5:
            contentOption = <UsuarioHistorialApuestaDeterminada option={false} />
            break;
        case 6:
            contentOption = <UsuarioHistorialDepositos option={false}/>
            break;
        case 7:
            contentOption = <UsuarioHistorialDepositos />
            break;
        default:
            contentOption = <UsuarioHistorialApuestaDeterminada />
            break;
    }

    const optionMenu = [
        {label:'Apuestas determinadas'},
        {label:'Apuestas pendientes'},
        {label:'Apuestas de juegos instantáneos'},
        {label:'Depósitos'},
        {label:'Retiros'},
        {label:'Ajustes'},
        {label:'Depósitos netos'},
        {label:'Ganancias / Pérdidas'},
    ]

    const body = <div className="p-BancoUser-content-elements">
                <div>
                    <MenuUsuario title="Historial" listOptions={optionMenu} setOptionActive={setOption} optionActive={option}/>
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

export default UserHistorial;
