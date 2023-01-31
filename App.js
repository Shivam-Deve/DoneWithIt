import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import Card from './app/components/Card'
import ListingDetails from './app/screens/ListingDetails'
import MessagesScreen from './app/screens/MessagesScreen'
import Screen from './app/components/Screen'
import ListItem from './app/components/ListItem'
import Icon from './app/components/Icon'
import AccountScreen from './app/screens/AccountScreen'
import ListingScreen from './app/screens/ListingScreen'
import AppPicker from './app/components/AppPicker'
import { useState } from 'react'
import LoginScreen from './app/screens/LoginScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'
import ImageInput from './app/components/ImageInput'
import ImageInputList from './app/components/ImageInputList'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './app/components/utils/StackNavigator'
import TabNavigator from './app/components/utils/TabNavigator'
import AuthNavigator from './app/navigation/AuthNavigator'
import AppNavigator from './app/navigation/AppNavigator'
import navigationTheme from './app/navigation/navigationTheme'
const catagories = [
  {
    value: 1,
    label: 'Jacket'
  },
  {
    value: 2,
    label: 'Laptop'
  }
]
export default function App () {
  const [catagory, setCatagory] = useState()
  const [imageUris, setImageUris] = useState([])
  // const handleAdd = uri => {
  //   setImageUris([...imageUris, uri])
  // }
  // const handleRemove = uri => {
  //   setImageUris(imageUris.filter(e => e !== uri))
  // }
  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <ListingDetails title="Card" price="100" />
    // <MessagesScreen />
    // <Screen>
    //   <ListItem
    //     title="Title"
    //     ImageComponent={<Icon name="email" />}
    //   />
    // </Screen>
    // <AccountScreen />
    // <ListingScreen />
    // <Screen>
    //   <AppPicker
    //     icon="apps"
    //     items={catagories}
    //     placeholder="Category"
    //     selectedItem={catagory}
    //     onSelectItem={item => setCatagory(item)}
    //   />
    // </Screen>
    // <LoginScreen />
    // <ListingEditScreen />
    // <Screen>
    //   <ImageInputList
    //     imageUris={imageUris}
    //     onAddImage={handleAdd}
    //     onRemoveImage={handleRemove}
    //   />
    // </Screen>

    <NavigationContainer theme={navigationTheme}>
      {/* <StackNavigator /> */}
      {/* <TabNavigator /> */}
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
  )
}
