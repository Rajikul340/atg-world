import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";

export const routers = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
           {
               path: "/",
               element:<Home/>
           }
        ]
    }
]
    
       
)