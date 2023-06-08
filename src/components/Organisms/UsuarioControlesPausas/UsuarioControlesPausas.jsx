import React from 'react'
import SwitchMultiple from '../../atoms/SwitchMultiple/SwitchMultiple'
import TitleSimple from '../../atoms/TitleSimple/TitleSimple'
import LayoutGrafico from '../../molecules/LayoutGrafico/LayoutGrafico'
import imagen from '../../../img/banner_controles.png';
import "./UsuarioControlesPausas.css";
import Button from '../../atoms/Button/Button';

export default function UsuarioControlesPausas() {

    const text1 = "Para ayudarle a controlar el tiempo que invierte en jugar, puede establecer una 'Pausa obligatoria' en su cuenta. Una vez lo haga, aparecerá un mensaje emergente que le recordará que ha permanecido en su cuenta durante un periodo de tiempo determinado (exceptuando la actividad de juego en Póquer)."
    const text2 = "El cronómetro de las 'Pausas obligatorias' comienza cuando accede a su cuenta. Si realiza cambios, estos solo tendrán efecto la próxima vez que acceda a su cuenta."
    const text3 = "Si desea reducir sus 'Pausas obligatorias', dichos cambios se aplicarán inmediatamente. Cualquier aumento se aplicará 24 horas después de solicitarlo."
    const text4 = "Cuando aparezca la 'Pausa obligatoria', podrá elegir seguir conectado, ver su historial de cuenta o salir de la misma. Si decide seguir conectado recibirá otra 'Pausa obligatoria' del mismo periodo de tiempo para que pueda mantenerse al corriente del tiempo total que invierte en el juego."

    return (
        <div className="o-UsuarioMensajeNuevo" style={{gap:'5px'}}>

                <div className="o-UsuarioControlesDeposito-text">
                    <TitleSimple text={text1} bold={false} fontSize={13}/>
                    <TitleSimple text={text2} bold={false} fontSize={13}/>
                    <TitleSimple text={text3} bold={false} fontSize={13}/>
                    <TitleSimple text={text4} bold={false} fontSize={13}/>
                    <TitleSimple text={"Su configuración de 'Pausa obligatoria' existente es:"} bold={true} fontSize={15}/>
                    <TitleSimple text={'Sin alertas'} bold={false} fontSize={15}/>

                </div>
                <div className='o-UsuarioBancoDepositar-item'>
                    <Button text="Cambio" type={1}/>
                </div>


        </div>

    )
}
