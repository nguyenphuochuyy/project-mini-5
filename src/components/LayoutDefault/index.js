import { Layout } from "antd"
import './layout.scss'
import { Link, Outlet } from "react-router-dom"
import { deleteAllCookie, deleteCookie, getCookie } from "../../helper/cookie"
const {Content , Footer} = Layout
function LayoutDefault(){
    const token = getCookie("token")
    console.log(token);
    return (
        <>
          <Layout className="layout">
              <header className="header">
              <Link className="header__logo" to={"/"}>QUIZ</Link>
              { token ? (
                  <ul className="header__menu">
                   <li className="header__menu-item">Home</li>
                   <li className="header__menu-item">Topic</li>
                   <li className="header__menu-item">Answers</li>
                </ul>
              ) : ( <></> )  }
           
              <div className="header__user">
                    { token ? (<>
                      <Link onClick={()=>{deleteAllCookie()}} className="header__user-logout" to={"/"}>Logout</Link>
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