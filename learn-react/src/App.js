import React from 'react'
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './Navbar';
import Home from './pages/Home';
import MoviesDetail from './pages/MoviesDetail';
import MoviesReviews from './pages/MoviesReviews';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import MoviesFavorites from './pages/MoviesFavorites';
import Search from './pages/Search/Search';
function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <Router>
          <Navbar />
          <br />
          <br />
          <br />
          <br />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favorite" component={MoviesFavorites} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/moviesdetail/:id" component={MoviesDetail} />
            <Route exact path="/review/:id" component={MoviesReviews} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
