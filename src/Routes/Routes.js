import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

export const routers = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
           {
               path: "/",
               element:<Home/>
           },
           {
            path:"/login",
            element:<Login/>
           },
           {
            path:"/register",
            element:<SignUp/>
           }
        ]
    }
]
    
       
)