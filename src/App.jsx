import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Form from "./components/Form";
import { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="bg-black min-h-screen flex justify-center items-center  text-foreground">
      <Card className="w-[450px] mx-auto bg-transparent p-4">
        <CardHeader>
          <Form setTodos={setTodos} />
        </CardHeader>
        <CardContent>
          {todos.map((todo) => (
            <Todo todo={todo} key={todo.title} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
