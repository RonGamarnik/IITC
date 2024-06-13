import React from "react";
import Item from "./TodoItem";

function List({ todos, toggleTodoComplete, removeTodo }) {
    return (
        <ul>
            {todos.map((todo) => (
                <Item key={todo.id} todo={todo} toggleTodoComplete={toggleTodoComplete} removeTodo={removeTodo} />
            ))}
        </ul>
    );
}

export default List;
