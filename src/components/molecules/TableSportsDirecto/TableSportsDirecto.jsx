import {useContext, useState} from "react";
import {UserContext} from '../../../../src/context/UserProvider';
import "./TableSportsDirecto.css";

export default function TableSportsDirecto({title, info, bg_color = '#364D3C', title_data}) {
    const favorito = <svg width='11' height='11' viewBox='0 0 11 11' xmlns='http://www.w3.org/2000/svg'><title>Path Copy</title><path d='M5.5 0l1.699 3.62L11 4.2 8.25 7.019 8.898 11 5.5 9.12 2.1 11l.65-3.981L0 4.199l3.8-.58L5.5 0zM6.7 4.285L5.5 1.725l-1.201 2.56-2.777.424 2.012 2.063-.466 2.854L5.5 8.283l2.431 1.344-.464-2.855 2.011-2.063-2.777-.424z' fill='#ccc' fillRule='nonzero'/></svg>
    const StatsIcon  = <svg width='13' height='13' viewBox='0 0 13 13' xmlns='http://www.w3.org/2000/svg'><path d='M5 0h3v13H5V0zm5 3h3v10h-3V3zM0 7h3v6H0V7z' fill='#ccc' fillRule='evenodd'/></svg>


    const { apuesta, setApuesta } = useContext(UserContext);

    const setDataModal = (element, team, val) => {
      const data = {
          team_select: team,
          monto: val,
          title: element.info.text1 + " vs " + element.info.text2,
      }
      setApuesta(data)
      console.log(data);
      console.log(team);
    }

    return (
        // <div>{title}</div>
        <div className="m-TableSportsDirecto-container">
            <div className="m-TableSportsDirecto-container-text">
                <div className="m-TableSportsDirecto-container-text-header">
                    <div>
                        {favorito}
                        {title}
                    </div>
                </div>
                <div className="m-TableSportsDirecto-container-text-body">
                    {info.map((i,index) => (
                            <div className='m-TableSportsDirecto-container-item-border' key={"TableSports-"+index}>

                                <div className="m-TableSportsDirecto-container-text-body-item">

                                <div className="m-TableSportsDirecto-container-text-body-item-content">
                                    {favorito}

                                    <div>
                                        <div className="m-TableSportsDirecto-container-text-body-item-text--column">
                                           {/* <div>
                                                { i.info.count ? <div className="text__subtittle" >{i.info.count}</div> : null}
                                                { i.info.count2 ? <div className="text__subtittle" >{i.info.count2}</div> : null}
                                           </div> */}
                                           {
                                                i.info.count
                                                ? (
                                                <div>
                                                    { i.info.count ? <div className="text__subtittle" >{i.info.count}</div> : null}
                                                    { i.info.count2 ? <div className="text__subtittle" >{i.info.count2}</div> : null}
                                                </div>
                                                )
                                                : (
                                                null
                                                )
                                           }
                                           <div>

                                               {
                                                   i.info.imageSVG ?
                                                (
                                                    <>
                                                        <div className="text__subtittle item_image" >
                                                            { i.info.team1_url ? <img src={require(`../../../icons/basquet/${i.info.team1_url}`)}/> : ((i.info.team1_principal) ? <div className='m-TableSportsDirecto-text__subtittle--icon-principal'></div> : <div className='m-TableSportsDirecto-text__subtittle--icon'></div> )}
                                                            {/* { (!i.info.team1_url && i.info.team1_principal) ? <div className='m-TableSportsDirecto-text__subtittle--icon'></div> : null} */}
                                                            
                                                            {i.info.text1}
                                                        </div>
                                                        <div className="text__subtittle item_image" >
                                                            {/* { i.info.team2_url? <img src={i.info.team2_url}/> : null} */}
                                                            { i.info.team2_url ? <img src={require(`../../../icons/basquet/${i.info.team2_url}`)}/> : ((i.info.team2_principal) ? <div className='m-TableSportsDirecto-text__subtittle--icon-principal'></div> : <div className='m-TableSportsDirecto-text__subtittle--icon'></div> )}

                                                            {i.info.text2}
                                                        </div>
                                                    </>
                                                )
                                                   
                                                   :

                                                   (
                                                    <>
                                                        <div className="text__subtittle item_image" >
                                                            { i.info.team1_url ? <img src={i.info.team1_url}/> : ((i.info.team1_principal) ? <div className='m-TableSportsDirecto-text__subtittle--icon-principal'></div> : <div className='m-TableSportsDirecto-text__subtittle--icon'></div> )}
                                                            {/* { (!i.info.team1_url && i.info.team1_principal) ? <div className='m-TableSportsDirecto-text__subtittle--icon'></div> : null} */}
                                                            
                                                            {i.info.text1}
                                                        </div>
                                                        <div className="text__subtittle item_image" >
                                                            {/* { i.info.team2_url? <img src={i.info.team2_url}/> : null} */}
                                                            { i.info.team2_url ? <img src={i.info.team2_url}/> : ((i.info.team2_principal) ? <div className='m-TableSportsDirecto-text__subtittle--icon-principal'></div> : <div className='m-TableSportsDirecto-text__subtittle--icon'></div> )}

                                                            {i.info.text2}
                                                        </div>
                                                    </>
                                                )
                                               }
                                                
                                           </div>
                                        </div>
                                        {/* <div className="m-TableSportsDirecto-container-text-body-number">
                                            <div className="number__subtittle" >{i.info.count}</div>
                                            <div className="number__subtittle" >{i.info.count2}</div>
                                            <div className="icon" ></div>
                                        </div> */}
                                    </div>
                                </div>

                                <div className="m-TableSportsDirecto-container-text-body-item-data">
                                   
                                    <div className="m-TableSportsDirecto-container-text-body-item-text">
                                        <div className="text__subtittle_bold">{i.info.numb1}</div>
                                        <div className="text__subtittle_bold">{i.info.numb2}</div>
                                    </div>
                                    <div className="m-TableSportsDirecto-container-text-body-item-text">
                                        <div className="number__subtittle" >{i.info.numb1_data}</div>
                                        <div className="number__subtittle" >{i.info.numb2_data}</div>
                                    </div>
                                    <div className="m-TableSportsDirecto-container-text-body-item-text">
                                        <div className="number__subtittle" >{i.info.numb1_data2}</div>
                                        <div className="number__subtittle" >{i.info.numb2_data2}</div>
                                    </div>
                                    {StatsIcon}

                                </div>


                            </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className="m-TableSportsDirecto-container-number">
                <div className="m-TableSportsDirecto-container-number-header">
                    {title_data.map((t,index) => (
                        <div key={"TableSports-number-"+index}>
                            <div className="m-TableSportsDirecto-container-number-header-item">
                                {t.name}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="m-TableSportsDirecto-container-number-body">
                    {info.map((i,index) => (
                        <div className='m-TableSportsDirecto-container-item-border' key={"TableSports-numberbody-"+index}>
                            <div className="m-TableSportsDirecto-container-number-body-item">
                                    <div className="text__subtittle text_alert" onClick={() =>{setDataModal(i, i.info.text1, i.data.numb1)}}>
                                        <div>{i.data.numb1_aux}</div>
                                        {i.data.numb1}
                                    </div>
                                    {/* <div className="text__subtittle text_alert">{i.data.numb2}</div> */}
                                    <div className="text__subtittle text_alert" onClick={() =>{setDataModal(i, (i.data.numb3 ? 'Empate' : i.info.text2), i.data.numb2)}}>
                                        <div>{i.data.numb2_aux}</div>
                                        {i.data.numb2}
                                    </div>
                                    {
                                        i.data.numb3
                                        ? <div className="text__subtittle text_alert" onClick={() =>{setDataModal(i, i.info.text2, i.data.numb3)}} >{i.data.numb3}</div>
                                        : null
                                    }
                            </div>
                        </div>
                        ))}
                </div>
            </div>
        </div>

        )
}
