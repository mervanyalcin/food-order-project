import { createBrowserRouter } from "react-router-dom"

import { MainLayout } from "pages/customer"
import { Home } from "pages/customer/Home"
import { Foods } from "pages/customer/Foods"
import { FoodCheck } from "pages/customer/FoodCheck"
import { ChefCheck } from "pages/owner/ChefCheck"
import { Login } from "pages/owner/Login"
import { Admin } from "pages/owner/Admin"
import { OwnerLayout } from "pages/owner"
import { Category } from "pages/owner/Categories"
import { Products } from "pages/owner/Products"
import MainSettings from "pages/owner/MainSettings/MainSettings"


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "menu",
        element: <Foods />
      },
      {
        path: "menu/order",
        element: <FoodCheck />
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
        children: [
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
        ]
      },
      {
        path: "chef",
        element: <ChefCheck />,
      },

    ]
  },
  {
    path: "/login",
    element: <Login />
  }

])


export default routes