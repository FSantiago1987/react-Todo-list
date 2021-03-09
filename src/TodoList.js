import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {todos: []}
        this.addItem = this.addItem.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }
    addItem(todo){
        this.setState(state => (
            {todos:[...state.todos, todo]}
        ));
    }
    remove(id){
        this.setState(
            {todos: this.state.todos.filter(todo => todo.id !== id)}
        );
    }
    update(id, updatedTodo){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, todo: updatedTodo}
            }
            return todo;
        });
        this.setState({todos: updatedTodos});
    }
    toggleCompletion(id){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        });
        this.setState({todos: updatedTodos});            
    }
    render(){
        const todos = this.state.todos.map(item => (
            <Todo 
                key={item.id} 
                id={item.id}
                todo={item.todo}
                completed={item.completed}
                removeItem={() => this.remove(item.id)} 
                updateTodo={this.update}
                toggleTodo={this.toggleCompletion}
            />
        ));
        return (
            <div className="TodoList">
                <h1>
                    Todo List! <span>A Simple React Todo List App</span>
                </h1>
                <ul>{todos}</ul>
                <NewTodoForm addItem={this.addItem} />
            </div>
        )
    }
}
export default TodoList;