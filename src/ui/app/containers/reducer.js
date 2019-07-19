/**
 * reducer.js
 *
 * This file contains the reducer used to set values in the Redux store.
 * Note that the Redux store is immutable.
 */

import { fromJS } from 'immutable';

import { DISPATCH_ACTIONS } from './constants';

// TODO: Initialize more things in the Redux store if needed
const initialState = fromJS({
  luckyNumber: -1,
  firstName: '',
  lastName: ''
});


function reducer(state = initialState, action) {

  switch (action.type) {
    //after submit button is clicked, the form input from the user is sent to the store 
    case (DISPATCH_ACTIONS.GET_USER_NAME):
    // TODO: Set things in the Redux store
      return Object.assign({}, state, { 
        userName: action.userName   
      });

    case (DISPATCH_ACTIONS.REQUEST_FOR_LUCKY_NUMBER_SUCCEEDED):
      return Object.assign({}, state, { 
        luckyNumber: action.luckynumber       
      });

    default:
      return state;
  }

  

}

export default reducer;
