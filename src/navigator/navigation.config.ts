import {StackNavigationOptions} from '@react-navigation/stack';

export const screenoptions: StackNavigationOptions = {
  headerTitleAlign: 'center',
  headerShown: true,
  headerStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  cardStyle: {backgroundColor: 'transparent'},
  animationEnabled: false,
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  detachPreviousScreen: true,
};
