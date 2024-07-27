import './App.css'

import React from 'react'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      anecdotes: [],
      current: 0,
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:3001/anecdotes').then((res) => {
      this.setState({ anecdotes: res.data })
    })
  }

  handleClick = () => {
    const current = Math.floor(Math.random() * this.state.anecdotes.length)
    this.setState({ current })
  }

  render() {
    if (this.state.anecdotes.length === 0) {
      return <div>No anecdotes...</div>
    }

    return (
      <div>
        <h1>Anecdote of the day</h1>
        <div>
          {this.state.anecdotes[this.state.current].content}
          <button onClick={this.handleClick}>next</button>
        </div>
      </div>
    )
  }
}

export default App
