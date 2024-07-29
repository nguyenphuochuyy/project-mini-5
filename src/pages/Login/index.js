import { Link, useNavigate } from "react-router-dom"
import {login } from "../../helper/fetchApi";

function Login(){
    const navigate = useNavigate();
    // hàm xử lý khi submit lấy ra email và password do người dùng nhập vào
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        const res = await login(email,password);
        console.log(res);
        if( res.length > 0 ){
            navigate("/");
        }
        else{
            alert("Tài khoản không chính xác!")
        }
    }
    return(
        <>
              <div className="sign-up">
                <form className="sign-up__form" onSubmit={handleSubmit} >
                    <h2 className="sign-up__title">LOGIN</h2>
                    <input  placeholder="Enter your email" className="input" name="email" ></input>
                    <input  placeholder="Enter password" className="input" name="password" ></input>
                    <input  type="submit" placeholder="Enter your email" className="input input__btn" value={"Login"}></input>
                    <p className="to-login">Don't have an account? <Link to={"/sign-up"} style={{color : "rgb(223, 230, 38)"}}>Signup</Link></p>
                </form>
            </div>
        </>
    )
}
export default Login