import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import BoardProvider from "./context/boardContex.jsx";
import ListProvider from "./context/listContext.jsx";
import TaskProvider from "./context/taskContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BoardProvider>
    <ListProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </ListProvider>
  </BoardProvider>
);
