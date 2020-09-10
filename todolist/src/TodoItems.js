import React, { Component } from "react";
 //this JS class returns a LIST of items. the KEY is the date. the TEXT is the content. 
class TodoItems extends Component {
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }
 //render a list of entries, using the "props" from the ToDoList. 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default TodoItems;