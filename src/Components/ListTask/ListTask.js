import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "../Task/Task";
import { toggleTask, deleteTask } from "../../actions/actions";
import { Button } from "react-bootstrap";

const ListTask = () => {
  const tasksList = useSelector((state) => state.tasksList);
  const Dispatch = useDispatch();
  const DoneTaskslist = useSelector((state) =>
    state.tasksList.filter((task) => task.isDone)
  );
  const UnDoneTaskslist = useSelector((state) =>
    state.tasksList.filter((task) => task.isDone === false)
  );
  const [filterDone, setFilterDone] = useState(false);
  const [filterUnDone, setFilterUnDone] = useState(false);

  const filterDoneTasks = () => {
    setFilterUnDone(false);
    setFilterDone(true);
  };
  const filterUnDoneTasks = () => {
    setFilterDone(false);
    setFilterUnDone(true);
  };
  const showAll = () => {
    setFilterUnDone(false);
    setFilterDone(false);
  };

  return (
    <div className="container">
      <Button
        variant="success"
        onClick={filterDoneTasks}
        style={{ margin: 10 }}
      >
        Done Tasks
      </Button>
      <Button
        variant="danger"
        onClick={filterUnDoneTasks}
        style={{ margin: 10 }}
      >
        Undone Tasks
      </Button>
      <Button variant="primary" onClick={showAll} style={{ margin: 10 }}>
        Show All Tasks
      </Button>

      {(filterDone || filterUnDone) === false
        ? tasksList.map((task) => (
            <Task
              description={task.description}
              isDone={task.isDone}
              toggleTask={() => {
                Dispatch(toggleTask(task.id));
              }}
              deleteTask={() => {
                Dispatch(deleteTask(task.id));
              }}
              key={task.id}
            />
          ))
        : null}

      {filterDone
        ? DoneTaskslist.map((task) => (
            <Task
              description={task.description}
              isDone={task.isDone}
              toggleTask={() => {
                Dispatch(toggleTask(task.id));
              }}
              deleteTask={() => {
                Dispatch(deleteTask(task.id));
              }}
              key={task.id}
            />
          ))
        : null}
      {filterUnDone
        ? UnDoneTaskslist.map((task) => (
            <Task
              description={task.description}
              isDone={task.isDone}
              toggleTask={() => {
                Dispatch(toggleTask(task.id));
              }}
              deleteTask={() => {
                Dispatch(deleteTask(task.id));
              }}
              key={task.id}
            />
          ))
        : null}
    </div>
  );
};

export default ListTask;
