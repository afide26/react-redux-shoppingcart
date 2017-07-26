import React, { Component } from 'react';
import { Button, Row, Well, Col} from 'react-bootstrap';

const BookItem = (props)=>{
    return(
      <Well>
        <Row>
          <Col xs={12}>
            <h6>{props.title}</h6>
            <p>{props.description}</p>
            <h6>${props.price}.00</h6>
            <Button bsStyle="primary">Buy Now!</Button>
          </Col>
        </Row>
      </Well>
    )
}

export default BookItem;
