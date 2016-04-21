import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import ReactDOM from 'react-dom';
import $ from 'jquery';
import _ from 'underscore';
import searchGooglePlaces from '../utils/searchGooglePlaces.js';
import actions from '../actions/index.js';

import { StickyContainer, Sticky } from 'react-sticky';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    if (window.scrollY > 480) {
      console.log('HELLO');
      $('div .navbar').attr('style', "width: 100%; height: 50px; background-color: #E55136; position: fixed; top: 0; z-index: 1");
    } else {
      $('div .navbar').attr('style', 'display: none');
    }
  }

  render() {

    return (

      // <div className="navbar" style={{width: '100%', height: '50px', 'backgroundColor': '#E55136', position: 'fixed', top: 0, zIndex: 1, display: 'none'}}>
      <div className="navbar">
        <a href='#'>
          <img className='' style={{ height: '40px', padding: '8px 0 0 15px' }} src='./../assets/ninja.svg' />
        </a>
      </div>

    )

  }

}


export default Navbar;