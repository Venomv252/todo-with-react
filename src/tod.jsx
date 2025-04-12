import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  let [todos, setTodos] = useState([
    {
      task: "sample-task",
      id: uuidv4(),
      isdone: false,
    },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos(prevTodos => [...prevTodos, { task: newTodo, id: uuidv4() , isdone:false}]);
    setNewTodo("");
};

  let markOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isdone: true } : todo
      )
    );
  };

  let markAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, isdone: true }))
    );
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  let updateTodo = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <input
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodo}
      ></input>
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <hr />

      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isdone ? { textDecoration: "line-through" } : {}}>
              {todo.task}
              &nbsp;&nbsp;&nbsp;
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button onClick={() => markOne(todo.id)}>Mark as Complete</button>
            </span>
          </li>
        ))}
      </ul>
      <button onClick={markAll}>Mark All as Complete</button>
    </div>
  );
}
