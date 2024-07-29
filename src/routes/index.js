
import LayoutDefault from "../components/LayoutDefault";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const Routes = [
    {
        path : "/",
        element : <LayoutDefault/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/sign-up",
                element : <Register/>
            },
            {
                path : "/login",
                element : <Login/>
            }
        ]
    }
]