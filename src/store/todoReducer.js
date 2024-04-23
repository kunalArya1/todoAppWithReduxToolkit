import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
    editTodo: (state, action) => {
      state[action.payload.index] = action.payload.todo;
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
