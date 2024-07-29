import "./reg.scss"
import "../../assets/base.scss"
import { Col, Form, Input, Row } from "antd";
import { Link } from "react-router-dom";
function Register(){
    return(
        <>
            <div className="sign-up">
                <form className="sign-up__form">
                    <h2 className="sign-up__title">SignUp</h2>
                    <input placeholder="Enter your email" className="input" name="email"></input>
                    <input placeholder="Create a password" className="input" name="pass"></input>
                    <input placeholder="confirm your password" className="input" name="confirm-pass"></input>
                    <input type="submit" placeholder="Enter your email" className="input input__btn" value={"SignUp"}></input>
                    <p className="to-login">Already have account? <Link to={"/login"} style={{color : " rgb(223, 230, 38)"}}>Login</Link></p>
                </form>
            </div>
        </>
    )
}
export default Register;