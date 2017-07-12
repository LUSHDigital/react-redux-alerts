import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import * as actionCreators from '../actions';

const styles = {
  alert: {
    width: '100%',
    background: props => props.colours.success,
    color: '#fff',
    padding: '5px 10px',
    fontSize: '12px',
    textAlign: 'left',
    position: 'relative',
    '&.error': {
      background: props => props.colours.error
    },
    '&.warning': {
      background: props => props.colours.warning
    },
    '&.info': {
      background: props => props.colours.info
    },
    '&:after': {
      display: 'block',
      content: '""',
      width: '0',
      left: '0',
      top: '0',
      position: 'absolute',
      height: '2px',
      background: 'rgba(255,255,255,0.3)',
      webkitAnimationFillMode: 'both',
      animationFillMode: 'both',
      webkitAnimation: 'loadSwipe 5s linear',
      animation: 'loadSwipe 5s linear'
    }
  },
  alert__close: {
    position: 'absolute',
    top: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    right: '0',
    width: '30px',
    height: '100%',
    opacity: '0.6',
    cursor: 'pointer',
    transition: 'opacity 0.3s linear',
    '&:hover': {
      opacity: '1.0'
    }
  },
  '@keyframes loadSwipe': {
    '0%': {
      width: '0'
    },
    '100%': {
      width: '100%'
    }
  }
};

class Alert extends Component {

  componentDidMount() {
    this.props.actions.setAlertClear(this.props.alert.id);
  }

  render() {
    const { alert, classes } = this.props;
    if (alert) {
      return (
          <div className={ `alert ${ classes.alert } ${ alert.alert.type }` }>
            <div className='container'>
              <div className='cell'>
                { alert.alert.message}
                <a className={ `alert__close ${ classes.alert__close }` } onClick={ () => this.props.actions.clearAlert(this.props.alert.id) } role='button' tabIndex='-1'>
                  { this.props.closeIcon }
                </a>
              </div>
            </div>
          </div>
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

Alert.defaultProps = {
  alert: ''
};

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(null, mapDispatchToProps)(injectSheet(styles)(Alert));