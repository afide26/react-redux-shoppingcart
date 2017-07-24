"use strict"
import { createStore } from 'redux';
import C from './constants'

// STEP 3 define reducers
const reducer = (state=[],action)=>{
  switch(action.type){
    case C.INCREMENT :
     return state + action.payload;
     break;
    case C.DECREMENT :
     return state - action.payload;
     break;
    case C.POST_BOOK :
     return [...state, action.payload];
    default:
     return state;
  }
}


// STEP 1 create the store
const store = createStore(reducer);
store.subscribe(()=>{
  console.log('Current state of the store', store.getState());
});



// STEP 2 create and dispatch actions
store.dispatch({
  type: C.POST_BOOK,
  payload:{
    id:1,
    title:"Full Stack ReactJS and friends",
    description:"Mastering ReactJS"
  }
});

store.dispatch({
  type: C.POST_BOOK,
  payload:{
    id:3,
    title:"Full Stack React and Redux",
    description:"Mastering ReactJS and ReactJS"
  }
});
