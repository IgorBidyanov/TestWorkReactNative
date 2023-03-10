import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//components
import Container from 'components/Container';

//navigation
import { StackNavigationProps } from 'navigation/ScreenProps';
import { ScreenRoutes } from 'navigation/ScreenRoutes';

//plugins
import { WebView } from 'react-native-webview';
import { getAuth, signOut } from 'firebase/auth';

const MainScreen: React.FC<StackNavigationProps<ScreenRoutes.MainScreen>> = ({ navigation }) => {
  const goToAuthscreen = () => {
    navigation.navigate(ScreenRoutes.AuthScreen)
  }
  const auth = getAuth()

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        goToAuthscreen()
      })
  }

  return (
    <Container>
      <TouchableOpacity onPress={goToAuthscreen} style={styles.button}>
        <Text>Выйти из приложения</Text>
      </TouchableOpacity>

      <View style={styles.webViewStyles}>
        <WebView 
          originWhitelist={['*']}
          source={{ uri: 'https://www.google.com/' }}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    width: '100%',
    marginBottom: 24,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e9e9ff",
    backgroundColor: "#fafafb",
  },

  webViewStyles: {
    width: '100%',
    height: '100%',
  }
})

export default MainScreen;