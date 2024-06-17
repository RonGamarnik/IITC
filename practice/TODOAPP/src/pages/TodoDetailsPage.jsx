import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function TodoDetailsPage() {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8001/todos/${id}`)
      .then(response => {
        setTodo(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading todo: {error.message}</p>;

  return (
    <div className='details-card'>
      <div className='details'>
        <h3>{todo.title}</h3>
        <p>{todo.label}</p>
        <p>{todo.isComplete ? 'Complete' : 'Incomplete'}</p>
      </div>
    </div>
  );
}

export default TodoDetailsPage;
