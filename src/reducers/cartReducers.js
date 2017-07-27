"use strict"
import C from '../constants'


export function cartReducers(state={cart:[]}, action){
  switch(action.type){
    case C.ADD_TO_CART :
    //  return {cart:[...state, ...action.payload]};
    return {...state, cart:action.payload}
     break;
    case C.DELETE_CART_ITEM :
    //  return {cart:[...state, ...action.payload]};
    return {...state, cart:action.payload}
     break;
    default:
     return state;
  }
}
