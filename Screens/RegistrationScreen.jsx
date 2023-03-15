import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, Keyboard, Image,TouchableWithoutFeedback } from 'react-native';

export default function RegistrationScreen() {
  console.log(Platform.OS)

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  }
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
      {/* <View style={styles.container}> */}
      <View style={{...styles.container, paddingBottom: isShowKeyboard ? 10 : 100}}>
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
            onFocus={() => setIsShowKeyboard(true)}/>

        </View>
         <View style={{marginTop: 16}}>
        <TextInput
          style={styles.input}
            textAlign={'left'}
              placeholder="Адрес электронной почты"
            onFocus={() => setIsShowKeyboard(true)}/>

        </View>
          <View style={{marginTop: 16}}>
        <TextInput
          style={styles.input}
            textAlign={'left'}
            placeholder="Пароль"
              secureTextEntry={true}
            onFocus={() => setIsShowKeyboard(true)}/>
          

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
    borderRadius: "25px 25px 0px 0px" ,
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 30,
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
marginLeft: 150,
    marginTop: -60,
border: 2,
    borderColor: '#F6F6F6',
background: '#5f9ea0',
borderRadius: 16,
  }
});

