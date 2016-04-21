import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import SavedPlaceEntry from './SavedPlaceEntry.js';
import ReactDOM from 'react-dom';
import actions from '../actions/index.js';
import $ from 'jquery';

class SavedPlaceContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.savedPlaces.length === 0) {

      // there are no saved places, so show an empty state
      return (
        <div className='col-4-12 saved-places'>
          <h3>Your Saved Places</h3>
          <div className='no-saved-places'>
            <p>
              If you like a place, click the &hearts; to save it for later.
            </p>
          </div>
        </div>
      );
    } else {

      // there are saved places, so display them
      return (
        <div className='col-4-12 saved-places'>
          <h3>Your Saved Places</h3>
          { this.props.savedPlaces.map((savedPlace) => (
            <div>
              <SavedPlaceEntry savedPlace={savedPlace} onDeleteClick={this.props.onDeleteClick} />
            </div>
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    savedPlaces: state.savedPlaces
  };
};

SavedPlaceContainer.propTypes = {
  savedPlaces: PropTypes.array,
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteClick: (place, user) => {
      // $.ajax({
      //   url: '/api/places/saved',
      //   method: 'DELETE',
      //   data: {user: user, place: place}
      // });
      console.log(JSON.stringify(place) + ' < ---------- PLACE');
      console.log(JSON.stringify(user) + ' < ------------ USER');
      dispatch(actions.deletePlace(place));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedPlaceContainer);
