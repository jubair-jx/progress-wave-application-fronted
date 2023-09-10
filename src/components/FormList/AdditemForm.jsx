import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AdditemForm = ({
  listForm,
  title,
  onChangeHandler,
  setEditmode,
  submitHandler,
}) => {
  const currentDate = new Date();
  // Extract date components
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 to month and zero-padding
  const day = String(currentDate.getDate()).padStart(2, "0"); // Zero-padding

  // Construct the formatted date and time string
  const formattedDateTime = `${year}-${month}-${day} `;
  const { user } = useContext(AuthContext);
  const createHandler = (e) => {
    e.preventDefault();
    if (!title) {
      return alert("Please Enter a Valid title");
    }
    console.log(e);
    submitHandler(e);
    // const listData = {
    //   userMail: user.email,
    //   title: input,
    //   date: formattedDateTime,
    // };
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
          <div className="flex gap-4 items-center mt-2">
            <button
              className="bg-blue-800 text-white px-4 rounded-md py-2"
              onClick={createHandler}
            >
              {listForm ? "Add List" : "Add Task"}
            </button>
            <svg
              onClick={(e) => {
                // prevent
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
        </form>
      </div>
    </div>
  );
};

export default AdditemForm;
