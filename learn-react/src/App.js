import './App.css';
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
    <div className="App">
      <Router>
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/moviesdetail/:id" component={MoviesDetail} />
          <Route exact path="/review/:id" component={MoviesReviews} />
          <Route exact path="/favorite" component={MoviesFavorites} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
