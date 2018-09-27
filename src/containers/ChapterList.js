import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableNativeFeedback} from 'react-native';
import {Icon} from 'react-native-elements';

export default class ChapterList extends Component {

  static navigationOptions = (props) => ({
    title: 'Qur\'an - Guided Verses',
    headerStyle: {
      backgroundColor: '#1ABC9C',
    },
    headerLeft: <TouchableNativeFeedback
                  background={TouchableNativeFeedback.Ripple('ThemeAttrAndroid', true)}
                  onPress={() => props.navigation.openDrawer()}>
                    <Icon name='menu' iconStyle={styles.menu} size={35}/>
                </TouchableNativeFeedback>
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to GuidedVerses!</Text>
        <Text style={styles.instructions}>Here you will see the list of chapters</Text>
        <Text style={styles.instructions}>After selecting a chapter, you will be able to read its verses</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chapter', { title: 'Chapter' })}
          title="Learn More"
          buttonStyle={styles.button}
        />
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
  },
  button: {
    color: '#841584',
    padding: 10,
  },
  menu: {
    marginLeft: 10,
    marginRight:10,
  }
});
