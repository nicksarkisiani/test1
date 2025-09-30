import React, { useEffect, useState } from 'react'
import LoginForm from '../../features/auth/components/Login/LoginForm'

const MainPage = () => {

  const [isAuth, setIsAuth] = useState(false)


  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth"))
  }, [localStorage])


  if(!isAuth) {
    return <LoginForm />
  }

  return (
    <div></div>
  )
}

export default MainPage