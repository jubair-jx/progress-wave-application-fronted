const boardReducer = (boards = [], action) => {
  switch (action.type) {
    case "CREATE_BOARD": {
      const board = {
        id: action.payload.id,
        title: action.payload.title,
        lists: [],
        tasks: [],
      };
      return [...boards, ...board];
    }
    case "REMOVE_BOARD": {
      return boards.filter((board) => board.id !== action.payload);
    }
    case "UPDATE_BOARD": {
      return boards.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
        }
        return item;
      });
    }
    case "ADD_LIST_ID_TO_BOARD": {
      const newState = boards.map((item) => {
        if (item.id === action.payload.id) {
          item.lists.push(action.payload.listId);
        }
        return item;
      });
      return newState;
    }
    case "ADD_TASK_ID_TO_BOARD": {
      const newState = boards.map((item) => {
        if (item.id === action.payload.id) {
          item.tasks.push(action.payload.taskId);
        }
        return item;
      });
      return newState;
    }
    case "REMOVE_LIST_ID_FROM_A_BOARD": {
      return boards.map((item) => {
        if (item.id === action.payload.id) {
          item.lists = item.lists.filter(
            (list) => list !== action.payload.listId
          );
        }
      });
    }
    case "REMOVE_TASK_ID_FROM_A_BOARD": {
      return boards.map((item) => {
        if (item.id === action.payload.id) {
          item.tasks = item.tasks.filter(
            (task) => task !== action.payload.taskId
          );
        }
      });
    }

    default: {
      return boards;
    }
  }
};

export default boardReducer;
