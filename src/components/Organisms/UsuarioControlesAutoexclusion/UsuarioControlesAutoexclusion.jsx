import React from 'react'
import SwitchMultiple from '../../atoms/SwitchMultiple/SwitchMultiple'
import TitleSimple from '../../atoms/TitleSimple/TitleSimple'
import LayoutGrafico from '../../molecules/LayoutGrafico/LayoutGrafico'
import InputForm from '../../atoms/InputForm/InputForm';
import imagen from '../../../img/banner_controles.png';
import "./UsuarioControlesAutoexclusion.css";
import Button from '../../atoms/Button/Button';
import Checkbox from '../../atoms/Checkbox/Checkbox';

export default function UsuarioControlesAutoexclusion() {

    const text1 = 'Si piensa que está en riesgo de tener un problema de juego o cree que ya tiene un problema de juego, por favor considere autoexcluirse.'
    const text2 = "Si desea dejar de jugar por cualquier otro motivo, por favor diríjase a nuestra página 'Periodo de descanso' y 'Cierre de cuenta'"
    const text3 = 'bet365 ofrece al cliente la posibilidad de autoexcluirse de su cuenta o productos específicos por un periodo de tiempo determinado. Una vez realizado este cambio, no podrá reactivar los productos seleccionados hasta que dicho periodo haya finalizado.'
    const text4 = 'Durante el periodo de autoexclusión bet365 hará todo lo posible para prevenir que se abran nuevas cuentas.'
    const text5 = 'Si le gustaría obtener más información sobre la autoexclusión, póngase en contacto con nuestro equipo del Servicio de atención al cliente, será un placer poder ayudarle.'
    const text6 = 'Si desea autoexcluirse ahora, podrá hacerlo al seleccionar el periodo de autoexclusión y los productos en los que desee autoexcluirse que aparecen abajo. Se le solicitará confirmar los datos, momento en el que la autoexclusión se aplicará de forma inmediata.'
    const text7 = 'Tenga en cuenta que los productos de Deportes y Póker pueden autoexcluirse de forma independiente. Sin embargo, si desea autoexcluirse de los productos de Casino/Casino en vivo o Juegos, será autoexcluido conjuntamente de los productos de Casino/Casino en vivo, Juegos y Póker.'
    const periodoTiempo =[
        { "label": "Seleccione" },
        { "label": "6 meses" },
        { "label": "1 año" },
        { "label": "2 años", selected:true },
        { "label": "5 años" },
      ]
    return (
        <div className="o-UsuarioMensajeNuevo" style={{gap:'5px'}}>

                <div className="o-UsuarioControlesAutoexclusion-text">
                    <TitleSimple text={text1} bold={false} fontSize={13} />
                    <TitleSimple text={text2} bold={false} fontSize={13} />
                    <TitleSimple text={text3} bold={false} fontSize={13} />
                    <TitleSimple text={text4} bold={false} fontSize={13} />
                    <TitleSimple text={text5} bold={false} fontSize={13} />
                    <TitleSimple text={text6} bold={false} fontSize={13} />
                    <TitleSimple text={text7} bold={false} fontSize={13} />

                    <div className='o-UsuarioBancoDepositar-item' style={{marginTop:'0px'}}>
                        <InputForm name="Periodo de autoexclusión" type={"select"} options={periodoTiempo}/>
                    </div>
                    <TitleSimple text={'Por favor, seleccione al menos un producto.'} bold={true} fontSize={15} />

                    <div style={{paddingLeft:'15px'}}>
                        <Checkbox text='Todos los productos'/>
                        <Checkbox text='Deportes'/>
                        <Checkbox text='Póquer'/>
                        <Checkbox text='Casino/Casino en vivo'/>
                        <Checkbox text='Juegos'/>
                    </div>
                    <div className='o-UsuarioBancoDepositar-item' style={{marginBottom:'120px'}}>
                        <Button text="Continuar" type={1}/>
                    </div>


                    
                </div>


        </div>

    )
}
