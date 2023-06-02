import React from 'react'
import { useState } from 'react'
import { usePostsContext } from '../hooks/usePostsContext'
import { useAuthContext } from '../hooks/useAuthContext'

function PostForm() {
  const { dispatch } = usePostsContext()
  const {user}=useAuthContext()


    const [title,setTitle]=useState('')
    const [message,setMessage]=useState('')
    const [error, setError] = useState(null)

    const likes=0;

    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(!user){
          setError('You Must be logged in')
          return
        }
        const post={title,message,likes}

        const response=await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
              'Content-Type': 'application/json',
              'Authorization':`Bearer ${user.token}`
            }
          })
          const json = await response.json()

          if (!response.ok) {
            setError(json.error)
           
          }

          if(response.ok){
            setTitle('')
            setMessage('')
           
            console.log('new workout added', json)
            dispatch({type: 'CREATE_POST', payload: json})
          }

    }


  return (
    
    <form onSubmit={handleSubmit} >
        <h3>Add post</h3>
        <label>Message</label>
        <input
            type='text'
            onChange={(e) => setMessage(e.target.value)}
            value={message}
        />
        <label>title</label>
        <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
        />
        {message}

        <button>Add Post</button>
    </form>
  )
}

export default PostForm