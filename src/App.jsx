import { useEffect, useState } from "react"
import { Outlet } from "react-router"

function App() {


  const [isAuth, setIsAuth] = useState(false)


  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth"))
  }, [localStorage])


  if(!isAuth) {
    return 
  }


  return (
   <>
    123
    <Outlet />
   
   </>
  )
}

export default App
