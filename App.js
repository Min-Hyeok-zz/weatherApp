import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo'

import Index from './pages/Index'

export default class App extends Component {
  state = {
    isLoad: false
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { locationInfo } = this.state;
        this.setState({
          locationInfo: position,
          isLoad: true
        });
        console.log(this.state.locationInfo)
      },
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }
  render() {
    const { isLoad } = this.state
    return (
        <View style={styles.container}>
          {isLoad ? (<Index />)
          : (
            <LinearGradient style={styles.loadContainer} colors={["#0B86E5", "#03B1DC"]}>
              <Text style={styles.loadText}>날씨 정보를 불러오고 있습니다.</Text>
              <ActivityIndicator style={styles.indicator} size='large' color='#fff' />
            </LinearGradient>
          )}
        </View>
    )
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
    backgroundColor: '#3f3f3f',
  },
  indicator: {
    alignSelf: 'center',
    marginTop: 20
  },
  loadText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
