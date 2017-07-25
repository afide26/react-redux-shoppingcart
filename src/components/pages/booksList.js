"use strict"

import React, { Component } from 'react';
import { connect } from 'react-redux';

class BooksList extends Component{

  render(){
    const bookList = this.props.books.map(function(booksArr){
      return(
        <div key={booksArr.id}>
          <h2>Title: {booksArr.title}</h2>
          <h2>Description: {booksArr.description}</h2>
          <h2>Price: ${booksArr.price}</h2>
          <hr/>
        </div>
      )
    })

    return(
      <div>
        <h1>Welcome to the Books Shopping Mall</h1>
        {bookList}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    books: state.books.books
  }
}

export default connect(mapStateToProps)(BooksList)
