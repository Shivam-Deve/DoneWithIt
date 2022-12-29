import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Alert, Platform, TouchableWithoutFeedback, TouchableOpacity, Button } from 'react-native';
import logError from 'react-native/Libraries/Utilities/logError';

export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Text numberOfLines={1} onPress={() => console.log("Text pressed")}>
        This is a long text to show how "numberoflines" property of text field works work.
      </Text>
      {/* <Image source={require('./assets/icon.png')} /> */}
      <TouchableOpacity onPress={() => console.log("Image is pressed")} onLongPress={() => console.log("Image is pressed and hold")}>
        <Image
          blurRadius={2}
          fadeDuration={1000}
          source={{
            uri: "https://picsum.photos/200/300",
            height: 300,
            width: 200
          }}
        />
      </TouchableOpacity>
      {/* TouchableNativeFeedback works on android and it works on color backgroundColor */}
      <Button color="green" title="Click Me" onPress={() => Alert.alert("My Title", "My message", [
        { text: "Yes", onPress: () => console.log("Yes") },
        { text: "No", onPress: () => console.log("No") }
      ]
      )} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const containerStyle = { backgroundColor: 'darkslategray' }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    alignItems: 'center'
  },
});
