import React from 'react'
import "./SwitchMultiple.css";

export default function SwitchMultiple({options =[], active}) {
  return (
    <div className='a-SwitchMultiple-content'>
        <div className='a-SwitchMultiple-content-options'>
            <div className={'a-SwitchMultiple-content-item ' + ( active === 0 ? 'a-SwitchMultiple-content-item--active' : '')}>{options[0]}</div>
            <div className={'a-SwitchMultiple-content-item ' + ( active === 1 ? 'a-SwitchMultiple-content-item--active' : '')}>{options[1]}</div>
            <div className={'a-SwitchMultiple-content-item ' + ( active === 2 ? 'a-SwitchMultiple-content-item--active' : '')}>{options[2]}</div>
        </div>
    </div>
  )
}
