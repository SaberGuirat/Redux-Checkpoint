import React from "react";
import "./App.css";
import AddTask from "./Components/AddTask/AddTask";
import ListTask from "./Components/ListTask/ListTask";

function App() {
  return (
    <div className="container">
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
