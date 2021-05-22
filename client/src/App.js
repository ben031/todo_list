import { useEffect, useReducer } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import reducer from "./reducer/todoReducer";
import { initialize } from "./action/actions";
// import todos from "./data/todos.json";
import axios from "axios";

function App() {
  const [state, dispatch] = useReducer(reducer, null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/todos");
        const data = await res.data;
        dispatch(initialize(data));
      } catch (error) {
        throw error;
      }
    };
    getData();
  }, []);

  return (
    state && (
      <div className="App">
        <Header />
        <AddTodo dispatch={dispatch} />
        <TodoList todoList={state} dispatch={dispatch} />
      </div>
    )
  );
}

export default App;
