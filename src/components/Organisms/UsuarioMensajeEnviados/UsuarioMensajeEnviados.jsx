import React from 'react'
import TitleSimple from '../../atoms/TitleSimple/TitleSimple';
import Texto from '../../atoms/Texto/Texto';
import "./UsuarioMensajeEnviados.css";

export default function UsuarioMensajeEnviados() {
  return (
    <div className="o-UsuarioMensajeBandeja">
        <TitleSimple text="En estos momentos no tiene mensajes enviados" fontSize={13} bold={false}/>


    </div>
  )
}
