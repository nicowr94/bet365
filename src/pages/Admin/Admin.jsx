import {useContext, useState, useRef} from "react";
import OptionsUserTemplate from "../../components/Templates/OptionsUserTemplate/OptionsUserTemplate";
import { Link } from "react-router-dom";
import {UserContext} from '../../../src/context/UserProvider';
import "./Admin.css";
import parseExcel from './ParseExcel';

export const Admin = () => {
    const { user, deport, setDeport, setData } = useContext(UserContext);
    const fileInputRef = useRef(null);
    let dataInfo ={}

    const [excelData, setExcelData] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        handleExcelData(file);
    };

    const handleExcelData = async (file) => {
        try {
            const sheetsData = await parseExcel(file);
            setExcelData(sheetsData);
            console.log(sheetsData);
        } catch (error) {
            console.error('Error al analizar el archivo Excel:', error);
        }
    };

    const saveData = () => {
        if (!excelData) return
        setData(excelData)
        localStorage.setItem("data", JSON.stringify(excelData))
    }
    return (
        <OptionsUserTemplate dataInfo={dataInfo} >
            <div className="p-BancoUser-content">
              <div className="p-admin-content">
                <p className="p-admin-title">Actualizar datos</p>
                <input id="input-admin" type="file" ref={fileInputRef} onChange={handleFileChange} style={{display:'none'}}/>

                <div className="p-admin-input" onClick={()=>{fileInputRef?.current.click()}}>
                        Seleccionar excel
                </div>

                    {excelData && (
                        <div>
                        <h3 className="p-admin-alert">Datos del cargados del Excel</h3>
                        </div>
                    )}

                <Link to={"/"} onClick={() => {saveData()}}>
                    <div className="p-admin-button">Guardar</div>
                </Link>
                {/* <button className="p-admin-button" onClick={() => {saveData()}}>Guardar</button> */}
              </div>
            </div>
        </OptionsUserTemplate>
    );
};

export default Admin;
