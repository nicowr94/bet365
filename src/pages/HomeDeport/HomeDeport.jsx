import {useContext} from "react";
import HomeTemplate from "../../components/Templates/HomeTemplate/HomeTemplate";
import Inicio from "../../components/Organisms/MisPublicaciones/MisPublicaciones";
import HomeBasquet from "../../components/Pages/HomeBasquet/HomeBasquet";
import HomeFutbol from "../../components/Pages/HomeFutbol/HomeFutbol";
import HomeFutbolAmericano from "../../components/Pages/HomeFutbolAmericano/HomeFutbolAmericano";
import HomeBeisbol from "../../components/Pages/HomeBeisbol/HomeBeisbol";
import HomeTenis from "../../components/Pages/HomeTenis/HomeTenis";
// import Recomendaciones from "../components/Recomendaciones";
import {UserContext} from '../../../src/context/UserProvider';

export const Home = () => {
    const { user, deport } = useContext(UserContext);

    let contentDeport = null

    switch (deport) {
        case 'basquetbol':
            contentDeport = <HomeBasquet />
            break;
        case 'futbol':
            contentDeport = <HomeFutbol />
            break;
        case 'beisbol':
            contentDeport = <HomeBeisbol />
            break;
        case 'futbolAmericano':
            contentDeport = <HomeFutbolAmericano />
            break;
        case 'tenis':
            contentDeport = <HomeTenis />
            break;
        default:
            contentDeport = <HomeBasquet />
            break;
    }

    return (
        <HomeTemplate >
            {contentDeport}
        </HomeTemplate>
    );
};

export default Home;
