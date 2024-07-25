import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Todo {
    id: number;
    title: string;
    isComplete: boolean;
}

function Todos() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get("http://localhost:8001/todos");
                setTodos(response.data);
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        };

        fetchTodos();
    }, []);

    const handleChangeTodo = async (id: number) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, isComplete: !todo.isComplete };
            }
            return todo;
        });
        setTodos(updatedTodos);

        try {
            const todoToUpdate = updatedTodos.find(todo => todo.id === id);
            await axios.put(`http://localhost:8001/todos/${id}`, todoToUpdate);
        } catch (error) {
            console.error("Error updating todo:", error); 
        }
    };

    return (
        <div>
            {todos.map((todo: Todo) => (
                <div className="flex gap-2 p-8 border transition-all duration-300 hover:bg-slate-300" key={todo.id}>
                    <input
                        type="checkbox"
                        checked={todo.isComplete}
                        onChange={() => handleChangeTodo(todo.id)}
                    />
                    <p onClick={() => navigate(`/${todo.id}`)}>{todo.title}</p>
                </div>
            ))}
        </div>
    );
}

export default Todos;
