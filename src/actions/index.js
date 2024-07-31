export const  isLogin = (status)=>(
    {
        type : 'CHECK_LOGIN',
        status : status
    }
)
export const LogOut = (status)=>(
    {
        type : 'LOGOUT',
        status : status
    }
)