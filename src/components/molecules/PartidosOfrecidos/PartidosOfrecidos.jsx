import {useContext} from 'react'
import {UserContext} from '../../../../src/context/UserProvider';
import "./PartidosOfrecidos.css";

export default function PartidosOfrecidos({title = 'Partidos ofrecidos', data}) {
    const { apuesta, setApuesta } = useContext(UserContext);
    const setDataModal = (element, team, val) => {
        const data = {
            team_select: team,
            monto: val,
            title: element.equipo1 + " vs " + element.equipo2,
        }
        setApuesta(data)
    }

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
                        <div className="PartidosOfrecidos-item-title-text ">{option?.fecha + " " +option?.hora}</div>
                        <div className="PartidosOfrecidos-item-title-icon">
                            <div className="PartidosOfrecidos-item-title-icon">{option?.flecha}</div>
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
                                        ? <img src={require(`../../../icons/team/${option.team1_url}`)} alt={option.equipo1} />
                                        : <img src={option.team1_url}/>
                                    )
                                    : null
                                }


                            </div>
                            <div className="PartidosOfrecidos-team-options_text">{option.equipo1}</div>
                        </div>
                        <div className="PartidosOfrecidos-team-options">
                            <div className="PartidosOfrecidos-team-options_icon" >
                                {/* <img src="https://www.imagecache365.com/SoccerSilks/Roma_Home_2223.svg"/> */}
                                {/* <img src={require(`../../../icons/team/${option.team2_url}`)} alt={option.name} /> */}

                                {
                                    option.team2_url
                                    ? (
                                        option.img_svg
                                        ? <img src={require(`../../../icons/team/${option.team2_url}`)} alt={option.equipo2} />
                                        : <img src={option.team2_url}/>
                                    )
                                    : null
                                }

                            </div>
                            <div className="PartidosOfrecidos-team-options_text">{option.equipo2}</div>
                        </div>
                    </div>
                    <div className="PartidosOfrecidos-item-price">
                        <div className="PartidosOfrecidos-ActionCTA-options"  onClick={() =>{setDataModal(option, option.equipo1, option.valor1)}}>
                            <div className="PartidosOfrecidos-ActionCTA-options_text">{option.valor1_blanco ? option.valor1_blanco : 1}</div>
                            <div className="PartidosOfrecidos-ActionCTA-options_text text_alert">{option.valor1}</div>
                        </div>
                        {
                            option.valorx
                            ? <>
                                <div className="PartidosOfrecidos-ActionCTA-options"  onClick={() =>{setDataModal(option, "Empate", option.valorx)}} >
                                    <div className="PartidosOfrecidos-ActionCTA-options_text">{option.valorx_blanco ? option.valorx_blanco : 'X'}</div>
                                    <div className="PartidosOfrecidos-ActionCTA-options_text text_alert">{option.valorx}</div>
                                </div>

                                <div className="PartidosOfrecidos-ActionCTA-options" onClick={() =>{setDataModal(option, option.equipo2, option.valor2)}}>
                                    <div className="PartidosOfrecidos-ActionCTA-options_text">{option.valor2_blanco ? option.valor2_blanco : 2}</div>
                                    <div className="PartidosOfrecidos-ActionCTA-options_text text_alert">{option.valor2}</div>
                                </div>
                            </>
                            : <>
                                <div className="PartidosOfrecidos-ActionCTA-options" onClick={() =>{setDataModal(option, option.equipo2, option.valor2)}}>
                                    <div className="PartidosOfrecidos-ActionCTA-options_text">{option.valor2_blanco ? option.valor2_blanco : 2}</div>
                                    <div className="PartidosOfrecidos-ActionCTA-options_text text_alert">{option.valor2}</div>
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
