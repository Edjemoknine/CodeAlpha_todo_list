/* eslint-disable react/prop-types */
import { Edit, Trash2 } from "lucide-react";

// eslint-disable-next-line react/prop-types
const Todo = ({ todo, completedTodo, deleteTodo, EditeTodo }) => {
  return (
    <div className="text-white mb-3 flex justify-between items-center">
      <p
        className={`cursor-pointer ${
          todo.completed && "line-through text-green-500"
        }`}
        onClick={() => completedTodo(todo)}
      >
        {todo.title}
      </p>
      <div className="flex items-center gap-4">
        <Edit
          onClick={() => EditeTodo(todo)}
          className="hover:text-blue-500 cursor-pointer"
        />
        <Trash2
          onClick={() => deleteTodo(todo.id)}
          className="hover:text-red-500 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Todo;
