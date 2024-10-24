import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onCreatePost, onRefreshData }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
     onCreatePost({ title, description });
     onRefreshData();
      onClose();
    };
  
    if (!isOpen) return null;
  
    return (
      <div style={modalOverlayStyle}>
        <div style={modalStyle}>
          <h2>Create Post</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
              </label>
            </div>
            <div>
              <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
              </label>
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose}>Close</button>
          </form>
        </div>
      </div>
    );
  };
  
  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  
  const modalStyle = {
    background: 'white',
    padding: '20px',
    borderRadius: '5px',
    minWidth: '400px',
  };
  
  export default Modal;
  