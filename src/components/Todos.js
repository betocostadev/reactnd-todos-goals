import React from 'react'
import { connect } from 'react-redux'
import { handleAddTodo, handleDeleteTodo, handleToggleTodo } from '../store/actions/todos'

import List from "./List"

class Todos extends React.Component {
  addItem = e => {
    e.preventDefault()

    const { dispatch } = this.props

    dispatch(handleAddTodo(
      this.input.value,
      () => this.input.value = ''
    ))
  }

  removeItem = todo => {
    const { dispatch } = this.props
    dispatch(handleDeleteTodo(todo))
  }

  toggleItem = id => {
    // Optimistic Update - Like in removeItem
    const { dispatch } = this.props
    dispatch(handleToggleTodo(id))
  }

  render() {
    return(
      <div>
        <h2>Todo List</h2>
        <input
          type='text'
          placeholder='Add Todo'
          ref={(input) => this.input = input}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List items={this.props.todos} remove={this.removeItem} toggle={this.toggleItem} />
      </div>
    )
  }
}

export default connect((state) => ({
  todos: state.todos
}))(Todos)