import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { HeaderTodo } from './component/header';
import { FooterFilter } from './component/mainSection/footerFilter';
import { TodoList } from './component/mainSection/todoList';
import { FooterTodo } from './component/footer';
class App extends Component {
  constructor(props) {
    //super() có thể sử dụng dk this trong contructor
    //super(props) có thể sử dụng this.props trong contructor 
    super(props);
    this.state = {
      todos: [
        {
          id: 0,
          complete: true,
          name: "dongngoc"
        },
        {
          id: 1,
          complete: false,
          name: "ngocdong"
        }
        , {
          id: 2,
          complete: true,
          name: "dongdeptrai0288"
        }, {
          id: 3,
          complete: false,
          name: "tieutuvodanh"
        }
      ]
    }
  }
  addTodo = (text) => {
    let name = text;
    let id = this.state.todos.reduce((newId, todo) => Math.max(newId, todo.id), -1) + 1;
    const todos = [...this.state.todos, { id, name }];
    this.setState({ todos });
  }
  editTodo = (id, text) => {
    let arr = [...this.state.todos];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].id == id) this.state.todos[i].name = text;
    }
    console.log(this.state.todos)
    this.setState(this.state.todos);
  }
  deletes = (id) => {
    let arr = [...this.state.todos];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].id == id) this.state.todos.splice(i, 1);
    }
    this.setState(this.state.todos);
    console.log(arr)
  }
  completes = (id, complete) => {
    this.state.todos[id].complete = complete;
    this.setState(this.state.todos);
  }
  completeAll = (complete) => {
    this.state.todos.map(x => x.complete = complete);
    this.setState(this.state.todos);
  }
  clearCompleteAll = () => {
    const clearComplete = {};
    // console.log("hehehe")
    this.state.todos.splice(0, this.state.todos.length)
    this.setState(this.state.todos);
  }
  render() {
    return (
      <div className="App">
        <title>todos</title>
        <h1>todos</h1>
        <div className="formTodo">
          <HeaderTodo addTodo={this.addTodo} completeAll={this.completeAll} />
          <TodoList todos={this.state.todos} deletes={this.deletes} completes={this.completes} editTodo={this.editTodo} />
          <FooterFilter clearCompleteAll={this.clearCompleteAll} />
        </div>
        <FooterTodo />
      </div>
    );
  }
}

export default App;
