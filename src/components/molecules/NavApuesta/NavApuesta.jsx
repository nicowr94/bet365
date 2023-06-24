import React from 'react'
import "./NavApuesta.css";

export default function NavApuesta({title, deport = "Béisbol"}) {
  return (
    <div className='m-navApuesta-container'>
        <div className='m-navApuesta-container-back'> {  deport} </div>
        <div className='m-navApuesta-container-title'>
            {title}
        </div>
        <div className='m-navApuesta-container-list'>
            <div className='m-navApuesta-container-list-options--selected'>Apuestas destacadas</div>
            <div className='m-navApuesta-container-list-options'>Otras apuestas</div>
            <div className='m-navApuesta-container-list-options'>Futuras</div>
            <div className='m-navApuesta-container-list-options'>Tabla</div>
        </div>
    </div>
  )
}
