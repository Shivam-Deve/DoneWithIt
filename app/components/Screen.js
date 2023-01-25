import { StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
const Screen = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            {children}
        </SafeAreaView>
    )
}

export default Screen

const styles = StyleSheet.create({
    screen: { // it can also be implemented by expo-constants
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1
    }
})