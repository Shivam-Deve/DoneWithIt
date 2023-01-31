import * as Location from 'expo-location'
import { useEffect, useState } from 'react'
export default (useLocation = () => {
  const [location, setLocation] = useState(null)
  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') return
      let {
        coords: { latitude, longitude }
      } = await Location.getLastKnownPositionAsync()
      setLocation({ latitude, longitude })
    } catch (errors) {
      console.log(errors)
    }
  }
  useEffect(() => {
    getLocation()
    console.log(location)
  }, [])
  return location
})
