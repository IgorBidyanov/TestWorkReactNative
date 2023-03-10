import { StackNavigationOptions } from '@react-navigation/stack';
// import { Colors } from 'consts/appStyles';

export class ScreenOptions {
  static noHeader: StackNavigationOptions = {
    header: (): null => null,
  };
  // static modalHeader: StackNavigationOptions = {
  //   cardStyle: { backgroundColor: Colors.transparent },
  //   header: () => null,
  //   cardOverlayEnabled: true,
  //   cardStyleInterpolator: ({ current: { progress } }) => ({
  //     cardStyle: {
  //       opacity: progress.interpolate({
  //         inputRange: [0, 0.5, 0.9, 1],
  //         outputRange: [0, 0.1, 0.3, 0.7],
  //       }),
  //     },
  //     overlayStyle: {
  //       opacity: progress.interpolate({
  //         inputRange: [0, 1],
  //         outputRange: [0, 0.6],
  //         extrapolate: 'clamp',
  //       }),
  //     },
  //   }),
  // };
}
