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
      <div className="w-full  bg-gradient-to-l from-[#310d36dd] via-[#16674edd] to-[#194248]">
        <div className=" mx-auto">
          <Link
            className="text-center flex justify-center items-center w-40  px-3 py-4 bg-slate-400"
            to={"/"}
          >
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
