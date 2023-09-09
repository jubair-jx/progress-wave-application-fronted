import React, { useContext } from "react";
import { BoardContext } from "../../context/boardContex";
import BoardItem from "./BoardItem";
import { Link } from "react-router-dom";

const Boardlist = () => {
  const { boards } = useContext(BoardContext);
  console.log(boards);
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 px-2 py-6 md:px-14 md:py-8">
      {boards.map((board) => (
        <Link key={board.id} to={`/board/${board.id}`}>
          <BoardItem board={board}></BoardItem>
        </Link>
      ))}
    </div>
  );
};

export default Boardlist;
