
import LayoutDefault from "../components/LayoutDefault";
import Answer from "../pages/Answer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Practice from "../pages/Practice";
import Register from "../pages/Register";
import Topic from "../pages/Topics";

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
            },
            {
                path : "/topic",
                element : <Topic />
            },
            {
                path : "/practice/:name",
                element : <Practice/>
            },
            {
                path : "/answer",
                element : <Answer/>
            }
        ]
    }
]