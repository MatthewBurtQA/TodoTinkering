import React, { Component } from "react";
 // Below is a div, and some input placeholder with button. this will then get called into the index JS to be called onto the screen.
class TodoList extends Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form>
            <input placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}
 
export default TodoList;