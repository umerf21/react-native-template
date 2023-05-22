import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import {screenoptions} from './navigation.config';
import {ROOT_PAGE_URL} from './navigation.types';
import {HomeScreen, SettingsScreen} from '../screens';
type Props = {};
const RootStacks = (props: Props) => {
  const Stack = createStackNavigator();
  const inititalRoute = ROOT_PAGE_URL.Home;
  return (
    <Stack.Navigator
      screenOptions={screenoptions}
      initialRouteName={inititalRoute}>
      <Stack.Screen name={ROOT_PAGE_URL.Home} component={HomeScreen} />
      <Stack.Screen name={ROOT_PAGE_URL.Settings} component={SettingsScreen} />
    </Stack.Navigator>
  );
};
export default RootStacks;
