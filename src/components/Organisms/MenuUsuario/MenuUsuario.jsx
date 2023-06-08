import React from 'react'
import "./MenuUsuario.css";

export default function MenuUsuario({title, optionActive = 0, setOptionActive, listOptions}) {
  return (
    <div className='o-MenuUsuario'>
        <div className='o-MenuUsuario-title'>{title}</div>

        <div className="o-MenuUsuario-list">
          {listOptions.map((o,index) => (
              <div key={"o-MenuUsuario-"+index} onClick={()=>{setOptionActive(index)}}>
                  <div className={"o-MenuUsuario-item " + (index===optionActive ? 'o-MenuUsuario-item--active' : null)}>
                      <div>{o.label}</div>
                  </div>
              </div>
          ))}
        </div>
    </div>
  )
}
