import React, { Component } from "react";
import App from '../../App.css';
class FooterFilter extends Component {
    handleClearAll=()=>{
        this.props.clearCompleteAll();
    }
    render() {
        return (
            <div id="myDIV" className="input3">
                <nav>
                    <button id="all" className="btn active">All
                      </button>
                    <button id="active1" className="btn">Active
                      </button>
                    <button id="completed" className="btn">Completed
                      </button>
                      <a onClick={event=>this.handleClearAll()} href="#" >clean completed</a>
                </nav>
            </div>
        )
    }
}
export { FooterFilter}