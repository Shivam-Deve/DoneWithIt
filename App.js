import { StatusBar } from 'expo-status-bar';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import { StyleSheet, Dimensions, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  // console.log("Dimensons of screen are ", Dimensions.get('window'));
  // console.log(useDeviceOrientation(), useDimensions());
  return (
    <View style={{
      backgroundColor: "#fff",
      width: '100%',
      height: '30%',
      flex: 1,
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      flexWrap: "wrap",
      // flexBasis: 100,
      // flexGrow: 1,
      // flexShrink:1
    }}>
      <View style={{ backgroundColor: "goldenrod", width: 100, height: 200 }} />
      <View style={{ backgroundColor: "darkslategray", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "lightgreen", height: 100, width: 100, top: 20, left: 20, position: 'relative' }} />
      <View style={{ backgroundColor: "lightyellow", height: 100, width: 100 }} />
      <View style={{ backgroundColor: "orange", height: 100, width: 100 }} />
      <View style={{ backgroundColor: "gray", height: 100, width: 100, position: 'absolute', top: 20 }} />
      {/* we can also use flex with number or percentage instead of height and width */}
    </View>
  );
}

