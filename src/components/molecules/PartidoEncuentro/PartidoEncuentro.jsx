import {useContext} from 'react'
import {UserContext} from '../../../../src/context/UserProvider';
import "./PartidoEncuentro.css";

export default function PartidoEncuentro({title = "Partidos ofrecidos", data}) {

    const { apuesta, setApuesta } = useContext(UserContext);
    const setDataModal = (element, team, val) => {
        const data = {
            team_select: team,
            monto: val,
            title: element.team1_name + " vs " + element.team2_name,
        }
        setApuesta(data)
    }
    const infoOptions =[{
        title:'Dom 19:00',
        title_number:'6',
        team1_url:'mia_heat.svg',
        team1_name:'MIA Healt',
        team2_url:'den_nuggets.svg', 
        team2_name:'DEN Nuggets',
        val1:'1.90',
        val2:'1.90',
        img_svg: true
    }
    ]
  return (
        <div className="PartidoEncuentro">
        <div className="PartidoEncuentro-Header ">
            <div className="PartidoEncuentro-Header_Title ">{title}</div>
        </div>
        <div className="PartidoEncuentro-list">
            {data.map((option, index) => 
              (
                <div className="PartidoEncuentro-item "  key={"PartidoEncuentro-"+index}>
                    <div className="PartidoEncuentro-item-title ">
                        <div className="PartidoEncuentro-item-title-text ">{option.title}</div>
                        <div className="PartidoEncuentro-item-title-icon">
                            <div className="PartidoEncuentro-item-title-icon">{option.title_number}</div>
                            <div className="PartidoEncuentro-item-title-icon-icon"></div>
                        </div>
                    </div>
                    <div className="PartidoEncuentro-item-data">
                        <div className="PartidoEncuentro-team-options">
                            <div className="PartidoEncuentro-team-options_icon">
                                {/* <img src="https://www.imagecache365.com/SoccerSilks/Sevilla_Home_2223.svg"/> */}
                                {/* <img src={require(`${option.team1_url}`).default} alt={"sound"} /> */} 
                                {
                                    option.img_svg
                                    ? <img src={require(`../../../icons/team/${option.team1_url}`)} alt={option.team1_name} />
                                    : <img src={option.team1_url}/>
                                }
                                 


                            </div>
                            <div className="PartidoEncuentro-team-options_text">{option.team1_name}</div>
                        </div>
                        <div className="PartidoEncuentro-team-options">
                            <div className="PartidoEncuentro-team-options_icon" >
                                {/* <img src="https://www.imagecache365.com/SoccerSilks/Roma_Home_2223.svg"/> */}
                                {/* <img src={require(`../../../icons/team/${option.team2_url}`)} alt={option.name} /> */}

                                {
                                    option.img_svg
                                    ? <img src={require(`../../../icons/team/${option.team2_url}`)} alt={option.team2_name} />
                                    : <img src={option.team2_url}/>
                                }

                            </div>
                            <div className="PartidoEncuentro-team-options_text">{option.team2_name}</div>
                        </div>
                    </div>
                    <div className="PartidoEncuentro-item-price">
                        <div className="PartidoEncuentro-ActionCTA-options"  onClick={() =>{setDataModal(option, option.team1_name, option.valor1)}}>
                            <div className="PartidoEncuentro-ActionCTA-options_text">{option.valor1_blanco}</div>
                            <div className="PartidoEncuentro-ActionCTA-options_text text_alert">{option.valor1}</div>
                        </div>
                        <div className="PartidoEncuentro-ActionCTA-options" onClick={() =>{setDataModal(option, option.team2_name, option.valor1)}}>
                            <div className="PartidoEncuentro-ActionCTA-options_text">{option.valor2_blanco}</div>
                            <div className="PartidoEncuentro-ActionCTA-options_text text_alert">{option.valor2}</div>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
