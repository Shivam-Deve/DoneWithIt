import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import colors from '../config/colors'
import Icon from '../components/Icon'
import ListItemSeparator from '../components/ListItemSeparator'
const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            bgColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            bgColor: colors.secondary
        }
    }
]
const AccountScreen = () => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Shivam Mishra"
                    subTitle="Software Engineer"
                    image={require("../assets/mosh.jpg")}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={<ListItemSeparator />}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    bgColor={item.icon.bgColor}
                                />
                            }
                        />
                    }
                />
            </View>
            <ListItem
                title="Logout"
                IconComponent={
                    <Icon
                        name="logout"
                        bgColor="#ffe66d"
                    />
                }
            />
        </Screen>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
})