import React, { useEffect, useState } from 'react'
import PostForm from '../components/PostForm'
import PostDetails from '../components/PostDetails'
import { usePostsContext } from '../hooks/usePostsContext'
import {useAuthContext} from "../hooks/useAuthContext"
import ProfileSection from '../components/ProfileSection'


function Home() {
    const {posts,dispatch}=usePostsContext()
    const {user}=useAuthContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
          const response = await fetch('https://mernsocialmedia-production.up.railway.app/api/post',{
            headers:{
              'Authorization':`Bearer ${user.token}`
            }
            
          })
          const json = await response.json()
    
          if (response.ok) {
            dispatch({type: 'SET_POSTS', payload: json})
        }
        }
        if(user){
          fetchWorkouts()
       }
       
      }, [dispatch,user])

  return (
    <>
    <div className="h-screen flex ">
      <div className=' w-1/4 bg-green-500 text-white'>
      <ProfileSection/>
      <PostForm />
      </div>
      <div className='flex-1 flex overflow-hidden'>
        <div className="flex-1 pt-24 gap-3 pl-2 overflow-y-scroll grid grid-cols-3">
          {posts && posts.map((post) => (
                <PostDetails  key={post._id} post={post} />
              ))}
        </div>
      </div>
    </div>
    

    </>
  )
}

export default Home