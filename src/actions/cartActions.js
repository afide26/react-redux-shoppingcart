"use strict"
import C from '../constants'

export function addToCart(book){
  return({
    type:C.ADD_TO_CART,
    payload: book
  })
}

export function deleteCartItem(book){
  return({
    type: C.DELETE_CART_ITEM,
    payload: book
  })
}
