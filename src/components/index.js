import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import Alert from './alert';

export default class Alerts extends Component {

  render() {
    const { alerts } = this.props;
    if (alerts.length > 0) {
      return (
          <div className='alerts__wrapper'>
            { alerts.map((alert, i) =>
                (<Alert key={ i } i={ i }
                        alert={ alert }
                        closeIcon={ this.props.closeIcon }
                        colours={ this.props.colours } />)
            )}
          </div>
      );
    }
    return null;
  }
}

Alerts.propTypes = {
  alerts: PropTypes.array,
  closeIcon: PropTypes.any,
  colours: PropTypes.object
};

Alerts.defaultProps = {
  alerts: [],
  closeIcon: <FontAwesome name='times' />,
  colours: {
    error: '#ed5565',
    warning: '#F6A623',
    info: '#00B5D2',
    success: '#23cf70'
  }
};