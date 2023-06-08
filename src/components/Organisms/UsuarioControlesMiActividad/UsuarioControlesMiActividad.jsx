import React from 'react'
import SwitchMultiple from '../../atoms/SwitchMultiple/SwitchMultiple'
import TitleSimple from '../../atoms/TitleSimple/TitleSimple'
import LayoutGrafico from '../../molecules/LayoutGrafico/LayoutGrafico'
import imagen from '../../../img/banner_controles.png';
import "./UsuarioControlesMiActividad.css";

export default function UsuarioControlesMiActividad() {

    const listGraficos = [{
            title:'Ganancias / Pérdidas',
            desc:'El total de sus ganancias menos el importe total de apuestas',
            monto:'$0',
            monto_desc:'28 may - 3 jun',
            body_title1:'No hay información disponible sobre el período seleccionado.',
        },{
            title:'Depósitos netos',
            desc:'El total de sus depósitos menos el total de sus retiros',
            monto:'$4000.00',
            monto_desc:'28 may - 3 jun',
            body_title1:'Total de depósitos',
            body_title2:'Total de depósitos',
            body_title1_val:'$0',
            body_title2_val:'$0',
        },{
            title:'Límites de depósito',
            desc:'Limite la cantidad que puede depositar',
            monto:'Cambiar',
            body_title1:'Sin límite',
        },{
            title:'Importe apostado',
            monto_desc:'28 may - 3 jun',
            body_title1:'No hay información disponible sobre el período seleccionado.',
        },{
            title:'Tiempo empleado en el juego',
            monto:'0d 0h 0m',
            monto_desc:'28 may - 3 jun',
            body_title1:'No hay información disponible sobre el período seleccionado.',
        },{
            title:'Pausas obligatorias',
            desc:'Recordatorio del tiempo que ha estado conectado',
            monto:'Cambiar',
            body_title1:'Alertas cada:',
            body_title1_val:'Sin alertas',

        },{
            title:'Hora de realización de apuestas',
            monto_desc:'28 may - 3 jun',
            body_title1:'No hay información disponible sobre el período seleccionado.',
        }
        

    ]
    return (
        <div className="o-UsuarioMensajeNuevo" style={{gap:'5px'}}>

                <SwitchMultiple options={['7 días','30 Días','12 meses']} active={0}/>
                <TitleSimple text="Las cifras mostradas incluyen las transacciones realizadas hasta la medianoche del 04/06/2023 GMT-5, a excepción de la información sobre límites de depósito que es publicada en tiempo real." bold={false} fontSize={11}/>

                {listGraficos.map((i,index) => (
                    <div  key={"UsuarioMensajeNuevo-"+index}>
                        <LayoutGrafico info={i}/>
                    </div>
                ))}

                <div className="o-UsuarioMensajeNuevo-banner">
                    <img src={imagen} alt="" />
                    <div className="o-UsuarioMensajeNuevo-banner-body">
                        <div className="o-UsuarioMensajeNuevo-banner-body--text">Visite nuestro sitio de 'Juego responsable' para ver consejos y herramientas útiles.</div>
                        <div className="o-UsuarioMensajeNuevo-banner-body--button">Más información</div>
                    </div>

                </div>

        </div>

    )
}
