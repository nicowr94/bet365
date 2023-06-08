import React from 'react'
import "./BannerInfo.css";

export default function BannerInfo() {
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
          <div className="bannerInfo-subtitle">UEFA Europa League</div>
          <div className="bannerInfo-desc">
              <div className="bb-DetailsHeader_ClockChild ">Miércoles</div>
              <div className="bb-DetailsHeader_ClockChild ">14:00</div>
              <img src={require(`../../../icons/sound.svg`).default} alt={"sound"} style={{height: '15px', width: '15px'}} />
              <div className="bannerInfo-title">6 aumentos</div>
          </div>
        </div>
        <div className="bannerInfo-Offer">
          <div className="bannerInfo-Offer-options">
            <div className="bannerInfo-Offer-options_icon">
            <img src="https://www.imagecache365.com/SoccerSilks/Sevilla_Home_2223.svg"/>
            </div>
            <div className="bannerInfo-Offer-options_text">Sevilla</div>
          </div>
          <div className="bannerInfo-Offer-options">
            <div className="bannerInfo-Offer-options_icon" >
            <img src="https://www.imagecache365.com/SoccerSilks/Roma_Home_2223.svg"/>

            </div>
            <div className="bannerInfo-Offer-options_text">Roma</div>
          </div>
        </div>
        <div className="bannerInfo-ActionCTA">
          <div className="bannerInfo-ActionCTA-options">
            <div className="bannerInfo-ActionCTA-options_text">Sevilla</div>
            <div className="bannerInfo-ActionCTA-options_text text_alert">2.80</div>
          </div>
          <div className="bannerInfo-ActionCTA-options">
            <div className="bannerInfo-ActionCTA-options_text">Empate</div>
            <div className="bannerInfo-ActionCTA-options_text text_alert">2.90</div>
          </div>

          <div className="bannerInfo-ActionCTA-options">
            <div className="bannerInfo-ActionCTA-options_text">Roma</div>
            <div className="bannerInfo-ActionCTA-options_text text_alert">2.90</div>
          </div>
        </div>
      </div>
    </div>
  )
}
