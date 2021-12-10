import {
  ADD_TASK,
  DELETE_TASK,
  DONE_TASK,
  EDIT_TASK,
} from "../Constants/ActionType";

const initState = {
  tasks: [],
};

export const Reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payload.index
            ? { ...el, text: action.payload.editedText }
            : el
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== action.payload),
      };
    case DONE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    default:
      return state;
  }
};
