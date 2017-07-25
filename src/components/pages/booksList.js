"use strict"

import React, { Component } from 'react';
import { connect } from 'react-redux';

class BooksList extends Component{
  render(){
    console.log("IS THIS THE STATE?:", this.props.books)
    const bookList = this.props.books.map(function(booksArr){
      <div key={booksArr.id}>
        <h2>{booksArr.title}</h2>
      </div>
    })

    return(
      <div>
        <h1>Welcome to the Books Shopping Mall</h1>
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
