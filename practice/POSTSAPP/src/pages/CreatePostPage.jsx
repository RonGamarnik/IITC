import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  const createPost = async (event) => {
    event.preventDefault();
    const createdAt = new Date().toISOString(); 

    const post = {
      title: title,
      body: body,
      userId: 'fixed-user-id', //!must to change it acording the user
      reactions: { likes: 0 },
      comments: [],
      createdAt: createdAt,
      updatedAt: createdAt,
    };

    try {
      const response = await axios.post('http://localhost:8001/posts', post);
      if (response.status === 201) {
        setSuccess(true);
        setTitle('');
        setBody('');
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className='form-list'>
      {success && <Navigate to="/posts" />}
      <form className='form-card' onSubmit={createPost}>
              <input
             className='create-input'

          type='text'
          id='title'
          placeholder='Enter post title'
          value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
        />
              <input
                  className='create-input'
          type='text'
          id='body'
          placeholder='Enter post content'
          value={body}
                  onChange={(e) => setBody(e.target.value)}
                  required
        />
        <button type='submit'>Create post</button>
      </form>
      {error && <p>Error creating post: {error.message}</p>}
    </div>
  );
}

export default CreatePostPage;
