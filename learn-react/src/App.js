import React, { Component } from 'react';
import Home from './componets/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MoviesDescription from './componets/MoviesDescription';
import Review from './componets/Review';


class App extends Component {
  render() {

    return (
      <div style={{ marginTop: '50px' }}>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/description/:id' component={MoviesDescription} />
            <Route exact path='/review/:id' component={Review} />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;