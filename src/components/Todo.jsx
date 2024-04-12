import { Edit, Trash2 } from "lucide-react";

const Todo = () => {
  return (
    <div className="text-white mb-3 flex justify-between items-center">
      <p className="cursor-pointer">Do the dishes</p>
      <div className="flex items-center gap-4">
        <Edit className="hover:text-blue-500 cursor-pointer" />
        <Trash2 className="hover:text-red-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default Todo;
