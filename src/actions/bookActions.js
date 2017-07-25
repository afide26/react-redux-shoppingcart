"use strict"
import C from '../constants';

export function postBooks(book){
  return({
    type: C.POST_BOOK,
    payload: book
  })
}

export function updateBooks(book){
  return({
    type:C.UPDATE_BOOK,
    payload: book
  })
}

export function deleteBooks(id){
  return({
    type: C.DELETE_BOOK,
    payload: id
  })
}
