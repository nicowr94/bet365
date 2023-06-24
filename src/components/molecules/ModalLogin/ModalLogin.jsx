import {useContext} from 'react'
import "./ModalLogin.css";
import {UserContext} from '../../../../src/context/UserProvider';

export default function ModalLogin({closeModal, position}) {

    const { user, setUser, data} = useContext(UserContext);

    const dataUsuarioExcel = data.length > 0 ? data.find((item) => item.tabla === "Usuario").items[0] : {}

    const dateUser = {
        name: dataUsuarioExcel?.nombre,
        email: dataUsuarioExcel?.correo,
        numero_contacto:dataUsuarioExcel?.numero_contacto,
        domicilio:dataUsuarioExcel?.domicilio,
        codigo_postal:dataUsuarioExcel?.codigo_postal,
        saldo:dataUsuarioExcel?.saldo,
        saldo_retirable:dataUsuarioExcel?.saldo_retirable,
        bono:dataUsuarioExcel?.bono
    }

    const loggin_user = () =>{        
        setUser(dateUser)
        localStorage.setItem("user", JSON.stringify(dateUser))
        closeModal(false)
    }

    return (
        <div className='m-ModalLogin-content'>
            <div className='m-ModalLogin-content-bg' onClick={()=>{closeModal(false)}}></div>
            <div className='m-ModalLogin-content-form'>
                <div className='m-ModalLogin-content-form-input'>
                    <input type="text" className="custom-input" placeholder="Usuario" defaultValue={dataUsuarioExcel?.nombre}/>
                    <input type="password" className="custom-input" placeholder="Contraseña" defaultValue={'password'}/>
                    <button onClick={()=>{loggin_user()}}>Seguir conectado</button>
                </div>
                <div className='m-ModalLogin-content-form-options'>
                    <div className='m-ModalLogin-content-form-options-item'>Regístrate ahora</div>
                    <div className='m-ModalLogin-content-form-options-item'>¿No puede acceder?</div>
                </div>
            </div>
        </div>
    )
}
