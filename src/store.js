
import { createStore } from 'redux';
import  toggleFavorite  from './reducers/favoriteReducer'




const store = createStore(
  toggleFavorite,

);

export default store;
