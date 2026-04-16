import React, { useState } from "react";

function Todo() {
  const todoList = [
    {
      id: 0,
      val: "Shopping",
      completed: true,
    },
  ];

  const [todo, setTodo] = useState([]);
  const [todos, setTodos] = useState(todoList);

  const AddTodo = (e) => {
    setTodo(e.target.value);
  };
  const AddTods = (e) => {
    setTodo("");
    setTodos([
      ...todos,
      {
        id: Date.now(),
        val: todo,
        completed: false,
      },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // const deleteTodo = (id) => {
  //   setTodos((prev) => prev.filter((todo) => todo.id !== id));
  // };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
      }}
    >
      <h2>Todo App</h2>
      <div
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <input
          label="Todo"
          type="text"
          value={todo}
          onChange={AddTodo}
          placeholder="Add Todo"
          style={{
            borderRadius: "8px",
            border: "2px solid darkBlue",
            color: "black",
            padding: "10px",
          }}
        />
        <button
          style={{
            borderRadius: "10px",
            border: "2px solid darkBlue",
            padding: "0px 10px",
            cursor: "pointer",
          }}
          onClick={AddTods}
        >
          {" "}
          Add
        </button>
      </div>

      <div>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.map((item) => (
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                checked={item.completed}
                onClick={() => toggleTodo(item.id)}
                style={{ cursor: "pointer" }}
              />
              <li
                style={{ textDecoration: item.completed ? "line-through" : "" }}
                key={item.id}
              >
                {item.val}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
