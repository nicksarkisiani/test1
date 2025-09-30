import React from 'react'
import { useNavigate } from 'react-router'

const RegistrationForm = () => {

    const navigate = useNavigate();
  return (
    <form>


        <h2>Registration</h2>
        <label htmlFor="email">email</label>
        <input type="email" id='email' placeholder='bla@gmail.com'/>

        <label htmlFor="password">Password</label>
        <input type="password" id='password' placeholder='123sdfdsf854'/>


        <button type='submit'>Submit</button>


        <button type='button' onClick={() => navigate("/")}>Already have an account?</button>

    </form>
  )
}

export default RegistrationForm