import {useContext} from 'react'
import "./PopularModule.css";
import {UserContext} from '../../../../src/context/UserProvider';

export default function PopularModule() {

    const { data, setApuesta } = useContext(UserContext);


    const setDataModal = (element, team, val) => {
        const data = {
            team_select: team,
            monto: val,
            title: element.texto1
        }
        setApuesta(data)
    }

    const dataDefault =[{
        titulo:'Sevilla v Roma',
        texto1:'Roma levantará el trofeo',
        texto2:'Tammy Abraham - marcará en cualquier momento',
        texto3:'Lorenzo Pellegrini - Más de 0.5 asistencias',
        valor_anterior:'8.50',
        valor_nuevo:'9.50',
    },{
        titulo:'Sevilla v Roma',
        texto1:'Encuentro - Resultado - Sevilla',
        texto2:'Erik Lamela - Más de 0.5 remates al arco',
        texto3:'Youssef En-Nesyri - Más de 0.5 remates al arco',
        valor_anterior:'6.00',
        valor_nuevo:'6.50',
    },{
        titulo:'Sevilla v Roma',
        texto1:'Encuentro - Resultado - Sevilla',
        texto2:'Youssef En-Nesyri - marcará en cualquier momento',
        texto3:'Más de 2 goles',
        valor_anterior:'8.00',
        valor_nuevo:'9.00',
    },
    ]

    const itemDB = data.length>0 ? data.find((item) => item.tabla === "Aumento de apuesta").items : dataDefault;

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
            {itemDB.map((option, index) => 
              (
                <div className="PopularModule_Info-item "  key={"PopularModule_Info-"+index}>
                    <div className="PopularModule_Info-item-title ">
                        <div className="PopularModule_Info-item-title-icon "></div>
                        <div className="PopularModule_Info-item-title-text ">{option.titulo}</div>
                    </div>
                    <div className="PopularModule_Info-item-subtitle">Crear apuesta</div>
                    <div className="PopularModule_Info-item-data">
                        <div className="PopularModule_Info-item-data-text">{option.texto1}</div>
                        <div className="PopularModule_Info-item-data-text">{option.texto2}</div>
                        <div className="PopularModule_Info-item-data-text-end ">{option.texto3}</div>
                    </div>
                    <div className="PopularModule_Info-item-price"  onClick={() =>{setDataModal(option, option.titulo, option.valor_nuevo)}}>
                        <div className="PopularModule_Info-item-price-old">{option.valor_anterior}</div>
                        <div className="PopularModule_Info-item-price-icon PopularModule_HeaderChevron"></div>
                        <div className="PopularModule_Info-item-price-new">{option.valor_nuevo}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
