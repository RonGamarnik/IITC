import { useContext, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import api from "../../services/api.service";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { AuthContext } from "../context/AuthContext";
import { toastUtils as toast } from "../../lib/utils";
import { CirclePlus, CircleMinus } from "lucide-react";

interface INewTodoList {
  title: string;
  isComplete: boolean;
}

interface CreateTaskDialogProps {
  isOpen: boolean;
  onTaskCreated: (task: any) => void;
  setCreateTaskDialogIsOpen: (isOpen: boolean) => void;
}

const CreateTaskDialog = ({
  isOpen,
  onTaskCreated,
  setCreateTaskDialogIsOpen,
}: CreateTaskDialogProps) => {
  const [newTodoList, setNewTodoList] = useState<INewTodoList[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  function onClose() {
    setCreateTaskDialogIsOpen(false);
    setNewTodoList([]);
  }

  function handleTodoChange(index: number, title: string) {
    const updatedTodoList = newTodoList.map((todo, i) =>
      i === index ? { ...todo, title: title } : todo
    );
    setNewTodoList(updatedTodoList);
  }

  function addTodo() {
    setNewTodoList([...newTodoList, { title: "", isComplete: false }]);
  }

  function removeTodo(index: number) {
    const updatedTodos = newTodoList.filter((_, i) => i !== index);
    setNewTodoList(updatedTodos);
  }

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setIsLoading(true);
    const formData = new FormData(ev.currentTarget);
    const newTask = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      body: formData.get("body") as string,
      todoList: newTodoList,
    };

    try {
      const { data } = await api.post("/tasks", newTask);
      onTaskCreated(data.task);
      onClose();
      toast({
        title: "Task created successfully",
        description: `${newTask.title}`,
        status: "success",
      });
    } catch (error: any) {
      toast({
        title: "Error creating task",
        description: error.message || "An error occurred",
        status: "error",
      });
      console.error("Error creating task:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-8">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input name="title" required />
          </div>
          <div>
            <Label htmlFor="description" className="flex gap-1 pb-1">
              <div>Description</div>
              <div className="text-gray-500 text-xs">(optional)</div>
            </Label>
            <Textarea name="description" />
          </div>
          <div>
            <Label htmlFor="body" className="flex gap-1 pb-1">
              <div>Body</div>
              <div className="text-gray-500 text-xs">(optional)</div>
            </Label>
            <Textarea name="body" />
          </div>
          <div>
            <Label htmlFor="todoList" className="flex gap-1 pb-1">
              <div>Todo List</div>
              <div className="text-gray-500 text-xs">(optional)</div>
            </Label>
            <ul className="flex flex-col space-y-2">
              {newTodoList.map((todo, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Input
                    type="text"
                    placeholder="Todo title..."
                    value={todo.title}
                    onChange={(ev) => handleTodoChange(index, ev.target.value)}
                  />
                  <CircleMinus className="cursor-pointer" onClick={() => removeTodo(index)} />
                </li>
              ))}
            </ul>
            <div
              onClick={addTodo}
              className="flex gap-1 mt-3 items-center text-sm cursor-pointer"
            >
              <CirclePlus size={20} />
              Add Todo
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Task"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTaskDialog;
