import React, { useContext } from "react";
import { BoardContext } from "../../context/boardContex";
import { ListContext } from "../../context/listContext";
import { TaskContext } from "../../context/taskContext";

const BoardItem = ({ board }) => {
  const { boards, dispatchBoardAction } = useContext(BoardContext);
  const { lists, dispatchListAction } = useContext(ListContext);
  const { tasks, dispatchTaskAction } = useContext(TaskContext);

  const deleteHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatchBoardAction({ type: "REMOVE_BOARD", payload: board.id });
    const listRemoved = lists.filter((item) => item.boardId === board.id);
    const taskRemoved = tasks.filter((item) => item.boardId === board.id);
    listRemoved.forEach((item) => {
      dispatchListAction({ type: "REMOVE_BOARD", payload: item.id });
    });
    taskRemoved.forEach((item) => {
      dispatchTaskAction({ type: "REMOVE_TASK", payload: item.id });
    });
  };
  console.log(board);
  return (
    <div className="bg-gray-200 border-[3px] hover:text-gray-900 duration-500 h-28 border-blue-600 shadow-xl px-4 py-4 rounded-lg">
      <div className="flex justify-between">
        <h3 className="text-md hover:text-gray-900">
          <span className="font-bold">Board Name :</span>{" "}
          <span className="text-sm">{board.title}</span>
        </h3>

        <svg
          onClick={deleteHandler}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 bg-red-600 rounded-full text-gray-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <p className="text-black ">
        <span className="font-bold">Created Date :</span> {board.date}
      </p>
    </div>
  );
};

export default BoardItem;
