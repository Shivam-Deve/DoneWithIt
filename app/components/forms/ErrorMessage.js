import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../AppText'

const ErrorMessage = ({ children, visible }) => {
    if (!visible || !children) return null
    return (
        <AppText style={styles.error}>{children}</AppText>
    )
}

export default ErrorMessage

const styles = StyleSheet.create({
    error: {
        color: "red"
    }
})