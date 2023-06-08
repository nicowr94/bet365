import React from 'react'
import "./DatePicker.css";

export default function DatePicker({start_date, end_date}) {
    const icon = 
    <svg xmlns='http://www.w3.org/2000/svg' width='23' height='19' viewBox='0 0 23 19'><defs><linearGradient id='a' x1='86.777%' x2='0%' y1='50%' y2='50%'><stop offset='0%' stopColor='#F1F1F1'/><stop offset='100%' stopColor='#C6C6C6'/></linearGradient></defs><g fill='none' fillRule='evenodd'><path fill='#D8D8D8' stroke='#C2C2C2' d='M.5.5h22v18H.5z'/><path fill='#D8D8D8' stroke='url(#a)' d='M1.5 1.5h20v1h-20z'/><path fill='#D1D1D1' d='M1 3h21v15H1z'/><path fill='#F1F1F1' d='M21 4v13H2V4h19zm-1 10h-2v2h2v-2zM8 14H6v2h2v-2zm-3 0H3v2h2v-2zm6 0H9v2h2v-2zm3 0h-2v2h2v-2zm3 0h-2v2h2v-2zm-9-3H6v2h2v-2zm-3 0H3v2h2v-2zm6 0H9v2h2v-2zm3 0h-2v2h2v-2zm3 0h-2v2h2v-2zm3 0h-2v2h2v-2zM5 8H3v2h2V8zm3 0H6v2h2V8zm3 0H9v2h2V8zm3 0h-2v2h2V8zm3 0h-2v2h2V8zm3 0h-2v2h2V8zM5 5H3v2h2V5zm6 0H9v2h2V5zm3 0h-2v2h2V5zM8 5H6v2h2V5zm9 0h-2v2h2V5zm3 0h-2v2h2V5z'/></g></svg>
  return (
    <>
        <div className='a-DatePicker'>

            <div className='a-DatePicker-text'>{'Desde:'}</div>    
            <div className='a-DatePicker-text'>{start_date}</div>    
            <div className='a-DatePicker-icon'>{icon}</div>    

        </div>
        <div className='a-DatePicker'>

            <div className='a-DatePicker-text'>{'Hasta:'}</div>    
            <div className='a-DatePicker-text'>{end_date}</div>    
            <div className='a-DatePicker-icon'>{icon}</div>    

        </div>
    </>
  )
}
