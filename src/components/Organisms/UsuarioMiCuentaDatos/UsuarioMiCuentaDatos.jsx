import {useContext, useState} from "react";
import {UserContext} from '../../../../src/context/UserProvider';

import Button from '../../atoms/Button/Button';
import InputForm from '../../atoms/InputForm/InputForm';
import TitleSimple from '../../atoms/TitleSimple/TitleSimple';
export default function UsuarioMiCuentaDatos() {
    const { user } = useContext(UserContext);

  return (
    <div className="o-UsuarioMensajeNuevo" style={{gap:'5px'}}>

           <TitleSimple text="Número de contacto" bold={false} fontSize={12}/>
           <TitleSimple text="0051987654321" bold={true} fontSize={16}/>
           <div className='o-UsuarioBancoDepositar-item'>
                <InputForm name='Monto del límite de depósito en USD' placeholder="Correo" defaultValue={user?.email}/>
            </div>
            <div className='o-UsuarioBancoDepositar-item'>
                <InputForm  placeholder="Contraseña"/>
            </div>
            <div className='o-UsuarioBancoDepositar-item'>
                <Button text="Actualizar" type={1}/>
            </div>

            <div className='o-UsuarioBancoDepositar-item'>
                <Button text="Cancelar" type={2}/>
            </div>
    </div>
  )
}
