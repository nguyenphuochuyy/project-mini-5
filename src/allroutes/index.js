import { useRoutes } from "react-router-dom"
import { Routes } from "../routes"

function AllRoutes(){
    const element = useRoutes(Routes)
    return(
        <>
            {element}
        </>
    )
}
export default AllRoutes;