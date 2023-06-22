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
    
    <form className='login h-screen items-center pt-20 bg-green-500' onSubmit={handleSubmit}>
        <h3 className='text-center text-4xl font-bold '>Login</h3>
        <div className='mt-24 flex  justify-center'>
        
        <label htmlFor="email">Email:</label>
        <input
        className='border-solid border border-gray-400 rounded px-2 py-3'
        id='email'
            type='email'
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
        />
        <label htmlFor='password'>Password:</label>
        <input
        className='border-solid border border-gray-400 rounded px-2 py-3'
        id='password'
            type='password'
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
        />
        <button disabled={isLoading} className='bg-gray-500 hover:bg-gray-600 text-white font-bold w-16 rounded ml-3 py-3'>Login</button>
        {error && <div>{error}</div>}
        </div>
    </form>
  )
}

export default Login