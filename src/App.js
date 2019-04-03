import React, { Component } from 'react';
import './App.css';

let todoItems=[];
todoItems.push({index:1,value:"To do home task from Math",done:false});
todoItems.push({index:2,value:"To do home task from Programmer",done:false});
todoItems.push({index:3,value:"Solve all problems in a hole world!",done:false});
todoItems.push({index:4,value:"Become older",done:true});


class TodoList extends Component{
 render(){
   var todoItems = this.props.items.map((item,index) =>{
       return ( <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markDone={this.props.markDone}/>);
   });
   return (
     <ul className="list-group">{todoItems}</ul>
   );
 }

}

class TodoListItem extends Component{
  constructor(props){
    super(props);
    this.onClickClose=this.onClickClose.bind(this);
    this.onClickDone=this.onClickDone.bind(this);

  }
  onClickClose(){
var index=parseInt(this.props.index);
this.props.removeItem(index);
  }
  onClickDone(){

  }
  render(){}
}

class TodoForm extends Component{
  render(

  )
}

class TodoHeader extends Component{
  render(){
    return  <h1>Hello Anet from TODO list!</h1>
  }  
  
}




class App extends Component {
  render() {
    return (
      <div className="App">
       {/* load our TODO list */}
      </div>
    );
  }
}

export default App;
