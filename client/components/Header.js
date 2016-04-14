import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import $ from 'jquery';

class Header extends Component {
  handleClick(e) {
    e.preventDefault();
    this.props.onFindClick();
  }

  render() {
    return (
      <header>
        <nav className='col-12-12'>
          <ul>
            <li><a className='logout' href='/auth/logout'>Logout</a></li>
          </ul>
        </nav>
        <div className='grid'>
          <div className='col-2-12'>
            <object type='image/svg+xml' className='ninja' data='./../assets/ninja.svg' />
          </div>
          <div className='col-10-12'>
            <h1>SCENIC<span className='black'>.NINJA</span></h1>
            <p className='description'>After years spent scouring Google Places, Scenic Ninja is ready to share his wisdom with you.</p>
            <button
            onClick={ this.handleClick.bind(this) }
            type="submit">Find Views
            </button>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  onFindClick: PropTypes.func.isRequired
};

export default Header;
