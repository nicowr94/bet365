import React from 'react'
import "./PartidosOfrecidos.css";

export default function PartidosOfrecidos({title = 'Partidos ofrecidos', data}) {


  return (
    <div className="PartidosOfrecidos">
        <div className="PartidosOfrecidos-Header ">
            <div className="PartidosOfrecidos-Header_Title ">{title}</div>
        </div>
        <div className="PartidosOfrecidos-list">
            {data?.map((option, index) => 
              (
                <div className="PartidosOfrecidos-item "  key={"PartidosOfrecidos-"+index}>
                    <div className="PartidosOfrecidos-item-title ">
                        <div className="PartidosOfrecidos-item-title-text ">{option.title}</div>
                        <div className="PartidosOfrecidos-item-title-icon">
                            <div className="PartidosOfrecidos-item-title-icon">{option.title_number}</div>
                            <div className="PartidosOfrecidos-item-title-icon-icon"></div>
                        </div>
                    </div>
                    <div className="PartidosOfrecidos-item-data">
                        <div className="PartidosOfrecidos-team-options">
                            <div className="PartidosOfrecidos-team-options_icon">
                                {/* <img src="https://www.imagecache365.com/SoccerSilks/Sevilla_Home_2223.svg"/> */}
                                {/* <img src={require(`${option.team1_url}`).default} alt={"sound"} /> */} 

                                {
                                    option.team1_url
                                    ? (
                                        option.img_svg
                                        ? <img src={require(`../../../icons/team/${option.team1_url}`)} alt={option.team1_name} />
                                        : <img src={option.team1_url}/>
                                    )
                                    : null
                                }


                            </div>
                            <div className="PartidosOfrecidos-team-options_text">{option.team1_name}</div>
                        </div>
                        <div className="PartidosOfrecidos-team-options">
                            <div className="PartidosOfrecidos-team-options_icon" >
                                {/* <img src="https://www.imagecache365.com/SoccerSilks/Roma_Home_2223.svg"/> */}
                                {/* <img src={require(`../../../icons/team/${option.team2_url}`)} alt={option.name} /> */}

                                {
                                    option.team2_url
                                    ? (
                                        option.img_svg
                                        ? <img src={require(`../../../icons/team/${option.team2_url}`)} alt={option.team2_name} />
                                        : <img src={option.team2_url}/>
                                    )
                                    : null
                                }

                            </div>
                            <div className="PartidosOfrecidos-team-options_text">{option.team2_name}</div>
                        </div>
                    </div>
                    <div className="PartidosOfrecidos-item-price">
                        <div className="PartidosOfrecidos-ActionCTA-options">
                            <div className="PartidosOfrecidos-ActionCTA-options_text">1</div>
                            <div className="PartidosOfrecidos-ActionCTA-options_text text_alert">{option.val1}</div>
                        </div>
                            {
                                option.val3
                                ? <>
                                    <div className="PartidosOfrecidos-ActionCTA-options">
                                        <div className="PartidosOfrecidos-ActionCTA-options_text">X</div>
                                        <div className="PartidosOfrecidos-ActionCTA-options_text text_alert">{option.val2}</div>
                                    </div>

                                    <div className="PartidosOfrecidos-ActionCTA-options">
                                        <div className="PartidosOfrecidos-ActionCTA-options_text">2</div>
                                        <div className="PartidosOfrecidos-ActionCTA-options_text text_alert">{option.val3}</div>
                                    </div>
                                </>
                                : <>
                                    <div className="PartidosOfrecidos-ActionCTA-options">
                                        <div className="PartidosOfrecidos-ActionCTA-options_text">2</div>
                                        <div className="PartidosOfrecidos-ActionCTA-options_text text_alert">{option.val2}</div>
                                    </div>
                                </>
                            }
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
