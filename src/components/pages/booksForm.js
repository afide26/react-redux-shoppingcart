import React, { Component } from 'react';
import { Well,Panel, ControlLabel, FormGroup, FormControl, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { bindActionCreators } from 'redux';
import { postBooks, deleteBooks } from '../../actions/bookActions';



class BooksForm extends Component{
  handleSubmit = ()=>{
    const book = [{
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value,
      price: findDOMNode(this.refs.price).value
    }]
    this.props.postBooks(book);
  }

  onDelete(){
    let bookId = findDOMNode(this.refs.delete).value;
    this.props.deleteBooks(bookId);
  }
  render(){

    const bookList = this.props.books.map((booksArr)=>{
      return (
        <option key={booksArr._id}>{booksArr._id}</option>
      )
    })
    return(
      <Well>
        <Panel>
          <FormGroup controlId="title">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter Title"
              ref="title"/>
          </FormGroup>
          <FormGroup controlId="description">
            <ControlLabel>Description</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter Description"
              ref="description"/>
          </FormGroup>
          <FormGroup controlId="price">
            <ControlLabel>Price</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter Price"
              ref="price"/>
          </FormGroup>
          <Button onClick={this.handleSubmit} type="submit" bsStyle="success">Submit</Button>
        </Panel>
        <Panel>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select a Book ID To Delete</ControlLabel>
            <FormControl ref="delete" componentClass="select" placeholder="select">
              <option value="select">Select</option>
              {bookList}
            </FormControl>
          </FormGroup>
          <Button
            onClick={this.onDelete.bind(this)}
            bsStyle="danger"
            bsSize="small"
            className="pull-right">
            <span className="glyphicon glyphicon-trash"></span>
          </Button>
        </Panel>
      </Well>
    )
  }
}
function mapStateToProps(state){
  return({
    books: state.books.books
  })
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    postBooks:postBooks,
    deleteBooks: deleteBooks
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm)
