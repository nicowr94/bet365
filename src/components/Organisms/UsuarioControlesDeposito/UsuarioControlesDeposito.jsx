import React from 'react'
import SwitchMultiple from '../../atoms/SwitchMultiple/SwitchMultiple'
import TitleSimple from '../../atoms/TitleSimple/TitleSimple'
import LayoutGrafico from '../../molecules/LayoutGrafico/LayoutGrafico'
import imagen from '../../../img/banner_controles.png';
import "./UsuarioControlesDeposito.css";
import Button from '../../atoms/Button/Button';

export default function UsuarioControlesDeposito() {

    const text1 = 'Le permite limitar la cantidad de dinero que puede depositar en su cuenta a través de Internet en un periodo de 24 horas, 7 días y/o 30 días.'
    const text2 = 'Dichas cantidades se podrán reducir en cualquier momento pero, si desea aumentarlas, este cambio se aplicará 24 después de haber realizado la solicitud. Nuestro personal de Atención al cliente puede proporcionarle más información, sin embargo, no pueden sobrepasar los límites establecidos por usted.'

    return (
        <div className="o-UsuarioMensajeNuevo" style={{gap:'5px'}}>

                <div className="o-UsuarioControlesDeposito-text">
                    <TitleSimple text={text1} bold={false} fontSize={13} align={'justify'}/>
                    <TitleSimple text={text2} bold={false} fontSize={13} align={'justify'}/>
                    <TitleSimple text={'Sus límites de depósito existentes son los siguientes:'} bold={true} fontSize={15}/>
                    <div className="o-UsuarioControlesDeposito-text-column">
                        <TitleSimple text={'Límite de depósito'} bold={false} fontSize={13}/>
                        <TitleSimple text={'Sin límite de depósito establecido'} bold={true} fontSize={15}/>
                    </div>
                </div>
                <div className='o-UsuarioBancoDepositar-item'>
                    <Button text="Cambiar" type={1}/>
                </div>


        </div>

    )
}
