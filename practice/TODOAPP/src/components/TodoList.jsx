import React from "react";
import Item from "./TodoItem";

const List = ({ todos, toggleTodoComplete, removeTodo }) => {
    return (
        <ul>
            {todos.map(todo => {
                console.log(`Rendering todo with id: ${todo.id}`);
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
