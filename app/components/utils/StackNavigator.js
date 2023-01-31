import { View, Text, Button } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import Screen from '../Screen'
import { useNavigation } from '@react-navigation/native'
import colors from '../../config/colors'

const Link = () => {
    const navigation = useNavigation();
    return (
        <Button
            title='Back to Tweets' onPress={() => navigation.navigate('Tweets')}
        />
    )
}
const Tweets = ({ navigation }) => (
    <Screen>
        <Text>Tweets</Text>
        <Button
            title='View Tweet'
            onPress={() => navigation.navigate('TweetDetails', { id: 1 })}
        />
    </Screen>
)
const TweetDetails = ({ route }) => (
    // useRoute() as same as useNavigation()
    <Screen>
        <Text>Tweet Details about tweet: {route.params.id}</Text>
        <Link />
    </Screen>
)

const Stack = createStackNavigator();


const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Tweets'
            screenOptions={
                {
                    // to apply globally
                    headerStyle: { backgroundColor: colors.secondary },
                    headerTintColor: colors.white,
                }
            }
        >
            <Stack.Screen
                name="TweetDetails"
                component={TweetDetails}
                options={
                    ({ route }) => (
                        {
                            title: route.params.id, // page title,
                            // headerShown: false 
                        }
                    )

                }
            />
            <Stack.Screen name="Tweets" component={Tweets} />
        </Stack.Navigator>
    )
}

export default StackNavigator