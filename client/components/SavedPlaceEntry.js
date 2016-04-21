import React, {Component} from 'react';
import { connect } from 'react-redux';

class SavedPlaceEntry extends Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault;
    this.props.onDeleteClick(this.props.savedPlace, this.props.user);
  }

  render() {
    return (
      <div className='saved-place-entry animated fadeIn'>
        <p className='saved-place-name'>{ this.props.savedPlace.name }</p>
        <p className='saved-place-address'>{ this.props.savedPlace.address }</p>
        <div>
          <a className='saved-place-entry-link' href={'//www.images.google.com/search?q=' + this.props.savedPlace.name + ' ' + this.props.savedPlace.address + '&tbm=isch'}
          target='_blank'>View Images</a>
          <span className='place-entry-link-divider'>&middot;</span>
          <a className='saved-place-entry-link' href={'//www.google.com/search?q=' + this.props.savedPlace.name + ' ' + this.props.savedPlace.address}
          target='_blank'>Find on Google</a>
          <span className='place-entry-link-divider'>&middot;</span>
          <span onClick={this.handleClick.bind(this)} className='icon-ban' aria-hidden='true'></span>
        </div>
      </div>

    );
  }
}

// var SavedPlaceEntry = (props) => (
//   <div className='saved-place-entry animated fadeIn'>
//     <p className='saved-place-name'>{ props.savedPlace.name }</p>
//     <p className='saved-place-address'>{ props.savedPlace.address }</p>
//     <div>
//       <a className='saved-place-entry-link' href={'//www.images.google.com/search?q=' + props.savedPlace.name + ' ' + props.savedPlace.address + '&tbm=isch'}
//       target='_blank'>View Images</a>
//       <span className='place-entry-link-divider'>&middot;</span>
//       <a className='saved-place-entry-link' href={'//www.google.com/search?q=' + props.savedPlace.name + ' ' + props.savedPlace.address}
//       target='_blank'>Find on Google</a>
//       <span className='place-entry-link-divider'>&middot;</span>
//       <span className='icon-ban' aria-hidden='true'></span>
//     </div>
//   </div>
// );

const mapStateToProps = (state) => {
  return {user: state.user};
};

export default connect(mapStateToProps)(SavedPlaceEntry);
