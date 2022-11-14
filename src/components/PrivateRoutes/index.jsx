import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'



const PrivateRoutes = ({token , active}) => {

  const USER_TOKEN = localStorage.getItem('userToken')
  const isActive = localStorage.getItem('isActivated')



  return  USER_TOKEN && isActive === 'true' ? <Outlet/> : <Navigate to='/register'/>
}
export default PrivateRoutes