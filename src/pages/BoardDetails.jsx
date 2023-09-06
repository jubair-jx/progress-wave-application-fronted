import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ListContext } from "../context/listContext";
import Additem from "../components/FormList/Additem";
import AdditemForm from "../components/FormList/AdditemForm";
import { BoardContext } from "../context/boardContex";
import TaskList from "../components/FormList/TaskList";

const BoardDetails = () => {
  const { lists, dispatchListAction } = useContext(ListContext);
  const [editmode, setEditmode] = useState(false);
  const [listTitle, setListTitle] = useState("");
  const { boards, dispatchBoardAction } = useContext(BoardContext);
  const { boardId } = useParams();
  const submitHandler = (e) => {
    e.preventDefault();
    const id = Date.now();
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
  return (
    <div className="w-full  bg-gradient-to-b from-[#81238fd1] to-[#387b85]">
      <Link to={"/"}>Back to Board</Link>
      <div className="grid grid-cols-4">
        {lists
          .filter((list) => list.boardId === boardId)
          .map((taskList, index) => (
            <TaskList taskList={taskList} key={index}></TaskList>
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
  );
};

export default BoardDetails;
