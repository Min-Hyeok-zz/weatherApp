import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo'
import { Ionicons } from "@expo/vector-icons";

export default class Index extends Component {
    state = {
        month: null,
        date: null,
        week: null,
        hours: null,
        minutes: null,
        location: 'Seoul',
        temp: '0'

    }
    componentDidMount () {
        const w = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
        const d = new Date()
        setInterval( () => {
            this.setState({
                month: d.getMonth()+1,
                date: d.getDate(),
                week: (w[d.getDay()]),
                hours: d.getHours(),
                minutes: d.getMinutes()
            })
        })
    }
    render () {
        return(
            <LinearGradient colors={["#0B86E5", "#03B1DC"]} style={style.wrap}>
                <View style={style.weatherTop}>
                    <Text style={style.location}>{this.state.location}</Text>
                    <Text style={style.time}>
                        {this.state.month}월 {this.state.date}일 {this.state.week} {this.state.hours}시 {this.state.minutes}분
                    </Text>
                    <View style={style.weatherInfo}>
                        <Ionicons name='ios-cloud' size={100} color='#fff'/>
                        <Text style={style.temp}>{this.state.temp}º</Text>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}

const style = StyleSheet.create({
  wrap: {
    flex: 1
  },
  weatherTop: {
    flex: .3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  location: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold'
  },
  time: {
      fontSize: 14,
      opacity: .8,
      color: '#fff',
      fontWeight: 'bold',
      marginBottom: 20
  },
  temp: {
      fontSize: 42,
      fontWeight: 'bold',
      color: '#fff',
      marginLeft: 10
  },
  weatherInfo: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
  }
});