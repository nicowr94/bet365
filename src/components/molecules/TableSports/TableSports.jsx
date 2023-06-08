import React from 'react'
import "./TableSports.css";

export default function TableSports({title, info, bg_color = '#364D3C', title_data}) {
  return (
    // <div>{title}</div>
    <div className="m-TableSports-container" style={{ backgroundImage: 'linear-gradient(160deg, '+bg_color+' 0%, #383838 400px)'}}>
        <div className="m-TableSports-container-text">
            <div className="m-TableSports-container-text-header">
                <div>
                    {title}
                </div>
            </div>
            <div className="m-TableSports-container-text-body">
                {info.map((i,index) => (
                        <div className="m-TableSports-container-text-body-item" key={"TableSports-"+index}>
                            <div>
                                <div className="m-TableSports-container-text-body-item-text">
                                    <div className="text__subtittle" >{i.info.text1}</div>
                                    <div className="text__subtittle" >{i.info.text2}</div>
                                </div>
                                <div className="m-TableSports-container-text-body-number">
                                    <div className="number__subtittle" >{i.info.count}</div>
                                    <div className="number__subtittle" >{i.info.count2}</div>
                                    <div className="icon" ></div>
                                </div>
                            </div>

                            <div className="m-TableSports-container-text-body-item-data">
                                <div className="m-TableSports-container-text-body-item-text">
                                    <div className="number__subtittle" >{i.info.numb1_data}</div>
                                    <div className="number__subtittle" >{i.info.numb2_data}</div>
                                </div>
                                <div className="m-TableSports-container-text-body-item-text">
                                    <div className="text__subtittle_bold">{i.info.numb1}</div>
                                    <div className="text__subtittle_bold">{i.info.numb2}</div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
        <div className="m-TableSports-container-number">
            <div className="m-TableSports-container-number-header">
                {title_data.map((t,index) => (
                    <div key={"TableSports-number-"+index}>
                        <div className="m-TableSports-container-number-header-item">
                            {t.name}
                        </div>
                    </div>
                ))}
            </div>

            <div className="m-TableSports-container-number-body">
                {info.map((i,index) => (
                        <div className="m-TableSports-container-number-body-item" key={"TableSports-numberbody-"+index}>
                                <div className="text__subtittle text_alert">{i.data.numb1}</div>
                                <div className="text__subtittle text_alert">{i.data.numb2}</div>
                                {
                                    i.data.numb3
                                    ? <div className="text__subtittle text_alert">{i.data.numb3}</div>
                                    : null
                                }
                        </div>
                    ))}
            </div>
        </div>
    </div>

    )
}
