import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Todo {
    id: number;
    title: string;
    isComplete: boolean;
}

function TodoDetailComponent({ id }: { id: number }) {
    const [todo, setTodo] = useState<Todo | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTodo = async () => {
            try {
                const response = await axios.get(`http://localhost:8001/todos/${id}`);
                setTodo(response.data);
            } catch (error) {
                console.error("Error fetching todo:", error);
            }
        };

        fetchTodo();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8001/todos/${id}`);
            navigate("/");
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    if (!todo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="flex gap-2 p-8 border transition-all hover:bg-slate-300">
                <input type="checkbox" checked={todo.isComplete} readOnly />
                <p className="text-center">{todo.title}</p>
                <button
                    className="ml-10 bg-slate-500 cursor-pointer transition duration-500 p-2 rounded hover:bg-slate-300"
                    onClick={handleDelete}
                >
                    Delete
                </button>
                
            </div>
        </div>
    );
}

export default TodoDetailComponent;
