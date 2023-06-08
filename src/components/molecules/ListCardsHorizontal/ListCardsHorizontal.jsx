import React from 'react'
import "./ListCardsHorizontal.css";

export default function ListCardsHorizontal({title, icon, items}) {
  return (
    <div className='m-ListCardsHorizontal-content'>
        <div className='m-ListCardsHorizontal-title'>
            {/* <img src={require(`../../../icons/${icon}`).default} alt={""} style={{height: '15px', width: '15px'}} /> */}
            <div className={"m-ListCardsHorizontal-title-icon m-ListCardsHorizontal-title-icon__"+icon}></div>

            {title}
            </div>
        <div className='m-ListCardsHorizontal-container'>
            {items.map((i,index) => (
                <div className='m-ListCardsHorizontal-item' key={"ListCardsHorizontal-"+index}>
                    <div className='m-ListCardsHorizontal-item-text'>
                        <div className='m-ListCardsHorizontal-item-text__title'>{i.title}</div>
                        <div className='m-ListCardsHorizontal-item-text__desc'>{i.desc}</div>
                        <div className='m-ListCardsHorizontal-item-text__link'>Más información</div>
                    </div>
                    <div className='m-ListCardsHorizontal-item-img'>
                        {
                            i.icon
                            ? <img src={i.icon} alt="" />
                            : null
                        }
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
