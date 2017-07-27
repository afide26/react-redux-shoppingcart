"use strict";
import React, { Component } from 'react';
import { Panel, Modal, Row, Well, Col, Button, ButtonGroup, Label} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCartItem, updateCart} from '../../actions/cartActions';

class Cart extends Component{
  constructor(props){
    super(props);

    this.state={
      showModal:false
    }
  }
  onOpenModal(){
    this.setState({
      showModal:true
    })
  }

  onCloseModal(){
    this.setState({
      showModal:false
    })
  }

  onIncrement(_id){
    this.props.updateCart(_id,1);
  }

  onDecrement(_id, quantity){
    if(quantity > 1){
      this.props.updateCart(_id, -1);
    }
  }

  onDeleteCartItem (_id){
    const cartToDelete = this.props.cart;

    const indexToDelete = cartToDelete.findIndex(function(cart){
      return cart._id === _id;
    })

    let cartAfterDelete = [...cartToDelete.slice(0, indexToDelete),
    ...cartToDelete.slice(indexToDelete + 1)];

    this.props.deleteCartItem(cartAfterDelete);
  }

  renderEmpty = ()=>{
    return(
      <div></div>
    )
  }

  renderCart = ()=>{
    const cartItemsList = this.props.cart.map((cartArr)=>{
      return(
        <Panel key={cartArr._id}>
          <Row>
            <Col xs={12} sm={4}>
              <h6>{cartArr.title}</h6><span>   </span>

            </Col>
            <Col xs={12} sm={2}>
              <h6>Price: ${cartArr.price}.00</h6>
            </Col>
            <Col xs={12} sm={2}>
              <h6>Qty. <Label bsStyle="success">{cartArr.quantity}</Label></h6>
            </Col>
            <Col xs={12} sm={4}>
              <ButtonGroup style={{minWidth:'300px'}}>
                <Button bsStyle="default" bsSize="small" onClick={this.onDecrement.bind(this, cartArr._id, cartArr.quantity)}>
                  <span className="glyphicon glyphicon-minus"></span>
                </Button>
                <Button bsStyle="default" bsSize="small" onClick={this.onIncrement.bind(this, cartArr._id)}>
                  <span className="glyphicon glyphicon-plus"></span>
                </Button>
                <span>     </span>
                <Button bsStyle="danger" bsSize="small" onClick={this.onDeleteCartItem.bind(this, cartArr._id)}>
                  <span className="glyphicon glyphicon-trash"></span>
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Panel>
      )
    }, this)
    return(
      <Panel style={{margin:'0 auto', maxWidth:'97%'}} header="Cart" bsStyle="primary">
        {cartItemsList}
        <Row>
          <Col xs={12}>
            <h6>Total amount:${this.props.totals}</h6>
            <Button bsStyle="success" bsSize="small" onClick={this.onOpenModal.bind(this)}>
              <i className="fa fa-shopping-basket"></i> Proceed to Checkout
            </Button>
          </Col>
        </Row>
        <Modal show={this.state.showModal} onHide={this.onCloseModal.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Thank you!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Your order has been saved!</h6>
            <p>You will receive an email notification with the details of your purchase</p>
          </Modal.Body>
          <Modal.Footer>
            <Col xs={6}>
              <h6>Total Amount:$ {this.props.totals}</h6>
              <h6>Total Quantity: {this.props.totalQty} books</h6>
          </Col>
            <Button onClick={this.onCloseModal.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Panel>
    )
  }

  render(){
    if(this.props.cart[0]){
      return this.renderCart()
    }else{
      return this.renderEmpty()
    }
  }
}

function mapStateToProps(state){
  return{
    cart: state.cart.cart,
    totals: state.cart.totals,
    totalQty: state.cart.totalQty
  }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
      deleteCartItem: deleteCartItem,
      updateCart: updateCart
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
