import {useContext} from 'react'
import "./BannerInfo.css";
import {UserContext} from '../../../../src/context/UserProvider';

export default function BannerInfo() {
  const { data, apuesta, setApuesta } = useContext(UserContext);

  const setDataModal = (element, team, val) => {
    const data = {
        team_select: team,
        monto:  Number(val).toFixed(2) > 0 ? Number(val).toFixed(2) : 1,
        title: element.equipo1 + " vs " + element.equipo2,
    }
    setApuesta(data)
  }

  const dataDefault = {
    title: '',
    fecha: '',
    equipo1: '',
    equipo2: '',
    hora:'',
    puntaje_equipo1:'',
    puntaje_equipo2:'',
    empate:''
  }

  const itemBannerHome = data.length>0 ? data.find((item) => item.tabla === "Banner home").items[0] : dataDefault;

  const imageUrl = 'https://www.bet365.com/home/images/home/centre/pbb_Football_Sevilla_ErikLamela_v_Roma_ChrisSmalling_0523_v8.jpg'
  return (
    <div className="bannerInfo">
        <div className="bannerInfo-container">
        <div className="bannerInfo-image-container">
          <div className="bannerInfo-image-container-add"></div>
          <div style={{backgroundImage:`url(${imageUrl})`}} className="bannerInfo-image">
          </div>
        </div>
        <div className="bannerInfo-container-title">
          <div className="bannerInfo-subtitle">{itemBannerHome?.titulo}</div>
          <div className="bannerInfo-desc">
              <div className="bb-DetailsHeader_ClockChild ">{itemBannerHome?.fecha}</div>
              <div className="bb-DetailsHeader_ClockChild ">{itemBannerHome?.hora}</div>
              <img src={require(`../../../icons/sound.svg`).default} alt={"sound"} style={{height: '15px', width: '15px'}} />
              <div className="bannerInfo-title">{itemBannerHome?.aumentos} aumentos</div>
          </div>
        </div>
        <div className="bannerInfo-Offer">
          <div className="bannerInfo-Offer-options">
            <div className="bannerInfo-Offer-options_icon">
            <img src="https://www.imagecache365.com/SoccerSilks/Sevilla_Home_2223.svg"/>
            </div>
            <div className="bannerInfo-Offer-options_text">{itemBannerHome?.equipo1}</div>
          </div>
          <div className="bannerInfo-Offer-options">
            <div className="bannerInfo-Offer-options_icon" >
            <img src="https://www.imagecache365.com/SoccerSilks/Roma_Home_2223.svg"/>

            </div>
            <div className="bannerInfo-Offer-options_text">{itemBannerHome?.equipo2}</div>
          </div>
        </div>
        <div className="bannerInfo-ActionCTA">
          <div className="bannerInfo-ActionCTA-options"  onClick={() =>{setDataModal(itemBannerHome, itemBannerHome?.equipo1, itemBannerHome?.puntaje_equipo1)}}>
            <div className="bannerInfo-ActionCTA-options_text">{itemBannerHome?.equipo1}</div>
            <div className="bannerInfo-ActionCTA-options_text text_alert" >{itemBannerHome?.puntaje_equipo1}</div>
          </div>
          <div className="bannerInfo-ActionCTA-options"  onClick={() =>{setDataModal(itemBannerHome, 'Empate', itemBannerHome?.empate)}}>
            <div className="bannerInfo-ActionCTA-options_text">Empate</div>
            <div className="bannerInfo-ActionCTA-options_text text_alert" >{itemBannerHome?.empate}</div>
          </div>

          <div className="bannerInfo-ActionCTA-options" onClick={() =>{setDataModal(itemBannerHome, itemBannerHome?.equipo2, itemBannerHome?.puntaje_equipo2)}}>
            <div className="bannerInfo-ActionCTA-options_text">{itemBannerHome?.equipo2}</div>
            <div className="bannerInfo-ActionCTA-options_text text_alert" >{itemBannerHome?.puntaje_equipo2}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
