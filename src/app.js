"use strict"
import React from 'react';
import { render }from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducers from './reducers/index';

import { addToCart } from './actions/cartActions';
import { postBooks, deleteBooks, updateBooks } from './actions/bookActions';

import Cart from './components/pages/cart';
import BooksList from './components/pages/booksList';
import BooksForm from './components/pages/booksForm';
import Main from './main';
// STEP 1 create the store

const middleware = applyMiddleware(logger);
const store = createStore(reducers, composeWithDevTools(middleware))

const Routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={BooksList}/>
        <Route path="/admin" component={BooksForm} />
        <Route path="/cart" component={Cart} />
      </Route>
    </Router>
  </Provider>
)
render(
  Routes,
  document.getElementById("app")
)

// STEP 2 create and dispatch actions


// store.dispatch(deleteBooks({id:3}))
// store.dispatch(updateBooks({title:'Full Stack React and Friends', id:4, price :45}))
// store.dispatch(addToCart([{id:1}]))

// store.dispatch(postBooks(
//   [{
//     title:'Tao of Jeet Kune Do',
//     description:'Bruce Lee\'s theories about the martial arts',
//     price: 75
//   }]
// ))
