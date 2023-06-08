import {useContext, useState} from "react";
import {UserContext} from '../../../../src/context/UserProvider';

import Button from '../../atoms/Button/Button';
import Texto from '../../atoms/Texto/Texto';
import InputForm from '../../atoms/InputForm/InputForm';
import TitleSimple from '../../atoms/TitleSimple/TitleSimple';
export default function UsuarioMiCuentaContraseña() {
    const { user } = useContext(UserContext);

  return (
    <div className="o-UsuarioMensajeNuevo" style={{gap:'5px'}}>

            <TitleSimple text="Cambiar contraseña" bold={true} fontSize={15}/>
            <div className='o-UsuarioBancoDepositar-item' style={{paddingLeft:'15px'}}>
                <Texto text={'Por favor, utilice solo letras, números y símbolos aceptados sin espacios, con un mínimo de 6 y un máximo de 32 caracteres.'} level={1}/>
                <Texto text={'Su contraseña no debe incluir su nombre o nombre de usuario, correo electrónico o año de nacimiento. Puede aumentar la seguridad de su contraseña si utiliza una combinación de letras, números y símbolos. Recuerde que las contraseñas distinguen entre mayúculas y minúsculas.'} level={1}/>
                <Texto text={'Podrá utilizar los siguientes símbolos como parte de su contraseña:'} level={1}/>
                <Texto text={`! " # $ % & ' ( ) * + , - . / : ; < = > ? _ @ [ \ ] ^`+ '` { | } ~'} level={1}/>
            
            
            </div>

            <div className='o-UsuarioBancoDepositar-item'>
                <InputForm  placeholder="Contraseña actual"/>
            </div>
            <div className='o-UsuarioBancoDepositar-item'>
                <InputForm  placeholder="Contraseña nueva"/>
            </div>
            <div className='o-UsuarioBancoDepositar-item'>
                <Button text="Cancelar" type={1}/>
            </div>
    </div>
  )
}
