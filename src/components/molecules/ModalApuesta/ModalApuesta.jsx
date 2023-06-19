import {useContext, useState} from 'react'
import "./ModalApuesta.css";
import {UserContext} from '../../../../src/context/UserProvider';
import ModalConfirmacionApuesta from '../ModalConfirmacionApuesta/ModalConfirmacionApuesta';

export default function ModalApuesta({closeModal, position}) {

    const { apuesta, setApuesta } = useContext(UserContext);
    const [confirmacionApuesta, setConfirmacionApuesta] = useState(false);

    const removeModal = () =>{
        setApuesta({})
    }

    const crearApuesta = () =>{
        setConfirmacionApuesta(true)
        removeModal()
    }

      

    const dataModal = {
        team_select: 'Argentina',
        monto: '1.035',
        title: 'Inglatera vs Argentina',
    }

    const modal =         <div className='m-ModalApuesta-content'>
    <div className='m-ModalApuesta-bg'>
        <div className='m-ModalApuesta-data'>
            <div style={{width:'30px',textAlign:'center', cursor:'pointer'}} onClick={()=>{removeModal()}}>
                X
            </div>

            <div>
                <div className='m-ModalApuesta-data-title'>
                    <div className='m-ModalApuesta-data-title-title'>{apuesta.team_select}</div>
                    <div className='m-ModalApuesta-data-title-monto'>{apuesta.monto}</div>
                </div>
                <div className='m-ModalApuesta-data-title-subtitle'>Resultado final</div>
                <div className='m-ModalApuesta-data-title-subtitle'>{apuesta.title}</div>
            </div>
            
        </div>
        <div  className='m-ModalApuesta-options'>
            <div  className='m-ModalApuesta-options-item' style={{background: '#333'}}>
                <div className='m-ModalApuesta-data-options-subtitle'>Importe</div>
                <div className='m-ModalApuesta-options-input'>
                    <div className='m-ModalApuesta-data-title-monto m-ModalApuesta-data-title-monto2'>$</div>
                    <input type="number" />
                </div>
            </div>
            <div className='m-ModalApuesta-options-item m-ModalApuesta-options-item-button' onClick={()=>{crearApuesta()}}>
                Realizar apuesta
            </div>
        </div>
    </div>
</div>
    return (
        <>
            {
                apuesta.title
                ? modal
                : null
            }
            {
                confirmacionApuesta
                ? <ModalConfirmacionApuesta closeModal={setConfirmacionApuesta}/>
                : null
            }
        </>
    )
}

{/* <div className='m-ModalLogin-content'>
<div ></div>
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
</div> */}
