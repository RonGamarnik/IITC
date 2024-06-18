import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress, Box } from '@mui/material';

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

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h6" color="error">Error loading todo: {error.message}</Typography>
      </Container>
    );
  }

  return (
    <Container className='details-card' sx={{ mt: 4 }}>
      <Box className='details' sx={{ p: 2, border: '1px solid #ccc', borderRadius: '8px'}}>
        <Typography variant="h5" component="div" sx={{ color: "#000000!important" }} gutterBottom>Title:</Typography>
        <Typography variant="h6" component="div" gutterBottom>{todo.title}</Typography>
        <Typography variant="subtitle1" sx={{ color: "#000000!important" }} gutterBottom>Type:</Typography>
        <Typography variant="subtitle2" gutterBottom>{todo.label || 'No label provided'}</Typography>
        <Typography variant="subtitle1" sx={{ color: "#000000!important" }} gutterBottom>Status:</Typography>
        <Typography variant="subtitle2">{todo.isComplete ? 'Complete' : 'Incomplete'}</Typography>
      </Box>
    </Container>
  );
}

export default TodoDetailsPage;
