import {useContext, useState} from "react";
import OptionsUserTemplate from "../../components/Templates/OptionsUserTemplate/OptionsUserTemplate";


import UsuarioBancoSaldo from "../../components/Organisms/UsuarioBancoSaldo/UsuarioBancoSaldo";
import UsuarioBancoDepositar from "../../components/Organisms/UsuarioBancoDepositar/UsuarioBancoDepositar";
import UsuarioBancoRetirar from "../../components/Organisms/UsuarioBancoRetirar/UsuarioBancoRetirar";

import {UserContext} from '../../../src/context/UserProvider';
import "./BancoUser.css";
import MenuUsuario from "../../components/Organisms/MenuUsuario/MenuUsuario";
import TitleSimple from "../../components/atoms/TitleSimple/TitleSimple";

export const BancoUser = () => {
    const { user, deport, setDeport } = useContext(UserContext);
    const [option, setOption] = useState(0);

    const icon_closed = <svg width='12' height='12' viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg'><title>Close</title><path d='M11.887.734L11.144 0 6 5.085.856 0 .113.734 5.257 5.82 0 11.016l.743.734L6 6.554l5.257 5.196.743-.734-5.257-5.197z' fill='black' fillRule='evenodd'/></svg>

    let contentOption = null
    
    let dataInfo ={}

    switch (option) {
        case 0:
            contentOption = <UsuarioBancoSaldo />
            break;
        case 1:
            contentOption = <UsuarioBancoDepositar />
            break;
        case 2:
            contentOption = <UsuarioBancoRetirar />
            break;
        default:
            contentOption = <UsuarioBancoSaldo />
            break;
    }

    const optionMenu = [
        {label:'Saldos'},
        {label:'Depositar'},
        {label:'Retirar'}
    ]

    let body = <div className="p-BancoUser-content-elements">
                <div>
                    <MenuUsuario title="Banco" listOptions={optionMenu} setOptionActive={setOption} optionActive={option}/>
                </div>
                <div className="p-BancoUser-content-layout">
                    <div style={{marginBottom:'25px'}}>
                        <TitleSimple text={optionMenu[option].label}/>
                    </div>
                    {contentOption}
                </div>
            </div>

    if (option!==0){
        body = <div className="p-BancoUser-content-elements">
                    <div className="p-BancoUser-content-elements--closed">
                        <div className="p-BancoUser-content-elements--closed-icon">
                            <div onClick={()=>{setOption(0)}} style={{cursor:'pointer'}}>
                            {icon_closed}
                            </div>
                        </div>
                        <div className="p-BancoUser-content-elements-body">
                            <div className="p-BancoUser-content-elements-body-content">
                                {
                                    option !== 2
                                    ? <TitleSimple text={optionMenu[option].label}/>
                                    : null
                                }
                                {/* <TitleSimple text={optionMenu[option].label}/> */}
                                {contentOption}
                            </div>
                        </div>
                    </div>
                </div>
    }
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

export default BancoUser;
