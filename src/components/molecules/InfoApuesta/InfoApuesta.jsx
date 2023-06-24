import {useState,useContext} from 'react'
import {UserContext} from '../../../context/UserProvider';
import "./InfoApuesta.css";

export default function InfoApuesta({title = "Del 17/06/2023 al 22/06/2023", closeInfoApuesta}) {
    const [status, setStatus] = useState(false);
    const {  data } = useContext(UserContext);

    const dataDefault = {
        fecha: "20/06/2023 20:56:35",
        opcion1: "ATL Braves",
        opcion2: "Più di 8.5",
        opcion3: "CLE Guardians -1.5",
        opcion1_valor:"1,68"    ,
        opcion2_valor:"1,86",
        opcion3_valor:"1,86",
        subtitulo: "Tripla, 1 Scommessa * €1,00 ",
        apuesta_monto: "1",
        ganancia_monto: "0",
        codigo:"ADM df07e706151e679dec04",
        numero_cuenta:'BT60117665',
        codigo_fiscal:'MJRDLL86E15Z611M',
        dirrecion: 'Hillside (New Media Malta) Plc, Concessione nº 15253',
        opcion1_descripcion:"ATL Braves (Visitante) @ PHI Phillies (Local) 21/06/2023",
        opcion2_descripcion:"STL Cardinals (Visitante) @ WAS Nationals (Local) 21/06/2023",
        opcion3_descripcion:"OAK Athletics (Visitante) @ CLE Guardians (Local) 21/06/2023",
        numero_apuetas: '1',
        apuesta_unitaria: '1.00',
        apuesta_total: '1.00',
        ganancia_potencial:'0.00'

    }

    let dataInfo = dataDefault

    console.log('nicolas ',data );
    if (data.length > 0) {
        
        dataInfo= data.find((item) => item.tabla === "Datos de la apuesta").items[0]
    }

    const dataBreve = <>
                    <div className='m-InfoApuesta-layout-item'>
                        <div className='m-InfoApuesta-layout-item-title'>{dataInfo.fecha}</div>
                        <div className='m-InfoApuesta-layout-item-optionsblack'>
                            <div>{dataInfo.opcion1}</div>
                            <div>{dataInfo.opcion1_valor}</div>
                        </div>
                        <div className='m-InfoApuesta-layout-item-optionsblack'>
                            <div>{dataInfo.opcion2}</div>
                            <div>{dataInfo.opcion2_valor}</div>
                        </div>
                        <div className='m-InfoApuesta-layout-item-optionsblack'>
                            <div>{dataInfo.opcion3}</div>
                            <div>{dataInfo.opcion3_valor}</div>
                        </div>
                        <div className='m-InfoApuesta-layout-item-subtitulo'>{dataInfo.subtitulo}</div>
                        <div className='m-InfoApuesta-layout-item-optionsblack' style={{fontSize:'12px'}}>
                            <div>Apuesta ${dataInfo.apuesta_monto}</div>
                            <div>Ganancia ${dataInfo.ganancia_monto}</div>
                        </div>
                        <div className='m-InfoApuesta-layout-item-title'>Código {dataInfo.codigo}</div>
                    </div>
                    <div className='m-InfoApuesta-layout-item'>
                        <div className='m-InfoApuesta-layout-item-options' onClick={() => setStatus(true)}>
                            <div className='m-InfoApuesta-layout-item-mas'>Detalles de la apuesta</div>
                            <div className='m-InfoApuesta-layout-item-mas'>{">"}</div>
                        </div>
                    </div>
    </>

    const dataTotal = <>
    
                    <div className='m-InfoApuesta-layout-item'>
                        <div className='m-InfoApuesta-layout-item-options' style={{marginBottom:'20px'}}>
                            <div className='m-InfoApuesta-layout-item-mas'>YE7604574581I</div>
                            <div className='m-InfoApuesta-layout-item-mas'>{dataInfo.fecha}</div>

                        </div>
                        <div className='m-InfoApuesta-layout-item-title'>Código {dataInfo.codigo}</div>
                        <div className='m-InfoApuesta-layout-item-title'>Pal. 33251     Avv. 1257</div>
                        <div className='m-InfoApuesta-layout-item-title'>Número cuenta: {dataInfo.numero_cuenta}</div>
                        <div className='m-InfoApuesta-layout-item-title'>Código fiscal: {dataInfo.codigo_fiscal}</div>
                        <div className='m-InfoApuesta-layout-item-title'>{dataInfo.dirrecion}</div>

                    </div>
                    <div className='m-InfoApuesta-layout-item'>
                        <div className='m-InfoApuesta-layout-item-optionsblack'>
                            <div>{dataInfo.opcion1}</div>
                            <div>{dataInfo.opcion1_valor}</div>
                        </div>
                        <div className='m-InfoApuesta-layout-item-title'>{dataInfo.opcion1_descripcion}</div>
                        <div className='m-InfoApuesta-layout-item-optionsblack'>
                            <div style={{fontSize:'12px', color:'#666', fontWeight: 'normal'}}>{'Ganador'}</div>
                            <div>{'Ganador'}</div>
                        </div>
                    </div>

                    <div className='m-InfoApuesta-layout-item'>
                        <div className='m-InfoApuesta-layout-item-optionsblack'>
                            <div>{dataInfo.opcion2}</div>
                            <div>{dataInfo.opcion2_valor}</div>
                        </div>
                        <div className='m-InfoApuesta-layout-item-title'>{dataInfo.opcion2_descripcion}</div>
                        <div className='m-InfoApuesta-layout-item-optionsblack'>
                            <div style={{fontSize:'12px', color:'#666', fontWeight: 'normal'}}>{'Puntaje total'}</div>
                            <div>{'Ganador'}</div>
                        </div>
                    </div>

                    <div className='m-InfoApuesta-layout-item'>
                        <div className='m-InfoApuesta-layout-item-optionsblack'>
                            <div>{dataInfo.opcion3}</div>
                            <div>{dataInfo.opcion3_valor}</div>
                        </div>
                        <div className='m-InfoApuesta-layout-item-title'>{dataInfo.opcion3_descripcion}</div>
                        <div className='m-InfoApuesta-layout-item-optionsblack'>
                            <div style={{fontSize:'12px', color:'#666', fontWeight: 'normal'}}>{'Ganador con hándicap'}</div>
                            <div>{'Perdedor'}</div>
                        </div>
                    </div>

                    <div className='m-InfoApuesta-layout-item'>
                        <div className='m-InfoApuesta-layout-item-options'>
                            <div className='m-InfoApuesta-layout-item-mas' style={{fontSize:'15px', color:'#282828', fontWeight: '700'}}>Tipo de apuesta: Triple</div>
                            <div className='m-InfoApuesta-layout-item-mas'>{">"}</div>
                        </div>

                    </div>
                    <div className='m-InfoApuesta-layout-item'>
                        <div className='m-InfoApuesta-layout-item-options-simple'>
                            <div>Nº de apuestas</div>
                            <div>{dataInfo.numero_apuetas}</div>
                        </div>
                        <div className='m-InfoApuesta-layout-item-options-simple'>
                            <div>Apuestas unitarias</div>
                            <div>$ {dataInfo.apuesta_unitaria}</div>
                        </div>
                        <div className='m-InfoApuesta-layout-item-options-simple'>
                            <div>Apuesta total</div>
                            <div>$ {dataInfo.apuesta_total}</div>
                        </div>
                    </div>
                    <div className='m-InfoApuesta-layout-item'>
                        <div className='m-InfoApuesta-layout-item-options'>
                            <div className='m-InfoApuesta-layout-item-mas' style={{fontSize:'15px', color:'#282828', fontWeight: '700'}}>Ganancias potenciales ${dataInfo.ganancia_potencial}</div>
                        </div>
                    </div>
                    <div className='m-InfoApuesta-layout-item' style={{marginBottom:'50px'}}>
                        <div className='m-InfoApuesta-layout-item-options'>
                            <div className='m-InfoApuesta-layout-item-mas'>Todas las apuestas se aceptan y liquidan de acuerdo con nuestros términos y condiciones y reglas.</div>
                        </div>
                    </div>
    </>

    const buttonAtras = () => {
        if (!status) closeInfoApuesta(false)
        else setStatus(false)
    }
    return (
        <div className='m-InfoApuesta-container'>
            <div className='m-InfoApuesta-back' onClick={() => buttonAtras()}>
                {'< Atrás'}
            </div>

            <div className='m-InfoApuesta-layout'>
                <div className='m-InfoApuesta-layout-title'>{title}</div>
                {!status ? dataBreve : dataTotal}
            </div>
        </div>
    )
}
