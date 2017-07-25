"use strict"
import React from 'react';
import { render }from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers/index';

import { addToCart } from './actions/cartActions';
import { postBooks, deleteBooks, updateBooks } from './actions/bookActions';

import BooksList from './components/pages/booksList'


// STEP 1 create the store\
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware);

render(
  <Provider store ={store}>
  <BooksList/>
  </Provider>,
  document.getElementById("app")
)

// STEP 2 create and dispatch actions
store.dispatch(postBooks(
  [
    {
        id:1,
        title:'ReactJS and Friends',
        description: 'ReactJS Starter book',
        price: 20
    },
    {
        id:3,
        title: 'Learning React',
        price: 25,
        description: 'This is the second book'
    },
    {
        id:4,
        title: 'Full Stack React',
        price: 25,
        description: 'This is the third book'
    }
  ]
))



store.dispatch(deleteBooks({id:3}))
//
store.dispatch(updateBooks({title:'Full Stack React and Friends', id:4}))
//
store.dispatch(addToCart([{id:1}]))
