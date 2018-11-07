import React, { Component } from 'react'

class Counter extends Component {
  constructor (props) {
    super(props)

    this.state = {
      count: 0
    }

    this.increaseCount = this.increaseCount.bind(this)
  }

  increaseCount () {
    this.setState((currentState) => {
      return {
        count: currentState.count += 1
      }
    })
  }

  render () {
    return (
      <div
        className="count"
        onClick={this.increaseCount}>
        {this.state.count}
      </div>
    )
  }
}

export default Counter
