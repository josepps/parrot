import { createBrowserRouter } from "react-router-dom";

import Feed from '../pages/Feed';
import Login from '../pages/Login';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
        path: "/feed",
        element: <Feed />,
      },
  ]);

  export default router;