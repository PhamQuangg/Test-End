import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box, Container, Typography } from '@mui/material';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    try {
      const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
      setTodos(storedTodos);
    } catch (error) {
      console.error("Error loading todos from local storage", error);
      setTodos([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const deleteAllCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            #TODO
          </Typography>
          <TodoForm addTodo={addTodo} />
          <Tabs value={filter} onChange={(e, newValue) => setFilter(newValue)}>
            <Tab label="All" value="all" />
            <Tab label="Active" value="active" />
            <Tab label="Completed" value="completed" />
          </Tabs>
          <TodoList 
            todos={filteredTodos} 
            toggleComplete={toggleComplete} 
            deleteTodo={deleteTodo}
            deleteAllCompleted={deleteAllCompleted}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default App;
