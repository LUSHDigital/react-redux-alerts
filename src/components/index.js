import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  closeIcon: <span>X</span>,
  colours: {
    error: '#D0021B',
    warning: '#F6A623',
    info: '#8F8F8F',
    success: '#00A44C'
  }
};