import {useContext, useState, useRef} from "react";
import OptionsUserTemplate from "../../components/Templates/OptionsUserTemplate/OptionsUserTemplate";
import {UserContext} from '../../../src/context/UserProvider';
import "./Admin.css";
import parseExcel from './ParseExcel';

export const Admin = () => {
    const { user, deport, setDeport } = useContext(UserContext);
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

    return (
        <OptionsUserTemplate dataInfo={dataInfo} >
            <div className="p-BancoUser-content">
               <p>admin</p>
               <input type="file" ref={fileInputRef} onChange={handleFileChange} />

                {excelData && (
                    <div>
                    <h2>Datos del archivo Excel:</h2>
                    <pre>{JSON.stringify(excelData, null, 2)}</pre>
                    </div>
                )}
            </div>
        </OptionsUserTemplate>
    );
};

export default Admin;
