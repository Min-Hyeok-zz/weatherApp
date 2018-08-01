import React, { Component } from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from "react-native"

export default class Loading extends Component {
    render () {
        return (
            <View style={styles.loadContainer}>
                <Text style={styles.loadText}>날씨 정보를 불러오고 있습니다.</Text>
                <ActivityIndicator style={styles.indicator} size = 'large' />
            </View>
        )
    }
}

const styles = StyleSheet.create({
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