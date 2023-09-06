import React, { useContext } from "react";
import { BoardContext } from "../../context/boardContex";
import BoardItem from "./BoardItem";
import { Link } from "react-router-dom";

const Boardlist = () => {
  const { boards } = useContext(BoardContext);
  console.log(boards);
  return (
    <div className="grid grid-cols-3 gap-6 px-14 py-8">
      {boards.map((board) => (
        <Link key={board.id} to={`/board/${board.id}`}>
          <BoardItem board={board}></BoardItem>
        </Link>
      ))}
    </div>
  );
};

export default Boardlist;
