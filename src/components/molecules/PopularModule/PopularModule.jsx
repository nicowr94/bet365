import React from 'react'
import "./PopularModule.css";

export default function PopularModule() {

    const infoOptions =[{
        title:'Sevilla v Roma',
        text1:'Roma levantará el trofeo',
        text2:'Tammy Abraham - marcará en cualquier momento',
        text3:'Lorenzo Pellegrini - Más de 0.5 asistencias',
        val1:'8.50',
        val2:'9.50',
    },{
        title:'Sevilla v Roma',
        text1:'Encuentro - Resultado - Sevilla',
        text2:'Erik Lamela - Más de 0.5 remates al arco',
        text3:'Youssef En-Nesyri - Más de 0.5 remates al arco',
        val1:'6.00',
        val2:'6.50',
    },{
        title:'Sevilla v Roma',
        text1:'Encuentro - Resultado - Sevilla',
        text2:'Youssef En-Nesyri - marcará en cualquier momento',
        text3:'Más de 2 goles',
        val1:'8.00',
        val2:'9.00',
    },
    ]
  return (
    <div className="PopularModule">
        <div className="PopularModule_HeaderWrapper ">
            <div className="PopularModule_Header ">
                <div className="PopularModule_HeaderText "></div>
                <span className="PopularModule_HeaderText-bold ">Aumento</span>
                <span className="PopularModule_HeaderText "> de apuesta</span>
                <div >
                    {/* <img className="PopularModule_HeaderChevron " src={require(`../../../icons/array.svg`).default} alt={"array"} style={{height: '15px', width: '15px'}} /> */}
                    <div className="PopularModule_HeaderChevron "  ></div>
                </div>
            </div>
        </div>

        <div className="PopularModule_Info">
            {infoOptions.map((option, index) => 
              (
                <div className="PopularModule_Info-item "  key={"PopularModule_Info-"+index}>
                    <div className="PopularModule_Info-item-title ">
                        <div className="PopularModule_Info-item-title-icon "></div>
                        <div className="PopularModule_Info-item-title-text ">{option.title}</div>
                    </div>
                    <div className="PopularModule_Info-item-subtitle">Crear apuesta</div>
                    <div className="PopularModule_Info-item-data">
                        <div className="PopularModule_Info-item-data-text">{option.text1}</div>
                        <div className="PopularModule_Info-item-data-text">{option.text2}</div>
                        <div className="PopularModule_Info-item-data-text-end ">{option.text3}</div>
                    </div>
                    <div className="PopularModule_Info-item-price">
                        <div className="PopularModule_Info-item-price-old">{option.val1}</div>
                        <div className="PopularModule_Info-item-price-icon PopularModule_HeaderChevron"></div>
                        <div className="PopularModule_Info-item-price-new">{option.val2}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
