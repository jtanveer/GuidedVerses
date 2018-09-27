
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import Drawer from './navigators'

class AppContainer extends Component {
  render() {
    return (
      <Drawer {...this.props} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}
export default connect(() => { return {} }, mapDispatchToProps)(AppContainer);
