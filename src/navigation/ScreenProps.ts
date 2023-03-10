import { NavigationProp, RouteProp } from '@react-navigation/core';
import { ParamListBase } from '@react-navigation/routers';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenRoutes } from 'navigation/ScreenRoutes';

export type ScreenProps = {
  [ScreenRoutes.AuthScreen]: undefined;
  [ScreenRoutes.MainScreen]: undefined;
}

export interface StackNavigationProps<
  RouteName extends keyof ParamList = string,
  ParamList extends ParamListBase = ScreenProps,
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

//useNavigation return value without type annotation will fallback to RootStackParamList types
declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface RootParamList extends ScreenProps {}
  }
}

export type UseNavigationProps = NavigationProp<ScreenProps>;