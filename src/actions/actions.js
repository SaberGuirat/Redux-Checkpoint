export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});
export const toggleTask = (taskId) => ({
  type: "TOGGLE_TASK",
  payload: taskId,
});

export const deleteTask = (taskId) => ({
  type: "DELETE_TASK",
  payload: taskId,
});
export const editTask = ({ description, newDescription }) => ({
  type: "EDIT_TASK",
  payload: { description, newDescription },
});
