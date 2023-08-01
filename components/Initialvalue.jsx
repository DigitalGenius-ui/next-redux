"use client";

export const initialState = {
  todoLists: JSON.parse(localStorage.getItem("todoItem")) || [],
};
