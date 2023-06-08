import React from 'react'
import "./Switch.css";

export default function Switch({text ="texto", value = true}) {
  return (
    <div className='a-Switch-content'>
        <div className='a-Switch-content-label'>
            {text}
        </div>
        <div className='a-Switch-content-options'>
            <div className={'a-Switch-content-item ' + (value ? 'a-Switch-content-item--active' : '')}>Si</div>
            <div className={'a-Switch-content-item ' + (!value ? 'a-Switch-content-item--active' : '')}>No</div>
        </div>
    </div>
  )
}
