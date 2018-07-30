import React, { Component } from "react";
import App from '../../App.css';
import ReactDOM from 'react-dom';

class TodoList extends Component {
  constructor(props) {
    super();
    this.state = {
      todo: {
        id: 0,
        name: "",
        complete: false
      },
    }
    this.handleEditTodo = this.handleEditTodo.bind(this);
    this.handleEditTodoProp = this.handleEditTodoProp.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  handleEditTodoProp = (todo, event) => {
    console.log("hhh11")
    console.log(todo)
    console.log("hhh")
    let elementDefault = (
      <div>
        <input type="checkbox" defaultChecked={todo.complete}
          onChange={event => this.complete(todo.id, event.target.checked)} />
        <label onDoubleClick={event => this.handleEditTodo(todo)}>{todo.name}</label>
        <button value={this.state.todo.id} className="fa"
          onClick={event => this.deleteTodo(todo.id)}>X</button>
      </div>)
    if (event.key == "Enter") {
      console.log("an lol roi");
      this.props.editTodo(todo.id, this.state.todo.name);
      console.log(todo);
      ReactDOM.render(elementDefault, document.getElementById("todo_" + todo.id))
    }
  }
  handleEditTodo = (todo1) => {
    this.state.todo = todo1;
    let indexElement = document.getElementById("todo_" + todo1.id);
    console.log(this.state.todo)
    // console.log(444)
    let editInput = <input type="text" defaultValue={todo1.name}
      onChange={event => this.setState({ todo: { id: todo1.id, name: event.target.value, complete: todo1.complete } })}
      onKeyPress={event => this.handleEditTodoProp(this.state.todo, event)} />
    ReactDOM.render(editInput, document.getElementById("todo_" + todo1.id))
  }

  deleteTodo = (id) => {
    this.props.deletes(id);
    console.log(id, id);
  }
  complete = (id, complete) => {
    console.log(id, complete);
    this.props.completes(id, complete);

  }
  render() {
    return (
      <div className="column1">
        <ul>
          {
            this.props.todos.map((todo) =>
              <li id={"todo_" + todo.id} className="input2">
                <div>
                  <input type="checkbox" checked={todo.complete}
                    onChange={event => this.complete(todo.id, event.target.checked)} />
                  <label onDoubleClick={event => this.handleEditTodo(todo)}>{todo.name}</label>
                  <button value={todo.id} className="fa"
                    onClick={event => this.deleteTodo(event.target.value)}>X</button>
                </div>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}
export { TodoList }