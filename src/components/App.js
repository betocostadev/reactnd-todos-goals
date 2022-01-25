import React from "react"
import { connect } from 'react-redux'

import Todos from "./Todos"
import Goals from "./Goals"

import { handleInitialData } from '../store/actions/shared'
class App extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }
  render() {
    if (this.props.loading) {
      return <h3>Loading todos and goals...</h3>
    }

    return (
      <div>
        <h1>React App</h1>
        <Todos />
        <Goals />
      </div>
    )
  }
}

// Currying to use connect instead of using the Connected App component created above
export default connect((state) => ({
  loading: state.loading
}))(App)

