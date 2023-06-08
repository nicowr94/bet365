import React from 'react'
import "./Title.css";

export default function Title({img, text}) {
  return (
    <div className='a-title'>
        {/* <div className="a-title-icon"></div> */}
        {
            img
                ? <img src={require(`../../../icons/${img}`)} alt={'img-'+text} />
                : null
        }
        <div className="a-title-text">{text}</div>
    </div>
  )
}
