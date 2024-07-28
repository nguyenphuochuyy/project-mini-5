import { Layout } from "antd"
import './layout.scss'
import { Link, Outlet } from "react-router-dom"
import ListTopic from "../ListTopic"
const {Content , Footer} = Layout

function LayoutDefault(){
    return (
        <>
          <Layout className="layout">
              <header className="header">
                    <Link className="header__logo" to={"/"}>QUIZ</Link>
                        <ListTopic/>
                 <div className="header__user">
                    <Link  className="header__user-reg" to={"/sign-up"}>Sign Up</Link>
                    <div className="header__user-login">Login</div>
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