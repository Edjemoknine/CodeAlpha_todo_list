import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Form from "./components/Form";
import { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [update, setUpdate] = useState();

  const EditeTodo = (todo) => {
    setTitle(todo.title);
    setUpdate(todo);
  };
  const deleteTodo = (id) => {
    setTodos((prev) => [...prev.filter((todo) => todo.id !== id)]);
  };

  const completedTodo = (todo) => {
    const newlist = todos.map((item) =>
      item.title === todo.title ? { ...item, completed: !item.completed } : item
    );
    setTodos(newlist);
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center  text-foreground">
      <Card className="w-[450px] mx-auto bg-transparent p-4">
        <CardHeader>
          <Form
            update={update}
            setTodos={setTodos}
            setTitle={setTitle}
            title={title}
          />
        </CardHeader>
        <CardContent>
          {todos.map((todo) => (
            <Todo
              EditeTodo={EditeTodo}
              completedTodo={completedTodo}
              deleteTodo={deleteTodo}
              todo={todo}
              key={todo.title}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
