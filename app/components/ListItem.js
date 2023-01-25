import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'

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
                            <AppText style={styles.title}>{title}</AppText>
                            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                        </View>
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
        backgroundColor: colors.white
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
        justifyContent: "center"
    }
})