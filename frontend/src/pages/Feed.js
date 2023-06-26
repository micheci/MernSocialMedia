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
        const response = await fetch('https://mernsocialmedia-production.up.railway.app/api/feed',{
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
    <div className='pt-24 ml-3 mr-3 gap-2 grid p-10 grid-cols-3'>
      {posts && posts.map((post) => (
        
          <FeedDetails key={post._id} post={post} />
        ))}
    </div>
  )
}

export default Feed;