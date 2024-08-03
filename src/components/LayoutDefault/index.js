import { Layout } from "antd"
import './layout.scss'
import navigator from "react"
import { Link, Outlet } from "react-router-dom"
import { deleteAllCookie, getCookie } from "../../helper/cookie"
import { useDispatch, useSelector } from "react-redux"
import { LogOut } from "../../actions"
const {Content , Footer} = Layout
function LayoutDefault(){
    const token = getCookie("token")
    const isLogin = useSelector(state=>state.LoginReducer);
    const dispatch = useDispatch();
    const handleClick = ()=>{
      deleteAllCookie() 
      navigator("/");
      dispatch(LogOut(false))
    }
    return (
        <>
          <Layout className="layout">
              <header className="header">
              <Link className="header__logo" to={"/"}>PROCODE</Link>
              { token ? (
                  <ul className="header__menu">
                   <li ><Link to={"/"} className="header__menu-item">Home</Link></li>
                   <li ><Link to={"/topic"} className="header__menu-item">Topic</Link></li>
                   <li ><Link to={"/answer"} className="header__menu-item">Answers</Link></li>
                </ul>
              ) : ( <></> ) }
              <div className="header__user">
                    { token ? (<>
                      <Link onClick={handleClick}  className="header__user-logout" to={"/"}>Logout</Link>
                    </>) : (<>
                      <Link  className="header__user-reg" to={"/sign-up"}>Sign Up</Link>
                      <Link  className="header__user-login" to={"/login"}>Login</Link>
                    </>) }
              </div>
              </header>
              <Content className="content" >
                 <Outlet/>
              </Content>
              <Footer className="footer">Copyright @2024 by Huy</Footer>
          </Layout>
         
        </>
    )
}
export default LayoutDefault