import React from 'react'
import "./Button.css";

export default function Button({text = 'button', type = 0}) {

  const style_type = 'a-Button-type'+type
  return (
    <div className={'a-Button '+ style_type}>{text}</div>
  )
}
