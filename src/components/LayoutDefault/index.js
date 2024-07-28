import { Layout } from "antd"
import './layout.scss'
import { Link, Outlet } from "react-router-dom"
const {Content , Footer} = Layout

function LayoutDefault(){
    return (
        <>
          <Layout>
              <header className="header">
                    <Link className="header__logo" to={"/"}>QUIZ</Link>
                       <ul className="header__menu">
                            <li className="header__menu-item">HTML</li>
                            <li className="header__menu-item">HTML</li>
                            <li className="header__menu-item">HTML</li>
                            <li className="header__menu-item">HTML</li>
                            <li className="header__menu-item">HTML</li>
                       </ul>
                 <div className="header__user">
                    <Link  className="header__user-reg" to={"/sign-up"}>Sign Up</Link>
                    <div className="header__user-login">Login</div>
                 </div>
              </header>
              <Content>
                 <Outlet/>
              </Content>
              <Footer className="footer">Copyright @2024 by Huy</Footer>
          </Layout>
         
        </>
    )
}
export default LayoutDefault