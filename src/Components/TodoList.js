import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const order = (a, b) => {
    if(a.completed !== b.completed) {
        if(a.completed) return 1;
        else return -1;
    } else {
        if(a.id < b.id) return -1;
        else return 1;
    }
}

const filtro = (item) => {
    return item.status;
}

const TodoList = ({ todos }) => (
    <ul className="list">
        {todos && todos.filter(filtro).length
            ? todos
                .filter(filtro)
                .sort(order)
                .map((todo, index) => {
                return <Todo key={`todo-${todo.id}`} todo={todo} />;
            })
            : <div className="warning">You don't have tasks yet!</div>
        } 
    </ul>
)

const mapStateToProps = state => {
    const { byIds, allIds } = state.todos || {};
    const todos =
      allIds && state.todos.allIds.length
        ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
        : null;
    return { todos };
  };

export default connect(mapStateToProps)(TodoList);