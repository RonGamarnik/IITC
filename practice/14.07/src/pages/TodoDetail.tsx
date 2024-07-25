import { useParams } from "react-router-dom";
import TodoDetailComponent from "../components/TodoDetailComponent";

function TodoDetail() {
  const { id } = useParams<{ id: string }>();
  const todoId = Number(id);

  return (
    <>
      <div>TodoDetail</div>
      <TodoDetailComponent id={todoId} />
    </>
  );
}

export default TodoDetail;
