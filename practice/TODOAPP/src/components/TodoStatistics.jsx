import React from "react";
function Statistics({ todos, activeTodos, completedTodos }) {
    return (
        <div>
            <p>Total todos: {todos.length}</p>
            <p>Active todos: {activeTodos}</p>
            <p>Completed todos: {completedTodos}</p>
            <label>Todo progress: </label>
            <progress value={completedTodos} max={todos.length}></progress>

        </div>
    );
}

export default Statistics