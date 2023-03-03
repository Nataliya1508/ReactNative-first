import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
     
      <View>
        <Text style={styles.text}>Регистрация</Text>
      </View>
      <View style={styles.form}>
        <View>
        <TextInput
          style={styles.input}
            textAlign={'left'}
            placeholder="Логин" />

        </View>
         <View style={{marginTop: 16}}>
        <TextInput
          style={styles.input}
            textAlign={'left'}
            placeholder="Адрес электронной почты" />

        </View>
          <View style={{marginTop: 16}}>
        <TextInput
          style={styles.input}
            textAlign={'left'}
            placeholder="Пароль"
            secureTextEntry={true} />
          

        </View>
        <TouchableOpacity style={styles.button}
          activeOpacity={0.8}>
          <Text style={styles.btnText}>
            Зарегистрироваться
          </Text>
        </TouchableOpacity>
       </View>
        {/* <StatusBar style="auto" /> */}
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    height: 549,
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
    marginTop: 92,
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
  }
});

