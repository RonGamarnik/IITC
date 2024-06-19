import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';

const Modal = ({ show, onClose, selectedPost, onSaveChanges, onCancelEdit, onDelete }) => {
  const [editedTitle, setEditedTitle] = useState(selectedPost ? selectedPost.title : '');
  const [editedBody, setEditedBody] = useState(selectedPost ? selectedPost.body : '');
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setEditedTitle(selectedPost.title);
    setEditedBody(selectedPost.body);
    setIsEditing(true);
  };

  const handleDeleteClick = async () => {
    try {
      await onDelete(); // Call the onDelete function passed from List component
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const saveChanges = async () => {
    try {
      const updatedPost = {
        ...selectedPost,
        title: editedTitle,
        body: editedBody,
      };
      await axios.put(`http://localhost:8001/posts/${selectedPost.id}`, updatedPost);
      onSaveChanges(editedTitle, editedBody); // Update post in parent component
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const cancelEdit = () => {
    setIsEditing(false);
    onCancelEdit();
  };

  if (!show) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        {selectedPost && (
          <div>
            {!isEditing ? (
              <div>
                <h2>{selectedPost.title}</h2>
                <p>{selectedPost.body}</p>
                <div>
                  <EditIcon sx={{ cursor: "pointer" }} onClick={handleEditClick} />
                  <DeleteIcon sx={{ cursor: "pointer" }} onClick={handleDeleteClick} />
                </div>
                <div className='comments'>
                  <h3>Comments:</h3>
                  {selectedPost.comments.map((comment, index) => (
                    <React.Fragment key={index}>
                      <p>{comment.content}</p>
                      <p>{comment.createdAt}</p>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ) : (
              <div className='edit-box'>
                <div className='inputs'>
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                  />
                  <textarea
                    value={editedBody}
                    onChange={(e) => setEditedBody(e.target.value)}
                  />
                </div>
                <div>
                  <SaveIcon sx={{ cursor: "pointer" }} onClick={saveChanges} />
                  <CancelIcon sx={{ cursor: "pointer" }} onClick={cancelEdit} />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
