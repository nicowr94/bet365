import {useContext, useState} from "react";
import {UserContext} from '../../../../src/context/UserProvider';

import Button from '../../atoms/Button/Button';
import InputForm from '../../atoms/InputForm/InputForm';
import TitleSimple from '../../atoms/TitleSimple/TitleSimple';

export default function UsuarioMiCuentaDomicilio() {
  return (
    <div className="o-UsuarioMensajeNuevo" style={{gap:'5px'}}>

           {/* <TitleSimple text="Número de contacto" bold={false} fontSize={12}/> */}
           <TitleSimple text="Domicilio residencial" bold={true} fontSize={15}/>
           <div className='o-UsuarioBancoDepositar-item'>
                <TitleSimple text="Jr. Centenario 204" bold={false} fontSize={15}/>
                <TitleSimple text="Lima" bold={false} fontSize={15}/>
                <TitleSimple text="15024" bold={false} fontSize={15}/>
                <TitleSimple text="Perú" bold={false} fontSize={15}/>
            </div>

            <div className='o-UsuarioBancoDepositar-item'>
                <Button text="Cambiar domicilio" type={1}/>
            </div>
    </div>
  )
}
