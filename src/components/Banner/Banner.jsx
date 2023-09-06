import React from "react";
import BoardCreatingForm from "../FormList/BoardCreatingForm";
import Board from "../../pages/Board";

const Banner = () => {
  return (
    <>
      <section className="w-full h-[500px] bg-gradient-to-b from-[#81238fd1] to-[#387b85]">
        <Board />
      </section>
    </>
  );
};

export default Banner;
