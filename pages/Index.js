import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo'
import { Ionicons } from "@expo/vector-icons";

const Index = ({ temp }) => {
    return (
        <LinearGradient colors={["#0B86E5", "#03B1DC"]} style={style.wrap}>
            <View style={style.weatherTop}>
                <Text style={style.location}></Text>
                <Text style={style.time}>
                    월 일  시 분
                </Text>
                <View style={style.weatherInfo}>
                    <Ionicons name='ios-cloud' size={100} color='#fff'/>
                    <Text style={style.temp}>00º</Text>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Index

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