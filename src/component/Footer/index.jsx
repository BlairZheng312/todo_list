import React, { Component } from 'react'
import "./index.css"

export default class Footer extends Component {
  handleSelect = (event) => {
    this.props.selectTodo(event.target.checked)
  }

  handleClear = () => {
    this.props.clearTodo();
  }

  render() {
    const {todos} = this.props
    let todoLength = todos.length
    // let doneLength = todos.filter((todoObj) => {
    //   return todoObj.done === true
    // }).length

    let doneLength = todos.reduce((prev, todo)=>prev+(todo.done === true? 1:0), 0)

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleSelect} checked={doneLength === todoLength && todoLength!==0 ? true:false}/>
        </label>
        <span>
          <span>Completed {doneLength}</span> / All {todoLength}
        </span>
        <button  onClick={this.handleClear} className="btn btn-danger">Clear completed</button>
      </div>
    )
  }
}
