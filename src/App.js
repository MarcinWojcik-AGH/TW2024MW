import React, { useState, useEffect } from 'react';
import AuthorList from './components/AuthorList';
import AddAuthor from './components/AddAuthor';
import EditAuthor from './components/EditAuthor';
import API_URL from './config';

const App = () => {
  const [authors, setAuthors] = useState([]);
  const [editingAuthor, setEditingAuthor] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/authors`)
      .then(response => response.json())
      .then(data => setAuthors(data));
  }, []);

  const onUpdate = (updatedAuthor) => {
    setAuthors(authors.map(author => (author.id === updatedAuthor.id ? updatedAuthor : author)));
    setEditingAuthor(null);
  };

  return (
    <div>
      <h1>Authors</h1>
      <AddAuthor />
      {editingAuthor ? (
        <EditAuthor author={editingAuthor} onUpdate={onUpdate} />
      ) : (
        <AuthorList setEditingAuthor={setEditingAuthor} />
      )}
    </div>
  );
};

export default App;
