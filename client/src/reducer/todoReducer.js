import { v4 as uuidv4 } from "uuid";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      const newTodo = {
        id: uuidv4(),
        todo_name: payload.todo_name,
        completed: false,
      };
      return [newTodo, ...state];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== payload.id);
    case "CHANGE_TODO":
      return state.map((todo) =>
        todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "INITIALIZE":
      return payload.data;
    default:
      return state;
  }
};

export default reducer;
