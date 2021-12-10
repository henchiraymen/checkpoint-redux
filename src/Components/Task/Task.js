import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../../Redux/Actions/Action";
import EditTask from "../EditTask/EditTask";
import { Button } from "react-bootstrap";
import "./Task.css";

const Task = ({ el }) => {
  const dispatch = useDispatch();
  const deleteT = () => {
    dispatch(deleteTask(el.id));
  };
  const done = () => {
    dispatch(doneTask(el.id));
  };
  return (
    <div>
      <ul id="myUL">
        <li className="line">
          <div className="check">
            <input
              onClick={done}
              type="checkbox"
              name="packersOff"
              id="packers"
              value="1"
            />
            <label for="packers" className="strikethrough">
              {el.text}
            </label>
          </div>
          <div className="btns">
            <EditTask el={el} />
            <Button onClick={deleteT} className="btn" variant="danger">
              Delete
            </Button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Task;
