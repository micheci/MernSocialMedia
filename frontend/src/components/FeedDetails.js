import React, { useEffect, useState } from 'react'
import { usePostsContext } from '../hooks/usePostsContext'
import { useAuthContext } from '../hooks/useAuthContext'

function FeedDetails({post}) {
   const {dispatch} = usePostsContext()
    const  {user}=useAuthContext()
    //const [npost,setNPosts]=useState('')

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
                {console.log(json._id)}
                //{console.log(json.likes+1)}
                //setNPosts(json)
                dispatch({type: 'UPDATE_POST', payload: {json}})

              //set(json)
            }
      }


  return (
    <div className='post-details'>
        
        <h4>{post.title}</h4>
        <p>{post.message}</p>
        {/* <p>{npost.length>0 ? npost.likes:  post.likes}</p> */}
        
        <p>{post.likes}</p>
        <button onClick={handleClick}>Like</button>

    </div>
  
  )
}

export default FeedDetails