"use strict"
import C from '../constants'

export function addToCart(book){
  return({
    type:C.ADD_TO_CART,
    payload: book
  })
}
