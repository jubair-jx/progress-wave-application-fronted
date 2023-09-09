import React from "react";
import BoardCreatingForm from "../components/FormList/BoardCreatingForm";
import Boardlist from "../components/FormList/Boardlist";

const Board = () => {
  return (
    <>
      <div className=" bg-gradient-to-l from-[#0f2344dd] via-[#1c0932dd] to-[#092125]">
        <BoardCreatingForm />
        <Boardlist></Boardlist>
      </div>
    </>
  );
};

export default Board;
