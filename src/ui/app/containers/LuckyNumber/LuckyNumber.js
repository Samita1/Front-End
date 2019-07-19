/**
 * LuckyNumber.js
 *
 * This container controls the props used to render the lucky number.
 * It fetches props from the Redux store.
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { CONTAINER_KEY } from '../constants';
import LuckyNumberDisplay from 'components/LuckyNumberDisplay/LuckyNumberDisplay';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

class LuckyNumber extends React.PureComponent {
  render() {
   
    return (
      <article>
        <Helmet>
          <title>Lucky Number</title>
        </Helmet>

        <LuckyNumberDisplay {...this.props}/>
      </article>
    );
  }
}

//when the store state changes, this function is called. it gets the entire state object and returns an object containing whatever data LuckyNumber component 
// needs in order to display
const mapStateToProps = (state) => {
  // Get values from Redux store
  return { 
    userName: state._root["entries"][2][1].userName,
    // I have hardcoded this, as I am getting an error (username undefined) in Saga
    luckyNumber: 1
  };
};

//connects LuckyNumber component to the redux store
export default connect(mapStateToProps)(LuckyNumber);
