/**
 * LuckyNumberDisplay.js
 *
 * This component displays the user's full name and their lucky number!
 * Its props are passed down from the LuckyNumber container.
 */

import React from 'react';
import PropTypes from 'prop-types';

class LuckyNumberDisplay extends React.PureComponent {
  render() {
    // TODO: Receive props passed down from LuckyNumber container
     const { firstName, lastName } = this.props;

    return (
      <div className="mt5 pa4 center w-25 bg-light-gray">
        {/* TODO: Display the user's full name and their lucky number */}
        <div>Hello, {this.props.userName}!</div>
        <div>Your lucky number is</div>
        <div>{this.props.luckNumber }</div>
      </div>
    );
  }
}

// TODO: Add PropTypes
LuckyNumberDisplay.propTypes = {
  //ToDO: add luckNumber later
    luckyNumber: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired
};

export default LuckyNumberDisplay;
