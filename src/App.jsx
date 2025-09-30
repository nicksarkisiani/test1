import { useEffect, useState } from "react"
import { Outlet } from "react-router"
import LoginForm from "./features/auth/components/Login/LoginForm"

function App() {


  const [isAuth, setIsAuth] = useState(false)


  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth"))
  }, [localStorage])


  if(!isAuth) {
    return <LoginForm />
  }


  return (
   <>
    123
    <Outlet />
   
   </>
  )
}

export default App
