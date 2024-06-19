import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../pages/PostDetailsPage'
import BasicPagination from '../components/pagination';

const ITEMS_PER_PAGE = 10;

function List() {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8001/posts");
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const saveChanges = (editedTitle, editedBody) => {
    const updatedPosts = posts.map(p => p.id === selectedPost.id ? { ...p, title: editedTitle, body: editedBody } : p);
    setPosts(updatedPosts);
    setShowModal(false);
    setSelectedPost(null);
  };

  const cancelEdit = () => {
    setShowModal(false);
    setSelectedPost(null);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPost(null);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const deletePost = async () => {
    try {
      await axios.delete(`http://localhost:8001/posts/${selectedPost.id}`);
      const updatedPosts = posts.filter(p => p.id !== selectedPost.id); 
      setPosts(updatedPosts);
      handleCloseModal(); 
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedPosts = posts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const pageCount = Math.ceil(posts.length / ITEMS_PER_PAGE);

  return (
    <div className='list'>
      <div className='posts'>
        {paginatedPosts.map(post => (
          <div key={post.id} className='post-card' onClick={() => handlePostClick(post)}>
            <h3>{post.title}</h3>
            <p>{post.reactions.likes}</p>
          </div>
        ))}
      </div>
      <BasicPagination count={pageCount} page={page} onPageChange={handlePageChange} />
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        selectedPost={selectedPost}
        onSaveChanges={saveChanges}
        onCancelEdit={cancelEdit}
        onDelete={deletePost} 
      />
    </div>
  );
}

export default List;
