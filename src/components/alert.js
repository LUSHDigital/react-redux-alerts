import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import * as actionCreators from '../actions';

const loadSwipe = keyframes`
  from {
    width: 0
  },
  to {
    width: 100%
  }
`;

const AlertWrapper = styled.div`
  width: 100%;
  background: ${ props => props.colours.success };
  color: #fff;
  padding: 5px 10px;
  font-size: 12px;
  text-align: left;
  position: relative;
  &.error {
    background: ${ props => props.colours.error };
  }
  &.warning {
    background: ${ props => props.colours.warning };
  }
  &.info {
    background: ${ props => props.colours.info };
  }
  &:after {
    display: block;
    content: "";
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
    height: 2px;
    background: rgba(255,255,255,0.3);
    webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    webkit-animation: ${ loadSwipe } ${ props => props.time ? props.time : 5 }s linear;
    animation: ${ loadSwipe } ${ props => props.time ? props.time : 5 }s linear infinite;      
  }
`;

const Close = styled.a`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  width: 30px;
  height: 100%;
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 0.3s linear;
  &:hover {
    opacity: 1;
  }
`

class Alert extends Component {

  componentDidMount() {
    const { alert } = this.props;
    this.props.actions.setAlertClear(alert.id, alert.alert.time);
  }

  render() {
    const { alert, colours } = this.props;
    if (alert) {
      return (
          <AlertWrapper className={ `alert ${ alert.alert.type }` } colours={ colours } time={ alert.alert.time }>
            <div className='container'>
              <div className='cell'>
                { alert.alert.message}
                <Close className='alert__close' onClick={ () => this.props.actions.clearAlert(this.props.alert.id) } role='button' tabIndex='-1'>
                  { this.props.closeIcon }
                </Close>
              </div>
            </div>
          </AlertWrapper>
      );
    }
    return null;
  }
}

Alert.propTypes = {
  alert: PropTypes.any,
  setAlertClear: PropTypes.func,
  clearAlert: PropTypes.func,
  colours: PropTypes.object,
  closeIcon: PropTypes.any
};

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(null, mapDispatchToProps)(Alert);