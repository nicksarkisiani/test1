import React from 'react'

const LoginForm = () => {
  return (
    <form>
         <label htmlFor="email">email</label>
         <input type="email" id='email' placeholder='bla@gmail.com'/>

        <label htmlFor="password">Password</label>
        <input type="password" id='password' placeholder='123sdfdsf854'/>



    </form>
  )
}

export default LoginForm