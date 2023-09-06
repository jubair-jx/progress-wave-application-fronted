import React from "react";
import BoardCreatingForm from "../components/FormList/BoardCreatingForm";
import Boardlist from "../components/FormList/Boardlist";

const Board = () => {
  return (
    <>
      <BoardCreatingForm />
      <Boardlist></Boardlist>
    </>
  );
};

export default Board;
