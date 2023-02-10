import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "pages/Customer";
import { Home } from "pages/Customer/Home";
import { Foods } from "pages/Customer/Foods";
import { FoodCheck } from "pages/Customer/FoodCheck";
import { ChefCheck } from "pages/Owner/ChefCheck";
import { Login } from "pages/User/Login";
import { Admin } from "pages/Owner/Admin";
import { OwnerLayout } from "pages/Owner";
import { Category } from "pages/Owner/Categories";
import { Products } from "pages/Owner/Products";
import { MainSettings } from "pages/Owner/MainSettings/MainSettings";
import { Register } from "pages/User/Register/Register";
import Logout from "pages/User/Logout/Logout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Foods />,
      },
      {
        path: "menu/order",
        element: <FoodCheck />,
      },
    ],
  },
  {
    path: "/admin",
    element: <OwnerLayout />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "categories",
        element: <Category />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "chef",
        element: <ChefCheck />,
      },
      {
        path: "settings",
        element: <MainSettings />,
      },
      {
        path: "chef",
        element: <ChefCheck />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default routes;
