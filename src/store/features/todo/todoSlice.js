import { createSlice } from "@reduxjs/toolkit";
import uuidv4 from "../../../common/uuidv4";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo(state, action) {
      const todo = { key: uuidv4(), value: action.payload };
      state.todos.push(todo);
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.key !== action.payload);
    },
  },
});

export const { createTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
