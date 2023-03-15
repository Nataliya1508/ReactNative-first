import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
       style={styles.image}
        source={require("./assets/images/photo-bg.jpg")}>
        {/* <View style={styles.formWrapper}> */}
        
          <RegistrationScreen />
          
          {/* </View> */}
      {/* <Text style={{color: "#568767", fontSize: 28}}>Hello world!</Text> */}
        <StatusBar style="auto" />
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',

    
  },
  // formWrapper: {
  //   justifyContent: 'center',

  // }
});
