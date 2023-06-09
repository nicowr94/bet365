import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import LoginPage from "../pages/Login/Login";
import HomePage from "../pages/Home/Home";
import HomeDeportPage from "../pages/HomeDeport/HomeDeport";
import DirectoDeportPage from "../pages/DirectoDeport/DirectoDeport";
import BancoUserPage from "../pages/BancoUser/BancoUser";
import BancoMensajePage from "../pages/BancoMensaje/BancoMensaje";
import UserMiCuenta from "../pages/UserMiCuenta/UserMiCuenta";
import UserControles from "../pages/UserControles/UserControles";
import UserHistorial from "../pages/UserHistorial/UserHistorial";
import UserMiActividad from "../pages/UserMiActividad/UserMiActividad";
import ApuestaAlPartido from "../pages/ApuestaAlPartido/ApuestaAlPartido";
import MisApuestasPage from "../pages/MisApuestas/MisApuestas";

import UserAdmin from "../pages/Admin/Admin";
import NotFound from "../pages/NotFound/NotFound";

import DasboardRoutes from "./DasboardRoutes";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "../auth/AuthContext";
import {UserContext} from '../../src/context/UserProvider';


export default function AppRouter() {
  const { user } = useContext(UserContext);

  const dominio = process.env.PUBLIC_URL
  return (
    <Router basename={dominio}>
        <Routes >
          {/* <Route path={dominio+"/login"} Component={LoginPage} /> */}

          {/* <Route path={dominio+"/"}  Component={HomePage} />
          <Route path={dominio+"/deport"} Component={HomeDeportPage} />
          <Route path={dominio+"/directo"} Component={DirectoDeportPage} />
          <Route path={dominio+"/usuario/banco"} Component={BancoUserPage} />
          <Route path={dominio+"/usuario/mensaje"} Component={BancoMensajePage} />
          <Route path={dominio+"/usuario/miCuenta"} Component={UserMiCuenta} />
          <Route path={dominio+"/usuario/Controles"} Component={UserControles} />
          <Route path={dominio+"/usuario/Historial"} Component={UserHistorial} /> */}

          <Route path="/" Component={HomePage} exact />
          <Route path="deport" Component={HomeDeportPage} exact/>
          <Route path="deport/ApuestaAlPartido" Component={ApuestaAlPartido} exact/>
          <Route path="directo" Component={DirectoDeportPage} exact/>
          <Route path="misApuestas" Component={MisApuestasPage} exact/>
          <Route path="usuario/banco" Component={BancoUserPage} exact/>
          <Route path="usuario/mensaje" Component={BancoMensajePage} exact/>
          <Route path="usuario/miCuenta" Component={UserMiCuenta} exact/>
          <Route path="usuario/Controles" Component={UserControles} exact/>
          <Route path="usuario/Actividad" Component={UserMiActividad} exact/>
          <Route path="usuario/Historial" Component={UserHistorial} exact/>
          <Route path="usuario/admin" Component={UserAdmin} exact/>
          <Route path="*" Component={NotFound} />

          {/* <PrivateRoute
            path="/"
            Component={DasboardRoutes}
            isAuthenticated={user.logged}
          /> */}
        </Routes >
    </Router>
  );
}
