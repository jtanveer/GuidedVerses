import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
// Navigators
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'

import ChapterList from './ChapterList'
import Chapter from './Chapter'

import ComingSoon from './ComingSoon'

const Quran = createStackNavigator({
  ChapterList: {screen: ChapterList },
  Chapter: {screen: Chapter}
},
{
  initialRouteName: 'ChapterList'
})

const Drawer = createDrawerNavigator({
  Quran: {screen: Quran},
  ComingSoon: {screen: ComingSoon}
})

class AppContainer extends Component {
  render() {
    return (
      <Drawer screenProps={this.props}/>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}
export default connect(() => { return {} }, mapDispatchToProps)(AppContainer)
