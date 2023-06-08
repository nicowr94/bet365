import React from 'react'
import "./NavDeport.css";

export default function NavDeport({url_image, title, options, en_vivo}) {
  const imageUrl = 'https://www.bet365.com/sports-assets/sports/SplashModule/assets/splash-headers/18-Basketball-desktop.jpg'
  return (
    <div>
        <div className="NavDeport-container">
            <div className="NavDeport-image-container">
                <div style={{backgroundImage:`url(${url_image})`}} className="NavDeport-image"></div>
            </div>
            <div className="NavDeport-container-title">
                <div className="NavDeport-Offer">{title}</div>
                <div className="NavDeport-Offer-options">
                    <div className="NavDeport-Offer-options_list">
                        {/* <div style={{position: 'relative'}}><div className='NavDeport-Offer-options_list__selected'>Cupones</div></div>
                        <div>Futuras</div>
                        <div>Ofertas</div> */}

                        {options.map((i,index) => {
                            if (index === 0) return <div  key={"NavDeport-"+index} style={{position: 'relative'}}><div className='NavDeport-Offer-options_list__selected'>{i.label}</div></div>
                            else return <div  key={"NavDeport-"+index} key={"NavDeport-options-"+index}>{i.label}</div>
                        })}
                    </div>
                    <div className="NavDeport-Offer-options_item">{en_vivo}</div>

                </div>
            </div>

      </div>
    </div>
  )
}
