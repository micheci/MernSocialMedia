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
          const response = await fetch('/api/post',{
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
    <div class="flex h-screen  ">
      <ProfileSection/>
      <PostForm />
      <div class='w-1/2 overflow-y-auto grid gap-3 grid-cols-3'>
        {posts && posts.map((post) => (
              <PostDetails  key={post._id} post={post} />
            ))}
      </div>
    </div>
    

    </>
  )
}

export default Home