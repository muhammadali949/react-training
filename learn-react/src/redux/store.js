import { createStore, applyMiddleware } from 'redux';
import movieReducer from './favmovies/favMoviesReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(movieReducer, composeWithDevTools())

export default store;