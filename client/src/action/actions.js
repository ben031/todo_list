export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    payload: { todo_name: text },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: { id },
  };
};

export const changeTodo = (id) => {
  return {
    type: "CHANGE_TODO",
    payload: { id },
  };
};

export const initialize = (data) => {
  return {
    type: "INITIALIZE",
    payload: { data },
  };
};
