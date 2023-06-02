import React, { useEffect, useState } from 'react'
import PostForm from '../components/PostForm'
import PostDetails from '../components/PostDetails'
import { usePostsContext } from '../hooks/usePostsContext'
import {useAuthContext} from "../hooks/useAuthContext"


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
    <div>Home</div>
    <PostForm/>
    {posts && posts.map((post) => (
          <PostDetails key={post._id} post={post} />
        ))}

    </>
  )
}

export default Home