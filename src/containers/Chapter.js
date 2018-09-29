import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default class Chapter extends Component {

  static navigationOptions = {
    title: 'Chapter',
    headerStyle: {
      backgroundColor: '#1ABC9C',
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>This is the chapter screen!</Text>
        <Text style={styles.instructions}>Here you will see all verses of this particular chapter</Text>
        <Text style={styles.instructions}>There will be more options to navigate to each verse in future</Text>
      </View>
    );
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
});
