"use strict"
import { createStore } from 'redux';
import C from './constants'

// STEP 3 define reducers
const reducer = (state={books:[]},action)=>{
  switch(action.type){
    case C.POST_BOOK :
     return {books:[...state.books, ...action.payload]}

    case C.DELETE_BOOK:
     const currentBookToDelete = [...state.books];
     return {books:currentBookToDelete.filter((book)=> book.title !== action.payload.title)}

    case C.UPDATE_BOOK :
     const currentBooks = [...state.books]
     const indexToUpdate = currentBooks.findIndex((book)=> book.id === action.payload.id);
     console.log('This is the index to update:',indexToUpdate)
     const newBookToUpdate = {...currentBooks[indexToUpdate], title: action.payload.title}
     console.log("What is the book to be updated", newBookToUpdate);

     return {books:[...currentBooks.slice(0, indexToUpdate), newBookToUpdate, ...currentBooks.slice(indexToUpdate + 1)]}
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
