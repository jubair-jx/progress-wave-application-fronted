import React, { useContext, useRef, useState } from "react";
import { TaskContext } from "../../context/taskContext";
import Additem from "./Additem";
import AdditemForm from "./AdditemForm";
import { ListContext } from "../../context/listContext";
import { BoardContext } from "../../context/boardContex";
import TaskCard from "./TaskCard";
import { Droppable } from "react-beautiful-dnd";

const TaskList = ({ taskList, index }) => {
  const ref = useRef();
  const { tasks: allTasks, dispatchTaskAction } = useContext(TaskContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [editMode, setEditmode] = useState(false);
  const { dispatchListAction } = useContext(ListContext);
  const { dispatchBoardAction } = useContext(BoardContext);
  const submitHandler = (e) => {
    e.preventDefault();
    const id = Date.now() + "";
    dispatchTaskAction({
      type: "CREATE_TASK",
      payload: {
        id: id,
        title: taskTitle,
        listId: taskList.id,
        boardId: taskList.boardId,
      },
    });
    dispatchListAction({
      type: "ADD_TASK_ID_TO_LIST",
      payload: { id: taskList.id, taskId: id },
    });
    dispatchBoardAction({
      type: "ADD_TASK_ID_TO_BOARD",
      payload: { id: taskList.boardId, taskId: id },
    });
    setEditmode(false);
    setTaskTitle("");
  };
  const removeHandler = () => {
    dispatchListAction({ type: "REMOVE_LIST", payload: taskList.id });
    dispatchBoardAction({
      type: "REMOVE_LIST_ID_FROM_A_BOARD",
      payload: { id: taskList.boardId, listId: taskList.id },
    });
  };
  return (
    <Droppable droppableId={taskList.id + ""} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps} className="">
          <div className="px-4 py-12 md:ml-0 ml-8">
            <div class="rounded bg-slate-200 w-64 p-2">
              <div class="flex justify-between py-1">
                <h3 class="text-lg font-bold">{taskList.title}</h3>
                <svg
                  onClick={removeHandler}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>

            {taskList.tasks
              .map((task) => {
                return allTasks.find((item) => item.id === task);
              })
              .map((work, index) => (
                <TaskCard index={index} task={work} key={work.id} />
              ))}
            {provided.placeholder}
            {!editMode ? (
              <Additem setEditmode={setEditmode}></Additem>
            ) : (
              <AdditemForm
                title={taskTitle}
                setEditmode={setEditmode}
                editMode={editMode}
                submitHandler={submitHandler}
                onChangeHandler={(e) => setTaskTitle(e.target.value)}
              />
            )}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;
