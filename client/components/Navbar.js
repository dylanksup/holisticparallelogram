import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import ReactDOM from 'react-dom';
import $ from 'jquery';
import _ from 'underscore';
import searchGooglePlaces from '../utils/searchGooglePlaces.js';
import actions from '../actions/index.js';

import { StickyContainer, Sticky } from 'react-sticky';

class Navbar extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {

    return (

      <div className="" style={{width: '100%', height: '50px', 'background-color': '#E55136'}}>
        <img className='ninja' src='./../assets/ninja.svg' />
        <h3>WOOT</h3>
        <p>Hello</p>
      </div>

    )

  }

}


export default Navbar;