import React from 'react'
import SwitchMultiple from '../../atoms/SwitchMultiple/SwitchMultiple'
import TitleSimple from '../../atoms/TitleSimple/TitleSimple'
import LayoutGrafico from '../../molecules/LayoutGrafico/LayoutGrafico'
import InputForm from '../../atoms/InputForm/InputForm';
import imagen from '../../../img/banner_controles.png';
import "./UsuarioControlesCerrarCuenta.css";
import Button from '../../atoms/Button/Button';
import Checkbox from '../../atoms/Checkbox/Checkbox';

export default function UsuarioControlesCerrarCuenta() {

    const text1 = 'Si desea dejar de jugar con nosotros, podrá hacerlo cerrando su cuenta.'
    const text2 = 'Si piensa que está en riesgo de tener un problema de juego o cree que ya tiene un problema de juego, por favor diríjase a nuestra página de Autoexclusión'
    const text3 = 'Una vez cerrada la cuenta, no podrá depositar fondos o disfrutar de ninguno de nuestros productos. Si desea reabrir su cuenta durante este período, deberá contestar a las preguntas de seguridad adicionales para proteger su cuenta.'
    const text4 = 'Tenga en cuenta que aún no se ha completado la verificación de su cuenta. No podrá retirar el saldo restante hasta que verifiquemos su cuenta de forma satisfactoria. Podrá verificar su cuenta en la página de Verificación'
    const text5 = 'Para completar el proceso y cerrar su cuenta, seleccione el período que desea aplicar y la razón principal por la cual desea hacerlo.'
    
    const periodoTiempo =[
        { "label": "Seleccione" },
        { "label": "1 semana" },
        { "label": "1 mes" },
        { "label": "3 meses" },
        { "label": "6 meses" },
        { "label": "12 meses" },
        { "label": "Por un periodo indefinido" },
      ]

    const motivo = [
        { "value": "", "label": "Seleccione" },
        { "value": "8", "label": "No tengo tiempo (por ejemplo, estoy de vacaciones, preparándome para presentar un examen, etc.)" },
        { "value": "59", "label": "Ya no me interesa el juego en línea" },
        { "value": "65", "label": "No estoy satisfecho con su servicio/producto" },
        { "value": "63", "label": "No estoy satisfecho con sus ofertas" },
        { "value": "59", "label": "Deseo jugar (o estoy jugando) en otra página Web" },
        { "value": "67", "label": "Prefiero no especificar el motivo" }
      ]
    return (
        <div className="o-UsuarioMensajeNuevo" style={{gap:'15px'}}>

                <div className="o-UsuarioControlesCerrarCuenta-text" style={{marginBottom:'25px'}}>
                    <TitleSimple text={text1} bold={false} fontSize={13} />
                    <TitleSimple text={text2} bold={false} fontSize={13} />
                    <TitleSimple text={text3} bold={false} fontSize={13} />
                    <TitleSimple text={text4} bold={false} fontSize={13} />
                    <TitleSimple text={text5} bold={false} fontSize={13} />

                </div>

                    <TitleSimple text={'Período de cierre'} bold={true} fontSize={15} />

                    <div className="o-UsuarioControlesCerrarCuenta-checkboxs">
                        <Checkbox text='Duración'/>
                        <Checkbox text='Hasta el'/>
                    </div>

                    <div className='o-UsuarioBancoDepositar-item' style={{marginTop:'0px'}}>
                        <InputForm type={"select"} options={periodoTiempo}/>
                    </div>

                    <TitleSimple text={'Por favor, seleccione la razón principal por la cual desea cerrar su cuenta.'} bold={true} fontSize={15} />

                    <div className='o-UsuarioBancoDepositar-item' style={{marginTop:'0px'}}>
                        <InputForm type={"select"} options={motivo}/>
                    </div>


                    <div className='o-UsuarioBancoDepositar-item' style={{marginBottom:'120px'}}>
                        <Button text="Continuar" type={1}/>
                    </div>


                    


        </div>

    )
}
