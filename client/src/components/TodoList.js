import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, dispatch }) => {
  return (
    <main className="todoList">
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </main>
  );
};

export default TodoList;
