import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Alert from './alert';

const AlertsContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

export default class Alerts extends Component {

  render() {
    const { alerts } = this.props;
    if (alerts.length > 0) {
      return (
          <AlertsContainer className='alerts__wrapper'>
            { alerts.map((alert, i) =>
                (<Alert key={ i } i={ i }
                        alert={ alert }
                        closeIcon={ this.props.closeIcon }
                        colours={ this.props.colours } />)
            )}
          </AlertsContainer>
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