import React from 'react'
import ButtonSimple from '../../atoms/ButtonSimple/ButtonSimple';
import TitleSimple from '../../atoms/TitleSimple/TitleSimple';
import "./UsuarioBancoSaldo.css";

export default function UsuarioBancoSaldo() {

  const list = [
    {label:'Deporte - Bonos de apuesta'},
    {label:'Juegos - Bonos'},
    {label:'Casino - Bonos'},
    {label:'Bono de casino en vivo'},
    {label:'Póker - Bonos'},
    {label:'Bingo - Bonificación'},
  ]
  return (
    <div className='o-UsuarioBancoSaldo-container'>
      <div className='o-UsuarioBancoSaldo-container-column'>
          <div className='o-UsuarioBancoSaldo-container-header'>
            <TitleSimple text='Retirable' bold={false} fontSize={18}/>
            <TitleSimple text='$3,022,350.54' bold={true} fontSize={25}/>
          </div>
          <div className='o-UsuarioBancoSaldo-container-body'>
            <ButtonSimple text="Depositar"/>
            <ButtonSimple text="Retirar" option_icon={1}/>
          </div>
      </div>

      <div className='o-UsuarioBancoSaldo-container-column--right'>
          <div className='o-UsuarioBancoSaldo-container-header'>
            <TitleSimple text='Bonos y bonos de apuesta' bold={false} fontSize={18}/>
          </div>

          <div className='o-UsuarioBancoSaldo-container-body-list'>
            {list.map((t,index) => (
              <div className='o-UsuarioBancoSaldo-container-body-item'>
                <TitleSimple text={t.label} bold={false} fontSize={14}/>
                <TitleSimple text='$0.00' bold={true} fontSize={17}/>
              </div>
            ))}
          </div>
      </div>     


    </div>
  )
}
