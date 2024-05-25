import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField 
        label="Add details" 
        variant="outlined" 
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Add
      </Button>
    </form>
  );
};

export default TodoForm;
