"use strict";
import React, { Component } from 'react';

class Footer extends Component{
  render(){
    return(
      <footer className='footer text-center'>
        <div className="container">
          <p className="footer-text">&copy; Copyright Alan Fidelino - ReactBookstore {new Date().getFullYear()}</p>
        </div>
      </footer>
    );
  }
}
export default Footer;
