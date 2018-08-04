import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import { LinearGradient } from 'expo'
import Index from './pages/Index'

const API = '25445ca9b08f76a38901cbbd2b812e8d'

export default class App extends Component {
  state = {
    isLoad: false,
    error: null,
    time: [],
    month: null,
    date: null,
    week: null,
    hours: null,
    minutes: null,
  }
  componentDidMount() {
    const w = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const d = new Date()
    // setInterval( (d) => {
    //     this.state.time.push(d.getMonth()+1),
    //     this.state.time.push(d.getDate()),
    //     this.state.time.push((w[d.getDay()])),
    //     this.state.time.push(d.getHours()),
    //     this.state.time.push(d.getMinutes())
    // })
    navigator.geolocation.getCurrentPosition(
      position => {
        this.getWeather(position.coords.latitude, position.coords.longitude)
        this.setState({
          isLoad: true
        })
        console.log(position)
      },
      error => {
        console.log(error)
        this.setState({
          error: `${error}`
        })
      },
    );
  }
  getWeather = (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API}`)
    .then(res => res.json())
    .then(json => {
      console.log(json)
      this.setState({

      })
    })
  }
  render() {
    const { isLoad, error } = this.state
    return (
        <View style={styles.container}>
        <StatusBar barStyle='light-content'/>
          {isLoad ? (<Index />)
          : (
            <LinearGradient style={styles.loadContainer} colors={["#0B86E5", "#03B1DC"]}>
              <Text style={styles.loadText}>날씨 정보를 불러오고 있습니다.</Text>
              <ActivityIndicator style={styles.indicator} size='large' color='#fff' />
              {error ? (<Text>{error}</Text>) : null}
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
