import React from 'react'
import "./Banner.css";

export default function Banner() {
  const imageUrl = 'https://www.bet365.com/home/images/Home/imgs/TennisAcca_v9_WithIcon_0423.jpg'
  return (
    <div className="banner">
        <div className="banner-container">
        <div className="banner-image-container">
          <div style={{backgroundImage:`url(${imageUrl})`}} className="banner-image">
          </div>
        </div>
        <div className="banner-container-title">
          <div className="banner-title">Bono de combinadas de tenis</div>
        </div>
        <div className="banner-Offer">Obtenga hasta 70% más en sus combinadas del Abierto de Francia</div>
        <div className="banner-ActionCTA">Ver últimas cuotas</div>
        <div className="banner-NotesWrapper">
          <div className="banner-NotesWrapper_Notes ">Se aplica a apuestas anticipadas combinadas de 2 o más selecciones en mercados seleccionados. El porcentaje del bono dependerá del número de selecciones. Se aplican restricciones de apuesta y condiciones. Solo para clientes nuevos y elegibles.</div>
        </div>
      </div>
    </div>
  )
}
