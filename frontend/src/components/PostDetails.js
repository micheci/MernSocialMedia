import React from 'react'
import { usePostsContext } from '../hooks/usePostsContext'
import { useAuthContext } from '../hooks/useAuthContext'

function PostDetails({post}) {
    const {dispatch} = usePostsContext()
    const  {user}=useAuthContext()

const handleClick=async()=>{
  if(!user){
    return
  }
    const response = await fetch('/api/post/' + post._id, {
        method: 'DELETE',
        headers:{
          'Authorization':`Bearer ${user.token}`
        }
        
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'DELETE_POST', payload: json})
      }
}

  return (
    <div className='post-details  border border-black'>
        <img class='h-48 w-full' src={post.fileURL}/>
        <h4 class='text-center'>{post.title}</h4>
        <p class='text-center'>{post.message}</p>
        <div class=' flex place-content-around'>
          <p >{post.likes.length} likes</p>
          <button  onClick={handleClick}>delete</button>
        </div>
    </div>
  
  )
}

export default PostDetails