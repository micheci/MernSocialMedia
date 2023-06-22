import React from 'react'
import testPic from '../pics/testpic.png'

const ProfileSection = () => {
  return (
    <div className='bg-green-500  profileSection text-center pt-20'>
      <div className='textBox  flex flex-col border-black '>
        <img className=" object-cover w-40 h-32 rounded mx-auto" src={testPic} alt="Default avatar"/>
        <h1>Name</h1>
        <h1 className='mt-1'>Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
          in voluptate velit esse cillum dolore eu</h1>
        <h1 className='mt-1'>Dallas,Tx (webb chapel)</h1>
      </div>
    </div>
  )
}

export default ProfileSection