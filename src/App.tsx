import { useState } from "react";
import "./App.css";

// Jestから1:03:53

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");

  const handleAddTodo = () => {
    if (title.trim()) {
      setTodos([...todos, { id: todos.length + 1, title, completed: false }]);
      setTitle("");
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text- text-gray-800 mb-6">Todoアプリ！</h1>
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="新しいタスクを入力..."
              aria-label="新しいタスクを入力"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleAddTodo}
              className="px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
            >
              追加
            </button>
          </div>
          {todos.length === 0 ? (
            <div>
              <p>タスクがありません</p>
              <p>新しいタスクを追加してください</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className={`flex items-center gap-3 p-3 rounded-1g border transition-all duration-200
                ${todo.completed ? "bg-gray-50 border-gray-200" : "bg-white border-gray-300 hover:border-blue-300"}`}
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleTodo(todo.id)}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span>{todo.title}</span>
                </li>
              ))}
            </ul>
          )}

          {todos.length > 0 && (
            <div className="mt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                完了済み: {todos.filter((todo) => todo.completed).length} / {todos.length}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
