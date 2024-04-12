/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

// eslint-disable-next-line react/prop-types
const Form = ({ setTodos, setTitle, title, update }) => {
  const [error, setError] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (title === "") {
      setError("Title cannot be empty");
      setTimeout(() => setError(""), 2000);
      return;
    }

    if (!update) {
      setTodos((prev) => [
        ...prev,
        { id: Math.floor(Math.random() * 100), title: title, completed: false },
      ]);
    } else {
      setTodos((prev) =>
        prev.map((item) =>
          item.id === update.id ? { ...item, title: title } : item
        )
      );
    }
    setTitle("");
  };

  return (
    <>
      <form
        onSubmit={handleAdd}
        className="flex w-full max-w-sm  mx-auto mb-6 items-center space-x-2"
      >
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-transparent text-white"
          type="text"
          placeholder="Add todo"
        />
        <Button variant="outline" type="submit">
          Add
        </Button>
      </form>
      <p className="text-red-400">{error}</p>
    </>
  );
};

export default Form;
