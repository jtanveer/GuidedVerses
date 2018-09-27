import React, {Component} from 'react';
// Navigators
import {DrawerNavigator, StackNavigator} from 'react-navigation'

import ChapterList from './ChapterList'
import Chapter from './Chapter'

import ComingSoon from './ComingSoon'

export const Quran = StackNavigator({
  ChapterList: {screen: ChapterList},
  Chapter: {screen: Chapter}
},
{
  initialRouteName: 'ChapterList'
})

export const Drawer = DrawerNavigator({
  Quran: {screen: Quran},
  ComingSoon: {screen: ComingSoon}
})
