"use strict"
import { createStore } from 'redux';
import reducers from './reducers/index';

import { addToCart } from './actions/cartActions';
import { postBooks, deleteBooks, updateBooks } from './actions/bookActions';



// STEP 1 create the store
const store = createStore(reducers);
store.subscribe(()=>{
  console.log('Current state of the store', store.getState());
});

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



store.dispatch(deleteBooks({id:4}))
//
store.dispatch(updateBooks({title:'Full Stack React and Friends', id:4}))
//
store.dispatch(addToCart([{id:1}]))
