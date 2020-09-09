import React, { Component } from "react";
 // Below is a div, and some input placeholder with button. this will then get called into the index JS to be called onto the screen.

 //need a constructor 

 
 

 class TodoList extends Component {
    
    constructor(props) {
        
        super(props);
        this.addItem = this.addItem.bind(this);
    
     }
     // below is defining the add item event handler
     addItem(e){

     }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
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