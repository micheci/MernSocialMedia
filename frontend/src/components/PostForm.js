import React from 'react'
import { useState } from 'react'
import { usePostsContext } from '../hooks/usePostsContext'
import { useAuthContext } from '../hooks/useAuthContext'

function PostForm() {
  const { dispatch } = usePostsContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null); // State for image preview


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      console.error('You must be logged in');
      return;
    }
 try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('message', message);
  

   
      const response = await fetch('/api/post', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });

      const json = await response.json();

      if (!response.ok) {
        console.error(json.error);
        return;
      }

      setTitle('');
      setMessage('');
      setFile(null);

      console.log('New post added:', json);
      dispatch({ type: 'CREATE_POST', payload: json });
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
  
    if (selectedFile) {
      setFile(selectedFile);
  
      // Generate image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    
    <form className=" flex border mt-8 flex-col justify-center items-center " onSubmit={handleSubmit} encType="multipart/form-data">
      <h3 className='text-center'>Add post</h3>
      {/* <label>Title</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      /> */}
      <label className='text-center'>Message</label>
      <input
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <label className=''>File</label>
      <input
        type="file"
        name='file'
        onChange={handleFileChange}
      />
      
      {/* //{preview && <img src={preview} alt="Preview" />} */}
      <button>Add Post</button>
    </form>

  
  );
}

export default PostForm