import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useState, useContext } from 'react';
import { useUser } from '../context/UserContext';
import { ThemeContext } from '../context/ThemeContext';
import LottieView from 'lottie-react-native'; 

export default function SigninScreen({ navigation }) {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const { signIn } = useUser();
  
  const { darkMode } = useContext(ThemeContext);

  const [mostrarErro, setMostrarErro] = useState(false);

  async function handleLogin() {
    try {
      await signIn(inputEmail, inputPassword);
    } catch (error) {
      console.log("Erro no login:", error);
      setMostrarErro(true);
      
      setTimeout(() => {
        setMostrarErro(false);
      }, 3000);
    }
  }

  if (mostrarErro) {
    return (
      <View style={[styles.containerAnimacao, darkMode && styles.darkContainerAnimacao]}>
        <LottieView
            source={require('../assets/animations/warning.json')} 
            autoPlay
            loop={false}
            style={styles.lottie}
        />
        <Text style={styles.textoAviso}>Login Incorreto!</Text>
        <Text style={[styles.textoSubAviso, darkMode && styles.darkTextSecondary]}>
            E-mail ou senha inválidos. Verifique seus dados e tente novamente.
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      <View style={[styles.containerInput, darkMode && styles.darkContainerInput]}>
        <Text style={[styles.paragraph, darkMode && styles.darkParagraph]}>Acesse sua conta</Text>
        
        <TextInput
          style={[styles.input, darkMode && styles.darkInput]}
          placeholder="E-mail"
          placeholderTextColor={darkMode ? '#999' : '#666'}
          value={inputEmail}
          onChangeText={(text) => setInputEmail(text)}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, darkMode && styles.darkInput]}
          placeholder="Senha"
          placeholderTextColor={darkMode ? '#999' : '#666'}
          value={inputPassword}
          onChangeText={(text) => setInputPassword(text)}
          secureTextEntry
        />

        <TouchableOpacity style={styles.botao} onPress={handleLogin}>
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
    padding: 20, 
  },
  darkContainer: { backgroundColor: '#121212' },
  darkContainerInput: { backgroundColor: '#1E1E1E' },
  darkParagraph: { color: '#FFFFFF' },
  darkInput: { backgroundColor: '#333', borderColor: '#444', color: '#FFFFFF' },
  darkContainerAnimacao: { backgroundColor: '#121212' },
  darkTextSecondary: { color: '#AAA' },
  paragraph: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    color: '#333', 
    marginBottom: 20 
  },
  botao: {
    width: '100%', 
    borderRadius: 10,
    backgroundColor: '#EB0033',
    marginTop: 15,
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#333',
    shadowOpacity: 0.3, 
    shadowOffset: { width: 3, height: 7 },
    shadowRadius: 5
  },
  textoBotao: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  input: {
    width: '100%', 
    height: 50, 
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f2f2eb'
  },
  containerAnimacao: {
    flex: 1,
    backgroundColor: '#890019', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  lottie: {
    width: 200,
    height: 200,
  },
  textoAviso: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F29C11', 
    marginTop: 20,
  },
  textoSubAviso: {
    fontSize: 16,
    color: '#FFF', 
    marginTop: 10,
    textAlign: 'center'
  }
});