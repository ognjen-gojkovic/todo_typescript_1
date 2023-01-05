import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Task, TodosState } from "../../types/Types";

const initialState = {
  todos: [],
  focusedTask: null,
} as TodosState;

export const reducerTodos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state: TodosState, action: PayloadAction<Task>) {
      state.todos.push(action.payload);
      state.focusedTask = action.payload;
    },
    updateTask(
      state: TodosState,
      action: PayloadAction<{ id: string; isComplete: boolean }>
    ) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isComplete = action.payload.isComplete;
        }
        return todo;
      });
      state.focusedTask = state.todos.filter((todo) => !todo.isComplete)[0];
    },
    setFocusedTask(state: TodosState, action: PayloadAction<Task | null>) {
      state.focusedTask = action.payload;
    },
    setStateFromLS(state: TodosState, action: PayloadAction<TodosState>) {
      state = action.payload;
    },
    deleteTodo(state: TodosState, action: PayloadAction<Pick<Task, "id">>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    clearCompleted(state: TodosState, action: PayloadAction<undefined>) {
      state.todos = state.todos.filter((todo) => !todo.isComplete);
    },
  },
});

const { actions, reducer } = reducerTodos;

export const {
  addTodo,
  clearCompleted,
  deleteTodo,
  setFocusedTask,
  setStateFromLS,
  updateTask,
} = actions;

export default reducer;
