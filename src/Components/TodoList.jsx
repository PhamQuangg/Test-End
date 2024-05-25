import React from 'react';
import { List, Button } from '@mui/material';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo, deleteAllCompleted }) => {
  return (
    <>
      <List>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            toggleComplete={toggleComplete} 
            deleteTodo={deleteTodo} 
          />
        ))}
      </List>
      {todos.some(todo => todo.completed) && (
        <Button onClick={deleteAllCompleted} variant="contained" color="error" sx={{ mt: 2 }}>
          Delete All
        </Button>
      )}
    </>
  );
};

export default TodoList;
