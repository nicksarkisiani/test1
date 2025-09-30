import React from 'react'
import { useNavigate } from 'react-router'


const LoginForm = () => {

    const navigate = useNavigate()
    

  return (
    <form>
         <label htmlFor="email">email</label>
         <input type="email" id='email' placeholder='bla@gmail.com'/>

        <label htmlFor="password">Password</label>
        <input type="password" id='password' placeholder='123sdfdsf854'/>


        <button type='submit'>Submit</button>


        <button type='button' onClick={() => navigate("/registration")}>Registration</button>

    </form>
  )
}

export default LoginForm