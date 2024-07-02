import React, { useState } from 'react';
import API_URL from '../config';

const EditAuthor = ({ author, onUpdate }) => {
  const [name, setName] = useState(author.name);
  const [surname, setSurname] = useState(author.surname);

  const updateAuthor = () => {
    fetch(`${API_URL}/authors/${author.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, surname }),
    })
    .then(response => response.json())
    .then(updatedAuthor => {
      onUpdate(updatedAuthor);
    })
    .catch(error => console.error('Error updating author:', error));
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <button onClick={updateAuthor}>Save</button>
    </div>
  );
};

export default EditAuthor;
