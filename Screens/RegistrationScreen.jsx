import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, Keyboard, Image,TouchableWithoutFeedback, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import { Apploading } from 'expo';
const initialState = {
  login: "",
  email: "",
  password: "",
};

// const loadFonts = async () => {
//   await Font.loadAsync({
//     'Roboto': require('../assets/fonts/Roboto-Black.ttf')
//   })
// }


export default function RegistrationScreen() {
  console.log(Platform.OS)

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isReady, setIsReady] = useState(false);
  const [dimentions, setDimentions] = useState(Dimensions.get("window").width);
  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      setDimentions(width)
      console.log("width", width);
    }
    Dimensions.addEventListener("change", onChange);
    return () => {
    
      Dimensions.removeEventListener("change", onChange);
    }
  }, [])

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  }

  // if (!isReady) {
  //   return <Apploading 
  //     startAsync={loadFonts}
  //     onFinish={() => setIsReady(true)}
  //     onError={console.warn}
  //   />
  // }
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
      {/* <View style={styles.container}> */}
      <View style={{...styles.container, width: dimentions, paddingBottom: isShowKeyboard ? 10 : 100}}>
        <View>
         <Image
        style={styles.avatar}
        source={require("../assets/images/defaultAvatar.jpg")}
      />
      </View>
        
        
        <View>
        <Text style={styles.text}>Регистрация</Text>
      </View>
      
      <View style={styles.form}>
        <View>
        <TextInput
          style={styles.input}
            textAlign={'left'}
              placeholder="Логин"
                onFocus={() => setIsShowKeyboard(true)}
                value={state.login}
              onChangeText={(value) => setState((prevState) => ({...prevState, login: value}))}/>

        </View>
         <View style={{marginTop: 16}}>
        <TextInput
          style={styles.input}
            textAlign={'left'}
              placeholder="Адрес электронной почты"
                onFocus={() => setIsShowKeyboard(true)}
                value={state.email}
              onChangeText={(value) => setState((prevState) => ({...prevState, email: value}))}/>

        </View>
          <View style={{marginTop: 16}}>
        <TextInput
          style={styles.input}
            textAlign={'left'}
            placeholder="Пароль"
              secureTextEntry={true}
                onFocus={() => setIsShowKeyboard(true)}
                value={state.password}
              onChangeText={(value) => setState((prevState) => ({...prevState, password: value}))}/>
          

        </View>
        <TouchableOpacity style={styles.button}
            activeOpacity={0.8}
          onPress={keyboardHide}>
          <Text style={styles.btnText}>
            Зарегистрироваться
          </Text>
          </TouchableOpacity>
          
        </View>
       
        {/* <StatusBar style="auto" /> */}
       
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    
    width: '100%',
    // height: 549,
    // paddingBottom: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: "25px 25px 0px 0px",
    // justifyContent: 'center',
    // alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
  text: {
    fontSize: 30,
    // fontFamily: 'Roboto',
    textAlign: 'center',
    color: '#212121',
    marginBottom: 33,
    marginTop: 32,
  },
  // image: 
  //   flex: 1,
  //   resizeMode: 'cover',
  //   justifyContent: 'center',

    
  // }
  input: {
    // marginBottom: 16,
    padding: 16,
    // marginHorizontal: 32,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#111111',
    color: '#212121',
    backgroundColor: '#F6F6F6',
  },

  form: {
    marginHorizontal: 32,
   
    
// marginBottom: 16,
  },

  button: {
    backgroundColor: '#FF6C00',
    height: 51,
    marginTop: 43,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  keyboardContainer: {
      width: '100%',
    height: 549,
    backgroundColor: '#FFFFFF',
    borderRadius: "25px 25px 0px 0px" ,
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
  avatar: {

width: 120,
height: 120,
marginLeft: 155,
    marginTop: -60,
border: 2,
    borderColor: '#F6F6F6',
background: '#5f9ea0',
borderRadius: 16,
  }
});

