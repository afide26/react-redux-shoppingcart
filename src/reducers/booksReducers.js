"use strict"
import C from '../constants'
// BOOKS REDUCERS
export function booksReducers (state={books:[]},action){
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
