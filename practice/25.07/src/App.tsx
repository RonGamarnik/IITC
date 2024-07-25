import { useState } from 'react'
import './App.css'
import { useQuery } from '@tanstack/react-query';

const TODOS = [{ id: 1, title: "baba", isComplete: false }, {
  id: 2,
  title: "mama",
  isComplete: true
},
{ id: 3, title: "lala", isComplete: false }]
async function getTodos() {
  await wait();
  return TODOS;
}
async function getTodoById(id: number) { 
  await wait();
  return TODOS.find((todo) => todo.id === id);
}
function wait(){
  return new Promise((res,rej) => setTimeout(res, 2000));
}
function App() {
  const [count, setCount] = useState(0)
  const { data, isError, isLoading,refetch } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

    const { data:selectedTodo, isError, isLoading } = useQuery({
    queryKey: ['todo',count],
    queryFn: ()=> getTodoById(count),
    });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error :{error.message }</div>;
  return (
    <div className="card">
      <div>{data?.map((todo) => { return <div key={todo.id}>{todo.title}</div>}) }</div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
      </button>
       <button onClick={() => setCount((count) => count - 1)}>
          count is {count}
      </button>
      <div>
        Selected todo:{JSON.stringify(selectedTodo)}
      </div>
      </div>
)
}
export default App

    

