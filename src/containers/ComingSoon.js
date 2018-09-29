import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default class ComingSoon extends Component {

  static navigationOptions = {
    title: 'Coming Soon',
    headerStyle: {
      backgroundColor: '#1ABC9C',
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>This feature is coming soon!</Text>
        <Text style={styles.instructions}>There will be many more features in our upcoming releases</Text>
        <Text style={styles.instructions}>Stay tuned for the updates</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
})
