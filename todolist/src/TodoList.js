import React, { Component } from "react";
 // Below is a div, and some input placeholder with button. this will then get called into the index JS to be called onto the screen.

 //need a constructor 

 
 

 class TodoList extends Component {
    
    constructor(props) {
        
        super(props);
        
        this.state={
          items: []  // declaring an array of items. saves inputs to item array 
        };
        
        this.addItem = this.addItem.bind(this);
    
     }
     // below is defining the add item event handler
     // time to add some funk-tionality doo doo ba doo dooo.

     addItem(e){
         //check input for empty string, then,
         //add input element with data : text, and date
         //ITEM IS OBJECT. ADVANCED DATA TYPE, CONTAINS TEXT AND DATE.
         //text is content, date is key. 
         if (this._inputElement.value !== "" ){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
            this._inputElement.value ="";

         }
         console.log(this.state.items);
         e.preventDefault(); // stops page refreshing on button submission, which is its default behaviour. 

     }
     //access inputs via _inputElement

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="Task?">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}
 
export default TodoList;