// LoginScreen.tsx
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function PantallaLogin() {

  const router = useRouter();

  const handleLoginPress = () => {
    router.push('/(tabs)/inicio'); 
  };

  return (
    <LinearGradient colors={['#6A11CB', '#2575FC']} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('@/assets/logo.png')} style={styles.logo} />
        <Text style={styles.appName}>Autoescuela{"\n"}Libre</Text>
      </View>
            
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Correo electrónico" placeholderTextColor="#aaa" />
        <TextInput style={styles.input} placeholder="Contraseña" placeholderTextColor="#aaa" secureTextEntry />
      </View>
      
      <View style={styles.optionsContainer}>
        <TouchableOpacity>
          <Text style={styles.rememberText}>Recordar datos</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotText}>¿Contraseña olvidada?</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      
      <View style={styles.signupContainer}>
        <TouchableOpacity>
          <Text style={styles.signupText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.orText}>──────────────   O   ──────────────</Text>
      
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}><Text>in</Text></TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}><Text>tw</Text></TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}><Text>fb</Text></TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}><Text>G</Text></TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 80,
    height: 80,
  },
  appName: {
    textAlign: 'center', 
    textAlignVertical: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 15,
  },
  optionsContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
  },
  rememberText: {
    color: '#fff',
  },
  forgotText: {
    color: '#fff',
  },
  loginButton: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 80,
    paddingVertical: 10,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#2575FC',
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  newUserText: {
    color: '#fff',
  },
  signupText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  orText: {
    color: '#fff',
    marginVertical: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  socialButton: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 10,
    width: 40,
    alignItems: 'center',
  },
});
