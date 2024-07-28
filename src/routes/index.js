
import LayoutDefault from "../components/LayoutDefault";
import Home from "../pages/Home";
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
            }
        ]
    }
]