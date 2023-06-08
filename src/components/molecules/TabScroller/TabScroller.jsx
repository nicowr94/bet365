import {useState} from "react";
import "./TabScroller.css";

export default function TabScroller({listOptions}) {
    const [optionActive, setOptionActive] = useState(0);

    return (
        <div className='m-TabScroller'>
            <div className='m-TabScroller-options'>
                {listOptions.map((o,index) => (
                <div  className='m-TabScroller-options-item_content' key={"m-TabScroller-"+index} onClick={()=>{setOptionActive(index)}}>
                        <div className={"m-TabScroller-item " + (index===optionActive ? 'm-TabScroller-item--active' : null)}>
                            <div>{o.label}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='m-TabScroller-content'>
                {listOptions[optionActive].content}
            </div>
        </div>
    )
}
