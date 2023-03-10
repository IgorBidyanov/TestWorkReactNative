import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

//components
import Container from 'components/Container';

//navigations
import { StackNavigationProps } from 'navigation/ScreenProps';
import { ScreenRoutes } from 'navigation/ScreenRoutes';

//Plugins
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseConfig } from 'firebase-config';
import { initializeApp } from 'firebase/app'

const BootScreen: React.FC<StackNavigationProps<ScreenRoutes.BootScreen>> = ({ navigation }) => {
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app);

  const navToAuth = () => {
    navigation.navigate(ScreenRoutes.AuthScreen)
  }

  const goToMainscreen = () => {
    navigation.navigate(ScreenRoutes.MainScreen)
  }

  useEffect(() => {
    console.log('====================================');
    console.log('auth', auth);
    console.log('====================================');
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // goToMainscreen()
      } else {
        navToAuth()
      }
    });

    return unsubscribe
  }, [])

  return (
    <Container>
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default BootScreen;

