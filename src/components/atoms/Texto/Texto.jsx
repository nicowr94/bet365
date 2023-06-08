import React from 'react'
import "./Texto.css";

export default function Texto({text, level=1, type="text"}) {
  return (
    <div className={'a-Texto-level a-Texto-level'+level +" "+ (type==='link' ? 'a-Texto-level-link' : '')}>{text}</div>
  )
}
