import React from 'react';
import { Checkbox, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <ListItem>
      <Checkbox 
        checked={todo.completed} 
        onChange={() => toggleComplete(todo.id)} 
      />
      <ListItemText 
        primary={todo.text} 
        sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }} 
      />
      <IconButton onClick={() => deleteTodo(todo.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TodoItem;
