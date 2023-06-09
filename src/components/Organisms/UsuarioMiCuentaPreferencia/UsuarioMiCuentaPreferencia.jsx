import React from 'react'

import Button from '../../atoms/Button/Button';
import InputForm from '../../atoms/InputForm/InputForm';
import Switch from '../../atoms/Switch/Switch';
import TitleSimple from '../../atoms/TitleSimple/TitleSimple';

const selected_language = [
    {
        "value": "1",
        "label": "English"
      },
      {
        "value": "36",
        "label": "Español",
        'selected': true
      },
      {
        "value": "4",
        "label": "Français"
      },
      {
        "value": "5",
        "label": "Deutsch"
      },
      {
        "value": "6",
        "label": "Italiano"
      },
      {
        "value": "7",
        "label": "Dansk"
      },
      {
        "value": "8",
        "label": "Svenska"
      },
      {
        "value": "9",
        "label": "Norsk"
      },
      {
        "value": "2",
        "label": "繁體中文"
      },
      {
        "value": "10",
        "label": "简体中文"
      },
      {
        "value": "19",
        "label": "Български"
      },
      {
        "value": "20",
        "label": "Ελληνικά"
      },
      {
        "value": "21",
        "label": "Polski"
      },
      {
        "value": "33",
        "label": "Português"
      },
      {
        "value": "23",
        "label": "Română"
      },
      {
        "value": "24",
        "label": "Česky"
      },
      {
        "value": "25",
        "label": "Magyar"
      },
      {
        "value": "26",
        "label": "Slovenčina"
      },
      {
        "value": "28",
        "label": "Nederlands"
      },
      {
        "value": "29",
        "label": "Eesti"
      },
      {
        "value": "31",
        "label": "Русcкий"
      },
      {
        "value": "34",
        "label": "日本語"
      }
]

const selected_timezone = [
    {
        "value": "1",
        "label": "UK"
      },
      {
        "value": "2",
        "label": "ET"
      },
      {
        "value": "3",
        "label": "PT"
      },
      {
        "value": "4",
        "label": "CET"
      },
      {
        "value": "5",
        "label": "CT"
      },
      {
        "value": "6",
        "label": "MT"
      },
      {
        "value": "7",
        "label": "GMT-12"
      },
      {
        "value": "8",
        "label": "GMT-11"
      },
      {
        "value": "9",
        "label": "GMT-10"
      },
      {
        "value": "10",
        "label": "GMT-9"
      },
      {
        "value": "11",
        "label": "GMT-8"
      },
      {
        "value": "12",
        "label": "GMT-7"
      },
      {
        "value": "13",
        "label": "GMT-6"
      },
      {
        "value": "14",
        "label": "GMT-5",
        'selected': true
      },
      {
        "value": "15",
        "label": "GMT-4"
      },
      {
        "value": "16",
        "label": "GMT-3"
      },
      {
        "value": "17",
        "label": "GMT-2"
      },
      {
        "value": "18",
        "label": "GMT-1"
      },
      {
        "value": "19",
        "label": "GMT"
      },
      {
        "value": "20",
        "label": "GMT+1"
      },
      {
        "value": "21",
        "label": "GMT+2"
      },
      {
        "value": "22",
        "label": "GMT+3"
      },
      {
        "value": "23",
        "label": "GMT+4"
      },
      {
        "value": "24",
        "label": "GMT+5"
      },
      {
        "value": "25",
        "label": "GMT+6"
      },
      {
        "value": "26",
        "label": "GMT+7"
      },
      {
        "value": "27",
        "label": "GMT+8"
      },
      {
        "value": "28",
        "label": "GMT+9"
      },
      {
        "value": "29",
        "label": "GMT+10"
      },
      {
        "value": "30",
        "label": "GMT+11"
      },
      {
        "value": "31",
        "label": "GMT+12"
      },
      {
        "value": "32",
        "label": "GMT+13"
      },
      {
        "value": "33",
        "label": "EET"
      },
      {
        "value": "34",
        "label": "POR"
      },
      {
        "value": "35",
        "label": "GMT+9.5"
      },
      {
        "value": "36",
        "label": "GMT+10.5"
      }
]

const selected_decimal = [
    {
        "value": "1",
        "label": "Fracción"
      },
      {
        "value": "2",
        "label": "Decimal",
        'selected': true

      },
      {
        "value": "3",
        "label": "Americano"
      },
      {
        "value": "4",
        "label": "Amer/Frac"
      }
]

const selected_max_inactivity = [
    {
        "value": "1",
        "label": "20 minutos"
      },
      {
        "value": "2",
        "label": "1 hora"
      },
      {
        "value": "3",
        "label": "2 horas"
      },
      {
        "value": "4",
        "label": "3 horas",
        'selected': true
      },
      {
        "value": "5",
        "label": "6 horas"
      },
      {
        "value": "6",
        "label": "12 horas"
      }
]

export default function UsuarioMiCuentaPreferencia() {
    return (
      <div className="o-UsuarioMensajeNuevo" style={{gap:'5px', paddingBottom:'70px'}}>
  
             <div className='o-UsuarioBancoDepositar-item'>
                <InputForm name="Idioma" type={"select"} options={selected_language}/>
              </div>

              <div className='o-UsuarioBancoDepositar-item'>
                <InputForm name="Zona horaria" type={"select"} options={selected_timezone}/>
              </div>

              
              <div className='o-UsuarioBancoDepositar-item'>
                <InputForm name="Visualización de cuotas" type={"select"} options={selected_decimal}/>
              </div>

              <div className='o-UsuarioBancoDepositar-item'>
                <InputForm name="Período máximo de inactividad" type={"select"} options={selected_max_inactivity}/>
              </div>

              <div className='o-UsuarioBancoDepositar-item'>
                <TitleSimple text="Elija cómo recibir sus ofertas" bold={true} fontSize={18}/>
              </div>

              <div className='o-UsuarioBancoDepositar-item' style={{width:'100%'}}>
                <TitleSimple text="Comunicación externa" bold={true} fontSize={16}/>
                <Switch text='Notificación' value={false}/>
                <Switch text='Mensaje de texto' value={false}/>
                <Switch text='Correo electrónico' value={false}/>
              </div>

              
              <div className='o-UsuarioBancoDepositar-item' style={{width:'100%'}}>
                <TitleSimple text="En bet365" bold={true} fontSize={16}/>
                <Switch text='Mensajes en bet365' value={false}/>
                <Switch text='Mensajes emergentes promocionales'/>
              </div>

              <div className='o-UsuarioBancoDepositar-item'>
                <InputForm  placeholder="Contraseña" type="password"/>
            </div>
              <div className='o-UsuarioBancoDepositar-item'>
                  <Button text="Cambiar domicilio" type={1}/>
              </div>
      </div>
    )
  }
  