import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";

  
var destination = document.querySelector("#container");
  // renders the todolist, created in todolist.js. graphical elements are held within TodoList.js. 
ReactDOM.render(
    <div>
        <TodoList/> 
    </div>,
    destination
);