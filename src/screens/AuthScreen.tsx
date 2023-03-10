import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

//navigation
import { ScreenRoutes } from 'navigation/ScreenRoutes';
import { StackNavigationProps } from 'navigation/ScreenProps';

//components
import Container from 'components/Container';
import Input from 'components/Input';

//plugins
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseConfig } from 'firebase-config';
import { initializeApp } from 'firebase/app'

const AuthScreen: React.FC<StackNavigationProps<ScreenRoutes.AuthScreen>> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [authError, setAuthError] = useState<string>('')
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  const goToMainscreen = () => {
    navigation.navigate(ScreenRoutes.MainScreen)
  }

  const enterEmail = (text: string) => {
    setEmail(text)
  }

  const enterPassword = (text: string) => {
    setPassword(text)
  }
  
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  const handleRegister = () => {
    setIsDisabled(true)
    setAuthError('')
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        goToMainscreen()
      })
      .catch((error) => {
        setIsDisabled(false)
        if (error.code.includes('invalid-email')) {
          setAuthError('Введите корректный email')
        }
        if (error.code.includes('weak-password')) {
          setAuthError('Пароль должен содержать минимум 6 символов')
        }
        if (error.code.includes('email-already-in-use')) {
          setAuthError('Пользователь уже зарегистрирован')
        }
      })
  }

  const handleAuth = () => {
    setIsDisabled(true)
    setAuthError('')
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        // goToMainscreen()
        const user = userCredentials.user
      })
      .catch((error) => {
        setIsDisabled(false)
        if (error.code.includes('invalid-email')) {
          setAuthError('Введите корректный email')
        }
        if (error.code.includes('wrong-password')) {
          setAuthError('Неверный пароль')
        }
      })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        goToMainscreen()
      }
    });

    return unsubscribe
  }, [])

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <View style={styles.centeredBlock}>
          <Text style={styles.title}>Авторизация</Text>
          
          <View style={styles.form}>
            <Input
              value={email}
              marginBottom={24}
              isError={authError}
              onChangeText={(text) => enterEmail(text)}
              placeholder='Введите email'
            />

            <Input
              value={password}
              isError={authError}
              onChangeText={(text) => enterPassword(text)}
              placeholder="Введите пароль"
              isPassword
            />

            {authError ? (
              <Text style={styles.errorText}>{authError}</Text>
            ) : null}
          </View>

          <TouchableOpacity 
            style={[styles.button, { marginBottom: 12 }]} 
            onPress={handleAuth}
            disabled={isDisabled}
          >
            <Text style={styles.btnText}>Авторизоваться</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button} 
            onPress={handleRegister}            
            disabled={isDisabled}
          >
            <Text style={styles.btnText}>Зарегистироваться</Text>
          </TouchableOpacity>
        </View>
      </Container>
    </KeyboardAwareScrollView>
  );
}

export default AuthScreen;

const styles = StyleSheet.create({
  title: {
    marginBottom: 48,
    fontSize: 48,
  },

  form: {
    width: '100%',
    marginBottom: 32
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    width: '100%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e9e9ff",
    backgroundColor: "#fafafb",
  },

  btnText: {
    fontSize: 14,
    lineHeight: 24,
  },

  centeredBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },

  errorText: {
    marginTop: 10,
    color: '#f00'
  }
})