import { useState, useEffect } from "react";
import { Box, List, Typography } from "@mui/material";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) return [];
  return data;
};

const initialTodos = getInitialData();

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
      { text: todoText, id: crypto.randomUUID(), completed: false },
    ]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        m: 3,
      }}
    >
      <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
        Todos
      </Typography>
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
    </Box>
  );
}
