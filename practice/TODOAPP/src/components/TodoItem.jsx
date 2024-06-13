import React from "react";
function Item({ todo, toggleTodoComplete, removeTodo }) {
    return (
        <li key={todo.id} className="todoItem">
            <p className={todo.isComplete ? 'completedTodo' : ''}>{todo.title}</p>
            <input
                type="checkbox"
                checked={todo.isComplete}
                onChange={() => toggleTodoComplete(todo.id)}
            />
            <button onClick={() => removeTodo(todo.id)}>Remove todo</button>
        </li>)
}
export default Item