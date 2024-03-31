import { useEffect, useState } from "react";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    // Huge props for oreo
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    console.log("todos:", todos);
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, check: false }]);
      setNewTodo("");
    }
  };

  const editTodo = (index) => {
    setEditingTodo(index);
    setNewTodo(todos[index].text);
  };

  const updateTodo = () => {
    if (newTodo.trim()) {
      const updatedTodos = [...todos];
      updatedTodos[editingTodo] = { ...updatedTodos[editingTodo], text: newTodo };
      setTodos(updatedTodos);
      setNewTodo("");
      setEditingTodo(null);
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const switchTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = { ...updatedTodos[index], check: !updatedTodos[index].check };
    setTodos(updatedTodos);
  };

  return (
    <>
      <div>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        {editingTodo !== null ? (
          <button onClick={updateTodo}>Update</button>
        ) : (
          <button onClick={addTodo}>Add</button>
        )}
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ backgroundColor: todo.check ? "pink" : "lightskyblue" }}>
            <input type="checkbox" checked={todo.check} onChange={() => switchTodo(index)} />
            <span style={{ textDecoration: todo.check ? "underline" : "none" }}>{todo.text}</span>
            <button onClick={() => editTodo(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
