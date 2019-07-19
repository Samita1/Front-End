/**
 * actions.js
 *
 * This file contains the various actions used by Redux.
 */

import { DISPATCH_ACTIONS } from './constants';

export function getLuckyNumber(username) {
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER,
    userName: username
  };
}

// TODO: Add more actions if needed
// this is the action set for getting the user name
export function getUserName(username) {
  return {
    type: DISPATCH_ACTIONS.GET_USER_NAME,
    userName: username
  };
}

export function displayData(luckynumber) {
  return {
    type: DISPATCH_ACTIONS.REQUEST_FOR_LUCKY_NUMBER_SUCCEEDED,
    luckynumber: luckynumber
  }
}

