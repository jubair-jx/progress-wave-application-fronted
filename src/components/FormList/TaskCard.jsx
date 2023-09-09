import React, { useContext, useState } from "react";
import { TaskContext } from "../../context/taskContext";
import { BoardContext } from "../../context/boardContex";
import { ListContext } from "../../context/listContext";
import AdditemForm from "./AdditemForm";
import { Draggable } from "react-beautiful-dnd";

const TaskCard = ({ task, index }) => {
  const [taskTitle, setTaskTitle] = useState(task.title);
  const [editMode, setEditMode] = useState(false);
  const { dispatchTaskAction } = useContext(TaskContext);
  const { dispatchBoardAction } = useContext(BoardContext);
  const { dispatchListAction } = useContext(ListContext);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatchTaskAction({
      type: "UPDATE_TASK",
      payload: { id: task.id, title: taskTitle },
    });
    setEditMode(false);
  };
  const removeHandler = () => {
    dispatchTaskAction({ type: "REMOVE_TASK", payload: task.id });
    dispatchListAction({
      type: "REMOVE_TASK_ID_FROM_LIST",
      payload: { id: task.listId, taskId: task.id },
    });
    dispatchBoardAction({
      type: "REMOVE_TASK_ID_FROM_A_BOARD",
      payload: { id: task.boardId, taskId: task.id },
    });
  };
  return (
    <Draggable index={index} draggableId={task.id}>
      {(provided) => (
        <div
          className=""
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {!editMode ? (
            <div onClick={() => setEditMode(true)}>
              <div class="text-sm mt-2">
                <div class="bg-white p-2 w-64 flex justify-between rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                  {task.title}{" "}
                  <svg
                    onClick={removeHandler}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            <AdditemForm
              title={taskTitle}
              onChangeHandler={(e) => setTaskTitle(e.target.value)}
              setEditmode={setEditMode}
              submitHandler={submitHandler}
            />
          )}
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
