import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ListingScreen from '../screens/ListingScreen'
import ListingDetails from '../screens/ListingDetails'

const Stack = createStackNavigator()

const FeedNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Listings' component={ListingScreen} />
      <Stack.Screen name='ListingDetails' component={ListingDetails} />
    </Stack.Navigator>
  )
}

export default FeedNavigator
