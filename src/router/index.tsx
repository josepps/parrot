import { createBrowserRouter } from "react-router-dom";

import Feed from "../pages/Feed";
import Login from "../pages/Login";
import Perfil from "../pages/Perfil";
import PerfilUsuario from "../pages/PerfilUsuario";
import Cadastro from "../pages/Cadastro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/feed",
    element: <Feed />,
  },
  {
    path: "/perfil",
    element: <Perfil />,
  },
  {
    path: "/perfilusuario",
    element: <PerfilUsuario />,
  },
  {
    path: "/Cadastrousuario",
    element: <Cadastro />,
  },
]);

export default router;
