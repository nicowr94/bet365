import React from 'react'
import "./InfoDeport.css";

export default function InfoDeport({data}) {
    const icon_loza = <svg xmlns='http://www.w3.org/2000/svg' width='22' height='13' viewBox='0 0 22 13'><g fill='none' fillRule='evenodd'><rect width='21' height='12' x='.5' y='.5' fill='#199970' stroke='#FFF' rx='1'/><path fill='#FFF' d='M8.8 3.25v6.523l5.239-3.261z'/></g></svg>
    const icon_loza2 = <svg width='22' height='13' viewBox='0 0 22 13' xmlns='http://www.w3.org/2000/svg'><g fill='none'><rect stroke='#CCC' x='.5' y='.5' width='21' height='12' rx='1'/><path fillOpacity='.4' fill='#FFF' d='M6.05 5.958h9.9v1.084h-9.9z'/><path fill='#CCC' d='M10.45 1.083h1.101v10.834H10.45z'/><path fillOpacity='.4' fill='#FFF' d='M4.95 1.083h1.101v10.834H4.95zm11 0h1.101v10.834H15.95z'/></g></svg>
  return (
    <div className='m-InfoDeport'>
        <div className='m-InfoDeport-title'>
            <div className='m-InfoDeport-title-item'>
                <div className='m-InfoDeport-title-item-name m-InfoDeport-title-item-name--right'><p>{data.team1_name}</p></div>
                <div className='m-InfoDeport-title-item-number' style={{borderBottom :('2px solid ' + data.color1)}}><p>{data.team1_val}</p></div>
            </div>
            <div className='m-InfoDeport-title-item'>
                <div className='m-InfoDeport-title-item-number' style={{borderBottom :('2px solid ' + data.color2)}}><p>{data.team2_val}</p></div>
                <div className='m-InfoDeport-title-item-name m-InfoDeport-title-item-name--left'><p>{data.team2_name}</p></div>

            </div>
        </div>
        <div className='m-InfoDeport-icon'>
            {icon_loza}
            {icon_loza2}
        </div>

        <div className='m-InfoDeport-layout-content'>
            <div className='m-InfoDeport-layout'>
                <div>Acceda para ver</div>
            </div>
        </div>
    </div>
  )
}
