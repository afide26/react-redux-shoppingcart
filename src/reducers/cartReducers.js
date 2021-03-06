"use strict"
import C from '../constants'
import { totalAmount } from '../actions/cartActions';

export function cartReducers(state={cart:[]}, action){
  switch(action.type){
    case C.ADD_TO_CART :
    //  return {cart:[...state, ...action.payload]};
    return {...state,
      cart:action.payload,
      totals: totalAmount(action.payload).amount,
      totalQty: totalAmount(action.payload).qty
    }
     break;
    case C.DELETE_CART_ITEM :
    //  return {cart:[...state, ...action.payload]};
    return {...state,
      cart:action.payload,
      totals: totalAmount(action.payload).amount,
      totalQty: totalAmount(action.payload).qty
    }
     break;
    case C.UPDATE_CART :
     const currentCartToUpdate = [...state.cart];
     const indexToUpdate = currentCartToUpdate.findIndex((cart)=>{
       return cart._id === action._id
     });
     const newBookToUpdate = {
       ...currentCartToUpdate[indexToUpdate],
       quantity: currentCartToUpdate[indexToUpdate].quantity + action.unit
     }

     let cartUpdate = [...currentCartToUpdate.slice(0, indexToUpdate), newBookToUpdate,
     ...currentCartToUpdate.slice(indexToUpdate + 1)]
     return {...state,
       cart: cartUpdate,
       totals: totalAmount(cartUpdate).amount,
       totalQty: totalAmount(cartUpdate).qty
     };
     break;
    default:
     return state;
  }
}
