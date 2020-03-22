import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions';

const Todo = ({ todo, toggleTodo, deleteTodo }) => (
    <li className="item">
        <div
            className={todo && todo.completed ? "checked" : "unchecked"}
            onClick={() => toggleTodo(todo.id)}
        ></div>
        <span className={todo && todo.completed ? "done" : "undone" }>
            {todo.content}
        </span>
        <span
            className="delete"
            onClick={() => {if(window.confirm("Are you sure?")) deleteTodo(todo.id)}}
        >
            &#10006;
        </span>
    </li>
);

export default connect(
    null,
    { toggleTodo, deleteTodo }
)(Todo);