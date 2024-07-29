import { Layout } from "antd"
import './layout.scss'
import { Link, Outlet } from "react-router-dom"
import ListTopic from "../ListTopic"
import HeaderDefault from "../Header/HeaderDefault"
import HeaderLogin from "../Header/HeaderLogin"
import { useState } from "react"
const {Content , Footer} = Layout

function LayoutDefault(){
    const [isLogin , setIsLogin] = useState(false)
    const handleSetState = ()=>{
        setIsLogin(!isLogin)
    }
    return (
        <>
          <Layout className="layout">
              <header className="header">
                {isLogin ? (<HeaderLogin/>):(<HeaderDefault />)}
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