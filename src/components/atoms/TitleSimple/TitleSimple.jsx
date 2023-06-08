import React from 'react'
import "./TitleSimple.css";

export default function TitleSimple({text, fontSize, bold = true, align = 'left'}) {
  return (
    <div className='a-TitleSimple' style={{textAlign:align}}>
        <div className={"a-TitleSimple-text " + (bold ? 'a-TitleSimple-text--bold' : null)} style={{fontSize: (fontSize ? fontSize : null), textAlign:align}}>{text}</div>
    </div>
  )
}
