import React from "react";
import Item from "./TodoItem";

const List = ({ todos, toggleTodoComplete, removeTodo }) => {
    return (
        <ul className="list">
            {todos.map(todo => {
                return (
                    <Item
                        key={todo.id}
                        todo={todo}
                        toggleTodoComplete={toggleTodoComplete}
                        removeTodo={removeTodo}
                    />
                );
            })}
        </ul>
    );
};


export default List;
