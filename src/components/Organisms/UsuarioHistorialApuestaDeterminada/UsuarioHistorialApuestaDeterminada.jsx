import React from 'react'
import SwitchMultiple from '../../atoms/SwitchMultiple/SwitchMultiple'
import TitleSimple from '../../atoms/TitleSimple/TitleSimple'
import LayoutGrafico from '../../molecules/LayoutGrafico/LayoutGrafico'
import InputForm from '../../atoms/InputForm/InputForm';
import imagen from '../../../img/banner_controles.png';
import "./UsuarioHistorialApuestaDeterminada.css";
import Button from '../../atoms/Button/Button';
import TabScroller from '../../molecules/TabScroller/TabScroller';

export default function UsuarioHistorialApuestaDeterminada({option = true}) {


    const content1 = <div className="o-UsuarioMensajeNuevo-content" >
                        <SwitchMultiple options={['Últimas 24 horas','Últimas 48 horas','Rango de fechas']} active={4}/>
                        <div className='o-UsuarioBancoDepositar-item' style={{marginBottom:'120px'}}>
                            <Button text="Continuar" type={1}/>
                        </div>
                    </div>

    const listOptions =[
        {
            label: 'Deportes',
            content : content1
        },
        {
            label: 'Lotería',
            content : content1
        }
    ]
    return (
        <div className="o-UsuarioMensajeNuevo" style={{gap:'5px'}}>
                {
                    option
                    ? ( <TabScroller listOptions={listOptions}/>)
                    : (content1)
                }
        </div>
    )
}
