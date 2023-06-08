import {useContext} from "react";
import DirectoTemplate from "../../components/Templates/DirectoTemplate/DirectoTemplate";
import Inicio from "../../components/Organisms/MisPublicaciones/MisPublicaciones";
import HomeBasquet from "../../components/Pages/HomeBasquet/HomeBasquet";
import DirectoFutbol from "../../components/Pages/DirectoFutbol/DirectoFutbol";
import DirectoBasquetbol from "../../components/Pages/DirectoBasquetbol/DirectoBasquetbol";
import DirectoTenis from "../../components/Pages/DirectoTenis/DirectoTenis";
import DirectoBeisbol from "../../components/Pages/DirectoBeisbol/DirectoBeisbol";
import DirectoFutbolAmericano from "../../components/Pages/DirectoFutbolAmericano/DirectoFutbolAmericano";



// import Recomendaciones from "../components/Recomendaciones";
import {UserContext} from '../../../src/context/UserProvider';
import MenuHorizontal from "../../components/Organisms/MenuHorizontal/MenuHorizontal";

export const Home = () => {
    const { user, deport, setDeport } = useContext(UserContext);

    let contentDeport = null
    
    let dataInfo ={
        team1_name:'Independiente Avellaneda',
        team1_val:'0',
        color1: '#f0f0f0',
        team2_name:'Sportivo Suardi',
        team2_val:'0',
        color2: 'red',
    }

    switch (deport) {
        case 'basquetbol':
            contentDeport = <DirectoBasquetbol />
            dataInfo ={
                team1_name:'Independiente Avellaneda',
                team1_val:'0',
                color1: '#f0f0f0',
                team2_name:'Sportivo Suardi',
                team2_val:'0',
                color2: 'red',
        
            }
            break;
        case 'futbol':
            contentDeport = <DirectoFutbol />
            dataInfo ={
                team1_name:'EE.UU. sub-20',
                team1_val:'2',
                color1: '#f0f0f0',
                team2_name:'Uruguay sub-20',
                team2_val:'1',
                color2: '#679fea',
        
            }
            break;
        case 'tenis':
            contentDeport = <DirectoTenis />
            dataInfo ={
                team1_name:'Adam Walton',
                team1_val:'40',
                color1: '#679fea',
                team2_name:'Harrison Adams',
                team2_val:'15',
                color2: '#f0f0f0',
        
            }
            break;
        case 'beisbol':
            contentDeport = <DirectoBeisbol />
            dataInfo ={
                team1_name:'Laguna',
                team1_val:'0',
                color1: '#1e8853',
                team2_name:'Quintana Roo',
                team2_val:'0',
                color2: '#704cb2',
            }
            break;
        case 'futbolAmericano':
            contentDeport = <DirectoFutbolAmericano />
            dataInfo ={
                team1_name:'EE.UU. sub-20',
                team1_val:'2',
                color1: '#f0f0f0',
                team2_name:'Uruguay sub-20',
                team2_val:'1',
                color2: '#679fea',
            }
            break;
        case '/':
            setDeport('futbol'); 
            localStorage.setItem("deport", JSON.stringify('futbol'))
        default:
            contentDeport = <DirectoFutbol />
            break;
    }


    return (
        <DirectoTemplate dataInfo={dataInfo}>
            {/* <div style={{paddingBottom:'100px'}}> */}
            <div>
                <MenuHorizontal />
                {contentDeport}
            </div>
        </DirectoTemplate>
    );
};

export default Home;
