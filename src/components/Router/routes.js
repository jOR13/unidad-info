import React from "react";
import Unidades from "../Contenido";
import Home from "../Home";
import Login from "../Login";
import Registros from "../Registros";
// import Settings from "../Components/Settings";

const routes = [
  {
    path: "/",
    exact: true,
    name: "Iniciar sesion",
    toolbar: () => <p>Iniciar sesion</p>,
    main: () => <Login />
  },
  {
    path: "/Home",
    exact: true,
    name: "Home",
    toolbar: () => <p>Home</p>,
    main: () => <Home />
  },
  {
    path: "/Unidades",
    name: "Unidades",
    toolbar: () => <p>Datos de unidad - Reporte diario</p>,
    main: () => <Unidades />
  },
  {
    path: "/registros",
    name: "Registros",
    toolbar: () => <p>Registros</p>,
    main: () => <Registros />
  },
  
];

export default routes;
