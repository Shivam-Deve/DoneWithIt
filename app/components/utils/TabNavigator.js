import { View, Text } from 'react-native'
import React from 'react'
import Screen from '../Screen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from '../../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import StackNavigator from './StackNavigator'
const Tweets = ({ navigation }) =>
  <Screen>
    <Text>Tweets</Text>
  </Screen>
const Account = () =>
  // useRoute() as same as useNavigation()
  <Screen>
    <Text>Account</Text>
  </Screen>
const Tab = createBottomTabNavigator()
const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: colors.secondary,
        activeTintColor: colors.white,
        inactiveBackgroundColor: colors.light,
        inactiveTintColor: colors.black
      }}
    >
      <Tab.Screen
        name='Feed'
        component={StackNavigator}
        options={{
          tabBarIcon: ({ size, color }) =>
            <MaterialCommunityIcons name='home' size={size} color={color} />
        }}
      />
      <Tab.Screen name='Account' component={Account} />
    </Tab.Navigator>
  )
}

export default TabNavigator
