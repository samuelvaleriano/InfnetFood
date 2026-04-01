import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import userMock from '../api/usuarioMock/samuelvaleriano@gmail.com.json';
import { useState } from 'react';

export default function SigninScreen({ navigation }) {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

async function handleLogin() {
  // try {
   
  //   if (inputEmail === userMock.email && inputPassword === userMock.senha) {
      navigation.navigate('Main');
  //   } else {
  //     alert('E-mail ou senha incorretos!');
  //   }
  // } catch (error) {
  //   alert('Erro ao fazer login');
  //   console.log(error);
  // }
}

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <Text style={styles.paragraph}>Signin Screen</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={inputEmail}
          onChangeText={(text) => setInputEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={inputPassword}
          onChangeText={(text) => setInputPassword(text)}
          secureTextEntry
        />

        <TouchableOpacity style={styles.botao}
          onPress={handleLogin}
        >
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#890019',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  containerInput: {
    width: '80%',
    height: 400,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  paragraph: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#333  ', marginBottom: 20 },
  botao: {
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#EB0033',
    marginTop: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#333',
    shadowOpacity: '0.3',
    shadowOffset: { width: 3, height: 7 },
    shadowRadius: 5
  },
  textoBotao: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: ' #ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f2f2eb'
  },

});