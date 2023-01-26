import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from "@expo/vector-icons"
const ListItem = ({ title, subTitle, image, IconComponent, onPress, renderRightAction }) => {
    return (
        <GestureHandlerRootView>
            <Swipeable
                renderRightActions={renderRightAction}
            >
                <TouchableHighlight
                    underlayColor={colors.light}
                    onPress={onPress}
                >
                    <View style={styles.container}>
                        {IconComponent}
                        {image && <Image style={styles.image} source={image} />}
                        <View style={styles.details}>
                            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                            {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                        </View>
                        <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25} />
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        color: colors.medium
    },
    title: {
        fontWeight: "600"
    },
    details: {
        marginLeft: 10,
        justifyContent: "center",
        flex: 1
    }
})