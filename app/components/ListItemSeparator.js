import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

const ListItemSeparator = () => {
    return (
        <View style={styles.line} />
    )
}

export default ListItemSeparator

const styles = StyleSheet.create({
    line: {
        width: "100%",
        height: 1,
        backgroundColor: colors.light
    }
})