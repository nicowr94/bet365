import React from "react";
import Texto from '../../atoms/Texto/Texto';
import TitleSimple from '../../atoms/TitleSimple/TitleSimple';
export default function UsuarioMiCuentaVerificacion() {

  return (
    <div className="o-UsuarioMensajeNuevo" style={{gap:'5px'}}>

            <TitleSimple text="Verificación de su cuenta" bold={true} fontSize={15}/>
            <div className='o-UsuarioBancoDepositar-item' style={{paddingLeft:'15px'}}>
                <Texto text={'Necesitamos verificar su identidad antes de que pueda realizar un retiro.'} level={1}/>
                <Texto text={'Cargue una copia o tome una fotografía de su documento de identificación seleccionando una de las opciones a continuación.'} level={1}/>
                <Texto text={'Si tiene uno, presente un documento que muestre su dirección postal tal y como se encuentra registrada en su cuenta de bet365, ya que esto le puede ahorrar tiempo en el futuro.'} level={1}/>
            </div>

            <div className='o-UsuarioBancoDepositar-item' style={{paddingLeft:'15px'}}>
                <Texto text={'Cargar documento de identidad'} type="link" level={1}/>
            </div>

    </div>
  )
}
