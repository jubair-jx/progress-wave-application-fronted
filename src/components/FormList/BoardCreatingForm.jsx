import React, { useContext, useState } from "react";
import { BoardContext } from "../../context/boardContex";

const BoardCreatingForm = () => {
  const [input, setInput] = useState("");
  const { dispatchBoardAction } = useContext(BoardContext);
  const handleOnsubmit = (e) => {
    e.preventDefault();
    console.log(input);
    if (!input) {
      return alert("Please Provide a valid board title");
      setInput("");
    }
    dispatchBoardAction({ type: "CREATE_BOARD", payload: input });
    setInput("");
  };
  return (
    <div className=" text-center pt-16">
      <h2>Make your own Board</h2>
      <form onSubmit={handleOnsubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={(e) => handleOnsubmit(e)}>Create Board</button>
      </form>
    </div>
  );
};

export default BoardCreatingForm;
