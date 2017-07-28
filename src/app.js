"use strict"
import React from 'react';
import { render }from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducers from './reducers/index';

import { addToCart } from './actions/cartActions';
import { postBooks, deleteBooks, updateBooks } from './actions/bookActions';

import BooksList from './components/pages/booksList';
import Navigation from './components/menu';
import Footer from './components/footer';
// STEP 1 create the store

const middleware = applyMiddleware(logger);
const store = createStore(reducers, composeWithDevTools(middleware))

render(
  <Provider store ={store}>
    <div>
      <Navigation/>
      <BooksList/>
      <Footer/>
    </div>
  </Provider>,
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
