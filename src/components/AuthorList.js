import React, { useState, useEffect } from 'react';
import API_URL from '../config';

const AuthorList = ({ setEditingAuthor }) => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/authors`)
      .then(response => response.json())
      .then(data => setAuthors(data));
  }, []);

  const deleteAuthor = (id) => {
    fetch(`${API_URL}/authors/${id}`, { method: 'DELETE' })
      .then(() => setAuthors(authors.filter(author => author.id !== id)));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {authors.map(author => (
          <tr key={author.id}>
            <td>{author.name}</td>
            <td>{author.surname}</td>
            <td>
              <button onClick={() => setEditingAuthor(author)}>Edit</button>
              <button onClick={() => deleteAuthor(author.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AuthorList;
