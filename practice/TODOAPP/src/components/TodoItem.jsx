import axios from "axios";
import React from "react";

function Item({ todo, toggleTodoComplete, removeTodo }) {
    const handleCheckboxChange = () => {
        const updatedStatus = !todo.isComplete;
        toggleTodoComplete(todo.id);
        axios.patch(`http://localhost:8001/todos/${todo.id}`, { isComplete: updatedStatus })
            .catch(error => {
                console.error("There was an error updating the todo status!", error);
            });
    };

    return (
        <li key={todo.id} className="todoItem">
            <label className={todo.isComplete ? 'completedTodo' : ''}>
                {todo.title}
                <input
                    type="checkbox"
                    checked={todo.isComplete}
                    onChange={handleCheckboxChange}
                />
            </label>
            <button onClick={() => removeTodo(todo.id)}>Remove todo</button>
        </li>
    );
}

export default Item;
