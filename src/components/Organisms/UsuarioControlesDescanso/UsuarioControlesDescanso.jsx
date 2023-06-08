import React from 'react'
import SwitchMultiple from '../../atoms/SwitchMultiple/SwitchMultiple'
import TitleSimple from '../../atoms/TitleSimple/TitleSimple'
import LayoutGrafico from '../../molecules/LayoutGrafico/LayoutGrafico'
import InputForm from '../../atoms/InputForm/InputForm';
import imagen from '../../../img/banner_controles.png';
import "./UsuarioControlesDescanso.css";
import Button from '../../atoms/Button/Button';
import TabScroller from '../../molecules/TabScroller/TabScroller';

export default function UsuarioControlesDescanso() {

    const text1 = 'Si desea dejar de jugar con nosotros durante un tiempo, puede hacerlo al seleccionar un periodo de descanso de un periodo de tiempo específico.'
    const text2 = "También puede restringir su acceso al juego en días y horarios específicos seleccionando 'Personalizar' en el menú de abajo."
    const text3 = 'Una vez inicie su período de descanso no podrá depositar fondos o disfrutar de ninguno de nuestros productos. Sin embargo, podrá retirar cualquier saldo que tenga en su cuenta.'
    const text4 = 'Si piensa que está en riesgo de tener un problema de juego o cree que ya tiene un problema de juego, por favor diríjase a nuestra página de Autoexclusión '
    const text5 = 'No tiene periodos de descanso establecidos en su cuenta.'
    const periodoTiempo =[
        { "label": "Seleccione" },
        { "label": "24 horas" },
        { "label": "7 días" },
        { "label": "30 días" },
        { "label": "Personalizado" },
      ]

    const content1 = <>
                        <div className="o-UsuarioControlesDescanso-text">
                            <TitleSimple text={text1} bold={false} fontSize={13} />
                            <TitleSimple text={text2} bold={false} fontSize={13} />
                            <TitleSimple text={text3} bold={false} fontSize={13} />
                            <TitleSimple text={text4} bold={false} fontSize={13} />
                        </div>
                        <div className='o-UsuarioBancoDepositar-item' style={{marginTop:'30px'}}>
                            <InputForm name="Periodo de tiempo" type={"select"} options={periodoTiempo}/>
                        </div>
                        <div className='o-UsuarioBancoDepositar-item'>
                            <Button text="Continuar" type={1}/>
                        </div>
                    </>


    const content2 = <>
                        <div className="o-UsuarioControlesDescanso-text" style={{marginTop:'30px'}}>
                            <TitleSimple text={text5} bold={false} fontSize={13} align='center'/>
                        </div>
                    </>
    
    const listOptions =[
        {
            label: 'Crear un período de descanso',
            content : content1
        },
        {
            label: 'Períodos de descanso existentes',
            content : content2
        }
    ]
    return (
        <div className="o-UsuarioMensajeNuevo" style={{gap:'5px'}}>
                <TabScroller listOptions={listOptions}/>
        </div>
    )
}
