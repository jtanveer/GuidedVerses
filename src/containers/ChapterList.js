import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback, TouchableOpacity, FlatList } from 'react-native'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'

class ChapterList extends Component {

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
  })

  constructor(props) {
    super(props)
    this.state = { loading: true }
  }

  componentDidMount() {
    this.setState({ loading: true })
    this.props.screenProps.fetchChapters().then(res => {
      this.setState({ loading: false})
    })
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        this.props.navigation.navigate('Chapter', { chapter_number: item.chapter_number })
      }>
      <Text style={styles.text}>{item.chapter_name_ar_english}</Text>
    </TouchableOpacity>
  );

  render() {
    const { chapters } = this.props
    if (!this.state.loading) {
      return (
        <FlatList
          styles={styles.container}
          data={chapters}
          renderItem={this.renderItem}
        />
      );
    } else {
      return <View/>
    }

  }
}

const styles = StyleSheet.create({
  menu: {
    marginLeft: 10,
    marginRight:10,
  },
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});


function mapStateToProps(state) {
  return {
    chapters: state.chapters
  }
}

export default connect(mapStateToProps)(ChapterList)
