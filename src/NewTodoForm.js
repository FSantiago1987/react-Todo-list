import React, { Component } from 'react';
import {v4 as uuid} from "uuid";
import './NewTodoForm.css';

class NewTodoForm extends Component{
    constructor(props){
        super(props);
        this.state = {todo: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt){
        this.setState({[evt.target.name]:evt.target.value});
    }
    handleSubmit(evt){
        evt.preventDefault();
        const newTodo = {...this.state, id: uuid(), completed: false};
        this.props.addItem(newTodo);
        this.setState({todo: ""});
    }
    render(){
        return (
            <div className="NewTodoForm">
                <form className="NewTodoForm-Form" onSubmit={this.handleSubmit}>
                    <label htmlFor="todo">New Todo</label>
                    <input 
                        id="todo"
                        name="todo"
                        placeholder="New Todo"
                        value={this.state.todo}
                        onChange={this.handleChange}
                    />
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}
export default NewTodoForm;