import { createBrowserRouter } from "react-router-dom";

import Feed from '../pages/Feed';
import Login from '../pages/Login';
import Perfil from "../pages/Perfil";

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
  ]);

  export default router;