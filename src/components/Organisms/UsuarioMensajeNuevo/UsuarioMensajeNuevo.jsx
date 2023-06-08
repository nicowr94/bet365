import React from 'react'
import Button from '../../atoms/Button/Button';
import InputForm from '../../atoms/InputForm/InputForm';
import "./UsuarioMensajeNuevo.css";

export default function UsuarioMensajeNuevo() {
  return (
    <div className="o-UsuarioMensajeNuevo">
           <InputForm placeholder="Asunto"/>
           <InputForm type='texArea'/>
           <Button text="Enviar" type={1}/>

    </div>
  )
}
