import {
  Alert,
  Image,
  ImagePickerIOS,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import React, { useEffect } from 'react'
import colors from '../config/colors'
import * as ImagePicker from 'expo-image-picker'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const ImageInput = ({ imageUri, onChangeImage }) => {
  useEffect(() => {
    requestPermission()
  }, [])
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if (!granted) alert('You need to enable permission')
  }
  const handlePress = () => {
    if (!imageUri) selectImage()
    else {
      Alert.alert('Delete', 'Are You Sure want to delete!', [
        { text: 'Yes', onPress: () => onChangeImage(null) },
        { text: 'No' }
      ])
    }
  }
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      })
      if (!result.canceled) onChangeImage(result.uri)
    } catch (error) {
      console.log('Error reading image', error)
    }
  }
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {imageUri
          ? <Image source={{ uri: imageUri }} style={styles.image} />
          : <MaterialCommunityIcons
            name='camera'
            size={40}
            color={colors.medium}
            />}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ImageInput

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    overflow: 'hidden'
  },
  image: {
    height: '100%',
    width: '100%'
  }
})
