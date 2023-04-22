import React, { Component } from "react";
import Header from "./component/Header"
import List from "./component/List"
import Footer from "./component/Footer"
import "./App.css"

export default class App extends Component {
  state = {todos: [
    {id: "001", name: "javascript", done: true},
    {id: "002", name: "webpack", done: false},
  ]}



  addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj,...todos]
    this.setState({todos: newTodos})
  }

  updateTodo = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map((todoObj) => {
      if(todoObj.id === id) return {...todoObj, done: done}
      else return todoObj
    })
    this.setState({todos: newTodos})
  }

  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    this.setState({todos: newTodos})
  }

  selectTodo = (done) => {
    const { todos } = this.state
    const newTodos = todos.map((todoObj) => {
      return {...todoObj, done: done}
    })
    this.setState({todos: newTodos})
  }

  clearTodo = () =>{
    const {todos} = this.state;
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.done === false
    })
    this.setState({todos: newTodos})
  }

  render() {
    const {todos} = this.state

    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo}/>
            <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
            <Footer todos={todos} selectTodo={this.selectTodo} clearTodo={this.clearTodo}/>
          </div>
        </div>
      </div>
    );
  }
}

