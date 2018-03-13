import React, {Component} from 'react'
import {hot} from 'react-hot-loader'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">HMR works!</p>
      </div>
    )
  }
}

export default hot(module)(App)
