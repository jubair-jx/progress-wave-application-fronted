const boardReducer = (boards = [], action) => {
  switch (action.type) {
    case "CREATE_BOARD": {
      let board = {
        id: Date.now() + "",
        title: action.payload,
        lists: [],
        tasks: [],
      };
      return [...boards, board];
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
      return boards.map((item) => {
        if (item.id === action.payload.id) {
          item.tasks.push(action.payload.taskId);
        }

        return item;
      });
    }
    case "REMOVE_LIST_ID_FROM_A_BOARD": {
      return boards.map((item) => {
        if (item.id === action.payload.id) {
          item.lists = item.lists.filter(
            (list) => list !== action.payload.listId
          );
        }

        return item;
      });
    }
    case "REMOVE_TASK_ID_FROM_A_BOARD": {
      return boards.map((item) => {
        if (item.id === action.payload.id) {
          item.tasks = item.tasks.filter(
            (task) => task !== action.payload.taskId
          );
        }

        return item;
      });
    }

    default: {
      return boards;
    }
  }
};

export default boardReducer;
