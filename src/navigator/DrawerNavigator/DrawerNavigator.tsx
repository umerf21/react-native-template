import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {View, Text} from 'react-native';
import {ROOT_PAGE_URL} from '../navigation.types';
import {HomeScreen, SettingsScreen} from '../../screens';
import {DrawerScreenOptions} from '../navigation.config';
type Props = {};

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = (props: Props) => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={DrawerScreenOptions}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name={ROOT_PAGE_URL.Home} component={HomeScreen} />
      <Drawer.Screen name={ROOT_PAGE_URL.Settings} component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
