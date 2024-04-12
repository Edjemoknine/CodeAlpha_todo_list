import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

// eslint-disable-next-line react/prop-types
const Form = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const handleAdd = () => {
    setTodos((prev) => [...prev, { title: title, completed: false }]);
    setTitle("");
  };
  return (
    <div className="flex w-full max-w-sm  mx-auto mb-6 items-center space-x-2">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="bg-transparent text-white"
        type="text"
        placeholder="Add todo"
      />
      <Button onClick={handleAdd} variant="outline" type="submit">
        Add
      </Button>
    </div>
  );
};

export default Form;
