import React from 'react';
import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo";
import './App.css';

export default function TodoApp() {
  return (
    <div className="app">
      <h1>To Do List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

