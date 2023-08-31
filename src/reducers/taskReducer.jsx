const taskReducer = (tasks, action) => {
  switch (action.type) {
    case "CREATE_TASK": {
      const task = {
        id: action.payload.id,
        title: action.payload.title,
        boardId: action.payload.boardId,
        listId: action.payload.listId,
      };
      return [...task, task];
    }
    case "REMOVE_TASK": {
      return tasks.filter((task) => task.id !== action.payload);
    }
    case "UPDATE_TASK": {
      return tasks.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
        }
        return item;
      });
    }
    case "CHANGE_LIST_ID_OF_A_TASK": {
      return tasks.map((item) => {
        if (item.id === action.payload.id) {
          item.listId = action.payload.listId;
        }
        return item;
      });
    }
    case "CHANGE_BOARD_ID_OF_A_TASK": {
      return tasks.map((item) => {
        if (item.id === action.payload.id) {
          item.boardId = action.payload.boardId;
        }
        return item;
      });
    }
    default:
      return tasks;
  }
};
export default taskReducer;
