import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import { LinearGradient } from 'expo'
import Index from './pages/Index'

const API = '25445ca9b08f76a38901cbbd2b812e8d'

export default class App extends Component {
  state = {
    isLoad: false, //페이지 로드
    error: null, //에러
    temp: null, //현재온도
    tempMax: null, //최고온도
    tempMin: null, //최저온도
    name: null, //현재위치
    weather: null, //현재 날씨 상태
    Month: null, //월
    Date: null, //일
    Day: null, //무슨 요일인지 확인
    Hours: null, //시간
    Minutes: null //분

  }
  componentDidMount() {
    const w = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const d = new Date()
    this.setState({
        Month: d.getMonth()+1,
        Date: d.getDate(),
        Day: w[d.getDay()],
        Hours: d.getHours(),
        Minutes: d.getMinutes()
    })
    navigator.geolocation.getCurrentPosition( //위치정보 가져오기
      position => {
        this.getWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        console.log(error)
        this.setState({
          error: `${error}`
        })
      },
    );
  }
  getWeather = (lat, long) => { //위치정보를 url로 보내서 날씨정보 가져온당
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API}`)
    .then(res => res.json())
    .then(json => {
      console.log(json)
      this.setState({
        isLoad: true,
        temp: json.main.temp,
        tempMax: json.main.temp_max,
        tempMin: json.main.temp_min,
        name: json.name,
        weather: json.weather[0].main
      })
    })
  }
  render() {
    const { isLoad, error, temp, tempMax, tempMin, name, weather, Month, Date, Day, Hours, Minutes } = this.state;
    return (
        <View style={styles.container}>
        <StatusBar hidden={true}/>
          {isLoad ? (<Index
            temp={Math.floor(temp-273.15)}
            tempMax={Math.floor(tempMax-273.15)}
            tempMin={Math.floor(tempMin-273.15)}
            name={name}
            weather={weather}
            Month={Month}
            Date={Date}
            Day={Day}
            Hours={Hours}
            Minutes={Minutes}
          />
          )
          : (
            <LinearGradient style={styles.loadContainer} colors={["#2F80ED", "#56CCF2"]}>
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
