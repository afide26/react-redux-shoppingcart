"use strict"
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Button, Col, Row } from 'react-bootstrap';
import { getBooks } from '../../actions/bookActions';
import BookItem from './bookItem';
import BooksForm from './booksForm';
class BooksList extends Component{
  componentDidMount(){
    this.props.getBooks()
  }
  render(){
    const bookList = this.props.books.map(function(booksArr){
      return(
        <Col xs={12} sm={6} md={4} key={booksArr.id}>
          <BookItem
            id={booksArr.id}
            title={booksArr.title}
            description={booksArr.description}
            price={booksArr.price}
            />
        </Col>
      )
    })

    return(
      <Grid>
        <Row style={{marginTop:'15px'}}>
          <Col xs={12} sm={6}>
            <BooksForm/>
          </Col>
          {bookList}
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return{
    books: state.books.books
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getBooks:getBooks,

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
