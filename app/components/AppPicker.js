import { StyleSheet, Modal, TextInput, View, Platform, TouchableWithoutFeedback, Text, Button, FlatList } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import defaultStyle from '../config/styles'
import AppText from './AppText'
import PickerItem from './PickerItem'

const AppPicker = ({ items, icon, placeholder, selectedItem, onSelectItem }) => {
    const [isModelOpen, setModelOpen] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModelOpen(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons name="chevron-down" size={20} color={colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={isModelOpen} style={styles.modal}>
                <Button title="close" onPress={() => setModelOpen(false)} />
                <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) =>
                        <PickerItem
                            label={item.label}
                            onPress={
                                () => {
                                    setModelOpen(false)
                                    onSelectItem(item)
                                }
                            }
                        />
                    }
                />
            </Modal>
        </>
    )
}

export default AppPicker

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    }
})