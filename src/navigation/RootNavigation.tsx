import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { ScreenProps } from 'navigation/ScreenProps';
import { ScreenRoutes } from 'navigation/ScreenRoutes';
import { ScreenOptions } from 'navigation/stackOptions';
import AuthScreen from "screens/AuthScreen";
import MainScreen from 'screens/MainScreen';

const RootStack = createStackNavigator<ScreenProps>();

const RootNavigation: React.FC = () => {
  return (
    <RootStack.Navigator
      initialRouteName={ScreenRoutes.AuthScreen}
      screenOptions={{ gestureEnabled: false, animationEnabled: false }}
    >
      <RootStack.Screen
        name={ScreenRoutes.AuthScreen}
        component={AuthScreen}
        options={ScreenOptions.noHeader}
      />
      <RootStack.Screen
        name={ScreenRoutes.MainScreen}
        component={MainScreen}
        options={ScreenOptions.noHeader}
      />
    </RootStack.Navigator>
  )
}

export default RootNavigation;