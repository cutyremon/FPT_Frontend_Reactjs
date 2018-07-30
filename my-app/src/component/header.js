import React, { Component } from "react";
import App from '../App.css';
class HeaderTodo extends Component {
    constructor() {
        super();
        this.state = {
            text: ""
        }
    }
    handleAddTodo = (event) => {
        if (event.key == "Enter") {
            this.props.addTodo(this.state.text);
            this.setState({ text: "" });
        }
    }
    handleCompleteAll = (eventComplete) => {
        this.props.completeAll(eventComplete);
    }
    render() {
        return (
            <div>
                <div className="inputText">
                    <input className="inputCheckbox" type="checkbox" onChange={event => this.handleCompleteAll(event.target.checked)} />
                    <input className="input1" type="text" placeholder="What needs to be dones?...."
                        onChange={event => this.setState({ text: event.target.value })}
                        value={this.state.text}
                        onKeyPress={event => this.handleAddTodo(event)} />
                </div>
            </div>
        )
    }
}
export { HeaderTodo }