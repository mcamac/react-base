import * as React from 'react'
import {hot} from 'react-hot-loader'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const Home = () => (
  <div>
    <div>
      <h2>Welcome to React</h2>
    </div>
    <p>HMR works!</p>
  </div>
)

const OtherRoute = () => (
  <div>
    <div>
      <h2>Welcome to React</h2>
    </div>
    Other Route
  </div>
)

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={OtherRoute} />
      </Switch>
    </div>
  </Router>
)

export default hot(module)(App)
