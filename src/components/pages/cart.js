"use strict";
import React, { Component } from 'react';
import { Panel, Row, Well, Col, Button, ButtonGroup, Label} from 'react-bootstrap';
import { connect } from 'react-redux';

class Cart extends Component{

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
              <h6>Qty. <Label bsStyle="success"></Label></h6>
            </Col>
            <Col xs={12} sm={4}>
              <ButtonGroup style={{minWidth:'300px'}}>
                <Button bsStyle="default" bsSize="small">
                  <span className="glyphicon glyphicon-minus"></span>
                </Button>
                <Button bsStyle="default" bsSize="small">
                  <span className="glyphicon glyphicon-plus"></span>
                </Button>
                <span>     </span>
                <Button bsStyle="danger" bsSize="small">
                  <span className="glyphicon glyphicon-trash"></span>
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Panel>
      )
    })
    return(
      <Panel style={{margin:'0 auto', maxWidth:'97%'}} header="Cart" bsStyle="primary">
        {cartItemsList}
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
    cart: state.cart.cart
  }
}
export default connect(mapStateToProps)(Cart)
