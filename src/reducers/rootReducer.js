const initialState = {
  tasksList: [
    {
      id: 1,
      description: "wake-up early",
      isDone: false,
    },
    {
      id: 2,
      description: "take the bus",
      isDone: false,
    },
  ],
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_TASK":
      return {
        ...state,
        tasksList: [...state.tasksList, payload],
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasksList: state.tasksList.map((task) =>
          task.id === payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasksList: state.tasksList.filter((task) => task.id !== payload),
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasksList: state.tasksList.map((task) =>
          task.description === payload.description
            ? { ...task, description: payload.newDescription }
            : task
        ),
      };
    default:
      return state;
  }
}

export default rootReducer;
