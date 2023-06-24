import {useState} from 'react'
import SwitchMultiple from '../../atoms/SwitchMultiple/SwitchMultiple'
import TitleSimple from '../../atoms/TitleSimple/TitleSimple'
import LayoutGrafico from '../../molecules/LayoutGrafico/LayoutGrafico'
import InputForm from '../../atoms/InputForm/InputForm';
import imagen from '../../../img/banner_controles.png';
import "./UsuarioHistorialApuestaDeterminada.css";
import Button from '../../atoms/Button/Button';
import DatePicker from '../../atoms/DatePicker/DatePicker';

import TabScroller from '../../molecules/TabScroller/TabScroller';
import InfoApuesta from '../../molecules/InfoApuesta/InfoApuesta';

export default function UsuarioHistorialApuestaDeterminada({option = true, contentApuesta = false}) {
    const [opt, setOpt] = useState(0);
    const [openInfo, setOpenInfo] = useState(false);
    
    const fechaRangoApuesta = <>
                                <DatePicker start_date="31/05/2023" end_date="04/06/2023"/>
                                <p className="o-UsuarioMensajeNuevo-content-text">Tenga en cuenta: el período máximo que se puede mostrar es de 6 meses.</p>
                                <div onClick={()=>{setOpenInfo(true)}}>
                                    <Button text="Mostrar archivo" type={1} />
                                </div>
                            </>
    const content1 = <div className="o-UsuarioMensajeNuevo-content" >
                        <SwitchMultiple options={['Últimas 24 horas','Últimas 48 horas','Rango de fechas']} active={4} uploadOption={setOpt}/>
                        {
                           opt === 2
                            ?  fechaRangoApuesta
                            :  <div className='o-UsuarioBancoDepositar-item' style={{marginBottom:'120px'}}>
                                    <Button text="Continuar" type={1}/>
                                </div>
                        }

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

    let res = <></>

    if (openInfo) {
        res = <InfoApuesta  closeInfoApuesta={setOpenInfo}/>
    } else {
        if(option) res = <TabScroller listOptions={listOptions}/>
        else res = content1
    }
    return (
        <div className="o-UsuarioMensajeNuevo" style={{gap:'5px'}}>
                {res}
        </div>
    )
}
