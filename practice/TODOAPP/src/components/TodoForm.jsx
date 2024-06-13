import React, { useRef } from "react";

function Form({ addTodo }) {
    const inputRef = useRef(null);

    return (
        <form onSubmit={(event) => addTodo(event, inputRef)}>
            <input
                type="text"
                placeholder="Enter a new todo"
                ref={inputRef}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default Form;
