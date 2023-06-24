import React from 'react'
import "./SwitchMultiple.css";

export default function SwitchMultiple({options =[], active, uploadOption}) {
  return (
    <div className='a-SwitchMultiple-content'>
        <div className='a-SwitchMultiple-content-options'>
            <div className={'a-SwitchMultiple-content-item ' + ( active === 0 ? 'a-SwitchMultiple-content-item--active' : '')} onClick={()=>{uploadOption && uploadOption(0)}}>{options[0]}</div>
            <div className={'a-SwitchMultiple-content-item ' + ( active === 1 ? 'a-SwitchMultiple-content-item--active' : '')} onClick={()=>{uploadOption && uploadOption(1)}}>{options[1]}</div>
            <div className={'a-SwitchMultiple-content-item ' + ( active === 2 ? 'a-SwitchMultiple-content-item--active' : '')} onClick={()=>{uploadOption && uploadOption(2)}}>{options[2]}</div>
        </div>
    </div>
  )
}
