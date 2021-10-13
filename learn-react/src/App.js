import React, { useState, useCallback } from 'react'
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



export const ThemeContext = React.createContext();

function App() {
  // const [favourtMovies, setFavourtieMovies] = useState([])
  // const setFavouriteMoviesLocal = useCallback((movie) => {
  //   setFavourtieMovies([...favourtMovies, movie])
  // }, [favourtMovies.length])
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
            {/* <ThemeContext.Provider value={{ setFavourtieMovies: setFavouriteMoviesLocal, movies: favourtMovies }}> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/favorite" component={MoviesFavorites} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/moviesdetail/:id" component={MoviesDetail} />
            <Route exact path="/review/:id" component={MoviesReviews} />
            {/* </ThemeContext.Provider> */}

          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
