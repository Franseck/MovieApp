
import { Outlet,Navigate } from 'react-router-dom'

const PrivateRouter = () => {
  const currentUser = sessionStorage.getItem("currentUser")

  return  (
    currentUser ? (
        <>
        <Outlet />
        </>

    ) :  (
     
       <Navigate to="/login"  />)
   
  )
}

export default PrivateRouter