"use strict"
import C from '../constants'
// BOOKS REDUCERS
export function booksReducers (state={books:[
    {
        _id:1,
        title:'ReactJS and Friends',
        description: 'ReactJS Starter book',
        price: 20
    },
    {
        _id:3,
        title: 'Learning React',
        price: 25,
        description: 'This is the second book'
    },
    {
        _id:4,
        title: 'Full Stack React',
        price: 25,
        description: 'This is the third book'
    }
  ]},action){
  switch(action.type){
    case C.GET_BOOKS :
    return {...state, books:[...state.books]}
    case C.POST_BOOK :
     return {books:[...state.books, ...action.payload]}

    case C.DELETE_BOOK:
     const currentBookToDelete = [...state.books];
     return {books:currentBookToDelete.filter((book)=> book._id !== action.payload._id)}

    case C.UPDATE_BOOK :
     const currentBooks = [...state.books]
     const indexToUpdate = currentBooks.findIndex((book)=> book._id === action.payload._id);
     console.log('This is the index to update:',indexToUpdate)
     const newBookToUpdate = {...currentBooks[indexToUpdate], title: action.payload.title}
     console.log("What is the book to be updated", newBookToUpdate);

     return {books:[...currentBooks.slice(0, indexToUpdate), newBookToUpdate, ...currentBooks.slice(indexToUpdate + 1)]}
    default:
     return state;
  }
}
