import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-4xl font-bold mb-5">To-Do List</h1>
      <div className="mb-5">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new task..."
          className="border p-2 rounded mr-2"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>
      <ul className="list-none w-full max-w-md">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`flex justify-between p-2 my-2 bg-gray-900 rounded ${
              todo.completed ? "line-through text-gray-200" : ""
            }`}
          >
            <span onClick={() => toggleTodo(index)} className="cursor-pointer">
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(index)}
              className="bg-red-500 text-white px-2 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
