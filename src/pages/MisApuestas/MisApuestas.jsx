import {useContext, useState} from "react";
import ModalApuesta from "../../components/molecules/ModalApuesta/ModalApuesta";
import Nav from "../../components/molecules/Nav/Nav";
import {UserContext} from '../../../src/context/UserProvider';
import Footer from "../../components/molecules/Footer/Footer";

import "./MisApuestas.css";

export const MisApuestas = () => {
    const { user, deport, setDeport, data } = useContext(UserContext);
    
    const [dataInfo, setDataInfo] = useState('Las apuestas que pueden ser cerradas total o parcialmente aparecen aquí   ');
    const [opt, setOpt] = useState(1);

    const setValInfoMessage = (option) => {
        setOpt(option)
        const  options = [
            'Las apuestas que pueden ser cerradas total o parcialmente aparecen aquí',
            'Las apuestas en vivo se mostrarán aquí',
            'Las apuestas pendientes se mostrarán aquí',
            'Las apuestas determinadas se mostrarán aquí en 24 horas. \n'+'Consulte sus previas apuestas determinadas desde su Historial',
            'Las apuestas se mostrarán aquí durante 24 horas. \n' +'Puede consultar las apuestas anteriores en el Historial de su cuenta',
        ]
        setDataInfo(options[option-1])

    }

    return (
        <>
            <div className="p-MisApuestas-template">
                <Nav option={3}/>
                <div className="p-MisApuestas container-scroll">
                    <div className="p-MisApuestas-container">
                        <div className="p-MisApuestas-options">
                            <div className='m-navApuesta-container-list'>
                                <div className={opt === 1 ? 'm-navApuesta-container-list-options--selected' : 'm-navApuesta-container-list-options'} onClick={()=>{setValInfoMessage(1)}}>Cerrar apuesta</div>
                                <div className={opt === 2 ? 'm-navApuesta-container-list-options--selected' : 'm-navApuesta-container-list-options'} onClick={()=>{setValInfoMessage(2)}}>En vivo ahora</div>
                                <div className={opt === 3 ? 'm-navApuesta-container-list-options--selected' : 'm-navApuesta-container-list-options'} onClick={()=>{setValInfoMessage(3)}}>Pendientes</div>
                                <div className={opt === 4 ? 'm-navApuesta-container-list-options--selected' : 'm-navApuesta-container-list-options'} onClick={()=>{setValInfoMessage(4)}}>Determinadas</div>
                                <div className={opt === 5 ? 'm-navApuesta-container-list-options--selected' : 'm-navApuesta-container-list-options'} onClick={()=>{setValInfoMessage(5)}}>Todo</div>
                            </div>

                            <div className='m-navApuesta-container-info'>
                                <div className='m-navApuesta-container-info-title'>No hay apuestas que mostrar en estos momentos</div>
                                <div className='m-navApuesta-container-info-subtitle'>{dataInfo}</div>
                            </div>
                        </div>
                        <Footer />
                    
                    </div>

                    
                </div>
            </div>
            <ModalApuesta />
        
        </>

    );
};

export default MisApuestas;
