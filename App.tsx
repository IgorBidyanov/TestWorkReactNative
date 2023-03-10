import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from 'navigation/RootNavigation';

const App: React.FC = () => {

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootNavigation />
    </NavigationContainer>
  );
}

export default App;
