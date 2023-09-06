import React, { useContext, useState } from "react";
import { TaskContext } from "../../context/taskContext";
import Additem from "./Additem";
import AdditemForm from "./AdditemForm";
import { ListContext } from "../../context/listContext";
import { BoardContext } from "../../context/boardContex";
import TaskCard from "./TaskCard";

const TaskList = ({ taskList }) => {
  const { tasks: allTasks, dispatchTaskAction } = useContext(TaskContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [editMode, setEditmode] = useState(false);
  const { dispatchListAction } = useContext(ListContext);
  const { dispatchBoardAction } = useContext(BoardContext);
  const submitHandler = (e) => {
    e.preventDefault();
    const id = Date.now();
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
    <div className="">
      <div className="px-4 py-12">
        <div class="rounded bg-slate-400 w-64 p-2">
          <div class="flex justify-between py-1">
            <h3 class="text-lg font-bold">{taskList.title}</h3>
            <svg
              class="h-4 fill-current text-grey-dark cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
            </svg>
          </div>
        </div>

        {taskList.tasks
          .map((task) => {
            return allTasks.find((item) => item.id === task);
          })
          .map((work) => (
            <TaskCard task={work} key={work.id} />
          ))}

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
  );
};

export default TaskList;
