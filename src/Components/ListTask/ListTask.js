import React from "react";
import { useSelector } from "react-redux";
import Task from "../Task/Task";
import "./ListTask.css";

const ListTask = () => {
  const list = useSelector((state) => state.tasks);

  return (
    <div className="list">
      {list.map((el) => (
        <Task key={el.id} el={el} />
      ))}
    </div>
  );
};

export default ListTask;
