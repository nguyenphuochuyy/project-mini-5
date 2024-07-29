import { Link, Outlet } from "react-router-dom"
function HeaderLogin(){
    
    return (
        <>
            <Link className="header__logo" to={"/"}>QUIZ</Link>
            <div className="header__user">
            <Link  className="header__user-login" to={"/login"}>Logout</Link>
            </div>
        </>
    )
}
export default HeaderLogin