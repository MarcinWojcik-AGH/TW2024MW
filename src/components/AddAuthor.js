import React, { useState } from 'react';
import API_URL from '../config';

const AddAuthor = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const addAuthor = () => {
    fetch(`${API_URL}/authors`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, surname }),
    })
    .then(response => response.json())
    .then(author => {
      setName('');
      setSurname('');
      window.location.reload(); // Reload to show the new author
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <button onClick={addAuthor}>Add author</button>
    </div>
  );
};

export default AddAuthor;
