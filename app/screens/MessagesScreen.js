import { FlatList, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
const initialMessages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/mosh.jpg")
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/mosh.jpg")
    }
]
const MessagesScreen = () => {
    const [messages, setMessages] = useState(() => initialMessages)
    const [refreshing, setRefreshing] = useState(false)
    const handleDelete = (message) => {
        setMessages(messages.filter(mess => mess.id !== message.id))
    }
    return (
        <Screen>
            <FlatList
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 1,
                            title: "T1",
                            description: "D1",
                            image: require("../assets/mosh.jpg")
                        },
                        {
                            id: 2,
                            title: "T2",
                            description: "D2",
                            image: require("../assets/mosh.jpg")
                        },
                        {
                            id: 3,
                            title: "T3",
                            description: "D3",
                            image: require("../assets/mosh.jpg")
                        },
                        {
                            id: 4,
                            title: "T4",
                            description: "D4",
                            image: require("../assets/mosh.jpg")
                        }
                    ])
                }}
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected")}
                        renderRightAction={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />
                }
                ItemSeparatorComponent={() =>
                    <ListItemSeparator />
                }
            />
        </Screen>
    )
}

export default MessagesScreen

const styles = StyleSheet.create({
}) 