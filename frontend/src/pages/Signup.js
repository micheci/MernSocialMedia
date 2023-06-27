import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <form className="signup  h-screen items-center pt-20 bg-green-500" onSubmit={handleSubmit}>
      <h3 className='text-center text-4xl font-bold '>Sign Up</h3>
      <div className='mt-24 flex  justify-center'>
      <label htmlFor="email">Email address:</label>
      <input 
       className='border-solid border border-gray-400 rounded px-2 py-3'
       id='email'
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
       className='border-solid border border-gray-400 rounded px-2 py-3'
       id='password'
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button className='bg-gray-500 hover:bg-gray-600 text-white font-bold w-16 rounded ml-3 py-3' disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
      </div>
    </form>
  )
}

export default Signup