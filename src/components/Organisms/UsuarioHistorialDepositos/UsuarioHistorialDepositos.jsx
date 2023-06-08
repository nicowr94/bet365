import React from 'react'
import SwitchMultiple from '../../atoms/SwitchMultiple/SwitchMultiple'
import TitleSimple from '../../atoms/TitleSimple/TitleSimple'
import LayoutGrafico from '../../molecules/LayoutGrafico/LayoutGrafico'
import InputForm from '../../atoms/InputForm/InputForm';
import imagen from '../../../img/banner_controles.png';
import "./UsuarioHistorialDepositos.css";
import Button from '../../atoms/Button/Button';
import TabScroller from '../../molecules/TabScroller/TabScroller';
import DatePicker from '../../atoms/DatePicker/DatePicker';

export default function UsuarioHistorialDepositos({option = true}) {


    const content1 = <div className="o-UsuarioMensajeNuevo-content" >
                        <DatePicker start_date="31/05/2023" end_date="04/06/2023"/>
                        <div className='o-UsuarioBancoDepositar-item' style={{marginBottom:'120px'}}>
                            <Button text="Mostrar ganancias/pérdidas" type={1}/>
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
        },
        {
            label: 'Juegos instantáneos',
            content : content1
        }
    ]

    const content2 = <div className="o-UsuarioMensajeNuevo-content" >
                        <DatePicker start_date="31/05/2023" end_date="04/06/2023"/>
                        <div className='o-UsuarioBancoDepositar-item' style={{marginBottom:'120px'}}>
                            <Button text="Mostrar depósitos netos" type={1}/>
                        </div>
                    </div>
    return (
        <div className="o-UsuarioMensajeNuevo" style={{gap:'5px'}}>
                {
                    option
                    ? ( <TabScroller listOptions={listOptions}/>)
                    : (content2)
                }
        </div>
    )
}
