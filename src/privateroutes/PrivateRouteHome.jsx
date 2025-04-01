import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRouteHome = () =>{
    const {GeneralResponse} = useSelector(state=>state)
    let auth = GeneralResponse.is_login
    return(
        auth ? (<Outlet/>):(<Navigate to="/login"/>)
    )
}

export default PrivateRouteHome