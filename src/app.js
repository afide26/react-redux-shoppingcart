"use strict"
import { createStore } from 'redux';
// import C from './constants'

// STEP 3 define reducers
const reducer = (state={books:[]},action)=>{
  switch(action.type){
    case "POST_BOOK" :
     return {books:[...state.books, ...action.payload]}
     case "DELETE_BOOK":
    const currentBookToDelete = [...state.books]

    const indexToDelete = currentBookToDelete.findIndex(
        function(book){
        return book.id === action.payload.id;
      }

      return {books: [...currentBookToDelete.slice(0,
       indexToDelete),...currentBookToDelete.slice(indexToDelete +
       1)]};
      break;
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
  type: "POST_BOOK",
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
  type: "POST_BOOK",
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
  type:" DELETE_BOOK",
  payload:{id:1}
});
