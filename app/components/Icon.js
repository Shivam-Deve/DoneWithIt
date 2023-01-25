import { View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons"
const Icon = ({
    name,
    size = 40,
    bgColor = "#000",
    iColor = "#fff"
}) => {
    return (
        <View style={
            {
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor: bgColor,
                justifyContent: "center",
                alignItems: "center"
            }
        }>
            <MaterialCommunityIcons name={name} color={iColor} size={size * 0.5} />
        </View>
    )
}

export default Icon
