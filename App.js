import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Load from './pages/Load'

export default class App extends React.Component {
  state = {
    isLoad: false
  }
  render() {
    const { isLoad } = this.state
    return <View style={styles.container}>
        {isLoad ? <ActivityIndicator style={styles.indicator} /> : <Load />}
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  loadContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#3f3f3f',
  },
  indicator: {
    alignSelf: 'center',
    marginTop: 20
  },
  loadText: {
    color: '#fff'
  }
});
