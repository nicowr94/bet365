import {useContext} from 'react'
import "./ModalLogin.css";
import {UserContext} from '../../../../src/context/UserProvider';

export default function ModalLogin({closeModal, position}) {

    const { user, setUser} = useContext(UserContext);

    const dateUser = {
        name: 'Carlillozone',
        email: 'carlillozone@gmail.com'
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
                    <input type="text" className="custom-input" placeholder="Usuario" defaultValue={'Carlillozone'}/>
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
