const listReducer = (lists = [], action) => {
  switch (action.type) {
    case "CREATE_LIST": {
      const list = {
        id: action.payload.id,
        title: action.payload.title,
        tasks: action.payload.tasks || [],
        boardId: action.payload.boardId,
      };
      return [...lists, list];
    }

    case "REMOVE_LIST": {
      return lists.filter((item) => item.id !== action.payload);
    }
    case "UPDATE_LIST": {
      return lists.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
        }
        return item;
      });
    }
    case "CHANGE_BOARD_ID_A_LIST": {
      return lists.map((item) => {
        if (item.id === action.payload.id) {
          item.boardId = action.payload.boardId;
        }
        return item;
      });
    }
    case "ADD_TASK_ID_TO_LIST": {
      //   console.log("I am from add id");
      return lists.map((item) => {
        if (item.id === action.payload.id) {
          item.tasks.push(action.payload.taskId);
        }
        return item;
      });
    }
    case "REMOVE_TASK_ID_FROM_LIST": {
      return lists.map((item) => {
        if (item.id === action.payload.id) {
          item.tasks = item.tasks.filter(
            (task) => task !== action.payload.taskId
          );
        }
        return item;
      });
    }
    default:
      return lists;
  }
};

export default listReducer;
