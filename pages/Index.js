import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo'
import { MaterialCommunityIcons } from "@expo/vector-icons"

const weatherCase = {
  Rain: {
    title: "비가 옵니당",
    icon: "weather-rainy"
  },
  Clear: {
    title: "맑습니당",
    icon: "weather-sunny"
  },
  Thunderstorm: {
    title: "브링미 타노스",
    icon: "weather-lightning"
  },
  Clouds: {
    title: "구름이 있습니당",
    icon: "weather-cloudy"
  },
  Snow: {
    title: "눈이 내립니당",
    icon: "weather-snowy"
  },
  Drizzle: {
    title: "이슬비가 내립니당",
    icon: "weather-hail"
  },
  Haze: {
    title: "안개등장 짜잔",
    icon: "weather-fog"
  }
}

const Index = ({ temp, tempMax, tempMin, name, weather, Month, Date, Day, Hours, Minutes  }) => {
    return <LinearGradient colors={["#2F80ED", "#56CCF2"]} style={style.wrap}>
        <View style={style.weatherTop}>
          <Text style={style.location}>{name}</Text>
          <Text style={style.time}>
            {Month}월 {Date}일 {Day} {Hours}시 {Minutes}분
          </Text>
          <View style={style.weatherInfo}>
                <MaterialCommunityIcons name={weatherCase[weather].icon} size={100} color="#fff" />
          </View>
          <View>
            <Text style={style.temp}>{temp}º</Text>
            <Text style={style.minMax}>{tempMax}º | {tempMin}º</Text>
            <Text style={style.weatherTitle}>{weatherCase[weather].title}</Text>
          </View>
        </View>
      </LinearGradient>
}

export default Index

const style = StyleSheet.create({
    wrap: {
        flex: 1
    },
    weatherTop: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        marginLeft: 10,
        alignSelf: 'center'
    },
    weatherInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    minMax: {
        color: '#fff',
        fontSize: 16,
        alignSelf: 'center'
    },
    weatherTitle: {
        color: '#fff',
        fontSize: 20,
        marginTop: 10
    },
    weatherContent: {
        flex: .6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentTitle: {
        color: '#fff',
    }
})