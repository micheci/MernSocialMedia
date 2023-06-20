import React, { useEffect, useState }  from 'react'
import { usePostsContext } from '../hooks/usePostsContext'
import {useAuthContext} from "../hooks/useAuthContext"
import PostDetails from '../components/PostDetails'
import FeedDetails from '../components/FeedDetails'



function Feed() {
  const {posts,dispatch}=usePostsContext()
  //const [nposts,setnPosts]=useState('')
  const {user}=useAuthContext()

  useEffect(() => {
      const fetchWorkouts = async () => {
        const response = await fetch('/api/feed',{
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
     else{
      
      console.log('user not logged in')
     }
     
    }, [dispatch,user])
  return (
    <div>Feed
      {posts && posts.map((post) => (
        
          <FeedDetails key={post._id} post={post} />
        ))}
    </div>
  )
}

export default Feed;