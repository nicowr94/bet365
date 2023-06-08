import React from 'react'
import "./ButtonSimple.css";

export default function ButtonSimple({text, option_icon = 0}) {
    const icon_down= <svg xmlns='http://www.w3.org/2000/svg' height='13' viewBox='0 0 12 13' width='12'><path d='M4.586 7.802L6 9.212l1.414-1.41-.003-.003 3.271-3.278-1.414-1.41L7 5.383V0H5l.002 5.385-2.27-2.274-1.414 1.41L4.588 7.8zM12 13v-1.995H0V13z' fill='#303030'/></svg>
    const icon_up= <svg xmlns='http://www.w3.org/2000/svg' height='13' viewBox='0 0 12 13' width='12'><path d='M4.586 1.41L6 0l1.414 1.41-.003.004 3.271 3.277-1.414 1.411L7 3.83v5.383H5V3.842l.002-.014-2.27 2.274-1.414-1.41 3.27-3.278zM12 13v-1.995H0V13z' fill='#303030'/></svg>
    
    const icon = option_icon == 0 ? icon_down : icon_up
    return (
        <div className='a-ButtonSimple'>
            {icon}
            {text}
        </div>
    )
}
