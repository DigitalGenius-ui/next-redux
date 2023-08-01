"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoLists: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoLists.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todoLists = state.todoLists.filter(
        (item) => item.id !== action.payload
      );
    },

    updateTodo: (state, action) => {
      state.todoLists = state.todoLists.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            id: action.payload.id,
            text: action.payload.text,
            time: new Date(),
            completed: action.payload.completed,
          };
        } else {
          return {
            ...todo,
          };
        }
      });
    },

    isCompleted: (state, action) => {
      return {
        ...state,
        todoLists: state.todoLists.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          } else {
            return {
              ...todo,
            };
          }
        }),
      };
    },
  },
});

export const { addTodo, removeTodo, updateTodo, isCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
