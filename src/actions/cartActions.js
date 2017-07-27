"use strict"
import C from '../constants'

// ADD ITEMS TO CART
export function addToCart(book){
  return({
    type:C.ADD_TO_CART,
    payload: book
  })
}

// DELETE ITEMS FROM CART
export function deleteCartItem(book){
  return({
    type: C.DELETE_CART_ITEM,
    payload: book
  })
}

// UPDATE QUANTITY OF ITEMS IN CART
export function updateCart(_id, unit){
  return({
    type: C.UPDATE_CART,
    _id: _id,
    unit: unit
  })
}
