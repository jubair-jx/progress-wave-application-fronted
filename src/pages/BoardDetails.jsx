import React, { useContext, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ListContext } from "../context/listContext";
import Additem from "../components/FormList/Additem";
import AdditemForm from "../components/FormList/AdditemForm";
import { BoardContext } from "../context/boardContex";
import TaskList from "../components/FormList/TaskList";
import { DragDropContext } from "react-beautiful-dnd";
import { TaskContext } from "../context/taskContext";

const BoardDetails = () => {
  const { lists, dispatchListAction } = useContext(ListContext);
  const { dispatchTaskAction } = useContext(TaskContext);
  const [editmode, setEditmode] = useState(false);
  const [listTitle, setListTitle] = useState("");
  const { boards, dispatchBoardAction } = useContext(BoardContext);
  const { boardId } = useParams();
  const submitHandler = (e) => {
    e.preventDefault();
    const id = Date.now() + "";
    dispatchListAction({
      type: "CREATE_LIST",
      payload: { id: id, title: listTitle, boardId: boardId },
    });
    dispatchBoardAction({
      type: "ADD_TASK_ID_TO_BOARD",
      payload: { id: boardId, listId: id },
    });
    setEditmode(false);
  };
  const onDragHandler = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      source.droppableId === destination.draggableId &&
      source.index === destination.index
    ) {
      return;
    }
    if (source.draggableId !== destination.droppableId) {
      dispatchTaskAction({
        type: "CHANGE_LIST_ID_OF_A_TASK",
        payload: { id: draggableId, listId: destination.draggableId },
      });
    }
    dispatchListAction({
      type: "SORT_TASK_IDS_IN_A_LIST",
      payload: { source, destination, draggableId },
    });
  };
  return (
    <DragDropContext onDragEnd={onDragHandler}>
      <div className="w-full  bg-gradient-to-l from-[#0f2344dd] via-[#1c0932dd] to-[#092125]">
        <div className="flex justify-center items-center pt-8">
          <Link
            to="/board"
            className="bg-blue-800 hover:bg-slate-800 duration-500 flex gap-2 border-[2px] border-orange-200 text-white  py-2 px-4 rounded-md hover:text-white "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to Board
          </Link>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {lists
            .filter((list) => list.boardId === boardId)
            .map((taskList, index) => (
              <TaskList
                index={index}
                taskList={taskList}
                key={index}
              ></TaskList>
            ))}
          {!editmode ? (
            <Additem listAddItem={true} setEditmode={setEditmode} />
          ) : (
            <AdditemForm
              setEditmode={setEditmode}
              title={listTitle}
              listForm={true}
              submitHandler={submitHandler}
              onChangeHandler={(e) => setListTitle(e.target.value)}
            />
          )}
        </div>
      </div>
    </DragDropContext>
  );
};

export default BoardDetails;
