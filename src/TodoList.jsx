import { useState } from "react";
import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const initialTodos = [
  { id: 1, text: "walk the dog", completed: true },
  { id: 3, text: "walk the cat", completed: true },
  { id: 2, text: "walk the fish", completed: false },
  { id: 6, text: "walk the chicken", completed: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const addTodo = (todoText) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { text: todoText, id: 13, completed: false },
    ]);
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          remove={removeTodo}
          toggleTodo={() => {
            toggleTodo(todo.id);
          }}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </List>
  );
}
