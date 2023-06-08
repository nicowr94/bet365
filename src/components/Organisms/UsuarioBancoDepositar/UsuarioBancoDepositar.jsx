import React from 'react'
import Button from '../../atoms/Button/Button';
import ButtonSimple from '../../atoms/ButtonSimple/ButtonSimple';
import InputForm from '../../atoms/InputForm/InputForm';
import Texto from '../../atoms/Texto/Texto';
import TitleSimple from '../../atoms/TitleSimple/TitleSimple';
import "./UsuarioBancoDepositar.css";

export default function UsuarioBancoDepositar() {

  const metodos = [
    {url:'https://members.bet365.com/members/services/Payments/Content/images/19.svg'},
    {url:'https://members.bet365.com/members/services/Payments/Content/images/1.svg'},
    {url:'https://members.bet365.com/members/services/Payments/Content/images/143.svg'},
    {url:'https://members.bet365.com/members/services/Payments/Content/images/4.svg'},
  ]

  const monedas = [
    { "label": "Corona checa (CZK)" },
    { "label": "Corona danesa (DKK)" },
    { "label": "Corona noruega (NOK)" },
    { "label": "Corona sueca (SEK)" },
    { "label": "Dólar estadounidense (USD)", "selected": true },
    { "label": "Dólar neozelandés (NZD)" },
    { "label": "Euro (EUR)" },
    { "label": "Forint húngaro (HUF)" },
    { "label": "Franco suizo (CHF)" },
    { "label": "Lev (BGN)" },
    { "label": "Libras esterlinas (GBP)" },
    { "label": "Nuevo lei (RON)" },
    { "label": "Pesos argentinos (ARS)" },
    { "label": "Pesos mexicanos (MXN)" },
    { "label": "Real brasileño (BRL)" },
    { "label": "Yen (JPY)" },
    { "label": "Zlotych (PLN)" }
  ]

  const DepositExpiryDateMonth = [
    {
        "value": "",
        "label": "MM"
      },
      {
        "value": "1",
        "label": "1"
      },
      {
        "value": "2",
        "label": "2"
      },
      {
        "value": "3",
        "label": "3"
      },
      {
        "value": "4",
        "label": "4"
      },
      {
        "value": "5",
        "label": "5"
      },
      {
        "value": "6",
        "label": "6"
      },
      {
        "value": "7",
        "label": "7"
      },
      {
        "value": "8",
        "label": "8"
      },
      {
        "value": "9",
        "label": "9"
      },
      {
        "value": "10",
        "label": "10"
      },
      {
        "value": "11",
        "label": "11"
      },
      {
        "value": "12",
        "label": "12"
      }
  ]

  const DepositExpiryDateYear =  [
    {
        "value": "",
        "label": "AA"
      },
      {
        "value": "23",
        "label": "23"
      },
      {
        "value": "24",
        "label": "24"
      },
      {
        "value": "25",
        "label": "25"
      },
      {
        "value": "26",
        "label": "26"
      },
      {
        "value": "27",
        "label": "27"
      },
      {
        "value": "28",
        "label": "28"
      },
      {
        "value": "29",
        "label": "29"
      },
      {
        "value": "30",
        "label": "30"
      },
      {
        "value": "31",
        "label": "31"
      },
      {
        "value": "32",
        "label": "32"
      },
      {
        "value": "33",
        "label": "33"
      },
      {
        "value": "34",
        "label": "34"
      },
      {
        "value": "35",
        "label": "35"
      },
      {
        "value": "36",
        "label": "36"
      },
      {
        "value": "37",
        "label": "37"
      },
      {
        "value": "38",
        "label": "38"
      },
      {
        "value": "39",
        "label": "39"
      },
      {
        "value": "40",
        "label": "40"
      },
      {
        "value": "41",
        "label": "41"
      },
      {
        "value": "42",
        "label": "42"
      },
      {
        "value": "43",
        "label": "43"
      },
      {
        "value": "44",
        "label": "44"
      },
      {
        "value": "45",
        "label": "45"
      },
      {
        "value": "46",
        "label": "46"
      },
      {
        "value": "47",
        "label": "47"
      },
      {
        "value": "48",
        "label": "48"
      }
  ]

  const periodoTiempo =[
    { "label": "Seleccione" },
    { "label": "Cada 24 horas" },
    { "label": "Cada 7 días" },
    { "label": "Cada 30 días" },
    { "label": "Sin límite de depósito" },

  ]

  const text1 = 'Al realizar este depósito, usted acepta que mostremos los datos de su tarjeta nuevamente para futuras transacciones con la misma. En cuanto a esto, nosotros aceptamos guardar sus datos de forma segura y mostrarlos para futuras transacciones que desee realizar con esta tarjeta.  Este acuerdo continuará hasta que decida terminarlo eliminando la tarjeta de su cuenta o poniéndose en contacto con nosotros.  Tras la rescisión de este acuerdo, no volveremos a mostrar los datos de su tarjeta para futuras transacciones. Cualquier cambio en este acuerdo se le enviará por correo electrónico.'
  return (
    <div className='o-UsuarioBancoDepositar-container'>
        <div className='o-UsuarioBancoDepositar-metodos'>
            {metodos.map((t,index) => (
              <div className='o-UsuarioBancoDepositar-metodos-item'>
                  <img src={t.url} alt="" />
              </div>
            ))}
        </div>
        <div className='o-UsuarioBancoDepositar-form'>
            <TitleSimple text="Tarjeta de crédito/débito" fontSize={15}/>
            <div className='o-UsuarioBancoDepositar-item'>
                <InputForm name="Divisa de las apuestas" type={"select"} options={monedas}/>
            </div>
            <div className='o-UsuarioBancoDepositar-item'>
                <InputForm placeholder="Número de tarjeta"/>
                <InputForm placeholder="Nombre en la tarjeta"/>
            </div>

            <div className='o-UsuarioBancoDepositar-item o-UsuarioBancoDepositar-item-flex'>
                <div className='o-UsuarioBancoDepositar-item-multiple'>
                    <InputForm name="Fecha de caducidad" type={"select"} options={DepositExpiryDateMonth}/>
                    <InputForm name=" "type={"select"} options={DepositExpiryDateYear}/>
                </div>
                <InputForm name="CV2" placeholder=""/>
            </div>

            <div className='o-UsuarioBancoDepositar-item'>
                <InputForm placeholder="Monto del depósito USD"/>
            </div>

            <div className='o-UsuarioBancoDepositar-item'>
                <TitleSimple text="Establezca un límite de depósito" fontSize={15}/>
            </div>
            <div className='o-UsuarioBancoDepositar-item'>
                <InputForm name="Periodo de tiempo" type={"select"} options={periodoTiempo}/>
            </div>
            <div className='o-UsuarioBancoDepositar-item'>
                <InputForm name='Monto del límite de depósito en USD' placeholder=""/>
            </div>

            <div className='o-UsuarioBancoDepositar-item' style={{paddingLeft: '15px'}}>
                <Texto text="Puede establecer límites de depósito adicionales en la sección 'Mis controles de apuestas' en la zona de 'Miembros'."/>
                <Texto text={text1} level={2}/>
                <Button text="Aceptar y depositar"/>
            </div>
        </div>

    </div>
  )
}
