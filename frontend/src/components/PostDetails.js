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
    <div className='post-details rounded border border-black'>
        <img className='h-48 w-full' src={post.fileURL}/>
        <h4 className='text-center'>{post.title}</h4>
        <p className='text-center'>{post.message}</p>
        <div className=' flex place-content-around'>
          <p >{post.likes.length} likes</p>
          <button  onClick={handleClick}>delete</button>
        </div>
    </div>
  
  )
}

export default PostDetails