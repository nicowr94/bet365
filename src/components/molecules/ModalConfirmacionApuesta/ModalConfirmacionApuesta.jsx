import {useContext} from 'react'
import "./ModalConfirmacionApuesta.css";
import {UserContext} from '../../../../src/context/UserProvider';

export default function ModalConfirmacionApuesta({closeModal, position}) {

    return (
        <div className='m-ModalLogin-content'>
            <div className='m-ModalLogin-content-bg' onClick={()=>{closeModal(false)}}></div>
            <div className='m-ModalConfirmacionApuesta-content-form'>
                <div className='m-ModalLogin-content-form-input'>
                    <div className='m-ModalConfirmacionApuesta-title'>Apuesta creada correctamente</div>
                    <div className='m-ModalConfirmacionApuesta-subtitle'>Puede revisar esta apuesta en el menú de apuestas</div>
                    <button onClick={()=>{closeModal(false)}}>Aceptar</button>
                </div>
            </div>
        </div>
    )
}
