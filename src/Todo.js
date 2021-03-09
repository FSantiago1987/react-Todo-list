import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            todo: this.props.todo
        }
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    toggleForm(){
        this.setState({ isEditing: !this.state.isEditing });
    }
    handleUpdate(evt){
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.todo);
        this.setState({isEditing: false});
    }
    handleChange(evt){
        this.setState({[evt.target.name]:evt.target.value});
    }
    handleToggle(evt){
        this.props.toggleTodo(this.props.id);
    }
    render(){
        let result;
        if(this.state.isEditing){
            result = (
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                        <input 
                            type="text" 
                            name="todo"
                            value={this.state.todo} 
                            onChange={this.handleChange} 
                        />
                        <button>Save</button>
                    </form>
                </div>
            )
        } 
        else {
            result= (
            <div className="Todo">
                <li 
                    className={this.props.completed ? "Todo-task completed" : "Todo-task"} 
                    onClick={this.handleToggle}>
                        {this.props.todo}
                </li>
                <div className="Todo-buttons">
                    <button onClick={this.toggleForm}><i class="fas fa-pen" /></button>
                    <button onClick={this.props.removeItem}><i class="fas fa-trash"></i></button>
                </div>
            </div>
            )
        }
        return result;
    }
}
export default Todo;