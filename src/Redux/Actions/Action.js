import {
  ADD_TASK,
  DELETE_TASK,
  DONE_TASK,
  EDIT_TASK,
} from "../Constants/ActionType";

export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};
export const editTask = (p) => {
  return {
    type: EDIT_TASK,

    payload: p,
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const doneTask = (id) => {
  return {
    type: DONE_TASK,
    payload: id,
  };
};
