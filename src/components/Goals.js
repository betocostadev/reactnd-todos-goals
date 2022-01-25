import React from "react"
import { connect } from 'react-redux'
import { handleAddGoal, handleDeleteGoal } from '../store/actions/goals'

import List from "./List"

class Goals extends React.Component {
  addItem = async(e) => {
    e.preventDefault()
    const { dispatch } = this.props

    dispatch(handleAddGoal(
      this.input.value,
      () => this.input.value = ''
    ))
  }

  removeItem = goal => {
    const { dispatch } = this.props
    dispatch(handleDeleteGoal(goal))
  }

  render() {
    return (
      <div>
        <h2>Goals List</h2>
        <input
          type='text'
          placeholder='Add Goal'
          ref={(input) => this.input = input}
        />
        <button onClick={this.addItem}>Add Goal</button>
        <List items={this.props.goals} remove={this.removeItem} />
      </div>
    )
  }
}

export default connect((state) => ({
  goals: state.goals
}))(Goals)