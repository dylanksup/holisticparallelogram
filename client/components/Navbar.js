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
    if (window.scrollY > 300) {
      console.log('HELLO');
      $('div .navbar').attr('style', "width: 100%; height: 30px; background-color: #E55136; position: fixed; top: 0; z-index: 1");
    } else {
      $('div .navbar').attr('style', 'display: none');
    }
  }

  render() {

    var logInOut;
    if (_.isEmpty(this.props.user)) {
      logInOut = <a className='link' href='/'>Login</a>;
    } else {
      logInOut = <a className='link' href='/auth/logout'>Logout</a>;
    }


    return (

      // <div className="navbar" style={{width: '100%', height: '50px', 'backgroundColor': '#E55136', position: 'fixed', top: 0, zIndex: 1, display: ''}}>
      <div className="navbar">
        <a href='#'>
          <img className='' style={{ height: '30px', 'padding-left': '15px' }} src='./../assets/ninja.svg' />
        </a>
        <p style={{ display: 'inline-block', float: 'right', margin: '0 0 0 0', 'padding': '7px 20px' }}>{logInOut}</p>
      </div>

    )

  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

Navbar.propTypes = {
  user: PropTypes.object
};



export default connect(
  mapStateToProps
)(Navbar);