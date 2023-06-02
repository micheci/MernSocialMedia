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
              method: 'PATCH',
              headers:{
                'Authorization':`Bearer ${user.token}`
              }
              
            })
            const json = await response.json()
      
            if (response.ok) {
              dispatch({type: 'UPDATE_POST', payload: json})
            }
      }


  return (
    <div className='post-details'>
        <h4>{post.title}</h4>
        <p>{post.message}</p>
        {/* <p>{post.likes}</p> */}
        

    </div>
  
  )
}

export default PostDetails