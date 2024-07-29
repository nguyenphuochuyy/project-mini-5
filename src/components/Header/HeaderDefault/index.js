import { Link } from "react-router-dom"

function HeaderDefault(){

    return (
        <>
            <Link className="header__logo" to={"/"}>QUIZ</Link>
            <div className="header__user">
            <Link  className="header__user-reg" to={"/sign-up"}>Sign Up</Link>
            <Link  className="header__user-login" to={"/login"}>Login</Link>
            </div>
        </>
    )
}
export default HeaderDefault