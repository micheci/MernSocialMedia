import React, { useState } from 'react'
import {useLogin} from '../hooks/useLogin'

function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {login,error,isLoading}=useLogin();

    const handleSubmit=async(e)=>{
        e.preventDefault()
        await login(email,password)
        //console.log(email,password)
    }

  return (
    
    <form className='login mt-10' onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label htmlFor="email">Email:</label>
        <input
        id='email'
            type='email'
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
        />
        <label htmlFor='password'>Password:</label>
        <input
        id='password'
            type='password'
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
        />
        <button disabled={isLoading}>Login</button>
        {error && <div>{error}</div>}
    </form>
  )
}

export default Login