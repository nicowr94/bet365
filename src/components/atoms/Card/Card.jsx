import React from 'react'
import "./Card.css";

export default function Card({text}) {
  return (
    <div className="a-card-container">
        <div className='a-card-containe-text'>{text}</div>
        <div className='a-card-containe-icon'></div>
    </div>
  )
}
