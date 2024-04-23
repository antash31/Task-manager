import { createSlice } from "@reduxjs/toolkit";
import { listType } from "@/types";

type intialStateType = {
  list: listType[];
};

const intitialState: intialStateType = {
  list: [],
};

export const TaskSlice = createSlice({
  name: "Task",
  initialState: intitialState,
  reducers: {
    addTask: (state, action) => {
      state.list.push(action.payload);
    },
    removeTask: (state, action) => {
      state.list = state.list.filter((item) => {
        return item.id != action.payload.id;
      });
      console.log(state.list,"State-list from redux");
    },
    editTask: (state, action) => {},
    addToImportant: (state, action) => {},
    removeFromImportant: (state, action) => {},
    addDueDate: (state, action) => {},
    removeDueDate: (state, action) => {},
    addStep: (state, action) => {},
    removeStep: (state, action) => {},
    addRepeation: (state, action) => {},
    removeRepeation: (state, action) => {},
  },
});

export const {
  addTask,
  removeTask,
  editTask,
  addToImportant,
  removeFromImportant,
  addDueDate,
  removeDueDate,
  addStep,
  removeStep,
  addRepeation,
  removeRepeation,
} = TaskSlice.actions;

export default TaskSlice.reducer;
