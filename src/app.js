"use strict"
import { createStore } from 'redux';
import reducers from './reducers/index'
import C from './constants.js'


// STEP 1 create the store
const store = createStore(reducers);
store.subscribe(()=>{
  console.log('Current state of the store', store.getState());
});



// STEP 2 create and dispatch actions
store.dispatch({
  type: C.POST_BOOK,
  payload:
  [
    {
      id:1,
      title: 'Mastering React and Redux',
      price: 35,
      description: 'This is the first book'
    },
    {
      id:3,
      title: 'Learning React',
      price: 25,
      description: 'This is the second book'
    }
  ]
});

store.dispatch({
  type: C.POST_BOOK,
  payload:
  [
    {
      id:4,
      title: 'Full Stack React',
      price: 25,
      description: 'This is the third book'
    }
  ]
});


store.dispatch({
  type: C.DELETE_BOOK,
  payload:{title:"Learning React"}
})

store.dispatch({
  type: C.UPDATE_BOOK,
  payload:{
    title:'Full Stack React and Friends',
    id:4
  }
})
