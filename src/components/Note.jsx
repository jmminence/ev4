import React from 'react';

const Note = ({ title, description, important, onDelete }) => {
  return (
    <div className={`note ${important ? 'important' : ''}`}>
      <button className="delete" onClick={onDelete}>x</button>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Note;