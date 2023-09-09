import React from "react";

const AdditemForm = ({
  listForm,
  title,
  onChangeHandler,
  setEditmode,
  submitHandler,
}) => {
  const createHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!title) {
      return alert("Please Enter a Valid title");
    }
    submitHandler(e);
  };
  return (
    <div className="mt-11">
      <div>
        <form>
          <input
            className="border-2 bg-stone-300 border-indigo-500 px-6 py-2 rounded-md"
            type="text"
            name=""
            onChange={onChangeHandler}
            value={title}
          />
        </form>
      </div>
      <div className="flex gap-4 items-center mt-2">
        <button
          className="bg-blue-800 text-white px-4 rounded-md py-2"
          onClick={createHandler}
        >
          {listForm ? "Add List" : "Add Task"}
        </button>
        <svg
          onClick={(e) => {
            e.stopPropagation(); // prevent
            setEditmode(false);
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 cursor-pointer bg-gray-100 text-red-600 rounded-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>{" "}
    </div>
  );
};

export default AdditemForm;
