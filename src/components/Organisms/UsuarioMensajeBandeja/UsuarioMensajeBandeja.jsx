import React from 'react'
import TitleSimple from '../../atoms/TitleSimple/TitleSimple';
import Texto from '../../atoms/Texto/Texto';
import "./UsuarioMensajeBandeja.css";

export default function UsuarioMensajeBandeja() {
  return (
    <div className="o-UsuarioMensajeBandeja">
        <TitleSimple text="Le damos la bienvenida a bet365" fontSize={15}/>
        <Texto text={'04/06/2023 18:40'} level={2}/>
    </div>
  )
}
