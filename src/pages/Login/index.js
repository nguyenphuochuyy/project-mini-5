import { Link, useNavigate } from "react-router-dom"
import {login } from "../../helper/fetchApi";
import { setCookie } from "../../helper/cookie";
import {useDispatch } from "react-redux";
import { isLogin } from "../../actions";
function Login(){
    // khai báo biến dispatch để gửi lên 1 dispatch khi click vào btn login 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // hàm xử lý khi submit lấy ra email và password do người dùng nhập vào
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        const res = await login(email,password);
        console.log(res);
        if( res.length === 1 ){
            // set thông tin người dùng vào cookie
            setCookie("id",res[0].id, 1 )
            setCookie("fullName",res[0].fullName, 1 )
            setCookie("email",res[0].email, 1)
            setCookie("token",res[0].token, 1)
            dispatch(isLogin(true));
            // chuyển hướng sang trang home
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
                    <input  placeholder="Enter password" type="password" className="input" name="password" ></input>
                    <input  type="submit" className="input input__btn"  value={"Login"} ></input>
                    <p className="to-login">Don't have an account? <Link to={"/sign-up"} style={{color : "rgb(223, 230, 38)"}}>Signup</Link></p>
                </form>
            </div>
        </>
    )
}
export default Login