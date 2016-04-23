import React, {Component} from 'react';
import { connect } from 'react-redux';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';


class SavedPlaceEntry extends Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault;
    this.props.onDeleteClick(this.props.savedPlace, this.props.user);
    // $('span .icon-ban').fadeOut();
  }

  render() {
    return (
      <div className='saved-place-entry animated fadeIn'>
        <a href={'https://www.google.com/maps/place/' + this.props.savedPlace.name + ' ' + this.props.savedPlace.address} target="_blank">
          <p className='saved-place-name'>{ this.props.savedPlace.name }</p>
          <p className='saved-place-address'>{ this.props.savedPlace.address }</p>
        </a>
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
    )
  }
};


const mapStateToProps = (state) => {
  return {user: state.user};
};

export default connect(mapStateToProps)(SavedPlaceEntry);
