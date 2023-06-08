import React from 'react'
import "./TitleDirecto.css";

export default function TitleDirecto({title, options}) {
  return (
    <div className="m-titleDirecto">
        <div className="m-titleDirecto-title">
            {title}
            <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 12 12'><path fill='{0}' fillRule='evenodd' d='M10 3h2v9h-2zM0 7h2v5H0zm5-7h2v12H5z'/></svg>
        </div>
        <div className="m-titleDirecto-options">
            {options.map((i,index) => {
                return <div  key={"titleDirecto-"+index} className={"m-titleDirecto-options "+ (index===0 ? 'm-titleDirecto-options--selected':'')}>{i.label}</div>
            })}
        </div>
    </div>
  )
}
