import React from 'react'
import "./Checkbox.css";

export default function Checkbox({text}) {
  return (
    <div className="a-Checkbox">
        
            <span className="a-Checkbox-content">
                <input type="checkbox" />
                <label >{text}</label>
            </span>
    </div>
  )
}
